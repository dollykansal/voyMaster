var Bunker = function(){
	this.createBunker = function(){
		var vessel = sap.ui.getCore().getModel("vessel");
		var oTableVess = window.helper.createTable({
			//title: "Selected Vessel Particular",
			});
		oTableVess.addColumn(window.helper.createColumn("mv", "MV", "100px", "TV"));
		oTableVess.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
		oTableVess.addColumn(window.helper.createColumn("dwt", "DWT", "50px", "TF"));
		oTableVess.addColumn(window.helper.createColumn("draft", "Draft", "50px", "TF"));
		oTableVess.setModel(vessel);
		oTableVess.bindRows("/data1");
//		Initially sort the table
		oTableVess.sort(oTableVess.getColumns()[0]);

		//Create a RadioButtonGroup with two options: full & Eco
		var oRBG1 = window.helper.createRadioButton("Select Full or Eco")
		oRBG1.addItem(window.helper.createItem("Full","Key1"));
		oRBG1.addItem(window.helper.createItem("Eco","Key2"));
		//oRBG1.placeAt("vesselmode_1");

		//Create an instance of the table control
		var oTableMode = window.helper.createTable();
		oTableMode.addColumn(window.helper.createColumn("ballast", "Ballast", "60px", "TV"));
		oTableMode.addColumn(window.helper.createColumn("laden", "Laden", "60px", "TF"));
		oTableMode.setModel(vessel);
		oTableMode.bindRows("/data2");
		//Initially sort the table
		oTableMode.sort(oTableMode.getColumns()[0]);
	/////////////////////////////////////////DO  ///////////////////////////////////////////////////////////////////
		//Create an instance of the table control
		var oTableDo = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
		//Define the columns and the control templates to be used
		oTableDo.addColumn(window.helper.createColumn("vesselName", "VesselName", "50px", "TV"));
		oTableDo.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
		oTableDo.addColumn(window.helper.createColumn("sea", "Sea", "50px", "TF"));
		oTableDo.addColumn(window.helper.createColumn("idle", "Idle", "50px", "TF"));
		oTableDo.addColumn(window.helper.createColumn("work", "Work", "50px", "TF"));


		//Create a model and bind the table rows to this model
		oTableDo.setModel(vessel);
		oTableDo.bindRows("/data3");

		//Initially sort the table
		oTableDo.sort(oTableDo.getColumns()[0]);

	/////////////////////////////////////////FO  ///////////////////////////////////////////////////////////////////
		//Create an instance of the table control
		var oTableFo = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
		//Define the columns and the control templates to be used
		oTableFo.addColumn(window.helper.createColumn("vesselName", "VesselName", "50px", "TV"));
		oTableFo.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn("ballast", "Ballast", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn("laden", "laden", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn("idle", "Idle", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn("work", "Work", "50px", "TF"));

		//Create a model and bind the table rows to this model
		oTableFo.setModel(vessel);
		oTableFo.bindRows("/data4");
	/////////////////////////////////////////ROB & Suppply Table  ///////////////////////////////////////////////////////////////////
	
		 var aDataRob = [{ port: "Dubai", wf: "0.0%", speed: "13.0", type: "F.O"},{  port: "Dubai", wf: "0.0%", speed: "13.0", type: "D.O"},
		                 { port: "Dubai", wf: "0.0%", speed: "13.0", type: "L.S.F.O"},{port: "Dubai", wf: "0.0%", speed: "13.0", type: "L.S.D.O"},
		                 { port: "Miami", wf: "0.0%", speed: "13.0", type: "F.O"},{port: "Miami", wf: "0.0%", speed: "13.0", type: "D.O"},
		                 { port: "Miami", wf: "0.0%", speed: "13.0", type: "L.S.F.O"},{port: "Miami", wf: "0.0%", speed: "13.0", type: "L.S.D.O"}];  
		//Create an instance of the table control
		//var oTableRob = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
		//Define the columns and the control templates to be used
		
		var oTableRob = new sap.ui.table.Table({
			id: "oTableRob",
			 title: "ROB & Supply",
			  width : "100%",
			  visibleRowCount : 10,
			  selectionMode : sap.ui.table.SelectionMode.None,
			  navigationMode : sap.ui.table.NavigationMode.Scrollbar,
			  editable : true,
			  enableCellFilter : true,
			  enableColumnReordering : true,
			  enableGrouping : true
			 // extension : oMatrixLayout,
			});

		oTableRob.addColumn(new sap.ui.table.Column({
			       label : new sap.ui.commons.Label({
			             text : "port",
			             textAlign : sap.ui.core.TextAlign.Center
			       }),
			       template : new sap.ui.commons.TextView({
			             text : "port",
			             textAlign : sap.ui.core.TextAlign.Center
			       }),
			       visible : true,
			       sortProperty: "port"
			       //filterProperty: "port",
			}));
		
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "wf");
		oTableRob.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "W.F" , wrapping: true }), 
													template: oControl, hAlign: "Center", autoResizable: true}));
		
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "speed");
		oTableRob.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Speed" , wrapping: true }), 
													template: oControl, hAlign: "Center", autoResizable: true}));
		
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "days");
		oTableRob.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Days" , wrapping: true }), 
													template: oControl, hAlign: "Center", autoResizable: true}));
		
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "type");
		oTableRob.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "" }), 
													template: oControl, hAlign: "Center", autoResizable: true}));
		
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "arrRob");
		oTableRob.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Arrival ROB" , wrapping: true }), 
													template: oControl, hAlign: "Center", autoResizable: true}));
		
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "qty");
		var oColumn1 = new sap.ui.table.Column({multiLabels: [
		                                         			new sap.ui.commons.Label({text: "Supply", textAlign: "Center"}),
		                                         			new sap.ui.commons.Label({text: "Quantity"})
		                                         		], template: oControl,headerSpan: [3,1],});
		oTableRob.addColumn(oColumn1, {autoResizable: true});
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "uPrice");
		var oColumn2 = new sap.ui.table.Column({multiLabels: [
		                                         			new sap.ui.commons.Label({text: "Supply"}),
		                                         			new sap.ui.commons.Label({text: "Unit Price"})
		                                         			], template: oControl});
		oTableRob.addColumn(oColumn2, {autoResizable: true});
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "price");
		var oColumn3 = new sap.ui.table.Column({multiLabels: [
		                                         			new sap.ui.commons.Label({text: "Supply"}),
		                                         			new sap.ui.commons.Label({text: "Price"})
		                                         		], template: oControl});
		oTableRob.addColumn(oColumn3, {autoResizable: true});
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "depRob");
		oTableRob.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Departure ROB" , wrapping: true }), 
													template: oControl, hAlign: "Center", autoResizable: true}));

		var oControl = new sap.ui.commons.TextView().bindProperty("text", "conSea");
		var oColumn4 = new sap.ui.table.Column({multiLabels: [
		                                         			new sap.ui.commons.Label({text: "Consumption", textAlign: "Center"}),
		                                         			new sap.ui.commons.Label({text: "Sea"})
		                                         		], template: oControl,headerSpan: [2,1],});
		oTableRob.addColumn(oColumn4, {autoResizable: true});
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "conPort");
		var oColumn5 = new sap.ui.table.Column({multiLabels: [
		                                         			new sap.ui.commons.Label({text: "Consumption"}),
		                                         			new sap.ui.commons.Label({text: "Port"})
		                                         			], template: oControl});
		oTableRob.addColumn(oColumn5, {autoResizable: true});
		
		oTableRob.setGroupBy(oTableRob.getColumns()[0]);
		//oTableRob.setGroupBy(oTableRob.getColumns()[1]);
		//oTableRob.addColumn(window.helper.createColumn("portName", "", "50px", "TV"));
