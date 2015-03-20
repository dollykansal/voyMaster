var Header = function(){
	var oData = { 
			"items": [{ 
				"type": "Vessel", "name": "Seagate", "href": "#",
				"description":  "Seagate", "icon": "images/image_green.gif",
				"vesselData": [ 
					{ "label": "Vessel Name", "text": "Seagate" },
					{ "label": "Description", "text": "This vessel is chartered" },
					{ "label": "Type", "text": "TCT" },
					{ "label": "DWT", "text": "10000 MT" },
					{ "label": "Full Laden Draft", "text": "10000" },
					{ "label": "Owner", "text": "ABC Corp" }
					]}
		]};
	
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData(oData);
	sap.ui.getCore().setModel(oModel);
	
	var oLayout1 = new sap.ui.layout.form.GridLayout();


	// Template for all QuickViews in a feed
	var oQuickViewTemplate = new sap.ui.ux3.QuickView({
		type:			"{type}",
		firstTitle:		"{name}",
		firstTitleHref:	"{href}",
		secondTitle:	"{description}",
		icon:			"{icon}",
		content:		createQuickViewContent(),
		//navigate:		onNavigate,
		open:			onOpen,
		showActionBar:	false

	}).bindContext("/items/0"); // select the first item in the "items" array
	function createQuickViewContent(){
		// In form of "label: value", the value can be either a link or a text view
		// Both (link and text view are created but only one is shown depending on the contents)
		var oLabel = new sap.ui.commons.TextView()
			.bindProperty("text", "label", function( label ){ return label ? label + ":" : ""; });
		var oTextView = new sap.ui.commons.TextView({text : "{text}"})
			.bindProperty("visible", "href", function( href ){ return !href; });
		var oLink = new sap.ui.commons.Link({text : "{text}", href: "{href}"})
			.bindProperty("visible", "href", function( href ){ return !!href; });

		var c = sap.ui.commons;
		var oLeftCell = new c.layout.MatrixLayoutCell({hAlign : c.layout.HAlign.End, vAlign : c.layout.VAlign.Top, content:[oLabel]});
		oLeftCell.addStyleClass("qvlabel");
		var oRightCell = new c.layout.MatrixLayoutCell({hAlign : c.layout.HAlign.Begin, vAlign : c.layout.VAlign.Top, content:[oTextView, oLink]});
		oRightCell.addStyleClass("qvvalue");

		var oRow = new c.layout.MatrixLayoutRow({cells:[oLeftCell, oRightCell]});

		var oContent = new c.layout.MatrixLayout({layoutFixed:true, widths: ["45%", "140px"]});
		oContent.bindAggregation("rows", "vesselData", oRow);

		oContent.addDelegate({onAfterRendering:jQuery.proxy(setKeyboardNavigation,oContent)});

		return oContent;
	}

	// Keyboard navigation with arrow keys over cells in a matrix layout
	function setKeyboardNavigation(){
		// "this" is expected to be a matrix layout
		var oFocusRef = this.getDomRef(),
			aCells = oFocusRef.getElementsByTagName("TD"),
			aDomRefs = [];
		jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
		for (var i=0;i<aCells.length;i++) {
			aDomRefs.push(aCells[i].firstChild);
		}
		if (!this.QVItemNavigation) {
			this.QVItemNavigation = new sap.ui.core.delegate.ItemNavigation();
			this.addDelegate(this.QVItemNavigation);
		}
		this.QVItemNavigation.setRootDomRef(oFocusRef);
		this.QVItemNavigation.setItemDomRefs(aDomRefs);
		this.QVItemNavigation.setCycling(false);
		this.QVItemNavigation.setSelectedIndex(0);
		this.QVItemNavigation.setPageSize(aDomRefs.length);
	}
	// Arrange navigation with arrow keys over the QuickView content
	function onOpen(event){
		var oQuickViewContent = event.getSource().getContent()[0];
		// Data is loaded and content is rendered at this point of time, 
		// so call the setKeyboardNavigation function directly
		//setKeyboardNavigation.call(oQuickViewContent);
	}
	var oLink1 = new sap.ui.commons.Link({
		text: "Seagate", 
		tooltip: oQuickViewTemplate,
		press: function() {return oQuickViewTemplate}});
	
/*	var oForm1 = new sap.ui.layout.form.Form("F1",{
		title: new sap.ui.core.Title({text: "Vessel Header", tooltip: "Vessel Header", height: "20%"}),
		layout: oLayout1,
		formContainers: [
			new sap.ui.layout.form.FormContainer("F1C1"),{
				//title: "Person data",
				formElements: [
						new sap.ui.layout.form.FormElement({
							label: new sap.ui.commons.Label({text:"Vessel Name",
								layoutData: new sap.ui.layout.GridData({span: "L1 M1 S1"})
									new sap.ui.core.VariantLayoutData({
									multipleLayoutData: [new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
									                     new sap.ui.layout.form.GridElementData({hCells: "1"}),
									                     new sap.ui.layout.GridData({span: "L1 M1 S12"})]
								})
					}),
					fields: [oLink1]

						}),
	]}
]
});*/
	var oLayout1 = new sap.ui.layout.form.GridLayout();
/*	var oForm1 = new sap.ui.layout.form.SimpleForm(
			"sf1",
			{
				maxContainerCols: 1,
				content:[
						new sap.ui.core.Title({text:"Vessel"}),
						new sap.ui.commons.Label({text:"Vessel"}),
						oLink1,
						new sap.ui.commons.Label({text:"Laycan"}),
						new sap.ui.commons.TextField({value:"4"}),
						new sap.ui.commons.Label({text:"Mode"}),
						new sap.ui.commons.TextField({value:"Eco"}),
						new sap.ui.commons.Label({text:"Ballast"}),
						new sap.ui.commons.TextField({value:"12"}),
						new sap.ui.commons.Label({text:"Laden"}),
						new sap.ui.commons.TextField({value:"14"}),
						new sap.ui.commons.Label({text:"FO Type"}),
						new sap.ui.commons.TextField({value:"380"}),
						new sap.ui.commons.Label({text:"DO Type"}),
						new sap.ui.commons.TextField({value:"DMA"})
			]});*/
//layout: oLayout1
	var oButtonSave = 		new sap.ui.commons.Button({
		text : "Save Estimate",
		style: sap.ui.commons.ButtonStyle.Accept,
		press: function() {window.dataService.saveData(); }
	});
	
	var oForm1 = new sap.ui.layout.form.Form("F1",{
		//title: new sap.ui.core.Title({text: "Selected Vessel", tooltip: "Title tooltip"}),
		//width: "90%",
		layout: oLayout1,
		formContainers: [
			new sap.ui.layout.form.FormContainer("C1",{
				formElements: [
					new sap.ui.layout.form.FormElement({
						//label: new sap.ui.commons.Label({text: "Name", layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
						fields: [
									new sap.ui.commons.Label({text:"Vessel:"}),
									oLink1,
									new sap.ui.commons.Label({text:"Mode:"}),
									new sap.ui.commons.TextField({value:"Eco",editable : false}),
									new sap.ui.commons.Label({text:"FO Type:",textAlign : sap.ui.core.TextAlign.Right}),
									new sap.ui.commons.TextField({value:"380",editable : false}),
									new sap.ui.commons.Label({text:"FO Laden:",textAlign : sap.ui.core.TextAlign.Right}),
									new sap.ui.commons.TextField({value:"12",editable : false}),
									new sap.ui.commons.Label({text:"LSFO Laden:",textAlign : sap.ui.core.TextAlign.Right}),
									new sap.ui.commons.TextField({value:"14",editable : false}),
									new sap.ui.commons.Label({text:"DO Type:",textAlign : sap.ui.core.TextAlign.Right}),
									new sap.ui.commons.TextField({value:"DMB",editable : false}),
									new sap.ui.commons.Label({text:"DO:", textAlign : sap.ui.core.TextAlign.Right}),
									new sap.ui.commons.TextField({value:"25",editable : false}),
									//new sap.ui.commons.Label({text:"LSDO:",textAlign : sap.ui.core.TextAlign.Right}),
									//new sap.ui.commons.TextField({value:"20",editable : false}),
									oButtonSave
						]
					})
					/*new sap.ui.layout.form.FormElement({
						//label: new sap.ui.commons.Label({text: "Name", layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
						fields: [
									new sap.ui.commons.Label({text:""}),
									new sap.ui.commons.Label({text:""}),
									//new sap.ui.commons.TextField({value:""}),
									new sap.ui.commons.Label({text:"Mode:"}),
									new sap.ui.commons.TextField({value:"Eco",editable : false}),
									new sap.ui.commons.Label({text:"Ballast:"}),
									new sap.ui.commons.TextField({value:"12",editable : false}),
									new sap.ui.commons.Label({text:"Laden:"}),
									new sap.ui.commons.TextField({value:"14",editable : false}),
									new sap.ui.commons.Label({text:"FO Type:"}),
									new sap.ui.commons.TextField({value:"380",editable : false}),
									new sap.ui.commons.Label({text:"DO Type:"}),
									new sap.ui.commons.TextField({value:"DMA",editable : false})
						]
					})*/
				]
			})
		]
	});
return oForm1;

	};
