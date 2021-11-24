const { PlayFabAdmin } = require("playfab-sdk");
var PlayFab = require("./node_modules/playfab-sdk/Scripts/PlayFab/PlayFab");
var PlayFabClient = require("./node_modules/playfab-sdk/Scripts/PlayFab/PlayFabClient");

PlayFab.settings.titleId = "<YOURID>";
PlayFab.settings.developerSecretKey = "<YOURSECRET>";

function DevSecretTest() {
    var request = {
        PlayFabId: "96A0FC6796090959"
    }

    PlayFabAdmin.DeleteMasterPlayerAccount(request, DeleteMasterPlayerAccountCallback)
}

function DeleteMasterPlayerAccountCallback(error, result) {
    if (result !== null) {
        console.log("Congratulations, you made your first successful API call!");
    } else if (error !== null) {
        console.log("Something went wrong with your first API call.");
        console.log("Here's some debug information:");
        console.log(CompileErrorReport(error));
    }
}

function CompileErrorReport(error) {
    if (error == null)
        return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
        for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
}

DevSecretTest();