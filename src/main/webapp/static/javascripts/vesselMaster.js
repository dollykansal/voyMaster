sap.ui.jsfragment("vesselMaster.fragments.JSFragmentDialog", {
	///final vessel details
    createContent: function(oController) {
        var oDialogVessel = new sap.ui.commons.Dialog({title: "Vessel Details", height: "90%", width:"90%"});
//        var baseCtrl = sap.ui.getCore().byId("estViewId1").getController();
///////////////////////////////////Gear table///////////////////////////////////
    	var oGridForm = new sap.ui.layout.Grid({
    		hSpacing: 0,
    		vSpacing: 0, 	
    		content: [
    		          
    			new sap.ui.commons.Label({
    				text: 'HO/HA',
    				tooltip:"No. of Hatches & Holds",
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
    	
    	
////////////////////////////////////////////////////////////////////////// 
    	var data1 = {};
    	var data3 = [];
    	var data4 = [];
    	var data5 = [];
    	var data6 = [];
    	var oModel = new sap.ui.model.json.JSONModel();
    	oModel.setData({vesselData: data1});
    	console.log(oModel);
        sap.ui.getCore().setModel(oModel, "vesselDetails_1");
        var oModel1 = new sap.ui.model.json.JSONModel();
        oModel1.setData({vesselDataHC:data3,vesselDataHD:data4,vesselDataHaD:data5,vesselDataG:data6});
        sap.ui.getCore().setModel(oModel1, "vesselDetails_2");
    	var oSimpleForm = new sap.ui.layout.form.SimpleForm(
    			//"sfVessel",
    			{
    				maxContainerCols: 5,
    				minWidth : 1024,
    				editable: true,
    				layout: "ResponsiveGridLayout",
    				labelSpanL:7,
    				labelSpanM:7,
    				emptySpanL:0,
    				emptySpanM:0,
    				emptySpanS:0,
    				columnsL:5,
    				columnsM:5,
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
    				         new sap.ui.commons.Label({
    				        	 text:"L.O.A.", 
    				        	 tooltip:"maximum length of the ship"
    				        	 }),
    				         new sap.ui.commons.TextField({
    				        	 editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }
    				         }),
    				         new sap.ui.commons.Label({text:"Beam", tooltip:"width at the widest point as measured at the ship's nominal waterline"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"Draft", tooltip:"distance between the highest waterline and the bottom of the ship"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"Depth",tooltip:"distance between the crown of the weather deck and the top of the keelson"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         
    				         new sap.ui.core.Title({text:"Tonnage Measurements"}),
    				         new sap.ui.commons.Label({text:"GT", tooltip:"Gross Tonnage"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"NT", tooltip:"Net Tonnage"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"GRT", tooltip:"Gross Register Tonnage"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"NRT", tooltip:"Net Register Tonnage"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"PC/UMS", tooltip:"Panama Canal/Universal Measurement System"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"SCNT", tooltip:"Suez Canal Net Tonnage"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),

    				         new sap.ui.core.Title({text:"Weight Measurements"}),
    				         new sap.ui.commons.Label({text:"Lightship"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"DWT", tooltip:"Dead Weight Tonnage"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"TPCMI", tooltip:"Metric tonnes per centimetre immersion"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"TPI",tooltip:"Imperial tons per inch immersion"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"Constant", tooltip:"difference between a vessels design lightship and it's actual displacement when empty"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"Grain Capacity", tooltip:" measurement of capacity for cargo like grain, where the cargo flows to conform to the shape of the ship"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         new sap.ui.commons.Label({text:"Bale Capacity", tooltip:"measurement of capacity for cargo in bales, on pallets, etc., where the cargo does not conform to the shape of the ship"}),
    				         new sap.ui.commons.TextField({value:"", editable: true,
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }}),
    				         
    				         new sap.ui.core.Title({text:"Size Measurements"}),
    				         ////////////////////////////////////////////
    				         new sap.ui.commons.Label({
    			    				text: 'HO/HA',
    			    				tooltip:"No. of Hatches & Holds",
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
    			    				}),
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }
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
    			    				}),
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }
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
    			    				}),
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }
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
    			    				}),
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }
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
    			    				}),
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }
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
    			    				}),
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }
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
    			    				}),
    				        	 change: function(){
    				        		 this.setProperty("valueState",oController.checkForNumeric(this.getProperty("value")));
    				        	 }
    			    			}),
    			    			new sap.ui.commons.Label({
    			    				text: 'MT/SQM',
    			    				layoutData : new sap.ui.layout.GridData({
    			    					span: "L2 M1 S12"
    			    				})
    			    			})
    				         /////////////////////////////////////////////
    				         //add image in third column
    				         ]
    			});
    	oSimpleForm.setModel(oModel);
    	oDialogVessel.addContent(oSimpleForm);
    	
    	//oDialogVessel.addContent(oSimpleForm1);
    	
    	// hatches & holds
    	//No. of hatches/Holds: 5/5
    	var oTableHatch = window.helper.createTable({
    		title: "Hatch Dimensions",
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
    	oTableHatch.setModel(oModel1);
    	oTableHatch.bindRows("/vesselDataHC");
    	var oTableHold = window.helper.createTable({
    		title: "Hold Capacity",
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
    	oTableHold.setModel(oModel1);
    	oTableHold.bindRows("/vesselDataHD");
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
    	oTableHoldDim.setModel(oModel1);
    	oTableHoldDim.bindRows("/vesselDataHaD");
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
    	oTableGear.setModel(oModel1);
    	oTableGear.bindRows("/vesselDataG");
    	//Create a panel instance
    	var oPanelVessel = new sap.ui.commons.Panel({
    		width : "100%"
    	});
    	oPanelVessel.setText("Gears & HA/HO");
    	//Create a matrix layout with 5 columns
    	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
    		//id:"MatrixVessel",
    		layoutFixed : true,
    		width : '100%',
    		columns : 4
    	});

    	oMatrix.setWidths('25%','25%', '25%','25%' );
    	oMatrix.createRow(oTableHold, oTableHoldDim, oTableHatch,oTableGear);
    	oPanelVessel.addContent(oMatrix);
    	
    	oDialogVessel.addContent(oPanelVessel);
    	
        var oButton = new sap.ui.commons.Button({
            text: "Close",
            press: function(){oDialogVessel .close();}
        });
        oDialogVessel.addButton(oButton);
        
        var panelSpeed =  new Vessel();
        oDialogVessel.addContent(panelSpeed);
        
        return oDialogVessel;
    }
});