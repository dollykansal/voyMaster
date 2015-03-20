sap.ui.jsfragment("bunkCal.fragments.JSFragmentDialog", {
    createContent: function(oController) {
        var oDialog = new sap.ui.commons.Dialog({title: "Bunker Expense Details"});

        var oSimpleForm = new sap.ui.layout.form.SimpleForm(
        		"sf1",
        		{
        			maxContainerCols: 2,
        			content:[
        					new sap.ui.core.Title({text:"IFO"}),
        					new sap.ui.commons.Label({text:""}),
        					new sap.ui.commons.TextView({text:"Consumption"}),
        					new sap.ui.commons.TextView({text:"Expense"}),
        					new sap.ui.commons.Label({text:"Ballast(Sea)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/sumBunkExp}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/sumBunkExp}", editable: false}),
        					new sap.ui.commons.Label({text:"Laden(Sea)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/FoExpense}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/FoCons}", editable: false}),
        					new sap.ui.commons.Label({text:"Idle(Port)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/foIdleCons}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/foIdleExpense}", editable: false}),
        					new sap.ui.commons.Label({text:"Work(Port)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/foWorkCons}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/foWorkExpense}", editable: false}),

        					new sap.ui.core.Title({text:"MDO"}),
        					new sap.ui.commons.Label({text:""}),
          					new sap.ui.commons.TextView({text:"Consumption"}),
        					new sap.ui.commons.TextView({text:"Expense"}),
        					new sap.ui.commons.Label({text:"Ballast(Sea)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/sumBunkExp}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/sumBunkExp}", editable: false}),
        					new sap.ui.commons.Label({text:"Laden(Sea)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/DoExpense}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsDoExpense}", editable: false}),
        					new sap.ui.commons.Label({text:"Idle(Port)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/doIdleCons}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/doIdleExpense}", editable: false}),
        					new sap.ui.commons.Label({text:"Work(Port)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/doWorkCons}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/doWorkExpense}", editable: false}),

        					new sap.ui.core.Title({text:"LSFO"}),
        					new sap.ui.commons.Label({text:""}),
          					new sap.ui.commons.TextView({text:"Consumption"}),
        					new sap.ui.commons.TextView({text:"Expense"}),
        					new sap.ui.commons.Label({text:"Ballast(Sea)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/sumBunkExp}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/sumBunkExp}", editable: false}),
        					new sap.ui.commons.Label({text:"Laden(Sea)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsFoExpense}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsFoCons}", editable: false}),
        					new sap.ui.commons.Label({text:"Idle(Port)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsFoIdleCons}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsFoIdleExpense}", editable: false}),
        					new sap.ui.commons.Label({text:"Work(Port)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsFoWorkCons}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsFoWorkExpense}", editable: false}),

        					new sap.ui.core.Title({text:"LSDO"}),
        					new sap.ui.commons.Label({text:""}),
          					new sap.ui.commons.TextView({text:"Consumption"}),
        					new sap.ui.commons.TextView({text:"Expense"}),
        					new sap.ui.commons.Label({text:"Ballast(Sea)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/sumBunkExp}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/sumBunkExp}", editable: false}),
        					new sap.ui.commons.Label({text:"Laden(Sea)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsDoExpense}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsDoCons}", editable: false}),
        					new sap.ui.commons.Label({text:"Idle(Port)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsDoIdleCons}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsDoIdleExpense}", editable: false}),
        					new sap.ui.commons.Label({text:"Work(Port)"}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsDoWorkCons}", editable: false}),
        					new sap.ui.commons.TextField({value:"{modelSumm>/lsDoWorkExpense}", editable: false}),
        					]
        		});
        			
    	oDialog.addContent(oSimpleForm);
    	oDialog.setWidth('80%');
    	oDialog.setHeight('65%');
        
        var oButton = new sap.ui.commons.Button({
            text: "Close",
            press: function(){oDialog .close();}
        });
        oDialog.addButton(oButton);

        return oDialog;
    }
});