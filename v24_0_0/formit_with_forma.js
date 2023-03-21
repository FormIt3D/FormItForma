window.FormIt.FormaAddIn = window.FormIt.LumionLiveSync || {};

window.FormIt.FormaAddIn.SaveCurrentAXMtoTemp = function(bSelectedOnly) {
    args = {
        TestAPI: "FormIt.FormaAddIn.SaveCurrentAXMtoTemp",
        OptimizeGeometries:bSelectedOnly
    };
    return callAsyncAPI(args);
};

window.FormIt.FormaAddIn.DeleteTempFile = function(path) {
    args = {
        TestAPI: "FormIt.FormaAddIn.DeleteTempFile"
        OptimizeGeometries:path
    };
    return callAsyncAPI(args);
};



