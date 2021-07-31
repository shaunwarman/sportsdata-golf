# sportsdata-golf

[![build status](https://img.shields.io/travis/com/shaunwarman/sportsdata-golf.svg)](https://travis-ci.com/shaunwarman/sportsdata-golf)
[![code coverage](https://img.shields.io/codecov/c/github/shaunwarman/sportsdata-golf.svg)](https://codecov.io/gh/shaunwarman/sportsdata-golf)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/shaunwarman/sportsdata-golf.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/sportsdata-golf.svg)](https://npm.im/sportsdata-golf)

> A sportsdata.io API client specific to golf

## Table of Contents


## Install

[npm][]:

```sh
npm install sportsdata-golf
```

[yarn][]:

```sh
yarn add sportsdata-golf
```


## Usage

```js
const Golf = require('sportsdata-golf');

const golf = new Golf();

const schedule = await golf.schedule();
const players = await golf.players();
const player = await golf.player({ playerid: 40004412 });
```

## Environment Variables
- `SPORTSDATA_API_KEY` - sportsdata.io API key

## API Documentation
https://sportsdata.io/developers/api-documentation/golf

## License
MIT

##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
