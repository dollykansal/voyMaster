var TblPortRot = function(oController){
var aData = [
  {sNo: "1", cType: "Ballast"}
];
//Create a panel instance
var oPanel = new sap.ui.commons.Panel({
  width : "100%",
  height: "210px"
});
oPanel.setText("Port Rotation");

//Function to create the dialog
function openDialog() {
  var oDialog1 = new sap.ui.commons.Dialog();
  oDialog1.setTitle("Port Rotation Gantt Chart");
  oDialog1.addContent((new sap.ui.core.HTML({content:"<div id='ganttContainer' style='height:100%;width:100%;'></div>"})));
  oDialog1.addButton(new sap.ui.commons.Button({text: "OK", press:function(){oDialog1.close();}}));
  oDialog1.open();
  window.chartHelper.createGanttChart();
};

var oButton1 =    new sap.ui.commons.Button({
  text : "Port Rotation Gantt Chart",
  icon : "static/images/graph.jpg",
  lite : true,
  press : function() { openDialog(); }
});
//(new sap.ui.core.HTML({content:"<div id='chartContainer' style='height:100%;width:100%;'></div>"}));
oButton1.addStyleClass("myGraphBtn");
oPanel.addButton( oButton1);

//Create a model and bind the table rows to this model
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({modelData: aData});
sap.ui.getCore().setModel(oModel, "port"); 
////////////////////////////////////////////@todo: use float///////////////////
/*var oExoticDecimalTypeForUS = new sap.ui.model.type.Float({
    groupingEnabled: true,
    groupingSeparator: "-",
    minFractionDigits: 2
  });

new sap.ui.table.Column({  
    label: new sap.ui.commons.Label({text: "Numbers"}),  
    template: new sap.ui.commons.TextView().bindProperty("text", {
      path: "value",
      type: oExoticDecimalTypeForUS
    })*/
//////////////////////////////////////////////////////////////////////////////////
//Create an instance of the table control
var oPortTable = window.helper.createTable({
  visibleRowCount: 3,
  toolbar: new sap.ui.commons.Toolbar({
    items: [ 
          //  new sap.ui.commons.Button({text: "Clear", press: function() { alert("Clear Button pressed!"); }}),
            new sap.ui.commons.Button({text: "Insert",style: sap.ui.commons.ButtonStyle.Accept, press: function() {
              //alert("Append Button pressed!");
              var idx = oPortTable.getSelectedIndex(); //2 = second last row, total rows :4
              if (idx != -1) {
                var modelData = oModel.getData();  
                var rowCount   = modelData.modelData.length;   //4 
                rowCount = rowCount + 1;  //5
                var temp = aData[idx]; //second last row save, idx = 2, position = 3
                aData[idx] = {sNo: rowCount};
                //aData.push({sNo: rowCount},idx); // new blank row at idx = 2, position = 3
                for (i = idx+1; i <= rowCount-1; i++) {
                  var temp1 = aData[i];
                  aData[i] = temp; 
                  temp = temp1;
                  };
                oModel.setData({modelData: aData}); // Set Model  
                oPortTable.visibleRowCount=oPortTable.visibleRowCount+1;
                oModel.refresh();
              } else {
                alert("Please select a row!");
              } 
            
            
            
            }}),
            new sap.ui.commons.Button({text: "Append",style: sap.ui.commons.ButtonStyle.Accept,  press: function() { 
              var modelData = oModel.getData();  
              var rowCount   = modelData.modelData.length;    
              rowCount = rowCount + 1;  
              aData.push({sNo: rowCount,}); // Push data to Model  
              oModel.setData({modelData: aData}); // Set Model  
              oPortTable.visibleRowCount=oPortTable.visibleRowCount+1;
              oModel.refresh();
            }}) , 
            new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function() {
              var idx = oPortTable.getSelectedIndex();
              if (idx != -1) {
                var m = oPortTable.getModel();
                var data = m.getData()['modelData'];
                var removed = data.splice(idx, 1);
                m.setData({modelData: data});
              } else {
                alert("Please select a row!");
              }
            }}) ,  
            new sap.ui.commons.Button({text: "Move up", press: function() { 
              var idx = oPortTable.getSelectedIndex();
              if (idx != 0) {
                var m = oPortTable.getModel();
                var data = m.getData()['modelData'];
                var temp = data[idx-1]; //2
                data[idx-1] = data[idx]; //3
                data[idx]= temp; //2
                m.refresh();
                m.setData({modelData: data});
              } else {
                alert("Please select a row!");
              } 
              }}),
            new sap.ui.commons.Button({text: "Move down", press: function() { 
              var idx = oPortTable.getSelectedIndex();
              
              var modelData = oModel.getData();  
              var rowCount   = modelData.modelData.length;    
              if (idx != -1 && !(idx>=rowCount-1)) {
                var m = oPortTable.getModel();
                var data = m.getData()['modelData'];
                var temp = data[idx+1]; //2
                data[idx+1] = data[idx]; //3
                data[idx]= temp; //2
                m.refresh();
                m.setData({modelData: data});
              } else {
                alert("Please select a row!");
              } 
              }})
            ]}),
  });

