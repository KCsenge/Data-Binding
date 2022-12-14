sap.ui.require(
  [
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (XMLView, JSONModel, ResourceModel) {
    "use strict";

    sap.ui.getCore().attachInit(function () {
      var oProductModel = new JSONModel();
      oProductModel.loadData("./model/Products.json");
      sap.ui.getCore().setModel(oProductModel, "products");

      var oModel = new JSONModel({
        firstName: "Harry",
        lastName: "Hawk",
        enabled: true,
        address: {
          street: "Dietmar-Hopp-Allee 16",
          city: "Walldorf",
          zip: "69190",
          country: "Germany",
        },
        salesAmount: 12345.6789,
        currencyCode: "EUR",
        priceThreshold: 20,
      });

      sap.ui.getCore().setModel(oModel);

      var oResourceModel = new ResourceModel({
        bundleName: "sap.ui.demo.db.i18n.i18n",
        supportedLocales: ["", "de"],
        fallbackLocale: "",
      });

      sap.ui.getCore().setModel(oResourceModel, "i18n");

      var oView = new XMLView({ viewName: "sap.ui.demo.db.view.App" });

      sap.ui.getCore().getMessageManager().registerObject(oView, true);

      oView.placeAt("content");
    });
  }
);
