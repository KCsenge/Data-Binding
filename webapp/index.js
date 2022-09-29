sap.ui.require(
  ["sap/m/Text", "sap/ui/model/json/JSONModel"],
  function (Text, JSONModel) {
    "use strict";

    sap.ui.getCore().attachInit(function () {
      var oModel = new JSONModel({ greetingTest: "Hi, my name is Harry Hawk" });

      sap.ui.getCore().setModel(oModel);

      new Text({ text: "Hi, my name is Harry Hawk" }).placeAt("content");
    });
  }
);