///////////////////////////////////////create combo box////////////////////////////////////////
// Create a ComboBox
var oComboBox = new sap.ui.commons.ComboBox("ComboBox",{
  tooltip: "Type",
  items: [new sap.ui.core.ListItem("Type1",{text: "Ballast", key: "Ba"}),
          new sap.ui.core.ListItem("Type2",{text: "Loading", key: "Lo"}),
          new sap.ui.core.ListItem("Type3",{text: "Discharging", key: "Di"}),
          new sap.ui.core.ListItem("Type4",{text: "Bunker", key: "Bu"}),
          new sap.ui.core.ListItem("Type5",{text: "Canal", key: "Ca"}),
          new sap.ui.core.ListItem("Type6",{text: "Passing", key: "Pa"})],
/*    change: function(oEvent){
    sap.ui.getCore().byId("TextFieldKey").setValue(oEvent.oSource.getSelectedKey());
    sap.ui.getCore().byId("TextFieldId").setValue(oEvent.oSource.getSelectedItemId());
    }*/
  });
oComboBox.bindProperty("value", "cType");
////////////////////////////////////////////////////////////////////////////////////////
//Define the columns and the control templates to be used
//new sap.ui.commons.TextField().bindProperty("value", name)
oPortTable.addColumn(window.helper.createColumn("sNo", "SNo", "20px", "TV"));
oPortTable.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Type"}), template: oComboBox,width: "70px" }));
//oPortTable.addColumn(window.helper.createColumn("type", "Type", "40px", "TF"));
oPortTable.addColumn(window.helper.createColumn("coord", "Port Name or Coordinates", "60px", "TF"));
//oPortTable.addColumn(window.helper.createColumn("distEca", "Distance/(S)ECA", "40px", "TF"));
var oPortTableDistEca = new sap.ui.commons.TextField({   
	id: "oPortTableDistEca",
	change : function(oEvent){
		var changedValue = this.getValue();
		var id = this.getId();
		var idArr = id.split("-");
		var rowIndex = idArr[2].split("row")[1];
		var model = oPortTable.getModel();
		var data = oPortTable.getModel().getData()['modelData'];
		data[rowIndex]['distEca']=changedValue;
		if(data[rowIndex]['distEca']!=undefined&&data[rowIndex]['spd']!=undefined&&data[rowIndex]['distEca']!=""&&data[rowIndex]['spd']!=""){
			var days = (data[rowIndex]['distEca']/data[rowIndex]['spd'])/24;
			data[rowIndex]['sea'] = Math.round(days * 100) / 100;
			oController.calcTotalDays();
		}else{
			data[rowIndex]['sea'] = 0;
		}
		model.setData({modelData: data});
		model.refresh();
	}
});
oPortTableDistEca.bindProperty("value", "distEca");

oPortTable.addColumn(new sap.ui.table.Column("distEca",{
	label: new sap.ui.commons.Label({text: "Distance/(S)ECA"}), 
	template: oPortTableDistEca,
	width: "40px" }));

oPortTable.addColumn(window.helper.createColumn("wf", "W.F", "40px", "TF"));

var oPortTableSpd = new sap.ui.commons.TextField({   
	id: "oPortTableSpd",
	change : function(oEvent){
		var changedValue = this.getValue();
		var id = this.getId();
		var idArr = id.split("-");
		var rowIndex = idArr[2].split("row")[1];
		var model = oPortTable.getModel();
		var data = oPortTable.getModel().getData()['modelData'];
		data[rowIndex]['spd']=changedValue;
		if(data[rowIndex]['distEca']!=undefined&&data[rowIndex]['spd']!=undefined&&data[rowIndex]['distEca']!=""&&data[rowIndex]['spd']!=""){
			var days = (data[rowIndex]['distEca']/data[rowIndex]['spd'])/24;
			data[rowIndex]['sea'] = Math.round(days * 100) / 100;
			oController.calcTotalDays();
		}else{
			data[rowIndex]['sea'] = 0;
		}
		model.setData({modelData: data});
		model.refresh();
	}
});
oPortTableSpd.bindProperty("value", "spd");

