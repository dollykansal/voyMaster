var TableHelper = function(){
	var defaults={
	id:'',
	//title: "",
	visibleRowCount: 1,
	firstVisibleRow: 1,
//	columnHeaderHeight:25,
	rowHeight:1,
	columnHeight:1,
	selectionMode: sap.ui.table.SelectionMode.Single,
	enableColumnFreeze:true,
	showColumnVisibilityMenu:true,
	toolbar:"",
	};
	this.createTable=function(optionsC){
		var options = $.extend( {}, defaults, optionsC);
		var oTable = new sap.ui.table.Table({
			id:options.id,
			title: options.title,
			visibleRowCount: options.visibleRowCount,
			firstVisibleRow: options.firstVisibleRow,
			columnHeaderHeight:options.columnHeaderHeight,
			rowHeight:options.rowHeight,
			columnHeight:options.columnHeight,
			toolbar:options.toolbar
		});
		return oTable;
	},
	this.createColumn = function(name,title,width,template){
		if(template=="TV"){
			return new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: title}),
				template: new sap.ui.commons.TextView().bindProperty("text", name),
				sortProperty: name,
				filterProperty: name,
				width: width
			});
		}else if(template == "TF"){
			return new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: title}),
				template: new sap.ui.commons.TextField().bindProperty("value", name),
				sortProperty: name,
				filterProperty: name,
				width: width
			});
		}else if(template == "CH"){
			return new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: title}),
				template: new sap.ui.commons.CheckBox().bindProperty("checked", name),
				sortProperty: name,
				filterProperty: name,
				width:  width,
				hAlign: "Center"
			});
		}
	},
	this.createColumn1 = function(name,title,width,template){
		if(template=="TV"){
			return new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: title}),
				template: new sap.ui.commons.TextView().bindProperty("text", name),
				sortProperty: name,
				filterProperty: name,
				width: width
			});
		}else if(template == "TF"){
			var textField = new sap.ui.commons.TextField();
			textField.bindProperty("value", name);
			return new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: title}),
				template:textField,
				sortProperty: name,
				filterProperty: name,
				width: width
			});
		}else if(template == "CH"){
			return new sap.ui.table.Column({
				label: new sap.ui.commons.Label({text: title}),
				template: new sap.ui.commons.CheckBox().bindProperty("checked", name),
				sortProperty: name,
				filterProperty: name,
				width:  width,
				hAlign: "Center"
			});
		}
	},
	this.createRadioButton = function(tooltip){
		return new sap.ui.commons.RadioButtonGroup({
			tooltip : tooltip,
			select : function() {alert('RadioButton ' + oRBG1.getSelectedItem().getText());} 
		});
	},
	this.createItem = function(text,key){
		return new sap.ui.core.Item({
			text : text, 
			tooltip : text,
			key : key});
	}
}
window.helper = new TableHelper();