if (typeof Package !== "undefined") {
    kramed = this.kramed;
}

if (typeof katex !== "undefined") {
    kramed.Renderer.prototype.math = function(content, language, display) {
        if (kramed.defaults.katex) {
            var maths;
            try {
                maths = katex.renderToString(content);
            }
            catch(e) {
                maths = '<span style="color: red; border: 1px solid red;">Katex Error</span>';

            }
            if (display) {
                return '<div style="text-align: center">' + maths + '</div>';
            } else {
                return maths;
            }
        } else {
            mode = display ? '; mode=display' : '';
            return '<script type="' + language + mode + '">' + content + '</script>';
        }
    }
}
