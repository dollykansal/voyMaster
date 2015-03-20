<!DOCTYPE HTML>
<html>
	<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
<link rel="stylesheet" type="text/css" href="static/stylesheets/custom.css">

<!----------------------------------------- bootstrap code --------------------------------------------------->
<script src="resources/sap-ui-core.js" id="sap-ui-bootstrap"
	data-sap-ui-libs="sap.ui.commons,sap.ui.table,sap.viz,sap.suite.ui.commons,sap.ui.ux3"
	data-sap-ui-xx-bindingSyntax="complex"
	data-sap-ui-theme="sap_goldreflection" data-sap-ui-debug=true>
</script>
<!------------------------------- include javascript files with UI elements ---------------------------------->
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="static/javascripts/voyageDataService.js"></script> 
<script src="static/javascripts/vesselavail.js"></script> 
<script src="static/javascripts/createTable.js"></script>
<script src="static/javascripts/frtsim.js"></script>
<script src="static/javascripts/ganttchart.js"></script>
<script src="static/javascripts/stackedChartH.js"></script>
<script src="static/javascripts/chart.js"></script>
<script src="static/javascripts/vesselMaster.js"></script>
<script src="static/javascripts/header.js"></script>
<script src="static/javascripts/final_cargo.js"></script>
<script src="static/javascripts/portrot.js"></script>
<script src="static/javascripts/final_vessel.js"></script>
<script src="static/javascripts/demandLeft.js"></script>
<script src="static/javascripts/bunk_sim.js"></script>
<script src="static/javascripts/bunkCal.js"></script>
<script src="static/javascripts/estDashboard.js"></script>
<script src="static/javascripts/summary.js"></script>
<script type="text/javascript"
	src="static/vendor/fusioncharts-suite-xt/js/fusioncharts.js"></script>
<script type="text/javascript"
	src="static/vendor/fusioncharts-suite-xt/js/fusioncharts.widgets.js"></script>
<script type="text/javascript"
	src="static/vendor/fusioncharts-suite-xt/js/themes/fusioncharts.theme.fint.js"></script>
		<!-- add sap.ui.table,sap.ui.ux3 and/or other libraries to 'data-sap-ui-libs' if required -->

		<script>
				window.vesselMaster = JSON.parse('${vesselMaster}');
				window.demands = JSON.parse('${demands}');
				sap.ui.localResources("static/voyageest");
/* 				var view = sap.ui.view({id:"idVoyage11", viewName:"voyageest.Voyage1", type:sap.ui.core.mvc.ViewType.JS});
				view.placeAt("content"); */
				
				var mContent = {};
				var view1 = sap.ui.view({id:"estViewId1", viewName:"static/voyageest.Estimate1", type:sap.ui.core.mvc.ViewType.JS});
				var view = sap.ui.view({id:"estViewId", viewName:"static/voyageest.Estimate", type:sap.ui.core.mvc.ViewType.JS});
				var viewHome = sap.ui.view({id:"homeViewId", viewName:"static/voyageest.Home", type:sap.ui.core.mvc.ViewType.JS});
				
				var oShell = new sap.ui.ux3.Shell("myShell", {
					appTitle:"Voyage Estimator",
					worksetItems:[
					              new sap.ui.ux3.NavigationItem("wi_hom_id",{
					            	  key: "Home",
					            	  text: "Home"
					              }), new sap.ui.ux3.NavigationItem("wi_est_id",{
					            	  key: "Estimate",
					            	  text: "Estimate",
					            	  subItems:[
					             				new sap.ui.ux3.NavigationItem({key:"wi_est_overview",text:"Overview"}),
					             				new sap.ui.ux3.NavigationItem({key:"wi_est_create",text:"New Estimate"})
					              				]
					              }),
					              new sap.ui.ux3.NavigationItem("wi_voy_id",{
					            	  key: "Voyage",
					            	  text: "Voyage",
					            	  subItems:[
					             				new sap.ui.ux3.NavigationItem({key:"wi_voy_overview",text:"Overview"}),
					             				new sap.ui.ux3.NavigationItem({key:"wi_voy_create",text:"New Voyage"})
					              				]
					              })
					              ],
/*  					  worksetItemSelected: function (e){
						  //this.removeAllContent();
						  var selected = e.getParameter("key");

						  var view = sap.ui.getCore().byId(selected);
						  
						  console.log("selected",selected,"view",view);
						  if(selected == undefined){
							  view = new sap.ui.view({
								  id: selected,
								  viewName: "voyage1." + selected,
								  type: sap.ui.core.mvc.ViewType.JS
								  
							  })
							  console.log("new view", view);
						  }else{
							  console.log("old view");
						  }
						 this.addContent(view); 
						  
					  },  */
					  ////////////////////////////////////////////////////////////////////////////////////
  					  worksetItemSelected: function (e){
  						var itemKey = e.getParameter("key");
  						var oItem = e.getParameter("item");
  						
  						// Disable selection of disabled items
  						if (!oItem.getEnabled()) {
  							oEvent.preventDefault();
  							return;
  						}
  						oShell.setContent(getContent(itemKey));
						  
					  },  
					  /////////////////////////////////////////////////////////////////////////////////''
					  
/* 		              content: [new sap.ui.view({
		            	  id: "estViewID",
		            	  viewName: "voyage1.Estimate",
		            	  type: sap.ui.core.mvc.ViewType.JS
		              })]  */ 
				});
				// content generation and buffering
				function getContent(id) {
					if (!mContent[id]) {
						if (id == "wi_est_overview") {
							mContent[id] = new estDash();
						}else if (id == "wi_est_create") {
							mContent[id] = sap.ui.getCore().byId("estViewId");
						}else if (id == "Home") {
							mContent[id] = sap.ui.getCore().byId("homeViewId");
						}else if (id == "wi_voy_create") {
							mContent[id] = sap.ui.getCore().byId("estViewId");
						}else if (id == "wi_voy_overview") {
							mContent[id] = new estDash();
						}
					}else{
					}
					return mContent[id];
				}
				
