/* your code should go here */
$(document).ready(function(){

var tmp="<li>" +
          "<div class='icon'>" +
            "<img src='img/icons/I.png'>" +      
          "</div>" +
          "<div class='stats'>" +  
            "<h2>D</h2>" +
            "<strong>min</strong> XºC  " +
            "<strong>max</strong> YºC" +
          "</div>" +
        "</li>";

var Controller = {
    init: function(){
        View.init();
        
    },
    min: function(settimana, giorno){
        var minima=100;
        for(var i=0;i<settimana.length;i++){
            if(settimana[i].day==giorno){
                if(settimana[i].temperature<minima){
                    minima=settimana[i].temperature;
                }
            }
        }
        return minima;
    },
    max: function(settimana, giorno){
         var massima=-100;
        for(var i=0;i<settimana.length;i++){
            if(settimana[i].day==giorno){
                if(settimana[i].temperature>massima){
                    massima=settimana[i].temperature;
                }
            }
        }
        return massima;
    },
    getData: function(){
        return data;
    }
}

var View = {
    init: function(){
        View.startfilter();
    },
    startfilter: function(){
        $("#btn-filter").on("click", function (event) {
            var citta= $("#sel").val();
            var arraydata = Controller.getData();
            var arraycitta = [];
            var j=0;
            for(var i=0; i<arraydata.length; i++){
                
                if(arraydata[i].city==citta){
                    console.log("ciao");
                    arraycitta[j]=arraydata[i];
                    j++;
                }
            }
            View.show(arraycitta);
        }
      )
    },
    show: function(Day){
        $("#summary").html("");
        for(var i=0;i<Day.length;i++){
            if(((i+1)%4)==0){
            var item = tmp.replace("I", Day[i].condition);
            item= item.replace("D", Day[i].day);
            item= item.replace("X", Controller.min(Day, Day[i].day));
            item= item.replace("Y", Controller.max(Day, Day[i].day));
            $("#summary").append(item);
            }
        }
    }
}

Controller.init();

});


