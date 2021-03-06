sap.ui.jsview("static/voyageest.Home", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf voyageest.Home
	*/ 
	getControllerName : function() {
		return "static/voyageest.Home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf voyageest.Home
	*/ 
	createContent : function(oController) {
		var oPanelVoyEst = new sap.ui.commons.Panel("tileVoyEst",{
			width: "95%",
			height: "180px",
			showCollapseIcon: false,
			layoutData: new sap.ui.layout.GridData({
				span: "L2 M2 S2",
				indent: "L3 M2 S1"
			})
		});
		oPanelVoyEst.setTitle(new sap.ui.core.Title({text:"Voyage Estimator"}).setEmphasized(false));
		oPanelVoyEst.setAreaDesign(sap.ui.commons.enums.AreaDesign.Plain);
		oPanelVoyEst.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
		oPanelVoyEst.addContent(new sap.ui.commons.Image({src: 'static/images/estimate.png'}));
		oPanelVoyEst.attachBrowserEvent("click", function(){
			sap.ui.getCore().byId("myShell").setSelectedWorksetItem("wi_est_id");
			sap.ui.getCore().byId("myShell").setContent(getContent("wi_est_overview"));
		})
		
		var oPanelVoyage = new sap.ui.commons.Panel("tileVoyage",{
			showCollapseIcon: false,
			width: "95%",
			height: "180px",
			layoutData: new sap.ui.layout.GridData({
				span: "L2 M2 S2",
				//indent: "L3 M2 S1"
			})
		});
		oPanelVoyage.setTitle(new sap.ui.core.Title({text:"Voyage"}).setEmphasized(false));
		oPanelVoyage.setAreaDesign(sap.ui.commons.enums.AreaDesign.Plain);
		oPanelVoyage.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
		oPanelVoyage.addContent(new sap.ui.commons.Image({src: 'static/images/image_green.gif'}));
		oPanelVoyage.attachBrowserEvent("click", function(){
			sap.ui.getCore().byId("myShell").setSelectedWorksetItem("wi_voy_id");
			sap.ui.getCore().byId("myShell").setContent(getContent("wi_voy_overview"));
		})
		var oPanelVessel = new sap.ui.commons.Panel("tileVessel",{
			showCollapseIcon: false,
			width: "95%",
			height: "180px",
			layoutData: new sap.ui.layout.GridData({
				span: "L2 M2 S2",
				//indent: "L3 M2 S1"
			})
		});
		oPanelVessel.setTitle(new sap.ui.core.Title({text:"Vessel Master"}).setEmphasized(false));
		oPanelVessel.setAreaDesign(sap.ui.commons.enums.AreaDesign.Plain);
		oPanelVessel.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
		oPanelVessel.addContent(new sap.ui.commons.Image({src: 'static/images/image_green.gif'}));
		oPanelVessel.attachBrowserEvent("click", function(){
			sap.ui.getCore().byId("myShell").setSelectedWorksetItem("wi_vessel_id");
			sap.ui.getCore().byId("myShell").setContent(getContent("wi_vessel_id"));
		})
		
		var oPanelContract = new sap.ui.commons.Panel("tileContract",{
			showCollapseIcon: false,
			width: "95%",
			height: "180px",
			layoutData: new sap.ui.layout.GridData({
				span: "L2 M2 S2",
				indent: "L3 M2 S1"
			})
		});
		oPanelContract.setTitle(new sap.ui.core.Title({text:"Contract"}).setEmphasized(false));
		oPanelContract.setAreaDesign(sap.ui.commons.enums.AreaDesign.Plain);
		oPanelContract.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
		oPanelContract.addContent(new sap.ui.commons.Image({src: 'static/images/image_green.gif'}));
		oPanelContract.attachBrowserEvent("click", function(){
			sap.ui.getCore().byId("myShell").setSelectedWorksetItem("wi_contract_id");
			sap.ui.getCore().byId("myShell").setContent(getContent("wi_cont_overview"));
		})
		
		
		var oPanelLaytime = new sap.ui.commons.Panel("tileLaytime",{
			showCollapseIcon: false,
			width: "95%",
			height: "180px",
			layoutData: new sap.ui.layout.GridData({
				span: "L2 M2 S2",
				//indent: "L4 M3 S2"
			})
		});
/*		oPanelDemand.setTitle(new sap.ui.core.Title({text:"Demands"}).setEmphasized(false));
		oPanelDemand.setAreaDesign(sap.ui.commons.enums.AreaDesign.Plain);
		oPanelDemand.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
		oPanelDemand.addContent(new sap.ui.commons.Image({src: 'static/images/demand.png'}));
		
		var oPanelRep = new sap.ui.commons.Panel("tileRep",{
			showCollapseIcon: false,
			width: "95%",
			height: "180px",
			layoutData: new sap.ui.layout.GridData({
				span: "L2 M2 S2",
				//indent: "L3 M2 S1"
			})
		});*/
		oPanelLaytime.setTitle(new sap.ui.core.Title({text:"Laytime Calculator"}).setEmphasized(false));
		oPanelLaytime.setAreaDesign(sap.ui.commons.enums.AreaDesign.Plain);
		oPanelLaytime.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
		oPanelLaytime.addContent(new sap.ui.commons.Image({src: 'static/images/laytime.png'}));
		oPanelLaytime.attachBrowserEvent("click", function(){
			sap.ui.getCore().byId("myShell").setSelectedWorksetItem("wi_laytime_id");
			sap.ui.getCore().byId("myShell").setContent(getContent("wi_laytime_id"));
		})
		
		var oPanelRep = new sap.ui.commons.Panel("tileRep",{
			showCollapseIcon: false,
			width: "95%",
			height: "180px",
			layoutData: new sap.ui.layout.GridData({
				span: "L2 M2 S2",
				//indent: "L3 M2 S1"
			})
		});
		
		oPanelRep.setTitle(new sap.ui.core.Title({text:"Reporting"}).setEmphasized(false));
		oPanelRep.setAreaDesign(sap.ui.commons.enums.AreaDesign.Plain);
		oPanelRep.setBorderDesign(sap.ui.commons.enums.BorderDesign.Box);
		oPanelRep.addContent(new sap.ui.commons.Image({src: 'static/images/report.png'}));
		oPanelRep.attachBrowserEvent("click", function(){
			alert("Tile Pressed");
		})
		
		
		var oGridTiles = new sap.ui.layout.Grid("gridTile",{
				hSpacing: 2,
				vSpacing: 2, 	
				content: [ oPanelVoyEst,oPanelVoyage,oPanelVessel,oPanelContract,oPanelLaytime,oPanelRep
				]
			});
		return oGridTiles;

	}

});
