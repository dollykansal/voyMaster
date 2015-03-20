// final chart for port rotation - gantt
var chartHelper = function(){
	this.createGanttChart=function(){
		FusionCharts.ready(function(){
    		$.getJSON('static/json/data_gantt.json',function(data_gantt){
    			 var weeklyStatusChart1 = new FusionCharts(data_gantt)
          	 	 weeklyStatusChart1.render();
    		});
    	});
	}
}
window.chartHelper = new chartHelper();
