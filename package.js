Package.describe({
  name: 'ostrio:templatehelpers',
  version: '1.0.0',
  summary: 'Template helpers for Session, logical operations and debug',
  git: 'https://github.com/VeliovGroup/Meteor-Template-helpers',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['templating', 'underscore', 'ostrio:jsextensions'], 'client');
  api.addFiles('ostrio:templatehelpers.js', 'client');
});
