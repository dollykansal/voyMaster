// final chart for cargo - status
var chartCargoHelper = function(){
	this.createGanttChart=function(){
    	FusionCharts.ready(function(){
    		$.getJSON('static/json/data.json',function(data){
    			 var weeklyStatusChart = new FusionCharts(data)
          	 	 weeklyStatusChart.render();
    		});
    	});
	}
}
window.chartCargoHelper = new chartCargoHelper();