var laytimeCal = function(){
/////////////////////////////////////////second table - cargo  ///////////////////////////////////////////////////////////////////
	var aDataSof = [
	                {dateFrom: "22/03/2014", timeFrom:"14:00",activity:"Vessel Arrived",timeCount:"", remarks:""},
	                {dateFrom: "22/03/2014", timeFrom:"15:30",activity:"Vessel Berthed",timeCount:"", remarks:""},
	                {dateFrom: "22/03/2014", timeFrom:"16:00",activity:"Commenced Loading",timeCount:"", remarks:""},
	                {dateFrom: "22/03/2014", timeFrom:"14:00",activity:"NOR tendered",timeCount:"", remarks:""},
	                {dateFrom: "28/03/2014", timeFrom:"08:00",dateTo:"28/03/2014", timeTo:"10:30", activity:"Rain",timeCount:"", remarks:"Once on demurrage, always"},
	                {dateFrom: "29/03/2014", timeFrom:"10:30",activity:"Loading completed",timeCount:"", remarks:""},
	                  ];
	var aDataLaytime = [
	                  {date: "22/03/2014", day: "Thurs", usedDay:"0",usedHour:"08", usedMin:"00",countedDay:"0",countedHour:"08", countedMin:"00",lostDay:"",lostHour:"", lostMin:"",remarks:"L\T commences"},
	                  {date: "23/03/2014", day: "Fri", usedDay:"1",usedHour:"00", usedMin:"00",countedDay:"1",countedHour:"08", countedMin:"00",lostDay:"",lostHour:"", lostMin:"",remarks:"Normal"},
	                  {date: "24/03/2014", day: "Sat", usedDay:"0",usedHour:"21", usedMin:"30",countedDay:"2",countedHour:"05", countedMin:"30",lostDay:"",lostHour:"", lostMin:"",remarks:"Weekend,unless required"},
	                  {date: "25/03/2014", day: "Sun", usedDay:"0",usedHour:"04", usedMin:"00",countedDay:"2",countedHour:"09", countedMin:"30",lostDay:"",lostHour:"", lostMin:"",remarks:"Weekend,unless required"},
	                  {date: "26/03/2014", day: "Mon", usedDay:"0",usedHour:"00", usedMin:"00",countedDay:"2",countedHour:"09", countedMin:"30",lostDay:"",lostHour:"", lostMin:"",remarks:"Holiday"},
	                  {date: "27/03/2014", day: "Tue", usedDay:"1",usedHour:"00", usedMin:"00",countedDay:"3",countedHour:"09", countedMin:"30",lostDay:"",lostHour:"", lostMin:"",remarks:"Normal"},
	                  {date: "28/03/2014", day: "Wed", usedDay:"1",usedHour:"00", usedMin:"00",countedDay:"3",countedHour:"10", countedMin:"30",lostDay:"0",lostHour:"23", lostMin:"00", remarks:"L\T expires"},
	                  {date: "29/03/2014", day: "Thurs", usedDay:"0",usedHour:"10", usedMin:"30",countedDay:"",countedHour:"", countedMin:"",lostDay:"0",lostHour:"10", lostMin:"30",remarks:"time lost"},
	                  	];
	//Create a panel instance
	var oPanelLaytime = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanelLaytime.setText("Laytime Calculation: (Loading from Port Miami , Cargo: Oil, Voyage no: 1234)");
	
	var oBtnCalc =    new sap.ui.commons.Button({
		  text : "Calculate",
		  //icon : "static/images/graph.jpg",
		  style: sap.ui.commons.ButtonStyle.Accept,
		  press : function() {  }
		});
	oBtnCalc.addStyleClass("myGraphBtn");
	oPanelLaytime.addButton( oBtnCalc);
	
	////////////////////////////////////////table for SOF//////////////////////////////////////////////
	var oTableSOF = window.helper.createTable({
		title: "Statement of Facts",
		visibleRowCount: 6,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
		    items: [ 
		            new sap.ui.commons.Button({text: "Insert",style: sap.ui.commons.ButtonStyle.Accept, press: function(){} }),
		            new sap.ui.commons.Button({text: "Append",style: sap.ui.commons.ButtonStyle.Accept,  press: function(){} }),
		            new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function(){} })
		            ]}),
	});
	//Define the columns and the control templates to be used
	oTableSOF.addColumn(window.helper.createColumn("dateFrom", "From Date", "40px", "TF"));
	oTableSOF.addColumn(window.helper.createColumn("timeFrom", "From Time", "40px", "TF"));
	oTableSOF.addColumn(window.helper.createColumn("dateTo", "To Date", "40px", "TF"));
	oTableSOF.addColumn(window.helper.createColumn("timeTo", "To Time", "40px", "TF"));
	oTableSOF.addColumn(window.helper.createColumn("activity", "Activity", "40px", "TF"));
	oTableSOF.addColumn(window.helper.createColumn("timeCount", "Time to Count", "40px", "TF"));
	oTableSOF.addColumn(window.helper.createColumn("remarks", "Remarks", "80px", "TF"));
	/////////////////////////////////////table for laytime///////////////////////////////////
	var oTableLaytime = window.helper.createTable({
		title: "Laytime",
		visibleRowCount: 5,
		firstVisibleRow: 2,
		editable:false
	});
	//Define the columns and the control templates to be used
	oTableLaytime.addColumn(window.helper.createColumn("date", "Date", "80px", "TF"));
	oTableLaytime.addColumn(window.helper.createColumn("day", "Day", "80px", "TF"));

