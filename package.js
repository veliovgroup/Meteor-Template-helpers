Package.describe({
  name: 'ostrio:templatehelpers',
  version: '1.1.3',
  summary: 'Template helpers for Session, comparison, debug and logical operations',
  git: 'https://github.com/VeliovGroup/Meteor-Template-helpers',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use(['templating', 'underscore'], 'client');
  api.addFiles('templatehelpers.js', 'client');
});
