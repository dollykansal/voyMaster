var Vessel = function(oController){
		var oModel = new sap.ui.model.json.JSONModel(); 
		var data1 = [
//		             	{mv: "Robbo",type:"Hello",dwt:"world",draft:"1234"}
		            ];
		var data2 = [
//		                {ballast: "50.0", laden: "40.0"}
		            ];
		var data3 = [
//		               {vesselName: "DO", type: "", sea: "0.00", idle: "0.0", work: "0.0"},
//		               {vesselName: "LSDO", type: "", sea: "10.00", idle: "0.0", work: "0.0"}
		               ];
		var data4 = [
//		               {vesselName: "FO", type: "180", ballast: "20.00", laden: "25.00", idle: "1.0", work: "1.0"},
//		               {vesselName: "LSFO", type: "180", ballast: "20.00", laden: "25.00", idle: "0.0", work: "0.0"}
		               ];
		oModel.setData({data1: data1,data2:data2,data3:data3,data4:data4});
		sap.ui.getCore().setModel(oModel, "vessel"); 
		this.getVesselTable = function(){
			return oTableVess;
		};
//		creating table using helper
		var oTableVess = window.helper.createTable({
			//title: "Selected Vessel Particular",
			id: "iddemo",
			toolbar: new sap.ui.commons.Toolbar({items: [ 
			                                             new sap.ui.commons.Button({text: "Edit", press: function() { alert("Edit Button pressed!"); }}),
			                                             new sap.ui.commons.Button({text: "List", press: function() { alert("List Button pressed!"); }}),
			                                             new sap.ui.commons.Button({text: "Clear", press: function() { alert("Clear Button pressed!"); }}),
			                                             new sap.ui.commons.Button({text: "History", press: function() { alert("History Button pressed!"); }})
			                                             ]})});
		
//		Define the columns and the control templates to be used
		var oColumn = window.helper.createColumn("mv", "MV", "80px", "TV");

		var oCustomMenu = new sap.ui.commons.Menu();
		oCustomMenu.addItem(new sap.ui.commons.MenuItem({
			text:"Custom Menu",
			select:function() {
				alert("Custom Menu");
			}
		}));
		oColumn.setMenu(oCustomMenu);
		oTableVess.addColumn(oColumn);
		
		var oComboBox = new sap.ui.commons.ComboBox("ComboBox1",{
			  tooltip: "Type",
			  items: [new sap.ui.core.ListItem({text: "OWNED", key: "O"}),
			          new sap.ui.core.ListItem({text: "TCT", key: "T"}),
			          new sap.ui.core.ListItem({text: "LTC", key: "L"})],
			  });
		oComboBox.bindProperty("value", "vesselType");
		
		oTableVess.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Type"}), template: oComboBox,width: "70px"}));
		oTableVess.addColumn(window.helper.createColumn1("dwt", "DWT", "50px", "TF"));
		oTableVess.addColumn(window.helper.createColumn("draft", "Draft", "50px", "TF"));

		oTableVess.setModel(oModel);
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
		oTableMode.addColumn(window.helper.createColumn1("ballast", "Ballast", "60px", "TF"));
		oTableMode.addColumn(window.helper.createColumn1("laden", "Laden", "60px", "TF"));

		oTableMode.setModel(oModel);
		oTableMode.bindRows("/data2");

		//Initially sort the table
		oTableMode.sort(oTableMode.getColumns()[0]);
	/////////////////////////////////////////DO  ///////////////////////////////////////////////////////////////////

		//Create an instance of the table control
		var oTableDo = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
		//Define the columns and the control templates to be used
		oTableDo.addColumn(window.helper.createColumn1("vesselName", "VesselName", "50px", "TF"));
		var oComboBox = new sap.ui.commons.ComboBox("ComboBox2",{
			  tooltip: "Type",
			  items: [new sap.ui.core.ListItem({text: "DMA", key: "D1"}),
			          new sap.ui.core.ListItem({text: "DMB", key: "D2"}),
			          new sap.ui.core.ListItem({text: "DMC", key: "D3"}),
			          new sap.ui.core.ListItem({text: "DMX", key: "D4"}),
			          new sap.ui.core.ListItem({text: "MGO", key: "M"})],
			  });
		oComboBox.bindProperty("value", "dieselType");
		oTableDo.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Type"}), template: oComboBox,width: "70px"}));
//		oTableDo.addColumn(window.helper.createColumn1("type", "Type", "50px", "TF"));
		oTableDo.addColumn(window.helper.createColumn1("sea", "Sea", "50px", "TF"));
		oTableDo.addColumn(window.helper.createColumn1("idle", "Idle", "50px", "TF"));
		oTableDo.addColumn(window.helper.createColumn1("work", "Work", "50px", "TF"));
		//Create a model and bind the table rows to this model
		oTableDo.setModel(oModel);
		oTableDo.bindRows("/data3");

		//Initially sort the table
		oTableDo.sort(oTableDo.getColumns()[0]);

	/////////////////////////////////////////FO  ///////////////////////////////////////////////////////////////////
		//Create an instance of the table control
		var oTableFo = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
		//Define the columns and the control templates to be used
		oTableFo.addColumn(window.helper.createColumn1("vesselName", "VesselName", "50px", "TV"));
		var oComboBox = new sap.ui.commons.ComboBox("ComboBox3",{
			  tooltip: "Type",
			  items: [new sap.ui.core.ListItem({text: "30", key: "30"}),
			          new sap.ui.core.ListItem({text: "40", key: "40"}),
			          new sap.ui.core.ListItem({text: "60", key: "60"}),
			          new sap.ui.core.ListItem({text: "80", key: "80"}),
			          new sap.ui.core.ListItem({text: "120", key: "120"}),
			          new sap.ui.core.ListItem({text: "180", key: "180"}),
			          new sap.ui.core.ListItem({text: "280", key: "280"}),
			          new sap.ui.core.ListItem({text: "380", key: "380"})],
			  });
		oComboBox.bindProperty("value", "fuelType");
		oTableFo.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Type"}), template: oComboBox,width: "70px"}));
//		oTableFo.addColumn(window.helper.createColumn1("type", "Type", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn1("ballast", "Ballast", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn1("laden", "laden", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn1("idle", "Idle", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn1("work", "Work", "50px", "TF"));

		//Create a model and bind the table rows to this model
		oTableFo.setModel(oModel);
		oTableFo.bindRows("/data4");
		sap.ui.getCore().setModel(oModel, "modelVesselFO"); 

	/////////////////////////////////////////Panel & Matrix Vessel  ///////////////////////////////////////////////////////////////////
		//Create a panel instance
		var oPanel = new sap.ui.commons.Panel({
			id: "Panel1",
			width : "100%"
		});
		//Function to create the dialog
		function openDialog() {
		  var oDialog1 = new sap.ui.commons.Dialog();
		  oDialog1.setTitle("Vessel Capacity Chart");
		  oDialog1.addContent((new sap.ui.core.HTML({content:"<div id='ganttContainer' style='height:100%;width:100%;'></div>"})));
		  oDialog1.addButton(new sap.ui.commons.Button({text: "OK", press:function(){oDialog1.close();}}));
		  oDialog1.open();
		  window.chartVesselHelper.createGanttChart();
		};
		
		oPanel.setText("Selected Vessel Particular");
		var oButton3 = 		new sap.ui.commons.Button({
			text : "Vessel Capacity Graph",
			icon : "static/images/graph.jpg",
			lite : true,
			press : function() { openDialog(); }
		});
		oButton3.addStyleClass("myGraphBtn");
	// create a layout sap.ui.commons.layout.HAlign.Right
		//var oLayout = new sap.ui.commons.layout.MatrixLayoutCell()
		
		oPanel.addButton( oButton3);
		//Create a matrix layout with 5 columns
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			id:"Matrix1",
			layoutFixed : true,
			width : '100%',
			columns : 5
		});

		oMatrix.setWidths('25%','5%', '15%','25%', '30%');
		oMatrix.createRow(oTableVess,oRBG1, oTableMode, oTableDo, oTableFo);
		oPanel.addContent(oMatrix);
		return oPanel;
//		oPanel.placeAt("estViewID");
	}
//}