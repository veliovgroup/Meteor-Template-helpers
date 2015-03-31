Package.describe({
  name: 'ostrio:templatehelpers',
  version: '0.3.0',
  summary: 'Template helpers for Session, compare values and debug/log',
  git: 'https://github.com/VeliovGroup/Meteor-Template-helpers',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use(['templating', 'underscore', 'ostrio:jsextensions@0.0.4'], 'client');
  api.addFiles('ostrio:templatehelpers.js', 'client');
});
