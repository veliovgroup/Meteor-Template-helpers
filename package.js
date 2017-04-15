Package.describe({
  name: 'ostrio:templatehelpers',
  version: '2.0.3',
  summary: 'Template helpers for Session, comparison, debug and logical operations',
  git: 'https://github.com/VeliovGroup/Meteor-Template-helpers',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use(['templating', 'spacebars', 'underscore', 'ecmascript'], 'client');
  api.use('session', 'client', {weak: true});
  api.mainModule('templatehelpers.js', 'client');
});
