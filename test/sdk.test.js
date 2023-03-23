const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const SDK = require('../lib/sdk');

describe('SDK', function() {
  describe('constructor', function() {
    it('should throw an error if no public key is provided', function() {
      expect(() => new SDK()).to.throw('No public key provided');
    });

    it('should set the public key property', function() {
      const publicKey = '1234567890';
      const sdk = new SDK(publicKey);
      expect(sdk.publicKey).to.equal(publicKey);
    });

    it('Check Type of Public key is Array', function() {
        const publicKey = [123456789] ;
        const sdk = new SDK(publicKey);
        expect(sdk.publicKey).to.be.an('array').that.does.not.include(0);
      });

      it('Check Type of Public key is Number', function() {
        const publicKey = 1234567890 ;
        const sdk = new SDK(publicKey);
        expect(sdk.publicKey).to.be.an('number');
      });
      it('Check Type of Public key is String', function() {
        const publicKey = '1234567890' ;
        const sdk = new SDK(publicKey);
        expect(sdk.publicKey).to.be.an('String');
      });
  });
});