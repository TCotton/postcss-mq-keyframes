# PostCSS postcss-mq-keyframes [![Build Status][ci-img]][ci]

[PostCSS postcss-mq-keyframes] This plugin will move any keyframe animations from inside media queries to the bottom of the CSS file

[PostCSS postcss-mq-keyframes]: https://github.com/TCotton/postcss-mq-keyframes)
[ci-img]: https://travis-ci.org/TCotton/postcss-mq-keyframes.svg
[ci]: https://travis-ci.org/TCotton/postcss-mq-keyframes

Input:

```css
@media only screen and (min-width: 415px) {
  .pace .pace-activity {
    width: 140px;
    height: 140px;
    border-radius: 70px;
    background: #22df80;
    position: absolute;
    top: 0;
    z-index: 1;
    animation: pace-bounce 1s infinite;
  }
  
  @keyframes pace-bounce {
   0% {
    top: 0;
    animation-timing-function: ease-in;
  }

  50% {
    top: 140px;
    height: 140px;
    animation-timing-function: ease-out;
  }

  55% {
    top: 160px;
    height: 120px;
    border-radius: 70px / 60px;
    animation-timing-function: ease-in;
  }

  65% {
    top: 120px;
    height: 140px;
    border-radius: 70px;
    animation-timing-function: ease-out;
  }

  95% {
    top: 0;
    animation-timing-function: ease-in;
  }

  100% {
    top: 0;
    animation-timing-function: ease-in;
  }
}
}
```

Output:

```css
@media only screen and (min-width: 415px) {
  .pace .pace-activity {
    width: 140px;
    height: 140px;
    border-radius: 70px;
    background: #22df80;
    position: absolute;
    top: 0;
    z-index: 1;
    animation: pace-bounce 1s infinite;
  }
}

@keyframes pace-bounce {
  0% {
    top: 0;
    animation-timing-function: ease-in;
  }

  50% {
    top: 140px;
    height: 140px;
    animation-timing-function: ease-out;
  }

  55% {
    top: 160px;
    height: 120px;
    border-radius: 70px / 60px;
    animation-timing-function: ease-in;
  }

  65% {
    top: 120px;
    height: 140px;
    border-radius: 70px;
    animation-timing-function: ease-out;
  }

  95% {
    top: 0;
    animation-timing-function: ease-in;
  }

  100% {
    top: 0;
    animation-timing-function: ease-in;
  }
}
```

## Usage

```js
postcss([ require('postcss-mq-keyframes') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.