/* 				oShell.attachWorksetItemSelected(function(oEvent){
					var itemKey = oEvent.getParameter("key");
					var oItem = oEvent.getParameter("item");
					oShell.setContent(getContent(itemKey));
					
				)}; */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				        var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			width : '450px',
			columns : 4
		});
		oMatrix.setWidths('100px', '70px','100px', '70px');
	
		var oLabel1 = new sap.ui.commons.Label({
			text : 'Daily Current Profit'
		});
		// create a simple Input field
		var oInput1 = new sap.ui.commons.TextField('input1');
		oInput1.setValue("0.00");
		oInput1.setTooltip("Daily Current Profit");
		//oInput1.attachChange(function(){alert('Text changed to :'+ oInput1.getValue());});
		oLabel1.setLabelFor(oInput1);
		//oMatrix.createRow(oLabel1, oInput1);
	
		var oLabel2 = new sap.ui.commons.Label({
			text : 'Total Current Profit'
		});
		var oInput2 = new sap.ui.commons.TextField('input2');
		oInput2.setValue("0.00");
		oInput2.setTooltip("Total Current Profit");
		oLabel2.setLabelFor(oInput2);
		oMatrix.createRow(oLabel1, oInput1,oLabel2, oInput2);
	
		var oLabel3 = new sap.ui.commons.Label({
			text : 'Daily Expected Profit'
		});
		var oInput3 = new sap.ui.commons.TextField('input3');
		oInput3.setValue("0.00");
		oInput3.setTooltip("Daily Expected Profit");
		oLabel3.setLabelFor(oInput3);
		//oMatrix.createRow(oLabel3, oInput3);

		var oLabel4 = new sap.ui.commons.Label({
			text : 'Total Expected Profit'
		});
		var oInput4 = new sap.ui.commons.TextField('input4');
		oInput4.setValue("0.00");
		oInput4.setTooltip("Total Expected Profit");
		oLabel4.setLabelFor(oInput4);
		oMatrix.createRow(oLabel3, oInput3,oLabel4, oInput4);
        
		//Create an instance of the table control
		var oTable = new sap.ui.table.Table({
			visibleRowCount: 1,
			firstVisibleRow: 1,
			columnHeaderHeight:1,
			rowHeight:1,
			columnHeight:1,
			width: "500px",
		 	selectionMode: sap.ui.table.SelectionMode.Single
		});
		
		var oColumn = new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Account"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "account"),
			sortProperty: "account",
			filterProperty: "account",
			width: "40px"
		});
		oTable.addColumn(oColumn);


		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Cargo Name"}),
			template: new sap.ui.commons.TextField().bindProperty("value", "cargoNam"),
			sortProperty: "cargoNam",
			filterProperty: "cargoNam",
			width: "40px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Checked"}),
			template: new sap.ui.commons.CheckBox().bindProperty("checked", "checked"),
			sortProperty: "checked",
			filterProperty: "checked",
			width: "40px",
			hAlign: "Center"
		}));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Frt."}),
			template: new sap.ui.commons.TextField().bindProperty("value", "frt"),
			sortProperty: "frt",
			filterProperty: "frt",
			width: "40px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Revenue"}),
			template: new sap.ui.commons.TextField().bindProperty("value", "revenue"),
			sortProperty: "revenue",
			filterProperty: "revenue",
			width: "40px"
		}));
		//Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		var aData = [
		         	{ account: "Seafuture", checked: false, cargoNam: "Hot Coil", frt:"0.00", revenue: "0.00"}
		         ];
		oModel.setData({modelData: aData});
		oTable.setModel(oModel);
		oTable.bindRows("/modelData");

		//Initially sort the table
		oTable.sort(oTable.getColumns()[0]);
		//oMatrix.createRow(oTable);
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				var c = sap.ui.commons; /* shorthand */
				function checkClose(code) {
					var reallyClose = confirm("Close "+code+" ?")
/* 					if (!reallyClose && oEvent) { // if called as event handler, tell the event to not proceed
						oEvent.preventDefault();
					} */
					return reallyClose; // when called directly, return the result
				}
				var oFrtSim = new sap.ui.ux3.ToolPopup("frtSim", {
					title: "Freight Simulator",
					tooltip: "Freight Simulator",
					content:[oMatrix, oTable],
					buttons: [
						/* new c.Button("saveContactButton", {text:"Save",press:function(){
							oFrtSim.close();
							var now = (new Date()).toUTCString();
							oShell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
								text : "New contact saved successfully (click to remove)",
								timestamp : now,
								level : sap.ui.core.MessageType.Success
							}));
						}}), */
						new c.Button("cancelButton", {text:"Cancel",press:function(){
							// simulate a case where cancelling is not allowed, e.g. because of unsaved data
							var reallyClose = checkClose("Freight Simulator"); 
							if (reallyClose) {
								oFrtSim.close();
							}
						}})
					],
					close:checkClose
				});
				oFrtSim.setIcon("static/images/image_green.gif");
				oFrtSim.setIconHover("static/images/image_green.gif");
				
				var vessel = new Bunker().createBunker();
				var oBunkSim = new sap.ui.ux3.ToolPopup("bunkSim", {
					title: "Bunker Simulator",
					tooltip: "Bunker Simulator",
					content:[vessel],
					buttons: [
						/* new c.Button("saveContactButton", {text:"Save",press:function(){
							oBunkSim.close();
							var now = (new Date()).toUTCString();
							oShell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
								text : "New contact saved successfully (click to remove)",
								timestamp : now,
								level : sap.ui.core.MessageType.Success
							}));  #007DC0
						}}), */
						new c.Button("cancelBunkButton", {text:"Cancel",press:function(){
							// simulate a case where cancelling is not allowed, e.g. because of unsaved data
							var reallyCloseB = checkClose("Bunker Simulator"); 
							if (reallyCloseB) {
								oBunkSim.close();
							}
						}})
					],
					close:checkClose
				});
				oBunkSim.setIcon("static/images/image_red.jpg");
				oBunkSim.setIconHover("static/images/image_red.jpg");
				
				
				oShell.addToolPopup(oFrtSim);
				oShell.addToolPopup(oBunkSim);
 				mContent["Home"] = sap.ui.getCore().byId("homeViewId");
 				oShell.addContent(mContent["Home"]);
 				//mContent["wi_est_create"] = sap.ui.getCore().byId("estViewId")
				//oShell.addContent(mContent["wi_est_create"]); 
				oShell.placeAt("content");
		</script>

	</head>
	<body class="sapUiBody" role="application">
		<div id="content"></div>
	</body>
</html>