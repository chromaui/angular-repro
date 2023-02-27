module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  features: {
    interactionsDebugger: true
  },
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
