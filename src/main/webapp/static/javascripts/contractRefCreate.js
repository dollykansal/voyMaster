sap.ui.jsfragment("contractRefCreate.fragments.JSFragmentDialog", {
	// popup for creating a contract with reference to a voyage
	createContent: function(oController) {
		var oDialogContract = new sap.ui.commons.Dialog({title: "Create with Reference", height: "40%", width:"35%"});
		///////////////////////create panel/////////////////////////////////
		var oPanelFrom = new sap.ui.commons.Panel({
			text : "Copy From"
		});

		var oLayoutMatrixFrom = new sap.ui.commons.layout.MatrixLayout({
			width : "60%",                         // control width relative to window
			widths : [ "30%", "40%", "30%" ]  // widths of the columns
		});

		var oVoyLabel = new sap.ui.commons.Label({text: "Voyage Number"});

		// Input Field for Voyage Number with Value Help
		var oVoyInput = new sap.ui.commons.ValueHelpField( {
			valueHelpRequest: function(oEvent){
				var oValueHelpDialog = new sap.ui.ux3.ToolPopup({
					modal: true,
					inverted: false,                          // disable color inversion
					title: "Select Voyage Number",
					opener:  this,             // locate dialog next to this field 
					closed: function (oEvent) {
					}
				});
				var oOkButton = new sap.ui.commons.Button({
					text: "OK",
					press: function (oEvent) {
						oEvent.getSource().getParent().close();
					}
				});

				oValueHelpDialog.addButton(oOkButton);

				oValueHelpDialog.open();
			}           
		});

		oLayoutMatrixFrom.createRow(oVoyLabel, oVoyInput);
		oPanelFrom.addContent(oLayoutMatrixFrom);

		var oPanelTo = new sap.ui.commons.Panel({
			text : "Copy To"
		});
		var oLayoutMatrixTo = new sap.ui.commons.layout.MatrixLayout({
			width : "60%",                         // control width relative to window
			widths : [ "30%", "40%", "30%" ]  // widths of the columns
		});

		var oCbTxType = new sap.ui.commons.ComboBox({
			tooltip: "Transaction Type",
			items: [new sap.ui.core.ListItem({text: "Buy", key: "1"}),
			        new sap.ui.core.ListItem({text: "Sell", key: "2"}),],
		});
		var oCbDocType = new sap.ui.commons.ComboBox({
			tooltip: "Document Type",
			items: [new sap.ui.core.ListItem({text: "Contract of Affreightment", key: "1"}),
			        new sap.ui.core.ListItem({text: "Voyage Charter", key: "2"}),
			        new sap.ui.core.ListItem({text: "Time Charter", key: "3"}),],
		});
		var oLblContType = new sap.ui.commons.Label({text: "Contract Type",labelFor: oCbDocType});
		var oLblTxnType = new sap.ui.commons.Label({text: "Contract Type",labelFor: oCbTxType});

		oLayoutMatrixTo.createRow(oLblContType, oCbDocType);
		oLayoutMatrixTo.createRow(oLblTxnType, oCbTxType);
		oPanelTo.addContent(oLayoutMatrixTo);
		///////////////////////////////////////////////////////////////////
		oDialogContract.addContent(oPanelFrom);
		oDialogContract.addContent(oPanelTo);
		return oDialogContract;
	}
});