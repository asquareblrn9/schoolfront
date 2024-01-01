// // webpack.config.js
// const path = require('path');

module.exports = {
 plugins: [
  new Dotenv()

 ],

  resolve: {
    fallback: {
      "path": false,
      "os": false,
      "crypto": false
    }
  }
};
