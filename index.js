var postcss = require('postcss');

var rulesetKeyframes = function rulesetKeyframes() {

    return function(css) {

        var cloned;

        // finds all keyframes rules using regex
        css.walkAtRules(/(keyframes)$/, function(rule) {

            // if the keyframe parent is not the root of the file
            // then the keyframe animation needs
            // to be moved to the end of the file
            if (rule.parent.type !== 'root') {

                // here clone rule
                cloned = rule;
                // remove original rule
                rule.remove();
                // insert cloned rule at the bottom of the stylesheet
                css.append(cloned);

            }

        });

    };

};

module.exports = postcss.plugin('postcss-mq-keyframes', rulesetKeyframes);
