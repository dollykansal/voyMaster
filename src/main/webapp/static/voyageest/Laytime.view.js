sap.ui.jsview("static.voyageest.Laytime", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf static.voyageest.Laytime
	*/ 
	getControllerName : function() {
		return "static.voyageest.Laytime";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf static.voyageest.Laytime
	*/ 
	createContent : function(oController) {
		var panel = null;
		panel = new laytimeCal();
		return [ panel];
	}

});
