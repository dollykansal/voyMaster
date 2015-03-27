var vesselDashboard = function(){
/////////////////////////////////////////second table - cargo  ///////////////////////////////////////////////////////////////////
	var aDataSof = [
	                {dateFrom: "22/03/2014", timeFrom:"14:00",activity:"Vessel Arrived",timeCount:"", remarks:""},
	                {dateFrom: "22/03/2014", timeFrom:"15:30",activity:"Vessel Berthed",timeCount:"", remarks:""},
	                {dateFrom: "22/03/2014", timeFrom:"16:00",activity:"Commenced Loading",timeCount:"", remarks:""},
	                {dateFrom: "22/03/2014", timeFrom:"14:00",activity:"NOR tendered",timeCount:"", remarks:""},
	                {dateFrom: "28/03/2014", timeFrom:"08:00",dateTo:"28/03/2014", timeTo:"10:30", activity:"Rain",timeCount:"", remarks:"Once on demurrage, always"},
	                {dateFrom: "29/03/2014", timeFrom:"10:30",activity:"Loading completed",timeCount:"", remarks:""},
	                  ];

	//Create a panel instance
	var oPanelVessel = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanelVessel.setText("Vessel Master");

	
	////////////////////////////////////////table for vessel dashboard//////////////////////////////////////////////
	var oTableDash = window.helper.createTable({
		title: "Vessel Dashboard",
		visibleRowCount: 4,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
		    items: [ 
		            new sap.ui.commons.Button({text: "Create",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
		            new sap.ui.commons.Button({text: "Edit",style: sap.ui.commons.ButtonStyle.Accept,  press: function(){} }),
		            new sap.ui.commons.Button({text: "Open",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} }),
		            new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
		            ]}),
	});
	//Define the columns and the control templates to be used
	oTableDash.addColumn(window.helper.createColumn("vesselCode", "Vessel Code", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("vesselName", "Vessel Name", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("flag", "Flag", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("nationality", "Nationality", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("vesselType", "Vessel Type", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("status", "Status", "40px", "TF"));
	/////////////////////////////////////general details/////////////////////////////////////////////////////////
	var oSimpleForm = new sap.ui.layout.form.SimpleForm(
    		"sfGenDetails",
    		{
    			maxContainerCols: 3,
    			minWidth : 1024,
                editable: true,
                layout: "ResponsiveGridLayout",
		        labelSpanL:6,
		        labelSpanM:6,
		        columnsL:3,
		        columnsM:3,
    			content:[
    					new sap.ui.core.Title({text:"Vessel Particular"}),
    					new sap.ui.commons.Label({text:"M.V"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"Call Sign"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"IMO No."}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"Vessel Kind"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"Vessel Code"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"Vessel Type"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"Hull No."}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					
    					new sap.ui.core.Title({text:"General"}),
    					new sap.ui.commons.Label({text:"Owner"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"Built"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"Flag"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"Class"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"PNI"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"Draft"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					new sap.ui.commons.Label({text:"LOA"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					]
    		});
///////////////////////////////////Gear table///////////////////////////////////
	var oGridForm = new sap.ui.layout.Grid({
		hSpacing: 0,
		vSpacing: 0, 	
		content: [
		          
			new sap.ui.commons.Label({
				text: 'HO/HA',
				layoutData : new sap.ui.layout.GridData({
					span: "L5 M3 S12"
				})
			}),
			new sap.ui.commons.TextField({
				width: "60px",
				layoutData : new sap.ui.layout.GridData({
					span: "L2 M2 S12"
				})
			}),
			new sap.ui.commons.Label({
				text: '/',
				width:"10px",
				layoutData : new sap.ui.layout.GridData({
					span: "L1 M1 S12"
				})
			}),
			new sap.ui.commons.TextField({
				width: "60px",
				layoutData : new sap.ui.layout.GridData({
					span: "L2 M2 S12"
				})
			}),
			new sap.ui.commons.Label({
				text: 'HO/HA Type',
				layoutData : new sap.ui.layout.GridData({
					span: "L5 M3 S12",
					linebreakL: true,
					linebreakM: true,
					linebreakS: true
				})
			}),
			new sap.ui.commons.TextField({
				width: "60px",
				layoutData : new sap.ui.layout.GridData({
					span: "L2 M2 S12"
				})
			}),
			new sap.ui.commons.Label({
				text: '/',
				width:"10px",
				layoutData : new sap.ui.layout.GridData({
					span: "L1 M1 S12"
				})
			}),
			new sap.ui.commons.TextField({
				width: "60px",
				layoutData : new sap.ui.layout.GridData({
					span: "L2 M2 S12"
				})
			}),
			new sap.ui.commons.Label({
				text: 'Tank Top Strength(Upper/Tween)',
				layoutData : new sap.ui.layout.GridData({
					span: "L5 M3 S12",
					linebreakL: true,
					linebreakM: true,
					linebreakS: true
				})
			}),
			new sap.ui.commons.TextField({
				width: "60px",
				layoutData : new sap.ui.layout.GridData({
					span: "L2 M2 S12"
				})
			}),
			new sap.ui.commons.Label({
				text: '/',
				width:"10px",
				layoutData : new sap.ui.layout.GridData({
					span: "L1 M1 S12"
				})
			}),
			new sap.ui.commons.TextField({
				width: "60px",
				layoutData : new sap.ui.layout.GridData({
					span: "L2 M2 S12"
				})
			}),
			new sap.ui.commons.Label({
				text: 'MT/SQM',
				layoutData : new sap.ui.layout.GridData({
					span: "L2 M1 S12"
				})
			}),	
			new sap.ui.commons.Label({
				text: 'Hatch Cover Strength',
				layoutData : new sap.ui.layout.GridData({
					span: "L5 M3 S12",
					linebreakL: true,
					linebreakM: true,
					linebreakS: true
				})
			}),
			new sap.ui.commons.TextField({
				width: "60px",
				layoutData : new sap.ui.layout.GridData({
					span: "L2 M2 S12"
				})
			}),
			new sap.ui.commons.Label({
				text: '/',
				width:"10px",
				layoutData : new sap.ui.layout.GridData({
					span: "L1 M1 S12"
				})
			}),
			new sap.ui.commons.TextField({
				width: "60px",
				layoutData : new sap.ui.layout.GridData({
					span: "L2 M2 S12"
				})
			}),
			new sap.ui.commons.Label({
				text: 'MT/SQM',
				layoutData : new sap.ui.layout.GridData({
					span: "L2 M1 S12"
				})
			}),
			
			]
	});
	var oTableGear = window.helper.createTable({
		title: "",
		visibleRowCount: 4,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
		    items: [ 
		            new sap.ui.commons.Button({text: "Add",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
		            new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
		            ]}),
	});
	//Define the columns and the control templates to be used
	oTableGear.addColumn(window.helper.createColumn("gearName", "Gear", "40px", "TF"));
	oTableGear.addColumn(window.helper.createColumn("weightMT", "Weight(MT)", "40px", "TF"));
	oTableGear.addColumn(window.helper.createColumn("weightEA", "Weight(EA)", "40px", "TF"));
	oTableGear.addColumn(window.helper.createColumn("gearType", "Geartype", "40px", "TF"));
	
	var oLayoutM = new sap.ui.commons.layout.MatrixLayout({
		id : "matrixVessel",
		layoutFixed : true,
		columns : 2,
		widths : ["40%","60%"]
		});
	oLayoutM.createRow(oGridForm, oTableGear);
	/////////////////////////////////////details tabs///////////////////////////////////
	// Create a TabStrip instance
	var oTabStrip1 = new sap.ui.commons.TabStrip("tbVesselDet");
	oTabStrip1.setWidth("100%");
	//oTabStrip1.setHeight("100%");
	oTabStrip1.attachClose( function (oEvent) {
		var oTabStrip = oEvent.oSource;
		oTabStrip.closeTab(oEvent.getParameter("index"));
	});
	oTabStrip1.createTab("General Data",oSimpleForm);
	oTabStrip1.createTab("Gear & HA/HO",oLayoutM);

	
	
/*	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aDataLaytime});
	oTableLaytime.setModel(oModel);
	oTableLaytime.bindRows("/modelData");
	    
	//Initially sort the table
	oTableDash.sort(oTableDash.getColumns()[0]);*/
	

   	oPanelVessel.addContent(oTableDash);
	oPanelVessel.addContent(oTabStrip1);	
	return oPanelVessel;
}