//		oTableRob.addColumn(window.helper.createColumn("eca", "", "50px", "TF"));
//		oTableRob.addColumn(window.helper.createColumn("wf", "W.F.", "50px", "TF"));
//		oTableRob.addColumn(window.helper.createColumn("speed", "Speed", "50px", "TF"));
//		oTableRob.addColumn(window.helper.createColumn("days", "Days", "50px", "TF"));
//		oTableRob.addColumn(window.helper.createColumn("type", "", "50px", "TF"));
//		oTableRob.addColumn(window.helper.createColumn("arrRob", "Arrival ROB", "50px", "TF"));
		
		//Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({modelData: aDataRob});
		oTableRob.setModel(oModel);
		oTableRob.bindRows("/modelData");
	/////////////////////////////////////////Bunker Price Table  ///////////////////////////////////////////////////////////////////
		 var aDataBunkPrice = [{ priceType: "Start ROB", type: "F.O"},{  priceType: "Start ROB", type: "D.O"},
		                 { priceType: "Start ROB", type: "L.S.F.O"},{priceType: "Start ROB", type: "L.S.D.O"},
		                 { priceType: "Supply", type: "F.O"},{priceType: "Supply", type: "D.O"},
		                 { priceType: "Supply", type: "L.S.F.O"},{priceType: "Supply", type: "L.S.D.O"},
		                 { priceType: "Consumption", type: "F.O"},{priceType: "Consumption", type: "D.O"},
		                 { priceType: "Consumption", type: "L.S.F.O"},{priceType: "Consumption", type: "L.S.D.O"},
		                 { priceType: "Remain", type: "F.O"},{priceType: "Remain", type: "D.O"},
		                 { priceType: "Remain", type: "L.S.F.O"},{priceType: "Remain", type: "L.S.D.O"},
		                 ];  
		//Create an instance of the table control
		//var oTableRob = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
		//Define the columns and the control templates to be used
		
		var oTableBunkPrice = new sap.ui.table.Table({
			id: "oTableBunkPrice",
			 title: "Bunker Price",
			  width : "100%",
			  visibleRowCount : 10,
			  selectionMode : sap.ui.table.SelectionMode.None,
			  navigationMode : sap.ui.table.NavigationMode.Scrollbar,
			  editable : true,
			  enableCellFilter : true,
			  enableColumnReordering : true,
			  enableGrouping : true
			 // extension : oMatrixLayout,
			});

		oTableBunkPrice.addColumn(new sap.ui.table.Column({
			       label : new sap.ui.commons.Label({
			             text : "priceType",
			             textAlign : sap.ui.core.TextAlign.Center
			       }),
			       template : new sap.ui.commons.TextView({
			             text : "priceType",
			             textAlign : sap.ui.core.TextAlign.Center
			       }),
			       visible : true,
			       sortProperty: "priceType"
			       //filterProperty: "port",
			}));
		
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "type");
		oTableBunkPrice.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "" , wrapping: true }), 
													template: oControl, hAlign: "Center", autoResizable: true}));
		
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "qty");
		oTableBunkPrice.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Quantity" , wrapping: true }), 
													template: oControl, hAlign: "Center", autoResizable: true}));
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "unitPrice");
		oTableBunkPrice.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Unit Price" , wrapping: true }), 
													template: oControl, hAlign: "Center", autoResizable: true}));
		var oControl = new sap.ui.commons.TextView().bindProperty("text", "price");
		oTableBunkPrice.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Price" , wrapping: true }), 
													template: oControl, hAlign: "Center", autoResizable: true}));
		
		oTableBunkPrice.setGroupBy(oTableBunkPrice.getColumns()[0]);
		//Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({modelData: aDataBunkPrice});
		oTableBunkPrice.setModel(oModel);
		oTableBunkPrice.bindRows("/modelData");
		/////////////////////////////////////////Hirage/Day  ///////////////////////////////////////////////////////////////////

		var aDataHir = [
		               {values: "Duration", fullSpeed: "0.0", ecoSpeed: "0.00", balance: "0.0"},
		               {values: "Total Hirage", fullSpeed: "0.0", ecoSpeed: "0.00", balance: "0.0"},
		               {values: "Consumption(MT)", fullSpeed: "0.0", ecoSpeed: "0.00", balance: "0.0"},
		               {values: "Consumption(USD)", fullSpeed: "0.0", ecoSpeed: "0.00", balance: "0.0"},
		               {values: "Total Expense", fullSpeed: "0.0", ecoSpeed: "0.00", balance: "0.0"},
		               {values: "Daily C/Base", fullSpeed: "0.0", ecoSpeed: "0.00", balance: "0.0"}
		               ];

		//Create an instance of the table control
		var oTableHir = window.helper.createTable({visibleRowCount: 6,firstVisibleRow: 6});
		oTableHir.setEditable(false);
		//Define the columns and the control templates to be used
		oTableHir.addColumn(window.helper.createColumn("values", "", "50px", "TV"));
		oTableHir.addColumn(window.helper.createColumn("fullSpeed", "Full Speed", "50px", "TF"));
		oTableHir.addColumn(window.helper.createColumn("ecoSpeed", "Eco Speed", "50px", "TF"));
		oTableHir.addColumn(window.helper.createColumn("balance", "Balance", "50px", "TF"));

		//Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({modelData: aDataHir});
		oTableHir.setModel(oModel);
		oTableHir.bindRows("/modelData");

		//Initially sort the table
		oTableHir.sort(oTableHir.getColumns()[0]);
	/////////////////////////////////////////Panel & Matrix Vessel  ///////////////////////////////////////////////////////////////////
		//Create a panel instance
		var oPanelMain = new sap.ui.commons.Panel({
			width : "100%", showCollapseIcon: false
		});
		
		var oPanel = new sap.ui.commons.Panel({
			width : "100%"
		});

		oPanel.setText("Selected Vessel Particular");
		//Create a matrix layout with 5 columns
		var oMatrixMain = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			width : '100%'
		});
		//Create a matrix layout with 5 columns
		var oMatrixVess = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			width : '100%',
			columns : 5
		});
		
		var oMatrixRight = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			width : '100%'
		});
		var cell1 = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:c.layout.VAlign.Top}).addContent(oTableRob);
		
		oMatrixVess.setWidths('25%','5%', '15%','25%', '30%');
		oMatrixVess.createRow(oTableVess,oRBG1, oTableMode, oTableDo, oTableFo);
		oPanel.addContent(oMatrixVess);
		var oDivider = new sap.ui.commons.HorizontalDivider("divider", {type: "Page", height: "Small", color: "007DC0"});
		oMatrixMain.createRow(oPanel);
		oMatrixRight.createRow(oTableBunkPrice);
		oMatrixRight.createRow(oDivider);
		oMatrixRight.createRow(oTableHir);
		oMatrixMain.createRow(cell1, oMatrixRight);
		oPanelMain.addContent(oPanel);
		oPanelMain.addContent(oMatrixMain);
		return oPanelMain;
//		oPanel.placeAt("estViewID");
	}
}