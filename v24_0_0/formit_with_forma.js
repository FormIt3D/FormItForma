window.FormIt.FormaAddIn = window.FormIt.FormaAddIn || {};

window.FormIt.FormaAddIn.SaveCurrentAXMtoTempFile = function(bSelectedOnly) {
    args = {
        TestAPI: "FormIt.FormaAddIn.SaveCurrentAXMtoTempFile",
        bSelectedOnly:bSelectedOnly
    };
    return callAsyncAPI(args);
};

window.FormIt.FormaAddIn.ReadAXMandMakeBlob = function(aPath) {
    args = {
        TestAPI: "FormIt.FormaAddIn.ReadAXMandMakeBlob",
        aPath:aPath
    };
    return callAsyncAPI(args);
};

window.FormIt.FormaAddIn.ImportAXMBlob = function(blob) {
    args = {
        TestAPI: "FormIt.FormaAddIn.ReadAXMandMakeBlob",
        blob:blob
    };
    return callAsyncAPI(args);
};

window.FormIt.FormaAddIn.MakeBlobFile = function(aPath, blob) {
    args = {
        TestAPI: "FormIt.FormaAddIn.MakeBlobFile",
        aPath:aPath,
        blob:blob
    };
    return callAsyncAPI(args);
};

window.FormIt.FormaAddIn.CreateTempPath = function(aFile) {
    args = {
        TestAPI: "FormIt.FormaAddIn.CreateTempPath",
        aFile:aFile
    };
    return callAsyncAPI(args);
};

window.FormIt.FormaAddIn.DeleteTempFile = function(aPath) {
    args = {
        TestAPI: "FormIt.FormaAddIn.DeleteTempFile",
        aPath:aPath
    };
    return callAsyncAPI(args);
};




