Package.describe({
  summary: "A markdown (kramdown compatible) parser and compiler.",
  version: "1.0.0",
  git: "https://github.com/zhouzhuojie/meteor-kramed.git",
  name: "rexzh0u:kramed"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('sashko:katex@1.0.2', {weak: true});
  api.addFiles('./kramed/kramed.min.js');
  api.addFiles('rexzh0u:kramed.js');
  api.export('kramed');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rexzh0u:kramed');
  api.use('sashko:katex@1.0.2');
  api.addFiles('rexzh0u:kramed-tests.js');
});
