var contractDash = function(){
/////////////////////////////////////////second table - cargo  ///////////////////////////////////////////////////////////////////
	var aDataConDash = [
	                    {contNo: "1", customer: "ADNOC", vessel: "BRAEMAR", vendor:"GULF MARITIME", contType: "TC",
	                    	zeroProfInd: true,buyOrSell:"Buy"},
	                    	];

	//Create a panel instance
	var oPanelDash = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanelDash.setText("Contract Dashboard");
	var oTableDash = window.helper.createTable({
		visibleRowCount: 3,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
			items: [new sap.ui.commons.Button({text: "Create",
				lite : true}),

				new sap.ui.commons.Button({text: "Create with Reference",
				}),
				new sap.ui.commons.Button({text: "Open",
				}),		
				new sap.ui.commons.Button({text: "Edit",
				}),

				]}),
	});
	oTableDash.setEditable(false);
	//Define the columns and the control templates to be used
	oTableDash.addColumn(window.helper.createColumn("contNo", "Contract No.", "20px", "TV"));
	oTableDash.addColumn(window.helper.createColumn("custNo", "Customer No.", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("vessel", "Vessel", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("vendor", "Vendor", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("contType", "Contract Type", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("zeroProfInd", "Zero Profit", "20px", "CH"));
	oTableDash.addColumn(window.helper.createColumn("buyOrSell", "Buy\Sell ", "40px", "TF"));

	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aDataConDash});
	oTableDash.setModel(oModel);
	oTableDash.bindRows("/modelData");


	//Initially sort the table
	oTableDash.sort(oTableDash.getColumns()[0]);
	oPanelDash.addContent(oTableDash);
	return oPanelDash;
}
