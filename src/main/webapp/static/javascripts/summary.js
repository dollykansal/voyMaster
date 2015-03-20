var summary = function(oController){
	var aData = [];
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aData});
	var oZero = 0.0;
	//Create a panel instance
	var oPanel1 = new sap.ui.commons.Panel({
		width : "370px"
	});

	//As alternative if no icon is desired also the following shortcut might be possible:
	oPanel1.setText("Operation Expense");

	//Create a matrix layout with 2 columns
	var oMatrixOper = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '350px',
		columns : 4
	});

	oMatrixOper.setWidths('30%', '20%','30%', '20%');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Dem/Des',
		tooltip: 'Total amount of Demurrage/Despatch money occured during the voyage'
	});

	var oInput = new sap.ui.commons.TextField({
		value : "{modelSumm>/demDes}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Bunker Expense',
		tooltip: 'Total bunker expense for this voyage'
	});

	//Function to create the dialog
	var oDialogBunkFragment = sap.ui.jsfragment("bunkCal.fragments.JSFragmentDialog");
	
	// create a default ValueHelpField
	var oInput1 = new sap.ui.commons.ValueHelpField('VHF2',{
		value: "{modelSumm>/sumBunkExp}",
		width: "67px",
/*		iconURL: "images/sap_icon.jpg",
		iconHoverURL: "images/sap_icon.jpg",
		iconDisabledURL: "images/sap_icon.jpg",*/
		valueHelpRequest: function(){oDialogBunkFragment.open();}
	});
	
/*	var oInput1 = new sap.ui.commons.TextField({
		value : "{modelSumm>/sumBunkExp}",
		editable : false,
		width : '100%'
			
	});*/
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Add Comm.',
		tooltip: 'Total amount of Address Commission inputted in Cargo'
	});

	var oInput = new sap.ui.commons.TextField("aComm",{
		value: "{modelSumm>/aComm}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'C.E.V',
		tooltip: 'CEV'
	});

	var oInput1 = new sap.ui.commons.TextField({
		width : '100%',
		change:function(oEvent){
			var modelSumm = oController.getModel('modelSumm');
			if(this.getValue!=undefined && this.getValue()!=''){
				modelSumm.setProperty("/cev",this.getValue());
			}
			else{
				modelSumm.setProperty("/cev",oZero);
			}
			sap.ui.getCore().setModel(modelSumm, "modelSumm"); 
			oController.calculateOperationExpense();
		}
	});
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Brokerage',
		tooltip: 'Total amount of Brokerage inputted in Cargo'
	});
	var oInput = new sap.ui.commons.TextField({
		value : "{modelSumm>/brkg}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'ILOHC',
		tooltip: 'Input ILOHC for this voyage'
	});

	var oInput1 = new sap.ui.commons.TextField({
		width : '100%',
		change:function(oEvent){
			var modelSumm = oController.getModel('modelSumm');
			if(this.getValue!=undefined && this.getValue()!=''){
				modelSumm.setProperty("/ilohc",this.getValue());
			}
			else{
				modelSumm.setProperty("/ilohc",oZero);
			}
			sap.ui.getCore().setModel(modelSumm, "modelSumm"); 
			oController.calculateOperationExpense();
		}
	});
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Freight tax'
	});
	var oInput = new sap.ui.commons.TextField({
		value : "{modelSumm>/frTax}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Ballast Bonus',
		tooltip: 'Input Ballast Bonus, if any'
	});

	var oInput1 = new sap.ui.commons.TextField({
		width : '100%',
		change:function(oEvent){
			var modelSumm = oController.getModel('modelSumm');
			if(this.getValue!=undefined && this.getValue()!=''){
				modelSumm.setProperty("/ballbonus",this.getValue());
			}
			else{
				modelSumm.setProperty("/ballbonus",oZero);
			}
			sap.ui.getCore().setModel(modelSumm, "modelSumm"); 
			oController.calculateOperationExpense();
		}
	});
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Liner Terms'
	});
	var oInput = new sap.ui.commons.TextField({
		value : "{modelSumm>/linTerm}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Routing Service',
		tooltip: 'Input Routing Service charge occured, if any'
	});

	var oInput1 = new sap.ui.commons.TextField({
		width : '100%',
		change:function(oEvent){
			var modelSumm = oController.getModel('modelSumm');
			if(this.getValue!=undefined && this.getValue()!=''){
				modelSumm.setProperty("/routServ",this.getValue());
			}
			else{
				modelSumm.setProperty("/routServ",oZero);
			}
			sap.ui.getCore().setModel(modelSumm, "modelSumm"); 
			oController.calculateOperationExpense();
		}
	});
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Port Charge'
	});
	var oInput = new sap.ui.commons.TextField({
		value : "{modelSumm>/portCharg}",		
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Others',
		tooltip: 'Input any other costs occured during the voyage'
	});

	var oInput1 = new sap.ui.commons.TextField({
		width : '100%',
		change:function(oEvent){
			var modelSumm = oController.getModel('modelSumm');
			if(this.getValue!=undefined && this.getValue()!=''){
				modelSumm.setProperty("/others",this.getValue());
			}
			else{
				modelSumm.setProperty("/others",oZero);
			}
			sap.ui.getCore().setModel(modelSumm, "modelSumm"); 
			oController.calculateOperationExpense();
		}
	});
	oLabel.setLabelFor(oInput);
	oMatrixOper.createRow(oLabel, oInput, oLabel1, oInput1);

	//Add the form to the panels content area
	oPanel1.addContent(oMatrixOper);


	//////////////////////////////////////////bunker expense/////////////////////////////////////////////////
	//Create a panel instance
	var oPanel2 = new sap.ui.commons.Panel({
		width : "370px"
	});
	//Set the title of the panel
