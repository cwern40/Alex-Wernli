export default defineEventHandler(async (event) => {
  const form = await readFormData(event);
  const { sendMail } = useNodeMailer();
  console.log('Sending email with body:', form);

  sendMail({
    to: 'test@test.com',
    subject: 'Alex Wernli Memory Submitted',
    text: form.get('message'),
    attachements: form.getAll('attachements[]'),
  })
    .then(() => {
      console.log('Email sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });

  return { success: true };
});