oPortTable.addColumn(new sap.ui.table.Column("spd",{
	label: new sap.ui.commons.Label({text: "Speed"}), 
	template: oPortTableSpd,
	width: "40px" }));

//oPortTable.addColumn(window.helper.createColumn("spd", "Spd", "40px", "TF"));
oPortTable.addColumn(window.helper.createColumn("sea", "Sea", "40px", "TV"));

/*sColumnId = 'Distance';
oPortTable.addColumn(new sap.ui.table.Column({
    id: sColumnId,
    label: sColumnId,
    template: new sap.ui.commons.TextField({"text": { path: 'port>' + sColumnId}}),
}));

sColumnId = 'Speed';
oPortTable.addColumn(new sap.ui.table.Column({
    id: sColumnId,
    label: sColumnId,
    template: new sap.ui.commons.TextField({"text": { path: 'port>' + sColumnId}}),
}));

sColumnId = 'Days';
var oDistance = new sap.ui.commons.TextField({});
oDistance.bindValue ({
    parts: [
            {path: "/port>Distance", type: new sap.ui.model.type.Float()},
            {path: "/port>Speed", type: new sap.ui.model.type.Float()}
            ],
       formatter: function(Distance, Speed){ // all parameters are strings
         return parseFloat(Distance) / parseFloat(Speed);
       }
}); 
oPortTable.addColumn(new sap.ui.table.Column({
    id: sColumnId,
    label: sColumnId,
    template: oDistance
    new sap.ui.commons.TextField({
        "text": {
            parts: [{ path: "port>Distance"}, {path: "port>Speed"}],
            formatter: function(Speed, Distance){ 
              return parseFloat(Distance) / parseFloat(Speed);
        },
        },
    
}));*/




//var calcTxt = new sap.ui.commons.TextField({   
//      id: "txtCalc",
//      liveChange : function(oEvent){
//        var id = this.getId();
//        var idArr = id.split("-");
//        var rowIndex = idArr[2].split("row")[1];
//        var model = oPortTable.getModel();
//        var data = oPortTable.getModel().getData()['modelData'];
//        data[rowIndex]['spd']=oEvent.getParameter("liveValue");
//        model.setData({modelData: data});
//        model.refresh();
//      }
//    });
//var spdTxt = new sap.ui.commons.TextView("spdTxt",{ text: calcTxt.getValue() });
//oPortTable.addColumn(new sap.ui.table.Column("colSpd",{
//  label: new sap.ui.commons.Label({text: "Speed"}), 
//  template: spdTxt,
//  //value: calcTxt.getValue(),
//  width: "50px" }));
//oPortTable.addColumn(new sap.ui.table.Column("colCalc",{
//  label: new sap.ui.commons.Label({text: "Calculated"}), 
//  template: calcTxt,
//  width: "50px" }));

oPortTable.addColumn(window.helper.createColumn("ldrate", "L/D Rate", "40px", "TF"));

//oPortTable.addColumn(window.helper.createColumn("idle", "Port(Idle)", "40px", "TF"));
var oPortTableIdle = new sap.ui.commons.TextField({   
	id: "oPortTableIdle",
	change : function(oEvent){
			oController.calcPortIdleWork();
	}
});
oPortTableIdle.bindProperty("value", "portIdle");

oPortTable.addColumn(new sap.ui.table.Column("portIdle",{
	label: new sap.ui.commons.Label({text: "Port(Idle)"}), 
	template: oPortTableIdle,
	width: "40px" }));

//oPortTable.addColumn(window.helper.createColumn("work", "Port(Work)", "40px", "TF"));
var oPortTableWork = new sap.ui.commons.TextField({   
	id: "oPortTableWork",
	change : function(oEvent){
			oController.calcPortIdleWork();
	}
});
oPortTableWork.bindProperty("value", "portWork");

oPortTable.addColumn(new sap.ui.table.Column("portWork",{
	label: new sap.ui.commons.Label({text: "Port(Work)"}), 
	template: oPortTableWork,
	width: "40px" }));

