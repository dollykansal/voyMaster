var VoyageDataService = function(){
	this.saveData = function(){
		var data={};
		data['modelSum'] = sap.ui.getCore().getModel("modelSumm").getData();
		data['cargo'] = sap.ui.getCore().getModel("cargo").getData()['modelData'];
		data['port'] = sap.ui.getCore().getModel("port").getData()['modelData'];
		data['vessel'] = sap.ui.getCore().getModel("vessel").getData();
		$.ajax({
			url:"http://localhost:8080/voyage/saveCalData",
			type:"POST",
			contentType: 'application/json',
			data:JSON.stringify(data),
			success:function(data){
				alert(data("result"))
			}
		});
	},
	this.saveVesselData = function(){
		var data = {};
		data['vesselData'] = sap.ui.getCore().getModel("vesselDetails_1").getData()["vesselData"];
		data['vesselDataHC'] = sap.ui.getCore().getModel("vesselDetails_2").getData()["vesselDataHC"];
		data['vesselDataHD'] = sap.ui.getCore().getModel("vesselDetails_2").getData()["vesselDataHD"];
		data['vesselDataHaD'] = sap.ui.getCore().getModel("vesselDetails_2").getData()["vesselDataHaD"];
		data['vesselDataG'] = sap.ui.getCore().getModel("vesselDetails_2").getData()["vesselDataG"];
		$.ajax({
			url:"http://localhost:8080/voyage/saveVesselData",
			type:"POST",
			contentType: 'application/json',
			data:JSON.stringify(data),
			success:function(data){
				alert(data("result"))
			}
		});
	}
}
window.dataService = new VoyageDataService();