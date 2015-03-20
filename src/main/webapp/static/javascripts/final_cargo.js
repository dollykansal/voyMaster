var Cargo = function(oController){
/////////////////////////////////////////second table - cargo  ///////////////////////////////////////////////////////////////////
	var aDataCargo = [
	                  // {sNo: "1", account: "Seafuture", cargoNam: "Hot Coil", qty:"32,000.00", term: "FIO"}
	                  ];
	var oModelCargo = new sap.ui.model.json.JSONModel();
	oModelCargo.setData({modelData: aDataCargo});
	sap.ui.getCore().setModel(oModelCargo,"cargo")
	//Create a panel instance
	var oPanelCargo = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanelCargo.setText("Cargo");
	
	//Function to create the dialog for chart
	function openDialog() {
	  var oDialog1 = new sap.ui.commons.Dialog();
	  oDialog1.setTitle("Cargo Chart");
	  oDialog1.addContent((new sap.ui.core.HTML({content:"<div id='chartContainer' style='height:100%;width:100%;'></div>"})));
	  oDialog1.addButton(new sap.ui.commons.Button({text: "OK", press:function(){oDialog1.close();}}));
	  oDialog1.open();
	  window.chartCargoHelper.createGanttChart();
	};
	
	var oButton2 = 		new sap.ui.commons.Button({
		text : "Cargo Status Graph",
		icon : "static/images/graph.jpg",
		lite : true,
		press : function() { openDialog(); }
	});
	oButton2.addStyleClass("myGraphBtn");

	oPanelCargo.addButton( oButton2);
	var oButtonFS = 		new sap.ui.commons.Button({
		text : "Frt. Sim.",
		style: sap.ui.commons.ButtonStyle.Emph,
		press: function() { oDialogFragment.open(); }
	});
	oButtonFS.addStyleClass("myGraphBtn");
	oPanelCargo.addButton( oButtonFS);

	//Function to create the dialog with fragments
	var oDialogFragment = sap.ui.jsfragment("frtsim.fragments.JSFragmentDialog");

	//Create an instance of the table control
	var oTableCargo = window.helper.createTable({
		id:"cargo",
		//title: "Cargo",
		visibleRowCount: 3,
//		firstVisibleRow: 1,
		toolbar: new sap.ui.commons.Toolbar({
			items: [ 
			      //  new sap.ui.commons.Button({text: "Clear", press: function() { alert("Clear Button pressed!"); }}),

			        new sap.ui.commons.Button({text: "Insert",style: sap.ui.commons.ButtonStyle.Accept,  press: function() { 
			        	var idx = oTableCargo.getSelectedIndex(); 
			        	if (idx != -1) {
			        		var modelData = oModelCargo.getData();  
			        		var rowCount   = modelData.modelData.length;   
			        		rowCount = rowCount + 1;  
			        		var temp = aDataCargo[idx]; 
			        		aDataCargo[idx] = {sNo: rowCount};
			        		for (i = idx+1; i <= rowCount-1; i++) {
			        			var temp1 = aDataCargo[i];
			        			aDataCargo[i] = temp; 
			        			temp = temp1;
			        		};
			        		oModelCargo.setData({modelData: aDataCargo}); // Set Model  
			        		oTableCargo.visibleRowCount=oTableCargo.visibleRowCount+1;
			        		oModelCargo.refresh();
			        	} else {
			        		alert("Please select a row!");
			        	} 
			        }}) , 
			        new sap.ui.commons.Button({text: "Append",style: sap.ui.commons.ButtonStyle.Accept, press: function() { 
			        	var modelData = oModelCargo.getData();  
			        	var rowCount   = modelData.modelData.length;    
			        	rowCount = rowCount + 1;  
			        	aDataCargo.push({sNo: rowCount,}); // Push data to Model  
			        	oModelCargo.setData({modelData: aDataCargo}); // Set Model  
			        	oTableCargo.visibleRowCount=oTableCargo.visibleRowCount+1;
			        	oModelCargo.refresh();
			        }}),
			        new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function() {
			        	var idx = oTableCargo.getSelectedIndex();
			        	if (idx != -1) {
			        		var m = oTableCargo.getModel();
			        		var data = m.getData()['modelData'];
			        		var removed = data.splice(idx, 1);
			        		m.setData({modelData: data});
			        	} else { alert("Please select a row!");
			        	}
			        }}) ,  
			        new sap.ui.commons.Button({text: "Move up", press: function() 
			        	{ 
			        	var idx = oTableCargo.getSelectedIndex();
			        	if (idx != 0) {
//			        		var data = oModelCargo.getData()['modelData']; 
			        		var temp = aDataCargo[idx-1]; //2
			        		aDataCargo[idx-1] = aDataCargo[idx]; //3
			        		aDataCargo[idx]= temp; //2
				        	oModelCargo.setData({modelData: aDataCargo}); // Set Model
				        	oModelCargo.refresh();
			        	} else {
			        		alert("Please select a row!");
			        	} 

			        	}}),
			        	new sap.ui.commons.Button({text: "Move down", press: function() {
			        		var idx = oTableCargo.getSelectedIndex();

			        		var modelData = oModelCargo.getData();  
			        		var rowCount   = modelData.modelData.length;    
			        		if (idx != -1 && !(idx>=rowCount-1)) {
			        			var m = oTableCargo.getModel();
			        			var data = m.getData()['modelData'];
			        			var temp = data[idx+1]; //2
			        			data[idx+1] = data[idx]; //3
			        			data[idx]= temp; //2
			        			m.refresh();
			        			m.setData({modelData: data});
			        		} else {
			        			alert("Please select a row!");
			        		}

			        	} }),
			        	// new sap.ui.commons.Button({text: "Frt. Sim.",style: sap.ui.commons.ButtonStyle.Emph, press: function() { oDialogFragment.open(); }}) //calling fragment
			        	//new sap.ui.commons.Button({text: "Frt. Sim.", press: function() { openFrtSim(); }})
			        	]}),
	});

	var oTableCargoLoadPort = new sap.ui.commons.TextField({   
		id: "oTableCargoLoadPort",
		change : function(oEvent){
			var changedValue = this.getValue();
			var id = this.getId();
			var idArr = id.split("-");
			var rowIndex = idArr[2].split("row")[1];
			var model = oTableCargo.getModel();
			var data = oTableCargo.getModel().getData()['modelData'];
			data[rowIndex]['loadPort']=changedValue;
			model.setData({modelData: data});
			model.refresh();
			if(changedValue!=""){
				var portModelData = sap.ui.getCore().getModel("port").getData()['modelData']; 
				var rowObj = oController.checkIfRowExist(portModelData,rowIndex,"Loading");
				var rowCount   = portModelData.length;   //4 
				if(rowObj["result"]){
					var prod = rowObj["product"];
					prod['coord'] = changedValue;
					portModelData[rowObj["index"]] = prod;
				}else{
					portModelData[rowCount] = {sNo:rowCount+1,cType:"Loading", coord: changedValue,cargoRow:rowIndex};
				}
				sap.ui.getCore().getModel("port").setData("modelData",portModelData);
//				portModel.setData({modelData: portModelData}); // Set Model  
//				window.oPortTable.setVisibleRowCount(window.oPortTable.getVisibleRowCount()+1);
//				portModel.refresh();
			}
		}
	});
	oTableCargoLoadPort.bindProperty("value", "loadPort");
	var oTableCargoDisPort = new sap.ui.commons.TextField({   
		id: "oTableCargoDisPort",
		change : function(oEvent){
			var changedValue = this.getValue();
			var id = this.getId();
			var idArr = id.split("-");
			var rowIndex = idArr[2].split("row")[1];
			var model = oTableCargo.getModel();
			var data = oTableCargo.getModel().getData()['modelData'];
			data[rowIndex]['disPort']=changedValue;
			model.setData({modelData: data});
			model.refresh();
			if(changedValue!=""){
				var portModelData = sap.ui.getCore().getModel("port").getData()['modelData'];
				var rowObj = oController.checkIfRowExist(portModelData,rowIndex,"Discharging");
				var rowCount   = portModelData.length;   //4 
				if(rowObj["result"]){
					var prod = rowObj["product"];
					prod['coord'] = changedValue;
					portModelData[rowObj["index"]] = prod;
				}else{
					portModelData[rowCount] = {sNo:rowCount+1,cType:"Discharging", coord: changedValue,cargoRow:rowIndex};
				}
				sap.ui.getCore().getModel("port").setData("modelData",portModelData);
//				portModel.setData({modelData: portModelData}); // Set Model  
//				window.oPortTable.setVisibleRowCount(window.oPortTable.getVisibleRowCount()+1);
//				portModel.refresh();
			}
		}
	});
	oTableCargoDisPort.bindProperty("value", "distPort");
	var oCarTabqty = new sap.ui.commons.TextField({   
		id: "oCarTabqty",
		change : function(oEvent){
			var changedValue = this.getValue();
			var id = this.getId();
			var idArr = id.split("-");
			var rowIndex = idArr[2].split("row")[1];
			var model = oTableCargo.getModel();
			var data = oTableCargo.getModel().getData()['modelData'];
			data[rowIndex]['qty']=changedValue;
			if(data[rowIndex]['qty']!=undefined&&data[rowIndex]['frt']!=undefined){
				var rev = (data[rowIndex]['qty'] * data[rowIndex]['frt']);
				data[rowIndex]['rev'] = rev;
			}
			
			model.setData({modelData: data});
			model.refresh();
			
			oController.calTotalRev();
		}
	});
	oCarTabqty.bindProperty("value", "qty");

	var oCarTabfrt = new sap.ui.commons.TextField({   
		id: "oCarTabfrt",
		change : function(oEvent){
			var changedValue = this.getValue();
			var id = this.getId();
			var idArr = id.split("-");
			var rowIndex = idArr[2].split("row")[1];
			var model = oTableCargo.getModel();
			var data = oTableCargo.getModel().getData()['modelData'];
			data[rowIndex]['frt']=changedValue;
			if(data[rowIndex]['qty']!=undefined&&data[rowIndex]['frt']!=undefined){
				var rev = (data[rowIndex]['qty'] * data[rowIndex]['frt']);
				data[rowIndex]['rev'] = rev;
			}
			model.setData({modelData: data});
			model.refresh();
			
			oController.calTotalRev();
		}
	});
	oCarTabfrt.bindProperty("value", "frt");
	//Define the columns and the control templates to be used
	oTableCargo.addColumn(window.helper.createColumn("sNo", "SNo", "20px", "TV"));
	oTableCargo.addColumn(window.helper.createColumn("account", "Account", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("cargoNam", "Cargo Name", "40px", "TF"));

	oTableCargo.addColumn(new sap.ui.table.Column("loadPort",{
		label: new sap.ui.commons.Label({text: "Loading Port"}), 
		template: oTableCargoLoadPort,
		width: "40px" }));
	oTableCargo.addColumn(new sap.ui.table.Column("disPort",{
		label: new sap.ui.commons.Label({text: "Discharging Port"}), 
		template: oTableCargoDisPort,
		width: "40px" }));

//	oTableCargo.addColumn(window.helper.createColumn("loadPort", "Loading Port", "40px", "TF"));
//	oTableCargo.addColumn(window.helper.createColumn("disPort", "Discharging Port", "40px", "TF"));
	oTableCargo.addColumn(new sap.ui.table.Column("qty",{
		label: new sap.ui.commons.Label({text: "Quantity"}), 
		template: oCarTabqty,
		width: "40px" }));

	oTableCargo.addColumn(new sap.ui.table.Column("frt",{
		label: new sap.ui.commons.Label({text: "Frt"}), 
		template: oCarTabfrt,
		width: "40px" }));
	//oTableCargo.addColumn(window.helper.createColumn("qty", "Quantity", "40px", "TF"));
	//oTableCargo.addColumn(window.helper.createColumn("frt", "Frt", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("term", "Term", "40px", "TF"));
	var oCarTabrev = new sap.ui.commons.TextField({   
		id: "oCarTabrev",
		change : function(oEvent){
			var changedValue = this.getValue();
			var id = this.getId();
			var idArr = id.split("-");
			var rowIndex = idArr[2].split("row")[1];
			var model = oTableCargo.getModel();
			var data = oTableCargo.getModel().getData()['modelData'];
			data[rowIndex]['rev']=changedValue;
			if(data[rowIndex]['qty']!=undefined&&data[rowIndex]['rev']!=undefined){
				var frt = (data[rowIndex]['rev'] / data[rowIndex]['qty']);
				data[rowIndex]['frt'] = Math.round(frt * 100) / 100;
			}
			model.setData({modelData: data});
			model.refresh();
			
			oController.calTotalRev();
		}
	});
	oCarTabrev.bindProperty("value", "rev");
	oTableCargo.addColumn(new sap.ui.table.Column("rev",{
		label: new sap.ui.commons.Label({text: "Revenue"}), 
		template: oCarTabrev,
		width: "40px" }));
	//oTableCargo.addColumn(window.helper.createColumn("rev", "Revenue", "40px", "TF"));

	var oCarTabAcomm = new sap.ui.commons.TextField({   
		id: "oCarTabAcomm",
		change : function(oEvent){
/*			var changedValue = this.getValue();
			var id = this.getId();
			var idArr = id.split("-");
			var rowIndex = idArr[2].split("row")[1];
			var model = oTableCargo.getModel();
			var data = oTableCargo.getModel().getData()['modelData'];
			data[rowIndex]['addComm']=changedValue;*/
			oController.calTotalRev();
		}
	});
	oCarTabAcomm.bindProperty("value", "addComm");
	oTableCargo.addColumn(new sap.ui.table.Column("addComm",{
		label: new sap.ui.commons.Label({text: "A.Comm"}), 
		template: oCarTabAcomm,
		width: "40px" }));

	//oTableCargo.addColumn(window.helper.createColumn("addComm", "A.Comm", "40px", "TF"));
	//oTableCargo.addColumn(window.helper.createColumn("brkg", "Brkg", "40px", "TF"));
	var oCarTabBrkg = new sap.ui.commons.TextField({   
		id: "oCarTabBrkg",
		change : function(oEvent){
/*			var changedValue = this.getValue();
			var id = this.getId();
			var idArr = id.split("-");
			var rowIndex = idArr[2].split("row")[1];
			var model = oTableCargo.getModel();
			var data = oTableCargo.getModel().getData()['modelData'];
			data[rowIndex]['brkge']=changedValue;
			if(data[rowIndex]['brkge']!=undefined&&data[rowIndex]['rev']!=undefined){
				var brkge = (data[rowIndex]['brkge'] * data[rowIndex]['rev'])/100;
			}
			oController.onCargoChange(null, brkge,null,null,null);*/
			
			oController.calTotalRev();
		}
	});
	oCarTabBrkg.bindProperty("value", "brkge");
	oTableCargo.addColumn(new sap.ui.table.Column("brkge",{
		label: new sap.ui.commons.Label({text: "Brkg"}), 
		template: oCarTabBrkg,
		width: "40px" }));

	//oTableCargo.addColumn(window.helper.createColumn("frtTax", "Frt Tax", "40px", "TF"));
	var oCarTabFrtTax = new sap.ui.commons.TextField({   
		id: "oCarTabFrtTax",
		change : function(oEvent){
/*			var changedValue = this.getValue();
			var id = this.getId();
			var idArr = id.split("-");
			var rowIndex = idArr[2].split("row")[1];
			var model = oTableCargo.getModel();
			var data = oTableCargo.getModel().getData()['modelData'];
			data[rowIndex]['frtTax']=changedValue;
			if(data[rowIndex]['frtTax']!=undefined&&data[rowIndex]['rev']!=undefined){
				var frtTax = (data[rowIndex]['frtTax'] * data[rowIndex]['rev'])/100;
			}
			oController.onCargoChange(null,null, frtTax,null,null);*/
			
			oController.calTotalRev();
		}
	});
	oCarTabFrtTax.bindProperty("value", "frtTax");
	oTableCargo.addColumn(new sap.ui.table.Column("frtTax",{
		label: new sap.ui.commons.Label({text: "Frt Tax"}), 
		template: oCarTabFrtTax,
		width: "40px" }));

	//oTableCargo.addColumn(window.helper.createColumn("linTerm", "Liner Term", "40px", "TF"));

	var oCarTabLinTerm = new sap.ui.commons.TextField({   
		id: "oCarTabLinTerm",
		change : function(oEvent){
			oController.calTotalLinTerm();
		}
	});
	oCarTabLinTerm.bindProperty("value", "linTerm");
	oTableCargo.addColumn(new sap.ui.table.Column("linTerm",{
		label: new sap.ui.commons.Label({text: "Liner Term"}), 
		template: oCarTabLinTerm,
		width: "40px" }));


	//Create a model and bind the table rows to this model
	oTableCargo.setModel(oModelCargo);
	oTableCargo.bindRows("/modelData");


	//Initially sort the table
	//oTableCargo.sort(oTableCargo.getColumns()[0]);
	oTableCargo.onAfterRendering = function() {
		sap.ui.table.Table.prototype.onAfterRendering.apply(this, arguments);
		$('#cargo').droppable({
			drop:function(event, ui){
				var text1 = null;
				var text2 = null;
				var text3 = null;
				var text4 = null;

				if(ui.helper.context.children[1]==undefined){
					var id = ui.helper.context.id;
					$("#"+id+"-hdr").trigger("click");
					setTimeout(function(){
						text1 = $($("#"+id+"-cont span")[0]).text();
						text2 = $($("#"+id+"-cont span")[1]).text();
						text3 = $($("#"+id+"-cont span")[2]).text();
						text4 = $($("#"+id+"-cont span")[3]).text();
						var modelData = oModelCargo.getData();  
						var rowCount   = modelData.modelData.length;
						aDataCargo.push({sNo:rowCount+1,account: text1,cargoNam:text2,loadPort:text3,distPort:text4}); // Push data to Model  
						oModelCargo.setData({modelData: aDataCargo}); // Set Model  
						oModelCargo.refresh();

						var portModelData = sap.ui.getCore().getModel("port").getData()['modelData'];
						var rowObj = oController.checkIfRowExist(portModelData,rowCount,"Loading");
						var rowCount1   = portModelData.length;   //4 
						if(rowObj["result"]){
							var prod = rowObj["product"];
							prod['coord'] = text3;
							portModelData[rowObj["index"]] = prod;
						}else{
							portModelData[rowCount1] = {sNo:rowCount1+1,cType:"Loading", coord: text3,cargoRow:rowCount};
						}
						sap.ui.getCore().getModel("port").setData("modelData",portModelData);
//						portModel.setData({modelData: portModelData}); // Set Model  
//						window.oPortTable.setVisibleRowCount(window.oPortTable.getVisibleRowCount()+1);
//						portModel.refresh();

						var portModelData = sap.ui.getCore().getModel("port").getData()['modelData'];
						var rowObj = oController.checkIfRowExist(portModelData,rowCount,"Discharging");
						var rowCount1   = portModelData.length;   //4 
						if(rowObj["result"]){
							var prod = rowObj["product"];
							prod['coord'] = text4;
							portModelData[rowObj["index"]] = prod;
						}else{
							portModelData[rowCount1] = {sNo:rowCount1+1,cType:"Discharging", coord: text4,cargoRow:rowCount};
						}
						sap.ui.getCore().getModel("port").setData("modelData",portModelData);
//						portModel.setData({modelData: portModelData}); // Set Model  
//						portModel.refresh();
					},100);
				}else{
					var children = ui.helper.context.children[1].children;
					text1 = $(children[0]).text();
					text2 = $(children[1]).text();
					text3 = $(children[2]).text();
					text4 = $(children[3]).text();

					var modelData = oModelCargo.getData();  
					var rowCount   = modelData.modelData.length;
					aDataCargo.push({sNo:rowCount+1,account: text1,cargoNam:text2,loadPort:text3,distPort:text4}); // Push data to Model  
					oModelCargo.setData({modelData: aDataCargo}); // Set Model  
					oModelCargo.refresh();

					var portModelData = sap.ui.getCore().getModel("port").getData()['modelData']; 
					var rowObj = oController.checkIfRowExist(portModelData,rowCount,"Loading");
					var rowCount1   = portModelData.length;   //4 
					if(rowObj["result"]){
						var prod = rowObj["product"];
						prod['coord'] = text3;
						portModelData[rowObj["index"]] = prod;
					}else{
						portModelData[rowCount1] = {sNo:rowCount1+1,cType:"Loading", coord: text3,cargoRow:rowCount};
					}
					sap.ui.getCore().getModel("port").setData("modelData",portModelData);

					var portModelData = sap.ui.getCore().getModel("port").getData()['modelData'];  
					var rowObj = oController.checkIfRowExist(portModelData,rowCount,"Discharging");
					var rowCount1   = portModelData.length;   //4 
					if(rowObj["result"]){
						var prod = rowObj["product"];
						prod['coord'] = text4;
						portModelData[rowObj["index"]] = prod;
					}else{
						portModelData[rowCount1] = {sNo:rowCount1+1,cType:"Discharging", coord: text4,cargoRow:rowCount};
					}
					sap.ui.getCore().getModel("port").setData("modelData",portModelData);
				}
			}
		});
	};
	oPanelCargo.addContent(oTableCargo);
	return oPanelCargo;
};