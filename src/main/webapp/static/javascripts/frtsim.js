sap.ui.jsfragment("frtsim.fragments.JSFragmentDialog", {
    createContent: function(oController) {
        var oDialog = new sap.ui.commons.Dialog({title: "Freight Simulator"});
        
        var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			width : '450px',
			columns : 4
		});
		oMatrix.setWidths('100px', '70px','100px', '70px');
	
		var oLabel1 = new sap.ui.commons.Label({
			text : 'Daily Current Profit',
			tooltip: "Daily Current Profit"
		});
		// create a simple Input field
		var oInputCP = new sap.ui.commons.TextField('inputcp',{
			value: "{modelSumm>/cBase}",
			editable : false});
		//oInputCP.attachChange(function(){alert('Text changed to :'+ oInputCP.getValue());});
		oLabel1.setLabelFor(oInputCP);
		//oMatrix.createRow(oLabel1, oInputCP);
	
		var oLabel2 = new sap.ui.commons.Label({
			text : 'Total Current Profit',
			tooltip:"Total Current Profit"
		});
		var oInput2 = new sap.ui.commons.TextField('inputTot',{
			value: "{modelSumm>/totProfit}",
			editable : false});
		oLabel2.setLabelFor(oInput2);
		oMatrix.createRow(oLabel1, oInputCP,oLabel2, oInput2);
	
		var oLabel3 = new sap.ui.commons.Label({
			text : 'Daily Expected Profit'
		});
		var oInput3 = new sap.ui.commons.TextField('inputExP',{
			//value: "{modelSumm>/cBase}"
			});
		oInput3.setValue("0.00");
		oInput3.setTooltip("Daily Expected Profit");
		oLabel3.setLabelFor(oInput3);
		//oMatrix.createRow(oLabel3, oInput3);

		var oLabel4 = new sap.ui.commons.Label({
			text : 'Total Expected Profit'
		});
		var oInput4 = new sap.ui.commons.TextField('inputTotExpP',{value: "{modelSumm>/totProfit}"});
		oInput4.setValue("0.00");
		oInput4.setTooltip("Total Expected Profit");
		oLabel4.setLabelFor(oInput4);
		oMatrix.createRow(oLabel3, oInput3,oLabel4, oInput4);
        
		oDialog.addContent(oMatrix);
		//Create an instance of the table control
		var oTable = new sap.ui.table.Table({
			visibleRowCount: 1,
			firstVisibleRow: 1,
			columnHeaderHeight:1,
			rowHeight:1,
			columnHeight:1,
			width: "500px",
		 	selectionMode: sap.ui.table.SelectionMode.Single
		});
		
		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Account"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "account"),
			sortProperty: "account",
			filterProperty: "account",
			width: "40px"
		});
		oTable.addColumn(oColumn);


		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Cargo Name"}),
			template: new sap.ui.commons.TextField().bindProperty("value", "cargoNam"),
			sortProperty: "cargoNam",
			filterProperty: "cargoNam",
			width: "40px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Checked"}),
			template: new sap.ui.commons.CheckBox().bindProperty("checked", "checked"),
			sortProperty: "checked",
			filterProperty: "checked",
			width: "40px",
			hAlign: "Center"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Frt."}),
			template: new sap.ui.commons.TextField().bindProperty("value", "frt"),
			sortProperty: "frt",
			filterProperty: "frt",
			width: "40px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Revenue"}),
			template: new sap.ui.commons.TextField().bindProperty("value", "revenue"),
			sortProperty: "revenue",
			filterProperty: "revenue",
			width: "40px"
		}));
		//Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		var aData = [
		         	{ account: "Seafuture", checked: false, cargoNam: "Hot Coil", frt:"0.00", revenue: "0.00"}
		         ];
		oModel.setData({modelData: aData});
		oTable.setModel(oModel);
		oTable.bindRows("/modelData");

		//Initially sort the table
		oTable.sort(oTable.getColumns()[0]);
        oDialog.addContent(oTable);
        
        var oButton = new sap.ui.commons.Button({
            text: "Close",
            press: function(){oDialog .close();}
        });
        oDialog.addButton(oButton);

        return oDialog;
    }
});