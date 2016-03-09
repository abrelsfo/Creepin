# alias-win
[![npm version](https://img.shields.io/npm/v/alias-win.svg)](https://www.npmjs.com/package/alias-win)
[![Build Status](https://travis-ci.org/abrelsfo/alias-win.svg?branch=master)](https://travis-ci.org/abrelsfo/alias-win)
[![npm download count](http://img.shields.io/npm/dm/alias-win.svg?style=flat)](http://npmjs.org/alias-win)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
> npm module to Create aliases for windows easier

<br>

## Install

```
$ npm install --save alias-win
```


## Usage

```js
const aliasWin = require('alias-win');

aliasWin('giggles');
//=> 'shits & giggles'
```

<br>

## API

### aliasWin(target)

##### target

Type: `string` || `Array`

Create aliases for windows easier

<br>

## CLI

```
$ npm install --global alias-win
```

```
$ alias-win --help

  Usage
    alias-win [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ alias-win
    shits & giggles
    $ alias-win ponies
    cows & rainbows
```


## License

MIT © [Alex Brelsford](abrelsfo.github.io)
