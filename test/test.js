/*eslint max-len:0*/
var postcss = require('postcss');
var expect = require('chai').expect;
var assert = require('chai').assert;
var fs = require('fs');
var plugin = require('../');

function readCSS() {
    return fs.readFileSync('./test/test.css', 'utf8');
}

var test = function test(input, output, opts, done) {
    postcss([plugin(opts)]).process(input).then(function(result) {
        assert.notEqual(result.css, output, 'these two CSS files are not equal');
        assert.strictEqual(result.css.match(new RegExp('keyframes', 'g') || []).length, output.match(new RegExp('keyframes', 'g') || []).length, 'must be same number of keyframes');
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function(error) {
        done(error);
    });
};

describe('postcss-animations - finding and moving keyframes to end of CSS file', function() {

    it('Keyframe animation is now at end of the file', function(done) {
        test(readCSS(), readCSS(), {}, done);
    });

});
