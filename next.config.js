// next.config.js
module.exports = {
  images: {
    domains: ['cdn.dummyjson.com'], 
  },
  // This allows you to import SVGs as React components and apply Tailwind CSS styles 
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,  //Tells Webpack to process all .svg files.
  //     issuer: /\.[jt]sx?$/, //Ensures the rule applies only when SVGs are imported into .js, .jsx, .ts, or .tsx files.
  //     use: ['@svgr/webpack'], //Uses the SVGR loader to convert .svg files into React components.
  //   });

  //   return config;
  // },
};
