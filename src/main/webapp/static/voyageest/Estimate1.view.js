sap.ui.jsview("static/voyageest.Estimate1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf voyageest.Estimate1
	*/ 
	getControllerName : function() {
		return "static/voyageest.Estimate1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf voyageest.Estimate1
	*/ 
	createContent : function(oController) {
		var demand = new Demand();
		var header = new Header();
		var oDivider1 = new sap.ui.commons.HorizontalDivider("divider1", {type: "Page", height: "Small"});
		var oLayoutM = new sap.ui.commons.layout.MatrixLayout({
			id : "matrix1",
			layoutFixed : true,
			columns : 1,
			width : "100%"
			//height: "350px"
			});

		var cargo = new Cargo(oController);
		//var treetable = new TreeTableHelper();
		var tblPortRot = new TblPortRot(oController);
		oLayoutM.createRow(cargo,{height: "auto"} );
		oLayoutM.createRow(tblPortRot,{height: "200px"} ); //{height: "300px"}, 
		
		var oLayoutH = new sap.ui.commons.layout.MatrixLayout({
				id : "matrix2",layoutFixed : true,
				columns : 2,
				width : "100%",
				widths : ["20%","80%"]
				//height: "350px"
		});
		oLayoutH.createRow(demand, oLayoutM);
		
/*		var button1 = new sap.ui.commons.Button({ 
			text: "Go back to Vessel Selection",
		   press : function() {
			   sap.ui.localResources("voyage1");
			   var view =  new sap.ui.view({
	            	  id: "estViewID",
	            	  viewName: "voyage1.Estimate",
	            	  type: sap.ui.core.mvc.ViewType.JS
	              });
			   
		       //sap.ui.getCore().byId("myShell").removeAllWorksetItems();
		       sap.ui.getCore().byId("myShell").setContent(sap.ui.getCore().byId("estViewID"),true);
						 
			alert('Alert from Back button' );
					}
				});*/
		var oSummary = new summary(oController);
		
		return [header, oDivider1,oLayoutH,oSummary];
	
	}

});
