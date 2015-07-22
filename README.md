# PostCSS postcss-mq-keyframes [![Build Status][ci-img]][ci]

[PostCSS postcss-mq-keyframes] This plugin will move any keyframe animations from inside media queries to the bottom of the CSS file

[PostCSS postcss-mq-keyframes]: https://github.com/TCotton/postcss-mq-keyframes)
[ci-img]: https://travis-ci.org/TCotton/postcss-mq-keyframes.svg
[ci]: https://travis-ci.org/TCotton/postcss-mq-keyframes


Input:

```css
@media only screen and (min-width: 415px) {

    .pace {
        width: 140px;
        height: 300px;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;
        transform: scale(0.4);
        transition: all 2s linear 0s;
        animation: pace-bounce-scaledown 5s;
    }

    @-keyframes pace-bounce-scaledown {
        0% {
            opacity: 1;
        }
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
        width: 140px;
        height: 300px;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;
        transform: scale(0.4);
        transition: all 2s linear 0s;
        animation: pace-bounce-scaledown 5s;
    }
    
}

@-keyframes pace-bounce-scaledown {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
```

## Usage

```js
postcss([ require('postcss-mq-keyframes') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.