sap.ui.controller("static/voyageest.Estimate1", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf voyageest.Estimate1
	 */
/*	onInit: function() {
	},
*/
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf voyageest.Estimate1
	 */
//	onBeforeRendering: function() {

//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf voyageest.Estimate1
	 */
//	onAfterRendering: function() {

//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf voyageest.Estimate1
	 */
//	onExit: function() {

//	}
	calculateOperationExpense: function(){
		var modelSumm = null;
		modelSumm = this.getModel('modelSumm');
		var total = 0;
		
		if (!isNaN(modelSumm.getProperty("/sumBunkExp"))){total = parseFloat(total)+parseFloat(modelSumm.getProperty("/sumBunkExp"));};
		if (!isNaN(modelSumm.getProperty("/aComm"))){total = parseFloat(total)+ parseFloat(modelSumm.getProperty("/aComm"));};
		if (!isNaN(modelSumm.getProperty("/brkg"))){total = parseFloat(total)+ parseFloat(modelSumm.getProperty("/brkg"));};
		if (!isNaN(modelSumm.getProperty("/frTax"))){total = parseFloat(total)+ parseFloat(modelSumm.getProperty("/frTax"));};
		if (!isNaN(modelSumm.getProperty("/linTerm"))){total = parseFloat(total)+ parseFloat(modelSumm.getProperty("/linTerm"));};
		if (!isNaN(modelSumm.getProperty("/demDes"))){total = parseFloat(total)+ parseFloat(modelSumm.getProperty("/demDes"));};
		if (!isNaN(modelSumm.getProperty("/cev"))){total = parseFloat(total)+ parseFloat(modelSumm.getProperty("/cev"));};
		if (!isNaN(modelSumm.getProperty("/ilohc"))){total = parseFloat(total)+ parseFloat(modelSumm.getProperty("/ilohc"));};
		if (!isNaN(modelSumm.getProperty("/ballbonus"))){total = parseFloat(total)+ parseFloat(modelSumm.getProperty("/ballbonus"));};
		if (!isNaN(modelSumm.getProperty("/routServ"))){total = parseFloat(total)+ parseFloat(modelSumm.getProperty("/routServ"));};
		if (!isNaN(modelSumm.getProperty("/others"))){total = parseFloat(total)+ parseFloat(modelSumm.getProperty("/others"));};
		if (!isNaN(modelSumm.getProperty("/portCharg"))){total = parseFloat(total)+ parseFloat(modelSumm.getProperty("/portCharg"));};
		modelSumm.setProperty("/opExp",total);
		var rev = modelSumm.getProperty("/rev");
		if(isNaN(rev)){rev = 0.0;}
		modelSumm.setProperty("/opProfit",rev - total); 
		
/*		var totDays = this.getModel('model').getProperty("/totDays");
		if(totDays!=undefined && totDays!=''){
			modelSumm.setProperty("/cBase",((rev - total) / totDays));
		}*/
				
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 
		this.calcCharterBase();
		this.calcTotExp(null,total);
	},
	checkIfRowExist: function(products, cargoRowIndex, cType){
		var row = {};
		row["result"] = false;
		if(products!=undefined && products.length>0){
			for(var x=0;x<products.length;x++){
				if(products[x].cargoRow==cargoRowIndex && products[x].cType == cType){
					row["index"] = x;
					row["product"] = products[x];
					row["result"] = true;
				}
			}
		}
		return row;
	},
	onCargoChange: function(oAddComm, oBrkg, oFrtTax, oRev,oLinTerm) {
		var model = null;

		if(sap.ui.getCore().getModel('modelSumm')!=null){
			model = sap.ui.getCore().getModel('modelSumm');
		}else{
			model = new sap.ui.model.json.JSONModel();
		}

		if(oAddComm!=null){
			model.setProperty("/aComm", oAddComm);
			this.calculateOperationExpense();
		}
		if(oBrkg!=null){
			model.setProperty("/brkg", oBrkg);
			this.calculateOperationExpense();
		}
		if(oFrtTax!=null){
			model.setProperty("/frTax", oFrtTax);
			this.calculateOperationExpense();
		}
		
		if(oRev!=null){
			model.setProperty("/rev", oRev);
			this.calculateOperationExpense();
			modelSumm.setProperty("/opProfit",oRev - modelSumm.getProperty("/opExp") );
		}
		if(oLinTerm!=null){
			model.setProperty("/linTerm", oLinTerm);
			this.calculateOperationExpense();
		}
		sap.ui.getCore().setModel(model, "modelSumm");  
		
		this.calTotProfit();
	},
///////////////////////////////generic method for getting model handler////////////////////////////////////////////////////////
	getModel: function(modelId){
		var model = null;
		if(sap.ui.getCore().getModel(modelId)!=null){
			model = sap.ui.getCore().getModel(modelId);
		}else{
			model = new sap.ui.model.json.JSONModel();
		}
		return model;
	},
///////////////////////////////calculate total days in port rotation////////////////////////////////////////////////////////
	calcTotalDays: function() {
		var data = sap.ui.getCore().getModel("port").getData()['modelData'];
		var nRows = data.length;
		console.log("nRows:",nRows);
		var oTotal = 0;

		for (var i = 0; i < nRows; i++) { 
			if (isNaN(data[i]['sea'])){}
			else{
			oTotal += data[i]['sea'];
			}	
		}  
		var model = this.getModel('model');
		model.setProperty("/totDays", oTotal);
		
		//calculate total days
		this.calcNetDays();
		
		var modelSumm = this.getModel('modelSumm');
		//var laden = this.calcFoExpense();
		var response = this.calcFoExpense();
		
		var foCons = oTotal * response['laden'];
		var lsfoCons = oTotal * response['lsfoLaden'];
		
		var sea = oTotal * response['sea'];
		var lsdoSea = oTotal * response['lsdoSea'];
		
		modelSumm.setProperty("/FoCons", foCons);
		modelSumm.setProperty("/lsFoCons", lsfoCons);
		modelSumm.setProperty("/DoCons", sea);
		modelSumm.setProperty("/lsDoCons", lsdoSea);
		
		var price = modelSumm.getProperty("/FoPrice");
		var lsFoPrice = modelSumm.getProperty("/lsFoPrice");
		var doPrice = modelSumm.getProperty("/DoPrice");
		var lsDoPrice = modelSumm.getProperty("/lsDoPrice");
		
		var total = 0.0;
		
		// calculate DO total consumption
		if(!isNaN(modelSumm.getProperty("/doIdleCons"))){total = parseFloat(total) + parseFloat (modelSumm.getProperty("/doIdleCons"));}
		if(!isNaN(modelSumm.getProperty("/doWorkCons"))){total = parseFloat(total) + parseFloat (modelSumm.getProperty("/doWorkCons"));}
		if(!isNaN(sea)){total = parseFloat(total) + parseFloat (sea);}
		
		modelSumm.setProperty("/totDoCons",total);
		if(price!=undefined && price!=''){
			modelSumm.setProperty("/DoExpense",(modelSumm.getProperty("/DoCons")*doPrice));
			modelSumm.setProperty("/totDoExpense",(total*price));
		}
		total = 0.0;
		
		// calculate LSDO total consumption
		if(!isNaN(modelSumm.getProperty("/lsDoIdleCons"))){total = parseFloat(total) + parseFloat (modelSumm.getProperty("/lsDoIdleCons"));}
		if(!isNaN(modelSumm.getProperty("/lsDoWorkCons"))){total = parseFloat(total) + parseFloat (modelSumm.getProperty("/lsDoWorkCons"));}
		if(!isNaN(lsdoSea)){total = parseFloat(total) + parseFloat (lsdoSea);}
		modelSumm.setProperty("/totLsDoCons",total);
		if(lsFoPrice!=undefined && lsFoPrice!=''){
			modelSumm.setProperty("/lsDoExpense",(modelSumm.getProperty("/lsDoCons")*lsDoPrice));
			modelSumm.setProperty("/totLsDoExpense",(total*price));
		}
		total = 0.0;
		
		// calculate FO total consumption
		if(!isNaN(modelSumm.getProperty("/foIdleCons"))){total = parseFloat(total) + parseFloat (modelSumm.getProperty("/foIdleCons"));}
		if(!isNaN(modelSumm.getProperty("/foWorkCons"))){total = parseFloat(total) + parseFloat (modelSumm.getProperty("/foWorkCons"));}
		if(!isNaN(foCons)){total = parseFloat(total) + parseFloat (foCons);}
		modelSumm.setProperty("/totFoCons",total);
		if(doPrice!=undefined && doPrice!=''){
			modelSumm.setProperty("/FoExpense",(modelSumm.getProperty("/FoCons")*price));
			modelSumm.setProperty("/totFoExpense",(total*price));
		}
		total = 0.0;
		
		// calculate LSFO total consumption
		if(!isNaN(modelSumm.getProperty("/lsFoIdleCons"))){total = parseFloat(total) + parseFloat (modelSumm.getProperty("/lsFoIdleCons"));}
		if(!isNaN(modelSumm.getProperty("/lsFoWorkCons"))){total = parseFloat(total) + parseFloat (modelSumm.getProperty("/lsFoWorkCons"));}
		if(!isNaN(lsfoCons)){total = parseFloat(total) + parseFloat (lsfoCons);}
		modelSumm.setProperty("/totLsFoCons",total);
		if(lsDoPrice!=undefined && lsDoPrice!=''){
			modelSumm.setProperty("/lsFoExpense",(modelSumm.getProperty("/lsFoCons")*lsFoPrice));
			modelSumm.setProperty("/totLsFoExpense",(total*price));
		}
		
/*		var opProfit = modelSumm.getProperty("/opProfit");
		if(oTotal!=undefined && oTotal!=''){
			modelSumm.setProperty("/cBase",(opProfit / oTotal));
		}*/
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 
		sap.ui.getCore().setModel(model, "model"); 
		this.calcCharterBase();
		this.sumBunkExp();
	},
///////////////////////////////calculate bunker expenses in summary////////////////////////////////////////////////////////
	calcFoExpense: function() {
		
		var model = null;
		var response = {};
		
		if(sap.ui.getCore().getModel('vessel')!=null){
			model = sap.ui.getCore().getModel('vessel');
		}else{
			model = new sap.ui.model.json.JSONModel();
		}
		
		var laden = model.getData()['data4'][0]['laden'];
		var lsfoLaden = model.getData()['data4'][1]['laden'];
		
		var sea =  model.getData()['data3'][0]['sea'];
		var lsdoSea =  model.getData()['data3'][1]['sea'];
		response['laden'] = laden;
		response['lsfoLaden'] = lsfoLaden;
		response['sea'] = sea;
		response['lsdoSea'] = lsdoSea;
		return response;
	},
///////////////////////////////calculate total bunker expense////////////////////////////////////////////////////////	
	sumBunkExp: function() {
		
		var modelSumm = null;

		if(sap.ui.getCore().getModel('modelSumm')!=null){
			modelSumm = sap.ui.getCore().getModel('modelSumm');
		}else{
			modelSumm = new sap.ui.model.json.JSONModel();
		}
		
		var total = 0;
		console.log("totLsFoExpense:",(modelSumm.getProperty("/totLsFoExpense")))
		if (!isNaN(modelSumm.getProperty("/totFoExpense"))){total += modelSumm.getProperty("/totFoExpense");};
		if (!isNaN(modelSumm.getProperty("/totLsFoExpense"))){total += modelSumm.getProperty("/totLsFoExpense");};
		if (!isNaN(modelSumm.getProperty("/totDoExpense"))){total += modelSumm.getProperty("/totDoExpense");};
		if (!isNaN(modelSumm.getProperty("/totLsDoExpense"))){total += modelSumm.getProperty("/totLsDoExpense");};
		console.log("total is:",total)
		modelSumm.setProperty("/sumBunkExp",total);
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 
		this.calculateOperationExpense();
	},
	doHirCalc: function(oHirDay,oHirComm) {
		
		var modelSumm = null;
		var hirday = 0.0;
		var hircomm	= 0.0;

		if(sap.ui.getCore().getModel('modelSumm')!=null){
			modelSumm = sap.ui.getCore().getModel('modelSumm');
		}else{
			modelSumm = new sap.ui.model.json.JSONModel();
		}
		if(oHirDay!=null){
			modelSumm.setProperty("/hirDay",oHirDay);
			hirday = oHirDay;
			}
		else{
			hirday = modelSumm.getProperty("/hirDay");
		}
		if(oHirComm!=null){
			modelSumm.setProperty("/hirComm",oHirComm);
			hircomm	= oHirComm;
			}
		else{
			hircomm = modelSumm.getProperty("/hirComm");
			}
		if(hircomm!=undefined&&hirday!=undefined){
			modelSumm.setProperty("/netHire",hirday - (hirday*(hircomm/100))); 
			
			//calculate total days
			this.calcNetDays();
			var totDays = this.getModel('model').getProperty("/netDays");
			
			if(totDays!=undefined){
				var totHir = 0.00;
				totHir = totDays * (hirday - (hirday*(hircomm/100)));
				modelSumm.setProperty("/totHir",totHir);
				this.calcTotExp(totDays * (hirday - (hirday*(hircomm/100))),null);
			}
		}
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 

	},
	calcTotExp: function(oTotHir,oOperExp) {
		var totHir = 0.0; var operExp = 0.0;
		var modelSumm = this.getModel('modelSumm');
		if(oTotHir!=null){totHir = oTotHir;}else{totHir = modelSumm.getProperty("/totHir");}
		if(oOperExp!=null){operExp = oOperExp;}else{operExp = modelSumm.getProperty("/opExp");}
		if (isNaN(totHir)){totHir = 0.0;}
		if (isNaN(operExp)){operExp = 0.0;}
		
		modelSumm.setProperty("/totExp", (totHir + operExp) );
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 
		this.calTotProfit();
	},
	
	calTotProfit: function(){
		//profit = total revenue - total expense
		var modelSumm = this.getModel('modelSumm');
		var totRev = modelSumm.getProperty("/rev");
		var totExp = modelSumm.getProperty("/totExp");
		if (isNaN(totRev)){totRev = 0.0;}
		if (isNaN(totExp)){totExp = 0.0;}
		modelSumm.setProperty("/totProfit", (totRev - totExp) );
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 
	},
///////////////////////////////calculate total dem////////////////////////////////////////////////////////	
	calTotalDemDes: function() {
		var data = sap.ui.getCore().getModel("port").getData()['modelData'];
		var nRows = data.length;
		var oTotalDem = 0.0;
		var oTotalDes = 0.0;
		for (var i = 0; i < nRows; i++) { 
			if (isNaN(data[i]['dem'])){}
			else{
				oTotalDem = parseFloat(oTotalDem) + parseFloat (data[i]['dem']);
			}	
		}  
		for (var i = 0; i < nRows; i++) { 
			if (isNaN(data[i]['des'])){}
			else{
				oTotalDes = parseFloat(oTotalDes) + parseFloat (data[i]['des']);
			}	
		}  
		var model = this.getModel('modelSumm');
		model.setProperty("/demDes", (parseFloat(oTotalDes) - parseFloat(oTotalDem)) );
		sap.ui.getCore().setModel(model,"modelSumm");
		this.calculateOperationExpense();
	},
///////////////////////////////calculate total port charge////////////////////////////////////////////////////////	
	calTotalPortCharg: function() {
		var data = sap.ui.getCore().getModel("port").getData()['modelData'];
		var nRows = data.length;
		var oTotal = 0.0;
		for (var i = 0; i < nRows; i++) { 
			if (isNaN(data[i]['portChg'])){}
			else{
				oTotal = parseFloat(oTotal) + parseFloat (data[i]['portChg']);
			}	
		}  
		var model = this.getModel('modelSumm');
		model.setProperty("/portCharg", oTotal );
		sap.ui.getCore().setModel(model,"modelSumm");
		this.calculateOperationExpense();
	},
///////////////////////////////calculate total rev,addcomm,brkg,frt tax, tot operexpense on Cargo////////////////////////////////////////////////////////	
	calTotalRev: function() {
		var data = sap.ui.getCore().getModel("cargo").getData()['modelData'];
		var oTotal = 0.0;var addComm= 0.0; var brkge = 0.0; var frtTax = 0.0;
		var nRows = data.length;
		
		for (var i = 0; i < nRows; i++) { 
			if (isNaN(data[i]['rev'])){}
			else{
				oTotal = parseFloat(oTotal) + parseFloat (data[i]['rev']);
				if(!isNaN((data[i]['addComm']))){addComm =  parseFloat(addComm) + parseFloat ((data[i]['addComm'] * data[i]['rev'])/100);}
				if(!isNaN((data[i]['brkge']))){brkge = parseFloat(brkge)+ parseFloat((data[i]['brkge'] * data[i]['rev'])/100);}
				if(!isNaN((data[i]['frtTax']))){frtTax = parseFloat(frtTax) + parseFloat((data[i]['frtTax'] * data[i]['rev'])/100);}
			}	
		}  
		var modelSumm = this.getModel('modelSumm');
		if(!isNaN(addComm)){
			modelSumm.setProperty("/aComm", addComm);
		}
		if(!isNaN(brkge)){
			modelSumm.setProperty("/brkg", brkge);
		}
		if(!isNaN(frtTax)){
			modelSumm.setProperty("/frTax", frtTax);
		}
		modelSumm.setProperty("/rev", oTotal );
		sap.ui.getCore().setModel(modelSumm,"modelSumm");
		
		this.calculateOperationExpense();
	},
///////////////////////////////calculate total liner terms on Cargo////////////////////////////////////////////////////////	
	calTotalLinTerm: function() {
		var data = sap.ui.getCore().getModel("cargo").getData()['modelData'];
		var oTotal = 0.0;
		var nRows = data.length;
		for (var i = 0; i < nRows; i++) { 
			if (isNaN(data[i]['linTerm'])){}
			else{
				oTotal = parseFloat(oTotal) + parseFloat (data[i]['linTerm']);
			}	
		}  
		var modelSumm = this.getModel('modelSumm');
		if(!isNaN(oTotal)){
			modelSumm.setProperty("/linTerm", oTotal);
		}
		sap.ui.getCore().setModel(modelSumm,"modelSumm");
		
		this.calculateOperationExpense();
	},
///////////////////////////////calculate port Idle\Work////////////////////////////////////////////////////////		
	calcPortIdleWork: function() {
		var data = sap.ui.getCore().getModel("port").getData()['modelData'];
		var nRows = data.length;
		var oTotalIdle = 0;
		var oTotalWork = 0;
		var oTotalCons = 0;
		var oTotalExp = 0;
		
		for (var i = 0; i < nRows; i++) { 
			if (isNaN(data[i]['portIdle'])){}
			else{
				oTotalIdle = parseFloat(oTotalIdle) + parseFloat(data[i]['portIdle']);							//calculate Total Idle Port Days
				oTotalWork = parseFloat(oTotalWork) + parseFloat(data[i]['portWork']);							//calculate Total Work Port Days
			}		
		}  
		
		console.log("oTotalIdle:",oTotalIdle);
		var model = this.getModel('model');
		model.setProperty("/totPortIdle", oTotalIdle);								//Set Total Idle Port Days
		model.setProperty("/totPortWork", oTotalWork);								//Set Total Work Port Days
		
		var modelSumm = this.getModel('modelSumm');

		var response = this.getVesselValues();
		
		var idleCons = oTotalIdle * response['idleDo']; 							//calculate Do Idle Consumption
		var workCons = oTotalWork * response['workDo'];								//calculate Do Work Consumption
		modelSumm.setProperty("/doIdleCons", idleCons);								//Set Do Idle Consumption
		modelSumm.setProperty("/doWorkCons", workCons);								//Set Do Work Consumption
		var price = modelSumm.getProperty("/DoPrice");								//Get DO Price
		if(price!=undefined && price!=''){
			modelSumm.setProperty("/doIdleExpense",(idleCons*price));				//Calculate & Set DO Idle Expense
			modelSumm.setProperty("/doWorkExpense",(workCons*price));				//Calculate &Set DO Work Expense
		}
		
		//calculate total DO Consumption (sea + Port(idle+ work)
		if(!isNaN(modelSumm.getProperty("/DoCons"))){oTotalCons = parseFloat(oTotalCons) + parseFloat(modelSumm.getProperty("/DoCons"))}
		if(!isNaN(idleCons)){oTotalCons = parseFloat(oTotalCons) + parseFloat(idleCons)}
		if(!isNaN(workCons)){oTotalCons = parseFloat(oTotalCons) + parseFloat(workCons)}

		//@todo : total Expense to be calculates in sum method
		//oTotalExp = oTotalCons * price;											//calculate total DO Expense (Cons*Price)
		modelSumm.setProperty("/totDoCons", oTotalCons);	
		oTotalCons = 0;
		
		idleCons = oTotalIdle * response['idleLsDo'];								//calculate LSDo Idle Consumption
		workCons = oTotalWork * response['workLsDo'];								//calculate LSDo Work Consumption
		modelSumm.setProperty("/lsDoIdleCons", idleCons);							//Set LSDo Idle Consumption
		modelSumm.setProperty("/lsDoWorkCons", workCons);							//Set LSDo Work Consumption
		price = modelSumm.getProperty("/lsDoPrice");								//Get LDO Price
		if(price!=undefined && price!=''){
			modelSumm.setProperty("/lsDoIdleExpense",(idleCons*price));				//Calculate & Set LSDO Idle Expense
			modelSumm.setProperty("/lsDoWorkExpense",(workCons*price));				//Calculate & Set LSDO Work Expense
		}
		
		//calculate total LSDO Consumption (sea + Port(idle+ work)
		if(!isNaN(modelSumm.getProperty("/lsDoCons"))){oTotalCons = parseFloat(oTotalCons) + parseFloat(modelSumm.getProperty("/lsDoCons"))}
		if(!isNaN(idleCons)){oTotalCons = parseFloat(oTotalCons) + parseFloat(idleCons)}
		if(!isNaN(workCons)){oTotalCons = parseFloat(oTotalCons) + parseFloat(workCons)}
		modelSumm.setProperty("/totLsDoCons", oTotalCons);	
		oTotalCons = 0;
		
		idleCons = oTotalIdle * response['idleFo'];									//calculate FO Idle Consumption
		workCons = oTotalWork * response['workFo'];									//calculate FO Work Consumption
		modelSumm.setProperty("/foIdleCons", idleCons);								//Set Fo Idle Consumption
		modelSumm.setProperty("/foWorkCons", workCons);								//Set Fo Work Consumption
		price = modelSumm.getProperty("/FoPrice");									//Get FO Price
		if(price!=undefined && price!=''){
			modelSumm.setProperty("/foIdleExpense",(idleCons*price));				//Calculate & Set FO Idle Expense
			modelSumm.setProperty("/foWorkExpense",(workCons*price));				//Calculate & Set FO Work Expense
		}
		//calculate total FO Consumption (sum of sea(ballast+laden) + Port(idle+ work))
		if(!isNaN(modelSumm.getProperty("/FoCons"))){oTotalCons = parseFloat(oTotalCons) + parseFloat(modelSumm.getProperty("/FoCons"))}
		if(!isNaN(idleCons)){oTotalCons = parseFloat(oTotalCons) + parseFloat(idleCons)}
		if(!isNaN(workCons)){oTotalCons = parseFloat(oTotalCons) + parseFloat(workCons)}
		modelSumm.setProperty("/totFoCons", oTotalCons);	
		oTotalCons = 0;
		
		idleCons = oTotalIdle * response['idleLsFo'];								//calculate LSFO Idle Consumption
		workCons = oTotalWork * response['workLsFo'];								//calculate LSFO Idle Consumption
		modelSumm.setProperty("/lsFoIdleCons", idleCons);							//Set LSFo Idle Consumption
		modelSumm.setProperty("/lsFoWorkCons", workCons);							//Set LSFo Work Consumption
		price = modelSumm.getProperty("/lsFoPrice");								//Get LSFO Price
		if(price!=undefined && price!=''){
			modelSumm.setProperty("/lsFoIdleExpense",(idleCons*price));				//Calculate & Set LSFO Work Expense
			modelSumm.setProperty("/lsFoWorkExpense",(workCons*price));				//Calculate & Set LSFO Work Expense
		}
		//calculate total LSFO Consumption (sum of sea(ballast+laden) + Port(idle+ work))
		if(!isNaN(modelSumm.getProperty("/lsFoCons"))){oTotalCons = parseFloat(oTotalCons) + parseFloat(modelSumm.getProperty("/lsFoCons"))}
		if(!isNaN(idleCons)){oTotalCons = parseFloat(oTotalCons) + parseFloat(idleCons)}
		if(!isNaN(workCons)){oTotalCons = parseFloat(oTotalCons) + parseFloat(workCons)}
		modelSumm.setProperty("/totLsFoCons", oTotalCons);	
		oTotalCons = 0;
		
		sap.ui.getCore().setModel(modelSumm,"modelSumm"); 
		sap.ui.getCore().setModel(model, "model"); 
		
		//@todo c/Base
/*		var oSeaDays = modelSumm.getProperty("/opProfit");
		var opProfit = modelSumm.getProperty("/opProfit");
		if(oTotalIdle!=undefined && oTotalIdle!=''){
			modelSumm.setProperty("/cBase",(opProfit / oTotalIdle));
		}*/

		this.calcCharterBase();
		this.sumBunkExp();
	},
/////////////////////////////get vessel values////////////////////////////////////////////////////////	
getVesselValues: function() {
		
		var model = this.getModel('vessel');
		var response = {};
		
		var idle = model.getData()['data4'][0]['idle'];
		var work = model.getData()['data4'][0]['work'];
		response['idleFo'] = idle;
		response['workFo'] = work;
		
		idle = model.getData()['data4'][1]['idle'];
		work = model.getData()['data4'][1]['work'];
		response['idleLsFo'] = idle;
		response['workLsFo'] = work;
		
		idle = model.getData()['data3'][0]['idle'];
		work = model.getData()['data3'][0]['work'];
		response['idleDo'] = idle;
		response['workDo'] = work;
		
		idle = model.getData()['data3'][1]['idle'];
		work = model.getData()['data3'][1]['work'];
		response['idleLsDo'] = idle;
		response['workLsDo'] = work;
		
		return response;
	},
	
/////////////////////////////calculate charter base////////////////////////////////////////////////////////	
	calcCharterBase: function() {
			//total earning amount after deducting the desired operational costs from operational profit amount
			// Charter Base = Operation Profit\Total Duration
			var modelSumm = this.getModel('modelSumm');

			//1. calculate total days
			this.calcNetDays();
			var oTotDays = this.getModel('model').getProperty("/netDays");
			
			//2.get operation Profit
			var opProfit = modelSumm.getProperty("/opProfit");
			
			//3.calculate cBase
			if(!isNaN(oTotDays) && !isNaN(opProfit)){
				modelSumm.setProperty("/cBase",(opProfit / oTotDays)); 
				sap.ui.getCore().setModel(modelSumm,"modelSumm");}
			
		},
/////////////////////////////calculate total days////////////////////////////////////////////////////////	
		calcNetDays: function() {
				var model = this.getModel('model');
				var oTotDays = 0;

				var oSeaDays = model.getProperty("/totDays");		//sea days
				var oPortIdle = model.getProperty("/totPortIdle");	//port idle days
				var oPortWork = model.getProperty("/totPortWork");	//port work days
				
				if(!isNaN(oSeaDays)){oTotDays = parseFloat(oTotDays) + parseFloat(oSeaDays)}
				if(!isNaN(oPortIdle)){oTotDays = parseFloat(oTotDays) + parseFloat(oPortIdle)}
				if(!isNaN(oPortWork)){oTotDays = parseFloat(oTotDays) + parseFloat(oPortWork)}
				
				model.setProperty("/netDays",oTotDays);
				sap.ui.getCore().setModel(model,"model");
			},
	
});