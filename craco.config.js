const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#F74D4A',
              // '@link-color': '#F74D4A',
              // '@success-color': '#F74D4A',
              // '@warning-color': '#F74D4A',
              // '@error-color': '#F74D4A',
              // '@font-size-base': '14px',
              // '@heading-color': '#F74D4A',
              // '@text-color': '#F74D4A',
              // '@text-color-secondary': '#F74D4A',
              // '@disabled-color': '#F74D4A',
              // '@border-radius-base': '2px',
              // '@border-color-base': '#F74D4A',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
