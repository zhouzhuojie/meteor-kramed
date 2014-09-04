Package.describe({
  summary: "A markdown (kramdown compatible) parser and compiler.",
  version: "0.1.1",
  git: "https://github.com/zhouzhuojie/meteor-kramed.git",
  name: "rexzh0u:kramed"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('./kramed/kramed.min.js', 'client');
  api.addFiles('rexzh0u:kramed.js', 'client');
  api.export('kramed', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rexzh0u:kramed');
  api.addFiles('rexzh0u:kramed-tests.js', 'client');
});
