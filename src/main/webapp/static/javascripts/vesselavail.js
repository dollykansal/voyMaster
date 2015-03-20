var Vesselavail = function(oController){
//var aData = [//OWNED, LTC,TCT
//	{vesselName: "Jebel Ali", laycan: "4", vesselType:"OWNED",dwt:"2440",draft:"910.00",ballast:"50",laden:"40",doDieselType:"DMB",dosea:"5",doidle:"10",dowork:"35",lsdoDieselType:"DMB",lsdosea:"11",lsdoidle:"16",lsdowork:"21",fotype:"180",foballast:"20",foladen:"25",foidle:"7",fowork:"1",lsfotype:"180",lsfoballast:"20",lsfoladen:"25",lsfoidle:"7",lsfowork:"1"},
//	{vesselName: "Manuela", laycan: "2", vesselType:"TCT",dwt:"3220",draft:"980.00",ballast:"60",laden:"30",doDieselType:"DMA",dosea:"4",doidle:"20",dowork:"25",lsdoDieselType:"DMA",lsdosea:"12",lsdoidle:"16",lsdowork:"21",fotype:"280",foballast:"30",foladen:"25",foidle:"6",fowork:"2",lsfotype:"180",lsfoballast:"20",lsfoladen:"25",lsfoidle:"6",lsfowork:"2"},
//	{vesselName: "CMA Colomb", laycan: "1", vesselType:"LTC",dwt:"5320",draft:"567.00",ballast:"70",laden:"20",doDieselType:"DMC",dosea:"3",doidle:"30",dowork:"15",lsdoDieselType:"DMC",lsdosea:"13",lsdoidle:"16",lsdowork:"21",fotype:"380",foballast:"25",foladen:"25",foidle:"5",fowork:"3",lsfotype:"180",lsfoballast:"20",lsfoladen:"25",lsfoidle:"5",lsfowork:"3"},
//	{vesselName: "Caspian Supplier", laycan: "4", vesselType:"OWNED",dwt:"5520",draft:"639.00",ballast:"10",laden:"40",doDieselType:"DMX",dosea:"2",doidle:"40",dowork:"15",lsdoDieselType:"DMX",lsdosea:"14",lsdoidle:"16",lsdowork:"21",fotype:"180",foballast:"20",foladen:"25",foidle:"4",fowork:"1",lsfotype:"180",lsfoballast:"20",lsfoladen:"25",lsfoidle:"4",lsfowork:"4"},
//	{vesselName: "Vespucci", laycan: "6", vesselType:"TCT",dwt:"2550",draft:"340.00",ballast:"70",laden:"80",doDieselType:"DMA",dosea:"5",doidle:"50",dowork:"55",lsdoDieselType:"DMB",lsdosea:"11",lsdoidle:"16",lsdowork:"21",fotype:"120",foballast:"20",foladen:"25",foidle:"3",fowork:"5",lsfotype:"180",lsfoballast:"20",lsfoladen:"25",lsfoidle:"3",lsfowork:"5"},
//	{vesselName: "Myra", laycan: "3", vesselType:"LTC",dwt:"2550",draft:"578.00",ballast:"80",laden:"70",doDieselType:"DMB",dosea:"5",doidle:"10",dowork:"25",lsdoDieselType:"DMA",lsdosea:"15",lsdoidle:"16",lsdowork:"21",fotype:"80",foballast:"30",foladen:"25",foidle:"2",fowork:"6",lsfotype:"180",lsfoballast:"20",lsfoladen:"25",lsfoidle:"2",lsfowork:"6"},
//	{vesselName: "Gemini", laycan: "2", vesselType:"TCT",dwt:"5520",draft:"230.00",ballast:"90",laden:"60",doDieselType:"MGO",dosea:"5",doidle:"10",dowork:"35",lsdoDieselType:"DMB",lsdosea:"10",lsdoidle:"16",lsdowork:"21",fotype:"80",foballast:"25",foladen:"25",foidle:"1",fowork:"7",lsfotype:"180",lsfoballast:"20",lsfoladen:"25",lsfoidle:"1",lsfowork:"7"},
//];
var aData = window.vesselMaster;
//Create an instance of the table control
var oTableVess = window.helper.createTable({title:"Vessel Availability"});

var oDialogVessel = sap.ui.jsfragment("vesselMaster.fragments.JSFragmentDialog");
var oControl = new sap.ui.commons.Link({
	press: function() {oDialogVessel.open();}
});
oControl.bindProperty("text", "id/vesselName");
oTableVess.addColumn(new sap.ui.table.Column({
	label: new sap.ui.commons.Label({text: "Vessel Name"}), 
	template: oControl, //sortProperty: "id.vesselName", 
	width: "120px"}));
//	filterProperty: "vesselName"}));
oTableVess.addColumn(window.helper.createColumn("laycan", "Laycan", "80px", "TF"));
oTableVess.addColumn(window.helper.createColumn("dwt", "DWT", "60px", "TF"));
oTableVess.addColumn(window.helper.createColumn("draft", "Draft", "60px", "TF"));
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({modelData: aData});
oTableVess.setModel(oModel);
sap.ui.getCore().setModel(oModel,"vesselMaster")
oTableVess.bindRows("/modelData");

oTableVess.setVisibleRowCount(oTableVess.getBinding("rows").getLength());
// MESSAGE AREA	
var oMsgBar = new sap.ui.commons.MessageBar("msgBar", {
	anchorID: "header",
	anchorSnapPoint: "end"
});
oTableVess.attachRowSelectionChange(function(oEvent) {
	var currentRowContext = oEvent.getParameter("rowContext"); 
	var strArr = currentRowContext['sPath'].split("/");
	var rowNo = strArr[strArr.length-1];
	var selVessName = oModel.getProperty("vesselName", currentRowContext);
	var selDesc = oModel.getProperty("Description", currentRowContext);
	var oMessage = new sap.ui.commons.Message({
		type: sap.ui.commons.MessageType.Success, 
		text: "Selected Row Index: " + oEvent.getParameter("rowIndex") + selVessName
	});
	oMsgBar.addMessages([oMessage]);
	oController.selectVessel(rowNo);
});

 return oTableVess;
 //oTableVess.placeAt("vesselavail");
};