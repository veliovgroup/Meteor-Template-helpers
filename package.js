Package.describe({
  name: 'ostrio:templatehelpers',
  version: '1.1.1',
  summary: 'Template helpers for Session, logical operations and debug',
  git: 'https://github.com/VeliovGroup/Meteor-Template-helpers',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['templating', 'underscore'], 'client');
  api.addFiles('templatehelpers.js', 'client');
});
