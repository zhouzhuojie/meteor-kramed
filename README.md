# Kramed for Meteor [![Build Status](https://travis-ci.org/zhouzhuojie/meteor-kramed.svg)](https://travis-ci.org/zhouzhuojie/meteor-kramed)

Official cite: [kramed](https://github.com/GitbookIO/kramed).

> A full-featured markdown parser and compiler, written in JavaScript. Built for speed.

## Installation
```
meteor add rexzh0u:kramed
```

By default, kramed supports Mathjax, if you want to enable `katex` support, do the following:

`rexzh0u:kramed` has a weak dependency on `sashko:katex`:
```
meteor add sashko:katex
```

then, enable katex by turning on the option:
```javascript
kramed.options({katex: true});
kramed(markdownString);
```

