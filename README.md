# micro test

A simple url testing utility for micro.


## Installation

To install micro test, simply run the following command in your package manager.

```bash
yarn add micro-test-route
```
```bash
npm install -g micro-test-route
```

Once you have installed micro test, simply include it in your project like so...

```javascript
const test = require('micro-test-route');
```

## Usage

micro test exposes a single method which allows you to test a route to it's real world counterpart.

```javascript
const isUserIdRoute = test('/users/:id', '/users/1');
```
Parameters are defined as a comma followed by an alias to bind it's value to.

You can also create optional parameters by attaching a `?` suffix. This will allow both `/users` and `/users/1` to be matched.

Now you will be able to access the `id` parameter with the value of `1` and handle it however ever you like.

## License

This utility is licensed under [MIT](http://opensource.org/licenses/mit), see [LICENSE.md](LICENSE.md) for details.

## Support Nathaniel Blackburn
This utility is 95% based on the Nathaniel Blackburn work !

## Donations
If you found this utility to be useful, please consider [donating](https://paypal.me/nblackburn).

### Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/nblackburn/micro-match/badge.svg?style=beer-square)](https://beerpay.io/nblackburn/micro-match)  [![Beerpay](https://beerpay.io/nblackburn/micro-match/make-wish.svg?style=flat-square)](https://beerpay.io/nblackburn/micro-match?focus=wish)
