var cityName;
var apiKey = "0c7ba18169b66501457ebb15183b7c1d";

$(document).ready(function() {
  $("#button").on("click", function() {
    cityName = $("#cityName").val();
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityName +
      "&appid=" +
      apiKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response.list[0].dt_txt);
      console.log(response.list[0].main.temp);
      console.log(response.list[0].main.feels_like);
      console.log(response.list[0].weather[0].description);
      console.log(response.list[0].wind.speed);

      $("#today").append(
        "<div><li> Today: " + response.list[1].dt_txt + "</li></div>"
      );
      $("#today").append("<li> Temp: " + response.list[0].main.temp + "</li>");
      $("#today").append("<li>" + response.list[0].main.feels_like + "</li>");
      $("#today").append(
        "<li> Description: " + response.list[0].weather[0].description + "</li>"
      );
      $("#today").append("<li> Wind: " + response.list[0].wind.speed + "</li>");

      $("#next1").append(
        "<div><li> Tomorrow: " + response.list[9].dt_txt + "</li></div>"
      );
      $("#next1").append("<li> Temp: " + response.list[8].main.temp + "</li>");
      $("#next1").append("<li>" + response.list[8].main.feels_like + "</li>");
      $("#next1").append(
        "<li> Description: " + response.list[8].weather[0].description + "</li>"
      );
      $("#next1").append("<li> Wind: " + response.list[8].wind.speed + "</li>");

      $("#next2").append(
        "<div><li> Date: " + response.list[17].dt_txt + "</li></div>"
      );
      $("#next2").append("<li> Temp: " + response.list[16].main.temp + "</li>");
      $("#next2").append("<li>" + response.list[16].main.feels_like + "</li>");
      $("#next2").append(
        "<li> Description: " +
          response.list[16].weather[0].description +
          "</li>"
      );
      $("#next2").append(
        "<li> Wind: " + response.list[16].wind.speed + "</li>"
      );

      $("#next3").append(
        "<div><li> Date: " + response.list[25].dt_txt + "</li></div>"
      );
      $("#next3").append("<li> Temp: " + response.list[24].main.temp + "</li>");
      $("#next3").append("<li>" + response.list[24].main.feels_like + "</li>");
      $("#next3").append(
        "<li> Description: " +
          response.list[24].weather[0].description +
          "</li>"
      );
      $("#next3").append(
        "<li> Wind: " + response.list[24].wind.speed + "</li>"
      );

      $("#next4").append(
        "<div><li> Date: " + response.list[25].dt_txt + "</li></div>"
      );
      $("#next4").append("<li> Temp: " + response.list[24].main.temp + "</li>");
      $("#next4").append("<li>" + response.list[24].main.feels_like + "</li>");
      $("#next4").append(
        "<li> Description: " +
          response.list[24].weather[0].description +
          "</li>"
      );
    });
  });
});
