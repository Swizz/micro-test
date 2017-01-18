const test = require('ava');
const microTest = require('../src/index');

test('simple url', t => {

    t.true(
      microTest('/api/users', '/api/users')
    );

    t.false(
      microTest('/api/users', '/api/user')
    );

});

test('url with parameters', t => {

    t.true(
      microTest('/api/:version/users/:id', '/api/v1/users/1')
    );

    t.false(
      microTest('/api/:version/users/:id', '/api/v1/users')
    );

});

test('url with optional parameters', t => {

    t.true(
      microTest('/api/:version?/users/:id', '/api/v1/users/1')
    );

    t.true(
      microTest('/api/:version?/users/:id', '/api/users/1')
    );

    t.false(
      microTest('/api/:version?/users/:id', '/api/v1/users')
    );

});
