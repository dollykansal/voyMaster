var contract = function(){
	
//////////////////////////////////////Form : General Information for Voyage Contracts///////////////////////////////////////
	var oComboBox = new sap.ui.commons.ComboBox("cbAgtNomLoad",{
		  tooltip: "Agent Nomination",
		  items: [new sap.ui.core.ListItem({text: "Nominated by Charterer", key: "1"}),
		          new sap.ui.core.ListItem({text: "Nominated by Owner", key: "2"}),],
		  });
	var oComboBox1 = new sap.ui.commons.ComboBox("cbAgtNomDisch",{
		  tooltip: "Agent Nomination",
		  items: [new sap.ui.core.ListItem({text: "Nominated by Charterer", key: "1"}),
		          new sap.ui.core.ListItem({text: "Nominated by Owner", key: "2"}),],
		  });
	var oCbTxType = new sap.ui.commons.ComboBox("cbTnType",{
		  tooltip: "Transaction Type",
		  items: [new sap.ui.core.ListItem({text: "Buy", key: "1"}),
		          new sap.ui.core.ListItem({text: "Sell", key: "2"}),],
		  });
	var oCbDocType = new sap.ui.commons.ComboBox("cbDocType",{
		  tooltip: "Document Type",
		  items: [new sap.ui.core.ListItem({text: "Contract of Affreightment", key: "1"}),
		          new sap.ui.core.ListItem({text: "Voyage Charter", key: "2"}),
		          new sap.ui.core.ListItem({text: "Time Charter", key: "3"}),],
		  });
	
	var oCbPayOn = new sap.ui.commons.ComboBox("cbPayOn",{
		  tooltip: "Pay On",
		  items: [new sap.ui.core.ListItem({text: "Bill of Lading", key: "1"}),
		          ],
		  });
	var oCbStatus = new sap.ui.commons.ComboBox("cbStatus",{
		  tooltip: "Status",
		  items: [new sap.ui.core.ListItem({text: "Active", key: "1"}),
		          new sap.ui.core.ListItem({text: "Hold", key: "2"}),
		          ],
		  });
	var oLinkVessel = new sap.ui.commons.Link({
		text:"Select Vessel",
		press: function() {
			//oDialogLaytime.open();
			}
	});
	var oSimpleForm = new sap.ui.layout.form.SimpleForm(
			"sfContract",
			{
				maxContainerCols: 4,
				minWidth : 1024,
				editable: true,
				layout: "ResponsiveGridLayout",
				labelSpanL:6,
				labelSpanM:6,
				columnsL:4,
				columnsM:4,
				content:[
				         new sap.ui.core.Title({text:"General"}),
				         new sap.ui.commons.Label({text:"Contract No."}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Document Type", labelFor: oCbDocType}),
				         oCbDocType,
				         new sap.ui.commons.Label({text:"Transaction Type", labelFor: oCbTxType}),
				         oCbTxType,
				         new sap.ui.commons.Label({text:"Description"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Charterer"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"On Behalf of"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Vessel"}),
				         oLinkVessel,
				         //new sap.ui.commons.TextField({value:"Select Vessel", template: oLinkVessel}),

				         new sap.ui.core.Title({text:"Currency"}),
				         new sap.ui.commons.Label({text:"Hire Currency"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Exchange Rate"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:""}),
				         new sap.ui.commons.TextView({text:""}),
				         new sap.ui.commons.Label({text:"Status"}),
				         oCbStatus,
				         
						 new sap.ui.core.Title({text:"Payment Terms"}),
				         new sap.ui.commons.Label({text:"Zero Profit"}),
				         new sap.ui.commons.CheckBox({value:""}),
				         new sap.ui.commons.Label({text:"CP Date"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"CP Form"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Trade"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Trader"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Payment Terms"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),			
				         new sap.ui.commons.Label({text:"Partial Own. %"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),	
				        
						 new sap.ui.core.Title({text:"Laycan"}),
				         new sap.ui.commons.Label({text:"Laycan From"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Laycan To"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Nominate Laycan"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Preliminary Notice"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Agent Nomination,Load", labelFor: oComboBox}),
				         oComboBox,
				         new sap.ui.commons.Label({text:"Agent Nomination,Discharge", labelFor: oComboBox1}),
				         oComboBox1,
				         new sap.ui.commons.Label({text:"Pay On", labelFor: oCbPayOn}),
				         oCbPayOn
				         ]
			});
	
	//////////////////////////////////////////// Table for Laytime//////////////////////////////////////////////////
	var oTableLaytime = window.helper.createTable({
		//title: "Laytime",
		visibleRowCount: 3,
		firstVisibleRow: 2
	});
	
	oTableLaytime.addColumn(window.helper.createColumn("schType", "Schedule Type", "40px", "TF"));
	oTableLaytime.addColumn(window.helper.createColumn("actArrival", "Actual Arrival", "40px", "TF"));
	oTableLaytime.addColumn(window.helper.createColumn("timezone", "TimeZone", "40px", "TF"));
	oTableLaytime.addColumn(window.helper.createColumn("laycanFrom", "Laycan From", "40px", "TF"));
	
	oTableLaytime.addColumn(window.helper.createColumn("laycanTo", "Laycan To", "40px", "TF"));
	oTableLaytime.addColumn(window.helper.createColumn("fixed", "Fixed", "20px", "CH"));
	oTableLaytime.addColumn(window.helper.createColumn("duration", "Duration", "40px", "TF"));
	oTableLaytime.addColumn(window.helper.createColumn("durUom", "Duration UOM", "40px", "TF"));
	var aData = [
	         	{schType: "Delivery Cost", timezone:"UTC"},
	         	{schType: "Redelivery Cost", timezone:"UTC"},
	         ];
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aData});
	oTableLaytime.setModel(oModel);
	oTableLaytime.bindRows("/modelData");
	
	var oPanelLaytime = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanelLaytime.setText("Laycan");
	var oButtonLaytime = 		new sap.ui.commons.Button({
		text : "Laytime Calculation",
		//lite : true,
		style: sap.ui.commons.ButtonStyle.Emph,
		press: function() { }
	});
	oButtonLaytime.addStyleClass("myGraphBtn");
	oPanelLaytime.addButton( oButtonLaytime);
	oPanelLaytime.addContent(oTableLaytime);
	
//////////////////////////////////////////Table for Partner//////////////////////////////////////////////////
		//Create an instance of the table control
		var oTablePartner = window.helper.createTable({
			visibleRowCount: 2,
			toolbar: new sap.ui.commons.Toolbar({
			    items: [ 
			            new sap.ui.commons.Button({text: "Add",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
			            new sap.ui.commons.Button({text: "Edit",style: sap.ui.commons.ButtonStyle.Accept,  press: function(){} }),
			            new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
			            ]}),
		});

		oTablePartner.addColumn(window.helper.createColumn("functn", "Function", "40px", "TF"));
		oTablePartner.addColumn(window.helper.createColumn("partnerNo", "Partner No.", "40px", "TF"));
		oTablePartner.addColumn(window.helper.createColumn("partnerName", "Partner Name", "40px", "TF"));
		oTablePartner.addColumn(window.helper.createColumn("partnerCity", "Partner City", "40px", "TF"));
		oTablePartner.addColumn(window.helper.createColumn("partnerPos", "Partner Position", "40px", "TF"));
		oTablePartner.addColumn(window.helper.createColumn("partnerCty", "Partner Country", "40px", "TF"));
		oTablePartner.addColumn(window.helper.createColumn("bankKey", "Bank Key", "40px", "TF"));
		oTablePartner.addColumn(window.helper.createColumn("bankAcct", "Back Account", "40px", "TF"));
		
		var aDataPartner = [
			         	{ functn:"SP", partnerNo: "123", partnerName: "ADNOC Grp", partnerCity:"Abu Dhabi", 
			         		partnerPos: "SW1E 5JL", partnerCty:"", bankKey:""},
				         { functn:"BO", partnerNo: "345", partnerName: "IFCHOR FA", partnerCity:"LUASANNE", 
				         		partnerPos: "1003", partnerCty:"Switzerland", bankKey:""},
			         		
			         ];
			var oModelPartner = new sap.ui.model.json.JSONModel();
			oModelPartner.setData({modelData: aDataPartner});
			oTablePartner.setModel(oModelPartner);
			oTablePartner.bindRows("/modelData");
			
			
			var oPanelPartner = new sap.ui.commons.Panel({
				width : "100%"
			});
			oPanelPartner.setText("Partner");

			oPanelPartner.addContent(oTablePartner);
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Create a matrix layout
	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
		id:"MatrixContract",
		layoutFixed : true,
		width : '100%'
	});

	oMatrix.createRow(oSimpleForm);
	oMatrix.createRow(oPanelPartner);
	oMatrix.createRow(oPanelCargo);
	oMatrix.createRow(oPanelLaytime);
	
	return oMatrix;
    };

    