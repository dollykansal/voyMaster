var contractTC = function(){

//////////////////////////////////////Form : General Information for Voyage Contracts///////////////////////////////////////
	var oComboBox = new sap.ui.commons.ComboBox({
		tooltip: "Agent Nomination",
		items: [new sap.ui.core.ListItem({text: "Nominated by Charterer", key: "1"}),
		        new sap.ui.core.ListItem({text: "Nominated by Owner", key: "2"}),],
	});
	var oComboBox1 = new sap.ui.commons.ComboBox({
		tooltip: "Agent Nomination",
		items: [new sap.ui.core.ListItem({text: "Nominated by Charterer", key: "1"}),
		        new sap.ui.core.ListItem({text: "Nominated by Owner", key: "2"}),],
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

	var oCbPayOn = new sap.ui.commons.ComboBox({
		tooltip: "Pay On",
		items: [new sap.ui.core.ListItem({text: "Bill of Lading", key: "1"}),
		        ],
	});
	var oCbStatus = new sap.ui.commons.ComboBox({
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
			"sfContractTC",
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
////////////////////////////////////////////////////////delivery redelivery terms/////////////////////////

	var oGridDeliveryBunk = new sap.ui.layout.Grid({
		hSpacing: 0,
		vSpacing: 0, 	
		content: [
		          new sap.ui.commons.Label({
		        	  text: 'FO',
		        	  tooltip:'',
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M3 S12",
		        		  linebreakL: true,
		        		  linebreakM: true,
		        		  linebreakS: true
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	 // width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),

		          new sap.ui.commons.Label({
		        	  text: 'Price',
		        	  //width:"40px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M1 S12"
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	 // width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),
		          new sap.ui.commons.Label({
		        	  text: 'DO',
		        	  tooltip:'',
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M3 S12",
		        		  linebreakL: true,
		        		  linebreakM: true,
		        		  linebreakS: true
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	  //width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),

		          new sap.ui.commons.Label({
		        	  text: 'Price',
		        	  //width:"40px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M1 S12"
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	 // width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),
		          new sap.ui.commons.Label({
		        	  text: 'LSFO',
		        	  tooltip:'',
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M3 S12",
		        		  linebreakL: true,
		        		  linebreakM: true,
		        		  linebreakS: true
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	  //width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),

		          new sap.ui.commons.Label({
		        	  text: 'Price',
		        	 // width:"40px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M1 S12"
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	  //width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),
		          new sap.ui.commons.Label({
		        	  text: 'LSDO',
		        	  tooltip:'',
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M3 S12",
		        		  linebreakL: true,
		        		  linebreakM: true,
		        		  linebreakS: true
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	 // width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),

		          new sap.ui.commons.Label({
		        	  text: 'Price',
		        	  //width:"40px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M1 S12"
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	 // width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),
		          ]
	});
	var oGridRedeliveryBunk = new sap.ui.layout.Grid({
		hSpacing: 0,
		vSpacing: 0, 	
		content: [
		          new sap.ui.commons.Label({
		        	  text: 'FO',
		        	  tooltip:'',
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M3 S12",
		        		  linebreakL: true,
		        		  linebreakM: true,
		        		  linebreakS: true
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	//  width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),

		          new sap.ui.commons.Label({
		        	  text: 'Price',
		        	  //width:"40px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M1 S12"
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	 // width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),
		          new sap.ui.commons.Label({
		        	  text: 'DO',
		        	  tooltip:'',
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M3 S12",
		        		  linebreakL: true,
		        		  linebreakM: true,
		        		  linebreakS: true
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	 // width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),

		          new sap.ui.commons.Label({
		        	  text: 'Price',
		        	 // width:"40px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M1 S12"
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	 // width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),

		          new sap.ui.commons.Label({
		        	  text: 'LSFO',
		        	  tooltip:'',
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M3 S12",
		        		  linebreakL: true,
		        		  linebreakM: true,
		        		  linebreakS: true
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	 // width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),

		          new sap.ui.commons.Label({
		        	  text: 'Price',
		        	 // width:"40px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M1 S12"
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	 // width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),
		          new sap.ui.commons.Label({
		        	  text: 'LSDO',
		        	  tooltip:'',
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M3 S12",
		        		  linebreakL: true,
		        		  linebreakM: true,
		        		  linebreakS: true
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	  //width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),

		          new sap.ui.commons.Label({
		        	  text: 'Price',
		        	 // width:"40px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L2 M1 S12"
		        	  })
		          }),
		          new sap.ui.commons.TextField({
		        	//  width: "60px",
		        	  layoutData : new sap.ui.layout.GridData({
		        		  span: "L3 M2 S12"
		        	  })
		          }),
		          ]
	});
	//arranging above grid in form
	var oSFDelivery = new sap.ui.layout.form.SimpleForm(
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
				         new sap.ui.core.Title({text:"Delivery Terms"}),
				         new sap.ui.commons.Label({text:"Delivery Port"}),
				         new sap.ui.commons.TextField({value:""}),
				         new sap.ui.commons.Label({text:"Terms"}),
				         new sap.ui.commons.TextField({value:""}),
				         new sap.ui.commons.Label({text:"Delivery Range"}),
				         new sap.ui.commons.TextField({value:""}),
				         new sap.ui.commons.Label({text:"Delivery Date", 
				        	 tooltip:"Delivery Range( if applicable)between two ports (e.g. Oslo - Bergen), worldwide, etc.'"}),
				         new sap.ui.commons.TextField({value:""}),
				         
				         new sap.ui.core.Title({text:"Bunkers on Delivery"}),
				         oGridDeliveryBunk,
				         new sap.ui.core.Title({text:"Redelivery Terms"}),
				         new sap.ui.commons.Label({text:"Redelivery Port"}),
				         new sap.ui.commons.TextField({value:""}),
				         new sap.ui.commons.Label({text:"Terms"}),
				         new sap.ui.commons.TextField({value:""}),
				         new sap.ui.commons.Label({text:"Redelivery Range"}),
				         new sap.ui.commons.TextField({value:""}),
				         new sap.ui.commons.Label({text:"Redelivery Date", 
				        	 tooltip:"Redelivery Range( if applicable)between two ports (e.g. Oslo - Bergen), worldwide, etc.'"}),
				         new sap.ui.commons.TextField({value:""}),
				         
				         new sap.ui.core.Title({text:"Bunkers on Redelivery"}),
				         oGridRedeliveryBunk,
				         ]
			});
	//////////////////////////////////////////// Table for Laytime//////////////////////////////////////////////////
	var oTableLaycan = window.helper.createTable({
		//title: "Laytime",
		visibleRowCount: 2,
		firstVisibleRow: 2
	});
	oTableLaycan.addColumn(window.helper.createColumn("schType", "Schedule Type", "40px", "TV"));
	oTableLaycan.addColumn(window.helper.createColumn("actArrival", "Actual Arrival", "40px", "TV"));
	oTableLaycan.addColumn(window.helper.createColumn("laycanFrom", "Laycan From", "40px", "TF"));
	oTableLaycan.addColumn(window.helper.createColumn("laycanTo", "Laycan To", "40px", "TF"));

	oTableLaycan.addColumn(window.helper.createColumn("fixed", "Fixed", "40px", "CH"));
	oTableLaycan.addColumn(window.helper.createColumn("duration", "Duration", "40px", "TV"));
	oTableLaycan.addColumn(window.helper.createColumn("durationUom", "Duration UOM", "40px", "TV"));
	var aData = [
	             {schType: "Delivery Cost"},
	             {schType: "Redelivery Cost"}
	             ];
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aData});
	oTableLaycan.setModel(oModel);
	oTableLaycan.bindRows("/modelData");
	sap.ui.getCore().setModel(oModel, "laytimeContract"); 
	var oPanelLaytime = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanelLaytime.setText("Laytime");
	var oButtonLaytime = 		new sap.ui.commons.Button({
		text : "Laytime Calculation",
		//lite : true,
		style: sap.ui.commons.ButtonStyle.Emph,
		press: function() { }
	});
	oButtonLaytime.addStyleClass("myGraphBtn");
	oPanelLaytime.addButton( oButtonLaytime);
	oPanelLaytime.addContent(oTableLaycan);

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
		id:"MatrixContractTC",
		layoutFixed : true,
		width : '100%'
	});

	oMatrix.createRow(oSimpleForm);

	oMatrix.createRow(oSFDelivery);
	oMatrix.createRow(oPanelLaytime);
	oMatrix.createRow(oPanelPartner);
	return oMatrix;
};

