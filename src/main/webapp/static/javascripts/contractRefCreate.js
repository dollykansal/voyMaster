sap.ui.jsfragment("contractRefCreate.fragments.JSFragmentDialog", {
	// popup for creating a contract with reference to a voyage
	createContent: function(oController) {
		var oDialogContract = new sap.ui.commons.Dialog({title: "Create with Reference", height: "40%", width:"35%",modal: true});
		///////////////////////create panel/////////////////////////////////
		var oPanelFrom = new sap.ui.commons.Panel({
			text : "Copy From"
		});

		var oLayoutMatrixFrom = new sap.ui.commons.layout.MatrixLayout({
			width : "60%",                         // control width relative to window
			widths : [ "30%", "40%", "30%" ]  // widths of the columns
		});

		var oVoyLabel = new sap.ui.commons.Label({text: "Voyage Number"});
		var aDataHelp = [
		                    {VoyNo: "123"},{VoyNo: "456"},{VoyNo: "4343"},
		                    	];
		
		// Input Field for Voyage Number with Value Help
		var oVoyInput = new sap.ui.commons.ValueHelpField("idVoyInput", {
			valueHelpRequest: function(oEvent){
				var oValueHelpDialog = new sap.ui.ux3.ToolPopup({
					modal: true,
					inverted: false,                          // disable color inversion
					title: "Select Voyage Number",
					opener:  this,             // locate dialog next to this field 
					closed: function (oEvent) {
						// return selected tabled line/value
						var oCore = sap.ui.getCore();
						var oVoyInput = oCore.byId("idVoyInput");
						var oContext = oHelpTable.getContextByIndex(oHelpTable.getSelectedIndex());
						if (oContext) {
							var oSel = oContext.getModel().getProperty(oContext.getPath());
							oVoyInput.setValue(oSel["VoyNo"]);
						};
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

				var oHelpTable = new sap.ui.table.Table({
					selectionMode: sap.ui.table.SelectionMode.Single,
					visibleRowCount: 7,
					width: "300pt"
				});

				oHelpTable.addColumn(
						new sap.ui.table.Column({
							label: new sap.ui.commons.Label({text: "Voyage Number"}),
							template: new sap.ui.commons.TextView().bindProperty("text", "VoyNo"),
							sortProperty: "VoyNo",
							filterProperty: "VoyNo",
						})
				);

				oHelpTable.addColumn(
						new sap.ui.table.Column({
							label: new sap.ui.commons.Label({text: "Vessel Name"}),
							template: new sap.ui.commons.TextView().bindProperty("text", "VesselName"),
							sortProperty: "VesselName",
							filterProperty: "VesselName",
						})
				);

				//Create a model and bind the table rows to this model
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData({modelData: aDataHelp});
				oHelpTable.setModel(oModel);
				oHelpTable.bindRows("/modelData");
				
				oValueHelpDialog.addContent(oHelpTable);
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
		var oButton = new sap.ui.commons.Button({
            text: "Create",
            press: function(){oDialogContract .close();
			sap.ui.getCore().byId("myShell").setSelectedWorksetItem("wi_contract_id");
			sap.ui.getCore().byId("myShell").setContent(getContent("wi_cont_create"));}
        });
		oDialogContract.addButton(oButton);
        
		return oDialogContract;
	}
});