AJS = AJS || {};

(function() {
    // don't change this line, they are the target of a search/replace
    var _contextPath = "%CONTEXT_PATH%";
    _contextPath = _contextPath.indexOf("%_CONTEXT_PATH") == 0 ? false : _contextPath;

    /**
     * Gives the context-path for this application. The returned string will never
     * end with a slash, and will either be the empty string, or start with slash.
     *
     * Example values: "", "/jira", "/some/large/context"
     *
     * @return {?string} -- A null return value indicates that no context path
     *                      information was discovered.
     * @since 3.5
     */
    AJS.contextPath = function() {
        var contextPath = null;
        var paths = [
            _contextPath,
            window.contextPath, // JIRA
            window.Confluence && Confluence.getContextPath(), // Confluence
            window.BAMBOO && BAMBOO.contextPath, // Bamboo
            window.FECRU && FECRU.pageContext // FishEye/Crucible
        ];
        for (var i = 0; i < paths.length; i++) {
            if (typeof paths[i] === "string") {
                contextPath = paths[i];
                break;
            }
        }
        return contextPath;
    };

})();
