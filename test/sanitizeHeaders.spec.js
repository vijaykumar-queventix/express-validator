const { expect } = require('chai');
const { sanitizeObjectSpec } = require('./spec-helpers');
const expressValidator = require('..');

describe('req.sanitizeHeaders()', () => {
  sanitizeObjectSpec('headers');

  it('sanitizes "referrer" as alias to "referer"', () => {
    const req = {
      headers: { referer: '123' }
    };

    expressValidator()(req, {}, () => {});
    req.sanitizeHeaders('referrer').toInt();

    expect(req.headers.referer).to.equal(123);
  });
});