///////////////////////////////////////////////////////////////////////////////////////////////
	
	var oControl = new sap.ui.commons.TextField().bindProperty("value", "usedDay");
	var oColumn1 = new sap.ui.table.Column({multiLabels: [
	                                         			new sap.ui.commons.Label({text: "Time Used", textAlign: "Center"}),
	                                         			new sap.ui.commons.Label({text: "D"})
	                                         		], template: oControl,headerSpan: [3,1],});
	oTableLaytime.addColumn(oColumn1, {autoResizable: true});
	var oControl = new sap.ui.commons.TextField().bindProperty("value", "usedHour");
	var oColumn2 = new sap.ui.table.Column({multiLabels: [
	                                         			new sap.ui.commons.Label({text: "Time Used"}),
	                                         			new sap.ui.commons.Label({text: "H"})
	                                         			], template: oControl});
	oTableLaytime.addColumn(oColumn2, {autoResizable: true});
	var oControl = new sap.ui.commons.TextField().bindProperty("value", "usedMin");
	var oColumn3 = new sap.ui.table.Column({multiLabels: [
	                                         			new sap.ui.commons.Label({text: "Time Used"}),
	                                         			new sap.ui.commons.Label({text: "M"})
	                                         		], template: oControl});
	oTableLaytime.addColumn(oColumn3, {autoResizable: true});	
	
	
///////////////////////////////////////////////////////////////////////////////////////////////
	
	oControl = new sap.ui.commons.TextField().bindProperty("value", "countedDay");
	oColumn1 = new sap.ui.table.Column({multiLabels: [
	                                         			new sap.ui.commons.Label({text: "Total Time Counted", textAlign: "Center"}),
	                                         			new sap.ui.commons.Label({text: "D"})
	                                         		], template: oControl,headerSpan: [3,1],});
	oTableLaytime.addColumn(oColumn1, {autoResizable: true});
	oControl = new sap.ui.commons.TextField().bindProperty("value", "countedHour");
	oColumn2 = new sap.ui.table.Column({multiLabels: [
	                                         			new sap.ui.commons.Label({text: "Total Time Counted"}),
	                                         			new sap.ui.commons.Label({text: "H"})
	                                         			], template: oControl});
	oTableLaytime.addColumn(oColumn2, {autoResizable: true});
	oControl = new sap.ui.commons.TextField().bindProperty("value", "countedMin");
	oColumn3 = new sap.ui.table.Column({multiLabels: [
	                                         			new sap.ui.commons.Label({text: "Total Time Counted"}),
	                                         			new sap.ui.commons.Label({text: "M"})
	                                         		], template: oControl});
	oTableLaytime.addColumn(oColumn3, {autoResizable: true});	
