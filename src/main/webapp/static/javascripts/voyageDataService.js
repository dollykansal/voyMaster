var VoyageDataService = function(){
	this.saveData = function(){
		var data={};
		data['modelSum'] = sap.ui.getCore().getModel("modelSumm").getData();
		data['cargo'] = sap.ui.getCore().getModel("cargo").getData()['modelData'];
		data['port'] = sap.ui.getCore().getModel("port").getData()['modelData'];
		$.ajax({
			url:"http://localhost:8080/voyage/saveCalData",
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