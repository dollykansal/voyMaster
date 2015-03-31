sap.ui.jsfragment("vesselDetails.fragments.JSFragmentDialog", {
    createContent: function(oController) {
    	var oDialog = new sap.ui.commons.Dialog({title: "Vessel Details"});

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
		
				         //add image in third column
				         ]
			});
	oDialog.addContent(oSimpleForm);
	var oSimpleForm1 = new sap.ui.layout.form.SimpleForm(
			"sfMeasure",
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
				         new sap.ui.core.Title({text:"Tonnage Measurements"}),
				         new sap.ui.commons.Label({text:"GT", tooltip:"Gross Tonnage"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"NT", tooltip:"Net Tonnage"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"GRT", tooltip:"Gross Register Tonnage"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"NRT", tooltip:"Net Register Tonnage"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"PC/UMS", tooltip:"Panama Canal/Universal Measurement System"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"SCNT", tooltip:"Suez Canal Net Tonnage"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),

				         new sap.ui.core.Title({text:"Weight Measurements"}),
				         new sap.ui.commons.Label({text:"Lightship"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"DWT", tooltip:"Dead Weight Tonnage"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"TPCMI", tooltip:"Metric tonnes per centimetre immersion"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"TPI",tooltip:"Imperial tons per inch immersion"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Constant", tooltip:"difference between a vessels design lightship and it's actual displacement when empty"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Grain Capacity", tooltip:" measurement of capacity for cargo like grain, where the cargo flows to conform to the shape of the ship"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Bale Capacity", tooltip:"measurement of capacity for cargo in bales, on pallets, etc., where the cargo does not conform to the shape of the ship"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         
				         new sap.ui.core.Title({text:"Size Measurements"}),
				         new sap.ui.commons.Label({text:"L.O.A.", tooltip:"maximum length of the ship"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Beam", tooltip:"width at the widest point as measured at the ship's nominal waterline"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Draft", tooltip:"distance between the highest waterline and the bottom of the ship"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         new sap.ui.commons.Label({text:"Depth",tooltip:"distance between the crown of the weather deck and the top of the keelson"}),
				         new sap.ui.commons.TextField({value:"", editable: true}),
				         
				         ]
			});
	oDialog.addContent(oSimpleForm1);
	
	// hatches & holds
	//No. of hatches/Holds: 5/5
	var oTableHatch = window.helper.createTable({
		title: "Hatch Size",
		visibleRowCount: 4,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
		    items: [ 
		            new sap.ui.commons.Button({text: "Add",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
		            new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
		            ]}),
	});
	//Define the columns and the control templates to be used
	oTableHatch.addColumn(window.helper.createColumn("no", "No.", "40px", "TF"));
	oTableHatch.addColumn(window.helper.createColumn("length", "Length(m)", "40px", "TF"));
	oTableHatch.addColumn(window.helper.createColumn("beam", "Beam(m)", "40px", "TF"));
	
	var oTableHold = window.helper.createTable({
		title: "Hatch Size",
		visibleRowCount: 4,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
		    items: [ 
		            new sap.ui.commons.Button({text: "Add",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
		            new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
		            ]}),
	});
	//Define the columns and the control templates to be used
	oTableHold.addColumn(window.helper.createColumn("no", "No.", "40px", "TF"));
	oTableHold.addColumn(window.helper.createColumn("grain", "Grain(CBM)", "40px", "TF"));
	oTableHold.addColumn(window.helper.createColumn("Bale", "Bale(CBM)", "40px", "TF"));
	
	var oTableHoldDim = window.helper.createTable({
		title: "Hold Dimensions",
		visibleRowCount: 4,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
		    items: [ 
		            new sap.ui.commons.Button({text: "Add",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
		            new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
		            ]}),
	});
	//Define the columns and the control templates to be used
	oTableHoldDim.addColumn(window.helper.createColumn("no", "No.", "40px", "TF"));
	oTableHoldDim.addColumn(window.helper.createColumn("length", "Length(m)", "40px", "TF"));
	oTableHoldDim.addColumn(window.helper.createColumn("beam", "Beam(m)", "40px", "TF"));
	
	var oTableGear = window.helper.createTable({
		title: "Gears",
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
	//Create a panel instance
	var oPanelVessel = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanelVessel.setText("Gears & HA/HO");
	//Create a matrix layout with 5 columns
	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
		id:"MatrixVessel",
		layoutFixed : true,
		width : '100%',
		columns : 4
	});

	oMatrix.setWidths('25%','25%', '25%','25%' );
	oMatrix.createRow(oTableHold, oTableHoldDim, oTableHatch,oTableGear);
	oPanelVessel.addContent(oMatrix);
	
	oDialog.addContent(oPanelVessel);
    var oButton = new sap.ui.commons.Button({
        text: "Close",
        press: function(){oDialog .close();}
    });
    oDialog.addButton(oButton);
	return oDialog;
    }
});