///////////////////////////////////////////////////////////////////////////////////////////////
	
	oControl = new sap.ui.commons.TextField().bindProperty("value", "lostDay");
	oColumn1 = new sap.ui.table.Column({multiLabels: [
	                                         			new sap.ui.commons.Label({text: "Time Lost/Saved", textAlign: "Center"}),
	                                         			new sap.ui.commons.Label({text: "D"})
	                                         		], template: oControl,headerSpan: [3,1],});
	oTableLaytime.addColumn(oColumn1, {autoResizable: true});
	oControl = new sap.ui.commons.TextField().bindProperty("value", "lostHour");
	oColumn2 = new sap.ui.table.Column({multiLabels: [
	                                         			new sap.ui.commons.Label({text: "Time Lost/Saved"}),
	                                         			new sap.ui.commons.Label({text: "H"})
	                                         			], template: oControl});
	oTableLaytime.addColumn(oColumn2, {autoResizable: true});
	oControl = new sap.ui.commons.TextField().bindProperty("value", "lostMin");
	oColumn3 = new sap.ui.table.Column({multiLabels: [
	                                         			new sap.ui.commons.Label({text: "Time Lost/Saved"}),
	                                         			new sap.ui.commons.Label({text: "M"})
	                                         		], template: oControl});
	oTableLaytime.addColumn(oColumn3, {autoResizable: true});
	oTableLaytime.addColumn(window.helper.createColumn("remarks", "Remarks", "80px", "TF"));
///////////////////////////////set total in footer////////////////////////////////////////////////////////
	var oLblTot = new sap.ui.commons.Label({text: "Totals:"});
	var oTotal1 = new sap.ui.commons.TextField({value: "4", editable: false,width : '30px'});
	var oTotal2 = new sap.ui.commons.TextField({value: "20", editable: false,width : '30px'});
	var oTotal3 = new sap.ui.commons.TextField({value: "00", editable: false,width : '30px'});
	var oTotal4 = new sap.ui.commons.TextField({value: "3", editable: false,width : '30px'});
	var oTotal5 = new sap.ui.commons.TextField({value: "10", editable: false,width : '30px'});
	var oTotal6 = new sap.ui.commons.TextField({value: "30", editable: false,width : '30px'});
	var oTotal7 = new sap.ui.commons.TextField({value: "1", editable: false,width : '30px'});
	var oTotal8 = new sap.ui.commons.TextField({value: "09", editable: false,width : '30px'});
	var oTotal9 = new sap.ui.commons.TextField({value: "30", editable: false,width : '30px'});
	var oMatrix = new sap.ui.commons.layout.MatrixLayout({layoutFixed : true,width : '100%',columns : 10});

	//oMatrix.setWidths('10%','15%','10%','15%','10%','15%', '25%');
	oMatrix.setWidths('50px','30px','30px','30px','30px','30px', '30px', '30px', '30px', '30px', '30px');
	oMatrix.createRow(oLblTot,oTotal1,oTotal2,oTotal3,oTotal4,oTotal5,oTotal6,oTotal7,oTotal8,oTotal9);
	oTableLaytime.setFooter(oMatrix);
	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aDataLaytime});
	oTableLaytime.setModel(oModel);
	oTableLaytime.bindRows("/modelData");
	    
	//Create a model and bind the table rows to this model
	var oModel1 = new sap.ui.model.json.JSONModel();
	oModel1.setData({modelData: aDataSof});
	oTableSOF.setModel(oModel1);
	oTableSOF.bindRows("/modelData");
	//Initially sort the table
	oTableSOF.sort(oTableSOF.getColumns()[0]);
	oTableLaytime.sort(oTableSOF.getColumns()[0]);
	
	///////////////create a form for getting information from voyage//////
	//always on demurrage
	//layttime terms: SHEX etc.
	//demurrage rate
	//despatch rate
	//l/d rate
	// lumpsum total no. of days
	//////////////////////////////////////////////////////////////////////////////////////////////
	var oSimpleForm = new sap.ui.layout.form.SimpleForm(
    		"sfLaycan",
    		{
    			maxContainerCols: 3,
    			minWidth : 1024,
                editable: true,
                layout: "ResponsiveGridLayout",
		        labelSpanL:6,
		        labelSpanM:6,
		        columnsL:3,
		        columnsM:3,
    			content:[
    					new sap.ui.core.Title({text:"Calculation Parameters"}),
    					new sap.ui.commons.Label({text:"Laytime Terms"}),
    					new sap.ui.commons.TextField({value:"SHEX", editable: true}),
    					new sap.ui.commons.Label({text:"Demurrage Rate"}),
    					new sap.ui.commons.TextField({value:"10.0", editable: true}),
    					new sap.ui.commons.Label({text:"Despatch Rate"}),
    					new sap.ui.commons.TextField({value:"5.0", editable: true}),
    					new sap.ui.commons.Label({text:"L\D Rate"}),
    					new sap.ui.commons.TextField({value:"2.0", editable: true}),
    					new sap.ui.commons.Label({text:"Total Free Days"}),
    					new sap.ui.commons.TextField({value:"30", editable: true}),
    					new sap.ui.commons.Label({text:"Always on Demurrage"}),
    					new sap.ui.commons.CheckBox({value:"true", editable: true}),
    					
    					new sap.ui.core.Title({text:"Forced Overrides"}),
    					new sap.ui.commons.Label({text:"Free Time End Date & Time"}),
    					new sap.ui.commons.TextField({value:"00-00-0000", editable: true}),
    					new sap.ui.commons.TextField({value:"00:00", editable: true}),
    					new sap.ui.commons.Label({text:"On Demurrage Date & Time"}),
    					new sap.ui.commons.TextField({value:"00-00-0000", editable: true}),
    					new sap.ui.commons.TextField({value:"00:00", editable: true}),
    					new sap.ui.commons.Label({text:"Override Amount Due"}),
    					new sap.ui.commons.CheckBox({value:"false", editable: true}),
    					new sap.ui.commons.Label({text:"Demurrage(+) or Despatch(-)"}),
    					new sap.ui.commons.TextField({value:"", editable: true}),
    					
      					new sap.ui.core.Title({text:"Laytime Calculation Results"}),
    					new sap.ui.commons.Label({text:"Time Allowed"}),
    					new sap.ui.commons.TextField({value:"3 days 10 hours 30 minutes", editable: false}),
    					new sap.ui.commons.Label({text:"Time Used"}),
    					new sap.ui.commons.TextField({value:"4 days 20 hours 00 minutes", editable: false}),
    					new sap.ui.commons.Label({text:"Time Lost"}),
    					new sap.ui.commons.TextField({value:"1 days 09 hours 30 minutes", editable: false}),
    					new sap.ui.commons.Label({text:"Demurrage Receivable"}),
    					new sap.ui.commons.TextField({value:"33,791.99", editable: false}),
    					]
    		});
    			
	
	///////////////////////////////port selected table//////////////////////////////////
