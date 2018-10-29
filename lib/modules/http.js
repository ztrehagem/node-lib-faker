const http = module.constructor._load('http', module, false);

module.exports = {
  ...http,
  get(...args) {
    console.log('DUMMY!', ...args);
  },
};
