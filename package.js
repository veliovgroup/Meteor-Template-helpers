Package.describe({
  name: 'ostrio:templatehelpers',
  version: '0.0.1',
  summary: 'Template helpers for Session, compare values and debug/log',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('templating', 'client');
  api.addFiles('ostrio:templatehelpers.js', 'client');
});
