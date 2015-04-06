sap.ui.controller("static/voyageest.Estimate", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf voyageest.Estimate
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf voyageest.Estimate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf voyageest.Estimate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf voyageest.Estimate
*/
//	onExit: function() {
//
//	}
	selectVessel: function(rowNo) {
		var vesselMasterData = sap.ui.getCore().getModel("vesselMaster").getData()['modelData'][rowNo];
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({modelData: vesselMasterData});
		sap.ui.getCore().setModel(oModel,"selectedVessel")
		var data1_new = [{mv:vesselMasterData.vesselName,vesselType:vesselMasterData.vesselType,dwt:vesselMasterData.dwt,draft:vesselMasterData.draft}];
		var data2_new = [{ballast: vesselMasterData.ballast, laden: vesselMasterData.laden}];
		var data3_new =[
					{vesselName: "DO", dieselType: vesselMasterData.doDieselType, sea: vesselMasterData.doSea, idle: vesselMasterData.doIdle, work: vesselMasterData.doWork},
			        {vesselName: "LSDO", dieselType: vesselMasterData.lsdoDieselType, sea: vesselMasterData.lsdoSea, idle: vesselMasterData.lsdoIdle, work: vesselMasterData.lsdoWork}];
		var data4_new = [
		    {vesselName: "FO", fuelType: vesselMasterData.foType, ballast: vesselMasterData.foBallast, laden: vesselMasterData.foLaden, idle: vesselMasterData.foIdle, work: vesselMasterData.foWork},
			{vesselName: "LSFO", fuelType: vesselMasterData.lsfoType, ballast: vesselMasterData.lsfoBallast, laden: vesselMasterData.lsfoLaden, idle: vesselMasterData.lsfoIdle, work: vesselMasterData.lsfoWork}
		];
		sap.ui.getCore().getModel("vessel").setData({data1: data1_new,data2:data2_new,data3:data3_new,data4:data4_new});
	},
	
	getSelectedVessel: function() {
		//return vesselName;
	},
	onClickVessel: function(){
		var oDialogVessel = sap.ui.jsfragment("vesselMaster.fragments.JSFragmentDialog", this);  
		oDialogVessel.open();
	},
	checkForNumeric:function(value){
		if(!$.isNumeric(value)){
            return sap.ui.core.ValueState.Error;
        }
        else{
//        	this.setProperty("valueState",sap.ui.core.ValueState.Success);
        }
	}
});