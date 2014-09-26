Tinytest.add('kramed can be initialized', function (test) {
    test.isNotNull(kramed, 'kramed should exist');
});

Tinytest.add('kramed supports markdown', function (test) {
    test.equal(kramed('#hi'), '<h1 id="hi">hi</h1>\n');
});

Tinytest.add('kramed supports math', function (test) {
    test.equal(kramed('$sin(x)$'), '<p><script type="math/tex">sin(x)</script></p>\n');
});

Tinytest.add('kramed supports katex', function (test) {
    kramed.options({
        katex: true
    })
    if (typeof katex !== "undefined") {
        test.equal(kramed('$sin(x)$'), '<p><span class="katex"><span class="katex-inner"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit">s</span><span class="mord mathit">i</span><span class="mord mathit">n</span><span class="mopen">(</span><span class="mord mathit">x</span><span class="mclose">)</span></span></span></span></p>\n');
        test.equal(kramed('$$sin(x)$$'), '<div style="text-align: center"><span class="katex"><span class="katex-inner"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit">s</span><span class="mord mathit">i</span><span class="mord mathit">n</span><span class="mopen">(</span><span class="mord mathit">x</span><span class="mclose">)</span></span></span></span></div>');
    }
});
