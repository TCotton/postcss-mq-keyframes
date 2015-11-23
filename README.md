# PostCSS postcss-mq-keyframes

[![Build Status][ci-img]][ci]
[![Dependency Status](https://david-dm.org/tcotton/postcss-mq-keyframes.svg?style=flat-square)](https://david-dm.org/tcotton/postcss-mq-keyframes)
[![devDependency Status](https://david-dm.org/tcotton/postcss-mq-keyframes/dev-status.svg?style=flat-square)](https://david-dm.org/tcotton/postcss-mq-keyframes#info=devDependencies)

This plugin will move any keyframe animations from inside media queries to the bottom of the CSS file

[ci-img]: https://travis-ci.org/TCotton/postcss-mq-keyframes.svg
[ci]: https://travis-ci.org/TCotton/postcss-mq-keyframes

Input:

```css
@media only screen and (min-width: 415px) {

    .pace {
        animation: pace-anim 5s;
    }

    @keyframes pace-anim {
        100% {
            opacity: 0;
        }
    }

}
```

Output:

```css
@media only screen and (min-width: 415px) {

    .pace {
        animation: pace-anim 5s;
    }
}

@keyframes pace-anim {
    100% {
        opacity: 0;
    }
}
```

## Install

```js
$ npm install postcss-mq-keyframes --save-dev
```

## Usage

```js
postcss([ require('postcss-mq-keyframes') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.