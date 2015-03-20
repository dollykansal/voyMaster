sap.ui.jsview("static/voyageest.Estimate", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf voyageest.Estimate
	*/ 
	getControllerName : function() {
		return "static/voyageest.Estimate";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf voyageest.Estimate
	*/ 
	createContent : function(oController) {
		//this.removeAllContent();

		var panel = null;
		//panel = new Vessel().createVessel(oController);
		panel = new Vessel(oController);
		var vessel = new Vesselavail(oController);
		window.v = panel;
		var button = new sap.ui.commons.Button({ 
			text: "Fill Cargo details to selected vessel -->",
		   press : function() {
		       //sap.ui.getCore().byId("myShell").removeAllWorksetItems();
		       sap.ui.getCore().byId("myShell").setContent(sap.ui.getCore().byId("estViewId1"),true);
						 
//			alert('Alert from Forward button' );
					}
				});
		
		
		//return button;
		return [ vessel, panel, button];
	}

});
