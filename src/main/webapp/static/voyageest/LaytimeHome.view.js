sap.ui.jsview("static.voyageest.LaytimeHome", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf static.voyageest.LaytimeHome
	*/ 
	getControllerName : function() {
		return "static.voyageest.LaytimeHome";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf static.voyageest.LaytimeHome
	*/ 
	createContent : function(oController) {
		var cargoLay = new Cargo(oController);
		var tblPortRotLay = new TblPortRot(oController);
		var oLayoutLay = new sap.ui.commons.layout.MatrixLayout({
			id : "matrixLaycan",
			layoutFixed : true,
			columns : 1,
			width : "100%"
			});
		oLayoutLay.createRow(cargoLay,{height: "auto"} );
		oLayoutLay.createRow(tblPortRotLay,{height: "auto"} );
		return [oLayoutLay];
	}

});
