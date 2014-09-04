Tinytest.add('kramed can be initialized', function (test) {
    test.isNotNull(kramed, 'kramed should exist');
});

Tinytest.add('kramed supports markdown', function (test) {
    test.equal(kramed('#hi'), '<h1 id="hi">hi</h1>\n');
});

Tinytest.add('kramed supports math', function (test) {
    test.equal(kramed('$sin(x)$'), '<p><script type="math/tex">sin(x)</script></p>\n');
});