//oPortTable.addColumn(window.helper.createColumn("dem", "Dem", "40px", "TF"));
var oPortTableDem = new sap.ui.commons.TextField({   
	id: "oPortTableDem",
	change : function(oEvent){
			oController.calTotalDemDes();
	}
});
oPortTableDem.bindProperty("value", "dem");

oPortTable.addColumn(new sap.ui.table.Column("dem",{
	label: new sap.ui.commons.Label({text: "Dem"}), 
	template: oPortTableDem,
	width: "40px" }));
//oPortTable.addColumn(window.helper.createColumn("des", "Des", "40px", "TF"));
var oPortTableDes = new sap.ui.commons.TextField({   
	id: "oPortTableDes",
	change : function(oEvent){
			oController.calTotalDemDes();
	}
});
oPortTableDes.bindProperty("value", "des");

oPortTable.addColumn(new sap.ui.table.Column("des",{
	label: new sap.ui.commons.Label({text: "Des"}), 
	template: oPortTableDes,
	width: "40px" }));

//oPortTable.addColumn(window.helper.createColumn("portChg", "Port charge", "40px", "TF"));
var oPortTabPortChg = new sap.ui.commons.TextField({   
	id: "oPortTabPortChg",
	change : function(oEvent){
			oController.calTotalPortCharg();
	}
});
oPortTabPortChg.bindProperty("value", "portChg");

oPortTable.addColumn(new sap.ui.table.Column("portChg",{
	label: new sap.ui.commons.Label({text: "Port charge"}), 
	template: oPortTabPortChg,
	width: "40px" }));

//oPortTable.addColumn(window.helper.createColumn("arrival", "Arrival", "40px", "TF"));
//oPortTable.addColumn(window.helper.createColumn("departure", "Departure", "40px", "TF"));
/*if (isNaN(value)) {  
    return 0;  
}  
         var numberFormat = sap.ui.core.format.NumberFormat.getIntegerInstance({  
             maxIntegerDigits: 10,  
             minIntegerDigits: 1,  
             maxFractionDigits: 2,  
             minFractionDigits: 2,  
             groupingEnabled: true  
         });  
         return numberFormat.format(value);  
*new sap.ui.commons.Label({text: "Total days"}),
*/
//oPortTable.addColumn(window.helper.createColumn("dem", "Dem", "40px", "TF"));
//oPortTable.addColumn(window.helper.createColumn("des", "Des", "40px", "TF"));
//oPortTable.addColumn(window.helper.createColumn("portChg", "Port charge", "40px", "TF"));
var oDatePicker1 = new sap.ui.commons.DatePicker('date1');
//oDatePicker1.setYyyymmdd("20100101");
oDatePicker1.setLocale("en-US"); // Try with "de" or "fr" instead!
oDatePicker1.attachChange(
		function(oEvent){
			if(oEvent.getParameter("invalidValue")){
				oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
			}else{
				oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
			}
		}
);
var oDatePicker2 = new sap.ui.commons.DatePicker('date2');
//oDatePicker2.setYyyymmdd("20100101");
oDatePicker2.setLocale("en-US"); // Try with "de" or "fr" instead!
oDatePicker2.attachChange(
		function(oEvent){
			if(oEvent.getParameter("invalidValue")){
				oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
			}else{
				oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
			}
		}
);
var arrival = new sap.ui.table.Column({
	label: new sap.ui.commons.Label({text: "Arrival"}),
	template: oDatePicker1,
	sortProperty: "arrival",
	filterProperty: "arrival",
	width: "90px"
});
var departure = new sap.ui.table.Column({
	label: new sap.ui.commons.Label({text: "Departure"}),
	template: oDatePicker2,
	sortProperty: "departure",
	filterProperty: "departure",
	width: "90px"
});
oPortTable.addColumn(arrival);
oPortTable.addColumn(departure);
oPortTable.setModel(oModel);
oPortTable.bindRows("/modelData");

///////////////////////////////set total in footer////////////////////////////////////////////////////////
var oLblTot = new sap.ui.commons.Label({text: "Total days"});
var oTotal = new sap.ui.commons.TextField({value: "{model>/netDays}", editable: false,width : '90%'});
var oMatrix = new sap.ui.commons.layout.MatrixLayout({layoutFixed : true,width : '100%',columns : 3});

oMatrix.setWidths('10%','15%', '75%');
oMatrix.createRow(oLblTot,oTotal);
oPortTable.setFooter(oMatrix);
//Initially sort the table
//oPortTable.sort(oPortTable.getColumns()[0]);
oPanel.addContent(oPortTable);
return oPanel;

}