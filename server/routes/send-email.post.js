export default defineEventHandler(async (event) => {
  const form = await readFormData(event);
  const { sendMail } = useNodeMailer();
  console.log('Sending email with body:', form);

  const params = {
    to: 'chris.wernli40@gmail.com',
    subject: `Alex Wernli Memory by ${form.get('name')}`,
    html: `<p><strong>By:</strong> ${form.get('name')}</p>
    ${form.has('email') ? `<p><strong>Email:</strong> ${form.get('email')}</p>` : ''}
    <p><strong>Memory:</strong></p>
    <p>${form.get('memory')}</p>`,
  };

  if (form.has('attachements[]')) {
    params.attachments = await Promise.all(
      form.getAll('attachements[]').map(async (file) => {
        console.log('file', file);
        return {
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type,
        };
      }),
    );
  }

  sendMail(params)
    .then(() => {
      console.log('Email sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });

  return { success: true };
});
