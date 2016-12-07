$(document).ready(function() {
  $('#zipform').on('submit', function(event) {
    var loc = $('#zipcode').val();
    var lat;
    var lng;
    var xy;
    $.get(
      'https://www.zipcodeapi.com/rest/js-rTyMicsfWrUvifDkyeNHgt1EysudYy0pszcKLFZH6Udp9QJI5wqlZs0yUuMS3Niw/info.json/'+loc+'/degrees',
      function (data) {
        lat = Math.round(data.lat);
        lng = Math.round(data.lng);
        xy = "https://www.google.com/maps/search/auto+shop/@" + lat +"," + lng +",11z/data=!3m1!4b1";
        $('#link').append(
        document.createTextNode("https://www.google.com/maps/search/auto+shop/@" + lat +"," + lng +",11z/data=!3m1!4b1")
        );
        document.write("<a href=\"https://www.google.com/maps/search/auto+shop/@" + lat +"," + lng +",11z/data=!3m1!4b1\">");
        document.write("Click here to leave our site and proceed to google maps!" + " " + xy);
        document.write("</a>");
        });
        event.preventDefault();
  });
});

$(document).ready(function(){
  $("#brand").click(function(){
    $("#dropdown").slideDown();
  });
 $("#dropdown").mousemove(function(){
    $("#dropdown").slideUp();
  });
});

function formFunction() {
    if (confirm("Press Yes if you want to send this to us") == true) {
        window.confirm("You submission has been sent successfully!");
    } else {
        window.alert("You pressed Cancel :C");
    }
    formFunction.preventDefault();
}
