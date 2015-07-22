# PostCSS postcss-animations [![Build Status][ci-img]][ci]

[PostCSS postcss-animations] This plugin will move any keyframe animations from inside media queries to the bottom of the file

[PostCSS postcss-animations]: https://github.com/TCotton/postcss-animations)
[ci-img]: https://travis-ci.org/TCotton/postcss-animations.svg
[ci]: https://travis-ci.org/TCotton/postcss-animations

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
    z-index: 1911;
    -webkit-animation: pace-bounce 1s infinite;
    animation: pace-bounce 1s infinite;
  }
    @  keyframes pace-bounce {
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
    z-index: 1911;
    -webkit-animation: pace-bounce 1s infinite;
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
postcss([ require('postcss-animations') ])
```

See [PostCSS] docs for examples for your environment.