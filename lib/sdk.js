class SDK {
    constructor(publicKey) {
      if (!publicKey) {
        throw new Error('No public key provided');
      }
      this.publicKey = publicKey;
      // ...
    }
  
    // ...
  }
  
  module.exports = SDK;