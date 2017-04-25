"use strict";

SystemJS.config({
    meta: {
        "/testing/*": { format: "global" },
        "/js/aspnet.js": { format: "global" }
    }
});

define(function(require) {
    require("/js/bundles/dx.web.js");
    require("/js/aspnet.js");
    require("/testing/tests/DevExpress.aspnet/aspnet.tests.js");
});
