const overwrapNames = [
  'http',
];

const originalRequire = module.constructor.prototype.require;

module.constructor.prototype.require = function (id) {
  if (overwrapNames.some(name => name === id)) {
    return originalRequire.call(this, `${__dirname}/modules/${id}`);
  } else {
    return originalRequire.call(this, id);
  }
}