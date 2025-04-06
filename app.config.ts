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
          true: {
            childLink: 'bg-burnt-orange-500 text-white',
          },
          false: {
            link: 'text-white',
            childLink: ['hover:bg-burnt-orange-500/50 text-(--ui-text) hover:text-white', 'transition-colors'],
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
