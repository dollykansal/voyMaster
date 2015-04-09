var contractTC = function(){

//////////////////////////////////////Form : General Information for Voyage Contracts///////////////////////////////////////

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
		        new sap.ui.core.ListItem({text: "Outturn", key: "2"})],
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
	var oCbTCType = new sap.ui.commons.ComboBox({
		tooltip: "TC Type",
		items: [new sap.ui.core.ListItem({text: "Long Term", key: "L"}),
		        new sap.ui.core.ListItem({text: "Short Term", key: "S"}),
		        new sap.ui.core.ListItem({text: "Medium Term", key: "S"}),
		        new sap.ui.core.ListItem({text: "Trip", key: "T"}),
		        ],
	});
	var oCbCPForm = new sap.ui.commons.ComboBox({
		tooltip: "CP Form",
		items: [new sap.ui.core.ListItem({text: "Shell Time", key: "1"}),
		        new sap.ui.core.ListItem({text: "New form", key: "2"}),
		        ],
	});
	var oCbPayTerms = new sap.ui.commons.ComboBox({
		tooltip: "Payment Terms",
		items: [new sap.ui.core.ListItem({text: "Freight Payable immediately due net", key: "1"}),
		        new sap.ui.core.ListItem({text: "Freight 90% due imm,10% due 30 days", key: "2"}),
		        ],
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
/*				         new sap.ui.commons.Label({text:"Contract No."}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Document Type", labelFor: oCbDocType}),
				         oCbDocType,
				         new sap.ui.commons.Label({text:"Transaction Type", labelFor: oCbTxType}),
				         oCbTxType,*/
				         new sap.ui.commons.Label({text:"Company", tooltip:"legal entity name entering into TC contract (i.e. signs the contract)"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Charterer(BP)", tooltip:"business partner representing the Company"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"TC Benchmark", tooltip:"index against which voyages performed under a TC will be measured (or benchmarked)"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"TC Benchmark %", tooltip:"TC benchmark percentage"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Owner", tooltip:"Name of the vessel ownwer"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Guarantor", tooltip:"business partner/s that sets a guarantee for the TC"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Vessel"}),
				         oLinkVessel,
				         //new sap.ui.commons.TextField({value:"Select Vessel", template: oLinkVessel}),

				         new sap.ui.core.Title({text:"Currency"}),
				         new sap.ui.commons.Label({text:"Hire Currency",tooltip:"currency to be used for the TC"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Address Comm.",tooltip:"address commission"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Ballast Bonus", tooltip:"agreed ballast bonus lumpsum (if applicable)"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"ILOHC",tooltip:"agreed ILOHC lumpsum (if applicable) under ILOHC (In Lieu of Holds Cleaning)"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Zero Profit"}),
				         new sap.ui.commons.CheckBox({value:""}),
				         new sap.ui.commons.Label({text:"Status"}),
				         oCbStatus,

				         new sap.ui.core.Title({text:"Payment Terms"}),

				         new sap.ui.commons.Label({text:"TC Type", labelFor: oCbTCType}),
				         oCbTCType,
				         new sap.ui.commons.Label({text:"CP Date"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"CP Form", labelFor: oCbCPForm}),
				         oCbCPForm,
				         new sap.ui.commons.Label({text:"Charterer", tooltip:"person responsible for the TC contract in the Chartering department"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Pay On", labelFor: oCbPayOn}),
				         oCbPayOn,
				         new sap.ui.commons.Label({text:"Payment Terms", labelFor: oCbPayTerms}),
				         oCbPayTerms,
				         new sap.ui.commons.Label({text:"Partial Own. %"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),	

				         new sap.ui.core.Title({text:"Comments"}),
				         new sap.ui.commons.Label({text:"Laycan From"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Laycan To"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Comments"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         
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
	//////////////////////////////////////////////////////table for Notices////////////////////////////////////////////////////
	var oTableDelNotice = window.helper.createTable({
		title: "Delivery Notices",
		visibleRowCount: 2,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
			items: [ 
			        new sap.ui.commons.Button({text: "Add",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
			        new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
			        ]}),
	});
	oTableDelNotice.addColumn(window.helper.createColumn("noticeNo", "Notice No.", "40px", "TF")); //
	oTableDelNotice.addColumn(window.helper.createColumn("days", "Days", "40px", "TF")); // number of days before an owner must notify the charterer of a vessel's expected arrival time to agreed delivery point.
	
	var oTableReNotice = window.helper.createTable({
		title: "Redelivery Notices",
		visibleRowCount: 2,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
			items: [ 
			        new sap.ui.commons.Button({text: "Add",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
			        new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
			        ]}),
	});
	oTableReNotice.addColumn(window.helper.createColumn("noticeNo", "Notice No.", "40px", "TF")); //
	oTableReNotice.addColumn(window.helper.createColumn("days", "Days", "40px", "TF")); // number of days before an owner must notify the charterer of a vessel's expected arrival time to agreed redelivery point.
	//////////////////////////////////////////// Table for Laytime//////////////////////////////////////////////////
	var oTablePeriod = window.helper.createTable({
		title: "Duration",
		visibleRowCount: 2,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
			items: [ 
			        new sap.ui.commons.Button({text: "Add",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
			        new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
			        ]}),
	});
	oTablePeriod.addColumn(window.helper.createColumn("periodNo", "Period No.", "40px", "TF")); //period item ID 1, 2, 3,
	oTablePeriod.addColumn(window.helper.createColumn("minDuration", "Min Duration", "40px", "TF")); // minimum duration e.g. 12(min) months to 14( max) months
	oTablePeriod.addColumn(window.helper.createColumn("maxDuration", "Max Duration", "40px", "TF")); // maximum Duration
	oTablePeriod.addColumn(window.helper.createColumn("fixedDuration", "Fixed Duration", "40px", "TF")); // fixed Duration (+/- tolerance)
	oTablePeriod.addColumn(window.helper.createColumn("durTimeUnit", "Duration Time Unit", "40px", "TF"));
	//todo:check either enter min max or fixed along with tolerance
	oTablePeriod.addColumn(window.helper.createColumn("tolerancePlus", "Tolerance(+) Days", "40px", "TF"));
	oTablePeriod.addColumn(window.helper.createColumn("toleranceMinus", "Tolerance(-) Days", "40px", "TF"));
	oTablePeriod.addColumn(window.helper.createColumn("option", "Option", "20px", "CH")); //indicate if the duration period is optional.
	//@todo, put a check:CANNOT be used for the initial duration period or if the TC contract only consists of one duration period. Should then be left blank.
	//following fields only if option is checked
	oTablePeriod.addColumn(window.helper.createColumn("optionDecNotice", "Option Dec Notice", "40px", "TF"));
	oTablePeriod.addColumn(window.helper.createColumn("optionStartPeriod", "Option Start Period", "40px", "TF")); //when should optional period start e.g. 22 months after vessel delivery
	oTablePeriod.addColumn(window.helper.createColumn("optionFixedEndDate", "Option Fixed End date", "40px", "TF"));//if there is any fixed end date for optional period
	oTablePeriod.addColumn(window.helper.createColumn("optionStatus", "Option Status", "40px", "TF"));//duration period's option status (Not declared/Forfeited/Declared)
	oTablePeriod.addColumn(window.helper.createColumn("optionActNoticeDate", "Option Actual Notice Date", "40px", "TF"));//actual date notice was given under Option Decl. Date

	var aData = [];
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aData});
	oTablePeriod.setModel(oModel);
	oTablePeriod.bindRows("/modelData");
	sap.ui.getCore().setModel(oModel, "periodTC"); 
	
	var oTableRates = window.helper.createTable({
		title: "Period Rates",
		visibleRowCount: 2,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
			items: [ 
			        new sap.ui.commons.Button({text: "Add",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
			        new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
			        ]}),
	});
	oTableRates.addColumn(window.helper.createColumn("periodNo", "Period No.", "40px", "TF")); //period item ID 1, 2, 3,
	oTableRates.addColumn(window.helper.createColumn("subperiodNo", "Sub Period No", "40px", "TF")); // sub period , e.g. different rates for each month within year
	oTableRates.addColumn(window.helper.createColumn("duration", "Duration", "40px", "TF")); // Duration ( enter either duration, dates auto-calculated)
	oTableRates.addColumn(window.helper.createColumn("durationTimeUnit", "Duration Time Unit", "40px", "TF")); // Days/Months
	oTableRates.addColumn(window.helper.createColumn("fromDate", "From Date", "40px", "TV")); // from date auto-calculated
	oTableRates.addColumn(window.helper.createColumn("toDate", "To Date", "40px", "TF")); // or enter to-date or duration
	oTableRates.addColumn(window.helper.createColumn("rate", "Rate", "40px", "TF")); // give direct rate
	// OR specify an index
	oTableRates.addColumn(window.helper.createColumn("indexID", "Index", "40px", "TF"));
	oTableRates.addColumn(window.helper.createColumn("indexPercent", "Index Percent", "40px", "TF")); //a percentage of the index (if applicable)
	oTableRates.addColumn(window.helper.createColumn("indexFloor", "Index Floor", "40px", "TF"));//If the index amount drops below the agreed index floor amount - the floor amount is to be paid.
	oTableRates.addColumn(window.helper.createColumn("indexRoof", "Index Roof", "40px", "TF"));//f the index about rises above the agreed index roof amount - the roof amount is to be paid. 
	oTableRates.addColumn(window.helper.createColumn("indexSplitPercent", "Index Split Percent", "40px", "TF"));//If the index amount drops below the agreed index floor amount - the amount is split between parties. 

	
	var oPanelPeriods = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanelPeriods.setText("Duration & Rates");

	oPanelPeriods.addContent(oTablePeriod);
	oPanelPeriods.addContent(oTableRates);
//////////////////////////////////////////Table for Partner//////////////////////////////////////////////////
	//Create an instance of the table control
	var oTableProfit = window.helper.createTable({
		title: "Profit Sharing",
		visibleRowCount: 2,
		toolbar: new sap.ui.commons.Toolbar({
			items: [ 
			        new sap.ui.commons.Button({text: "Add",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
			        new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
			        ]}),
	});

	oTableProfit.addColumn(window.helper.createColumn("BU", "Business Unit", "40px", "TF")); //name of the business unit entering into profit share
	oTableProfit.addColumn(window.helper.createColumn("company", "Company", "40px", "TF")); //name of the legal entity entering into the  profit share
	oTableProfit.addColumn(window.helper.createColumn("percent", "Share(%)", "40px", "TF")); //profit share dividend (in per cent) 

	var oModelPartner = new sap.ui.model.json.JSONModel();
	/*oModelPartner.setData({modelData: aDataPartner});
	oTableProfit.setModel(oModelPartner);
	oTableProfit.bindRows("/modelData");*/


	var oPanelProfit = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanelProfit.setText("Other Details");

	var oMatrixMisc = new sap.ui.commons.layout.MatrixLayout({
		//id:"MatrixContractTC",
		layoutFixed : true,
		width : '100%',
		columns: 3
	});
	oMatrixMisc.createRow(oTableDelNotice,oTableReNotice,oTableProfit);
	oPanelProfit.addContent(oMatrixMisc);
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Create a matrix layout
	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
		id:"MatrixContractTC",
		layoutFixed : true,
		width : '100%'
	});

	oMatrix.createRow(oSimpleForm);

	oMatrix.createRow(oSFDelivery);
	oMatrix.createRow(oPanelPeriods);
	oMatrix.createRow(oPanelProfit);
	return oMatrix;
};

