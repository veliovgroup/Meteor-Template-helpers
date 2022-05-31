Package.describe({
  name: 'ostrio:templatehelpers',
  version: '2.2.3',
  summary: 'Template helpers for logical operations, variable comparison, Session, underscore and debugging',
  git: 'https://github.com/VeliovGroup/Meteor-Template-helpers',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.4');
  api.use(['templating', 'ecmascript'], 'client');
  api.use(['session', 'underscore'], 'client', {weak: true});
  api.mainModule('templatehelpers.js', 'client');
});

Package.onTest((api) => {
  api.use(['templating', 'ecmascript', 'tinytest', 'underscore', 'session'], 'client');
  api.addFiles('templatehelpers-tests.js', 'client');
});