/*	var oTablePort = window.helper.createTable({
		title: "Port",
		visibleRowCount: 1,
		firstVisibleRow: 2,
		editable:false
	});
	//Define the columns and the control templates to be used
	oTablePort.addColumn(window.helper.createColumn("operation", "Operation", "80px", "TF"));
	oTablePort.addColumn(window.helper.createColumn("port", "Port", "80px", "TF"));
	oTablePort.addColumn(window.helper.createColumn("cargo", "Cargo", "80px", "TF"));
	oTablePort.addColumn(window.helper.createColumn("voyage", "Voyage No.", "80px", "TF"));*/
	//////////////////////////////////////////////////////////////////
	//oPanelLaytime.addContent(oTablePort);
	/////////////////////////////////splitter/////////////////////////////////////
	//create a vertical Splitter
	var oSplitterV = new sap.ui.commons.Splitter("splitterV"); 
	oSplitterV.setSplitterOrientation(sap.ui.commons.Orientation.vertical);
	oSplitterV.setSplitterPosition("50%");
	oSplitterV.setMinSizeFirstPane("20%");
	oSplitterV.setMinSizeSecondPane("30%");
	oSplitterV.setWidth("100%");
	oSplitterV.setHeight("260px");

	//adding Labels to both panes
	var oLabel1 = new sap.ui.commons.Label({text: "First Pane"});
	oSplitterV.addFirstPaneContent(oTableSOF);	
	var oLabel2 = new sap.ui.commons.Label({text: "Second Pane"});
	oSplitterV.addSecondPaneContent(oTableLaytime);
	//////////////////////////////////////////////////////////////////////////////////////
	//oPanelLaytime.addContent(oTableSOF);
	oPanelLaytime.addContent(oSplitterV);
	oPanelLaytime.addContent(oSimpleForm);	
	return oPanelLaytime;
}
