module.exports = (phase, { defaultConfig }) => {
  return {
    /* config options here */
    pageExtensions: ["jsx", "js"],
    experimental: {
      jsconfigPaths: true,
    },
  };
};
