const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  remotes: [
    ['remote', 'https://brilliant-quokka-462c1f.netlify.app']
  ]
});