//	oPanel2.setTitle(new sap.ui.core.Title({
//	text : "Operation Expense",
//	icon : "images/carousel/SAPLogo.gif"
//	}));

	//As alternative if no icon is desired also the following shortcut might be possible:
	oPanel2.setText("Bunker Expense");

	//Create a matrix layout with 2 columns
	var oMatrixB = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '350px',
		columns : 4
	});

	oMatrixB.setWidths('30%', '20%','30%', '20%');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Price'
	});
	 
	var oInputPrice = new sap.ui.commons.TextField("idFoPrice",{
		//value : '0.00',
		width : '100%',
		change:function(oEvent){
			var modelSumm = oController.getModel('modelSumm');
			modelSumm.setProperty("/FoPrice",this.getValue());
			var cons = modelSumm.getProperty("/totFoCons");
			if(this.getValue!=undefined && this.getValue()!=''&&cons!=undefined && cons!=''){
				modelSumm.setProperty("/totFoExpense",(this.getValue()*cons));
			}
			sap.ui.getCore().setModel(modelSumm, "modelSumm"); 
			oController.sumBunkExp();
		}
	
	});
	//oInput.bindProperty("value", "idFoPrice");
	oInputPrice.setModel(oModel);
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Price'
	});

	var oInput1 = new sap.ui.commons.TextField({
		width : '100%',
		change:function(oEvent){
			var modelSumm = oController.getModel('modelSumm');
			modelSumm.setProperty("/DoPrice",this.getValue());
			var cons = modelSumm.getProperty("/totDoCons");
			if(this.getValue!=undefined && this.getValue()!=''&&cons!=undefined && cons!=''){
				modelSumm.setProperty("/totDoExpense",(this.getValue()*cons));
			}
			sap.ui.getCore().setModel(modelSumm, "modelSumm"); 
			oController.sumBunkExp();
		}
	});
	oLabel.setLabelFor(oInputPrice);
	oMatrixB.createRow(oLabel, oInputPrice, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Consumption'
	});

	var oInputCons = new sap.ui.commons.TextField("idFoCons",{
		value : "{modelSumm>/totFoCons}",
		editable : false,
		width : '100%'
	});
	//oInput.bindProperty("value", "idFoCons");
//	oInputCons.setModel(oModel);
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Consumption'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : "{modelSumm>/totDoCons}",
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInputCons);
	oMatrixB.createRow(oLabel, oInputCons, oLabel1, oInput1);

	/////////////////////////////////////formatter for expense//////////////////////////////////

