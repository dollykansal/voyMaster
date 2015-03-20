var TreeTableHelper = function(){
		var oPanelTree = new sap.ui.commons.Panel({
			width : "100%",
			height: "100%"
		});
		oPanelTree.setText("Port Rotation");
		 

		//Define some sample data 
		var oData = {
				root:{
					name: "root",
					description: "root description",
					checked: false,
					0: {
						sNo: "1",
		    			type: "Ballast",
		    			coord: "Columbia (US) [-05:00]",
		    			distEca:"",
		    			wf:"",
		    			spd:"",
		    			sea:"",
		    			ldrate:"",
		    			portiw:"",
		    			dem:"",
		    			des:"",
		    			portChg:"",
		    			arrival:"",
		    			departure:"1/27/2015 12:13",
		    			checked:true
						
					},
					1:{
						sNo: "1",
		    			type: "Loading",
		    			coord: "Dubai",
		    			distEca:"800",
		    			wf:"0.0%",
		    			spd:"13.00",
		    			sea:"26.56",
		    			ldrate:"10.00",
		    			portiw:"4",
		    			dem:"",
		    			des:"",
		    			portChg:"",
		    			arrival:"1/28/2015 10:13",
		    			departure:"1/28/2015 12:13",
		    			checked: true,
						0: {
							sNo: "1",
							account:"ABC",
							cargo:"wheat",
							qty:"100",
							frt:"900",
		        			checked: true
						},
						1: {
							sNo: "2",
							account:"ABC",
							cargo:"rice",
							qty:"100",
							frt:"900",
		        			checked: true
						}
					},
					2:{
						sNo: "2",
		    			type: "Unloading",
		    			coord: "Chennai",
		    			distEca:"900/101",
		    			wf:"0.0%",
		    			spd:"13.00",
		    			sea:"30",
		    			ldrate:"10.00",
		    			portiw:"1/4",
		    			dem:"",
		    			des:"",
		    			portChg:"",
		    			arrival:"1/31/2015 10:13",
		    			departure:"1/31/2015 12:13",
		    			checked: true,
						0: {
							sNo: "1",
							account:"ABC",
							cargo:"wheat",
							qty:"100",
							frt:"900",
		        			checked: true
						},
						1: {
							sNo: "2",
							account:"ABC",
							cargo:"rice",
							qty:"100",
							frt:"900",
		        			checked: true
						}
					},
					
				}
		};

	/*	for (var i = 0; i < 20; i++) {
			oData["root"][2][i] = {
				name: "subitem3-" + i,
					description: "subitem3-" + i + " description",
					checked: false
			};
		}*/

		//Create an instance of the table control
		var oTreeTable = new sap.ui.table.TreeTable({
			visibleRowCount: 3,
			firstVisibleRow: 7,
			columns: [
				new sap.ui.table.Column({label: "SNo", template: new sap.ui.commons.TextField().bindProperty("value", "sNo")}),
				new sap.ui.table.Column({label: "Type", template: new sap.ui.commons.TextField().bindProperty("value","type")}),
				new sap.ui.table.Column({label: "Account", template: new sap.ui.commons.TextField().bindProperty("value","account")}),
				new sap.ui.table.Column({label: "Cargo", template: new sap.ui.commons.TextField().bindProperty("value", "cargo")}),
				new sap.ui.table.Column({label: "Quantity", template: new sap.ui.commons.TextField().bindProperty("value","qty")}),
				new sap.ui.table.Column({label: "Frt", template: new sap.ui.commons.TextField().bindProperty("value","frt")}),
				new sap.ui.table.Column({label: "Port Name or Coordinates", template: new sap.ui.commons.TextField().bindProperty("value","coord")}),
				new sap.ui.table.Column({label: "Distance/(S)ECA", template: new sap.ui.commons.TextField().bindProperty("value", "distEca")}),
				new sap.ui.table.Column({label: "W.F", template: new sap.ui.commons.TextField().bindProperty("value", "wf")}),
				new sap.ui.table.Column({label: "Spd", template: new sap.ui.commons.TextField().bindProperty("value","spd")}),
				new sap.ui.table.Column({label: "Sea", template: new sap.ui.commons.TextField().bindProperty("value","sea")}),
				new sap.ui.table.Column({label:"L/D Rate", template: new sap.ui.commons.TextField().bindProperty("value","ldrate")}),
				new sap.ui.table.Column({label: "Port(I/W)", template: new sap.ui.commons.TextField().bindProperty("value","portiw")}),
				new sap.ui.table.Column({label: "Dem", template: new sap.ui.commons.TextField().bindProperty("value","dem")}),
				new sap.ui.table.Column({label: "Des", template: new sap.ui.commons.TextField().bindProperty("value","des")}),
				new sap.ui.table.Column({label: "Port charge", template: new sap.ui.commons.TextField().bindProperty("value","portChg")}),
				new sap.ui.table.Column({label: "Arrival", template: new sap.ui.commons.TextField().bindProperty("value","arrival")}),
				new sap.ui.table.Column({label: "Departure", template: new sap.ui.commons.TextField().bindProperty("value","departure")})
			],
			selectionMode: sap.ui.table.SelectionMode.Single,
			enableColumnReordering: true,
			expandFirstLevel: false
	/*		toggleOpenState: function(oEvent) {
				var iRowIndex = oEvent.getParameter("rowIndex");
				var oRowContext = oEvent.getParameter("rowContext");
				var bExpanded = oEvent.getParameter("expanded");
			}*/
		});

		//Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(oData);
		oTreeTable.setModel(oModel);
		oTreeTable.bindRows("/root");

		//Button to demonstrate collapse and expand feature
		var oBtn = new sap.ui.commons.Button({text: "Toggle",
			press: function() {
				var iSelectedIndex = oTreeTable.getSelectedIndex();
				if (iSelectedIndex > -1) {
					if (oTreeTable.isExpanded(iSelectedIndex)) {
						oTreeTable.collapse(iSelectedIndex);
					} else {
						oTreeTable.expand(iSelectedIndex);
					}
				}
			}
		});
		oTreeTable.setToolbar(new sap.ui.commons.Toolbar({items: [oBtn]}));
		oPanelTree.addContent(oTreeTable);
		return oPanelTree;
		//oPanelTree.placeAt("treeTable");
	}
