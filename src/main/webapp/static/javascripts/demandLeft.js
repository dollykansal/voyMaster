 var Demand = function(){
	//Create the Accordion control
	var oAccordion = new sap.ui.commons.Accordion("accordionA"); 
	for(var x=0;x<window.demands.length;x++){
		var demand = window.demands[x];
		var oSection1 = new sap.ui.commons.AccordionSection("Demand"+demand['demandId']);		
		oSection1.setTitle(demand['account']+","+demand['cargoName']);		
		oSection1.setTooltip(demand['account']);
		oSection1.addContent(new sap.ui.commons.TextView({text:demand['account']}));
		var text1 = new sap.ui.commons.TextView({text:demand['cargoName']});
		text1.addStyleClass("hidden");
		oSection1.addContent(text1);
		var text2 = new sap.ui.commons.TextView({text:demand['loadingPort']});
		text2.addStyleClass("hidden");
		oSection1.addContent(text2);
		var text3 = new sap.ui.commons.TextView({text:demand['dischargePort']});
		text3.addStyleClass("hidden");
		oSection1.addContent(text3);
		oAccordion.addSection( oSection1 );
	}
	oAccordion.onAfterRendering = function() {
		sap.ui.commons.Accordion.prototype.onAfterRendering.apply(this, arguments);
	    this.$().find('.sapUiAcdSection').draggable({
	      connectToDroppable: "#cargo .sapUiTableCnt",
	      revert:"invalid",
	      helper:"clone",
	      cursor:"pointer",
	      zIndex: 999999,
	      containment:"window",
	      start: function(event,ui){
//	    	  var id = ui.helper.context.id;
//	    	  $("#"+id+"-hdr").trigger("click");
	      },
	      drag:function(event, ui) {
	    	  $("div.sapUiAcdSectionHdr").parent().parent().parent().css("overflow","visible");
	      },
	      stop: function(event, ui){
//	    	  var id = ui.helper.context.id;
//	    	  $("#"+id+"-hdr").trigger("click");
	      }
	    });
	  };
	return oAccordion;
};