sap.ui.jsfragment("vesselMaster.fragments.JSFragmentDialog", {
    createContent: function(oController) {
        var oDialogVessel = new sap.ui.commons.Dialog({title: "Vessel Details"});
        var oButton = new sap.ui.commons.Button({
            text: "Close",
            press: function(){oDialogVessel .close();}
        });
        oDialogVessel.addButton(oButton);

        return oDialogVessel;
    }
});