const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  webpack: (config, options) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };

    // Additional webpack configuration here if needed

    return config;
  },
});