/*	var myModel = new sap.ui.model.json.JSONModel({
		idFoPrice: '1',
		idFoCons: '2'
	});

	//var myModel = sap.ui.getCore().getModel('model');
	var price = oInputPrice.getValue();
	var cons = oInputCons.getValue();
	
	//console.log("summary model is:", myModel);
	var oInputForm = new sap.ui.commons.TextField({width : '100%',id:'idFoExp'})
	.bindProperty("value", 
			{
		/*  parts: [
	    {path: "/firstName", type: new sap.ui.model.type.String()},
	    {path: "/lastName", type: new sap.ui.model.type.String()}
	    {path: "{model>/frTax}"},
	    {path: "{model>/brkg}"}
	  ],
		parts: [
		        {path: "/modelSumm/FoPrice"}
		        ],
		formatter: function(price){
			console.log("price",price);
			var int = null;
			if (idFoPrice) int = idFoPrice;
			if (idFoCons) int += idFoCons;
			
			return price;
		}
	});
	//oInputForm.bindProperty("value", "idFoExp");
	oInputForm.setModel(modelSumm); 
	*/
	//////////////////////////////////formatter//////////////////////////////////

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Expense'
	});
		var oInputForm = new sap.ui.commons.TextField({
		value : "{modelSumm>/totFoExpense}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Expense'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : "{modelSumm>/totDoExpense}",
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInputForm);
	oMatrixB.createRow(oLabel, oInputForm, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Price'
	});
	var oInput = new sap.ui.commons.TextField({
		width : '100%',
		change:function(oEvent){
			var modelSumm = oController.getModel('modelSumm');
			modelSumm.setProperty("/lsFoPrice",this.getValue());
			var cons = modelSumm.getProperty("/totLsFoCons");
			if(this.getValue!=undefined && this.getValue()!=''&&cons!=undefined && cons!=''){
				modelSumm.setProperty("/totLsFoExpense",(this.getValue()*cons));
			}
			sap.ui.getCore().setModel(modelSumm, "modelSumm"); 
			oController.sumBunkExp();
		}
	
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Price'
	});

	var oInput1 = new sap.ui.commons.TextField({
		width : '100%',
		change:function(oEvent){
			var modelSumm = oController.getModel('modelSumm');
			modelSumm.setProperty("/lsDoPrice",this.getValue());
			var cons = modelSumm.getProperty("/totLsDoCons");
			if(this.getValue!=undefined && this.getValue()!=''&&cons!=undefined && cons!=''){
				modelSumm.setProperty("/totLsDoExpense",(this.getValue()*cons));
			}
			sap.ui.getCore().setModel(modelSumm, "modelSumm"); 
			oController.sumBunkExp();
		}
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Consumption'
	});
	var oInput = new sap.ui.commons.TextField({
		value : "{modelSumm>/totLsFoCons}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Consumption'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : "{modelSumm>/totLsDoCons}",
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Expense'
	});
	var oInput = new sap.ui.commons.TextField({
		value : "{modelSumm>/totLsFoExpense}",
		width : '100%',
		editable : false
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Expense'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : "{modelSumm>/totLsDoExpense}",
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);

	//Add the form to the panels content area
	oPanel2.addContent(oMatrixB);
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//Create a panel instance
	var oPanel3 = new sap.ui.commons.Panel({
		width : "420px"
	});
	//Set the title of the panel
//	oPanel3.setTitle(new sap.ui.core.Title({
//	text : "Operation Expense",
//	icon : "images/carousel/SAPLogo.gif"
//	}));

	//As alternative if no icon is desired also the following shortcut might be possible:
	oPanel3.setText("Result");

	//Create a matrix layout with 2 columns
	var oMatrixRes = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '400px',
		columns : 4
	});

	oMatrixRes.setWidths('100px', '100px','100px', '100px');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Hire/Day',
		tooltip: 'Input daily hire cost'
	});

	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%',
		change : function(oEvent){
			oController.doHirCalc(this.getValue(),null);
		}
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Revenue',
		tooltip: 'Quantity * Freight'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : "{modelSumm>/rev}",
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'H/Add Comm. %',
		tooltip: 'Input Address Comm. on daily hire cost'
	});

	var oInput = new sap.ui.commons.TextField({
		//value : "{modelSumm>/hirDay}",
		width : '100%',
		change : function(oEvent){
			oController.doHirCalc(null,this.getValue());
		}
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Op. Expense',
		tooltip: ' Sum of all values in the Operation Expense Panel (all expenses excluding hirage)'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : "{modelSumm>/opExp}",
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Net Hire',
		tooltip: 'Daily net hire amount'
	});
	var oInput = new sap.ui.commons.TextField({
		value : "{modelSumm>/netHire}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Op. Profit',
		tooltip: 'Total Revenue - Operation Expense'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : "{modelSumm>/opProfit}",
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'C/Base',
		tooltip: 'Daily earning amount after deducting the req operation costs from operation profit \n(Charter Base = Oper Profit/Total duration)'
	});
	var oInput = new sap.ui.commons.TextField({
		value : "{modelSumm>/cBase}",
		editable : false,
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Hire',
		tooltip: 'Total Duration * Net Hire'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : "{modelSumm>/totHir}",
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : ''
	});
	var oInput = new sap.ui.commons.TextField({
		width : '100%',
		visible : false
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Expense',
		tooltip: 'Operation Expense + Total Hire'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : "{modelSumm>/totExp}",
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : ''
	});
	var oInput = new sap.ui.commons.TextField({
		width : '100%',
		visible : false
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'PROFIT',
		tooltip: 'Total Revenue - Total Expense'
	});

	var oInput1 = new sap.ui.commons.TextField({
		value : "{modelSumm>/totProfit}",
		editable : false,
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);

	//Add the form to the panels content area
	oPanel3.addContent(oMatrixRes);
	//////////////////////////////////////////////////////////////////////////////////////
	//Create a matrix layout with 2 columns
	var oMatrixFull = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		//width : '100%',
		columns : 3
	});

	oMatrixFull.setWidths('32%', '32%','36%');
	oMatrixFull.createRow(oPanel1,oPanel2,oPanel3);
	return (oMatrixFull);
}
