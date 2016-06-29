# nay

A CLI that does nothing. Alternative to /dev/null and NUL.

[![npm](https://img.shields.io/npm/v/nay.svg?style=flat-square)](https://www.npmjs.com/package/nay)
[![Travis Build Status](https://img.shields.io/travis/seangenabe/nay/master.svg?style=flat-square)](https://travis-ci.org/seangenabe/nay)
[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/seangenabe/nay.svg?label=appveyor&style=flat-square)](https://ci.appveyor.com/project/seangenabe/nay)
[![devDependency Status](https://img.shields.io/david/dev/seangenabe/nay.svg?style=flat-square)](https://david-dm.org/seangenabe/nay#info=devDependencies)

## Rationale

This module was created as a cross-platform way of outputting into `/dev/null` (nix) or `NUL` (Windows).

## Usage

### CLI

```
nay
```

Does nothing. Really.

### API

Exports `undefined`.

```javascript
assert(require('nay') === undefined)
```

## License

MIT
