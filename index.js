var postcss = require('postcss');

module.exports = postcss.plugin('postcss-animations', function(opts) {
    opts = opts || {};

    // Work with options here

    return function(css) {

        console.dir(css);

        // Transform CSS AST here

    };
});
