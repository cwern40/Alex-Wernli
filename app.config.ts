export default defineAppConfig({
  toaster: {
    position: 'bottom-center',
  },
  ui: {
    colors: {
      primary: 'burnt-orange',
    },
    icons: {
      close: 'weui:close2-outlined',
    },
    navigationMenu: {
      variants: {
        active: {
          false: {
            link: 'text-white',
          },
        },
      },
    },
    formField: {
      required: {
        true: {
          label: "after:content-['*'] after:ms-0.5 after:text-burnt-orange-500",
        },
      },
    },
  },
});
