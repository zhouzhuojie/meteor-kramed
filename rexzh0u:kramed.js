if (typeof Package !== "undefined") {
    kramed = this.kramed;
}

if (typeof katex !== "undefined") {
    kramed.Renderer.prototype.math = function(content, language, display) {
        if (kramed.defaults.katex) {
            if (display) {
                return '<div style="text-align: center">' + katex.renderToString(content) + '</div>';
            } else {
                return katex.renderToString(content);
            }
        } else {
            mode = display ? '; mode=display' : '';
            return '<script type="' + language + mode + '">' + content + '</script>';
        }
    }
}
