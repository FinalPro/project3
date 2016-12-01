$(document).ready(function() {
  $('#zipform').on('submit', function(event) {
    var loc = $('#zipcode').val();
    var lat;
    var lng;
    $.get(
      'https://www.zipcodeapi.com/rest/js-rTyMicsfWrUvifDkyeNHgt1EysudYy0pszcKLFZH6Udp9QJI5wqlZs0yUuMS3Niw/info.json/'+loc+'/degrees',
      function (data) {
        lat = Math.round(data.lat);
        lng = Math.round(data.lng);
        $('#print').append(
        document.createTextNode(
"https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=find+auto+shop+around+you&rflfq=1&rlha=0&rllag=+" + lat + "," +lng +"&tbm=lcl&tbs=lf:1,lf_ui:2,lf_pqs:EAE")
    );
        document.write("https://www.google.com/maps/search/auto+shop/@" + lat +"," + lng +",11z/data=!3m1!4b1");
        document.write("Click here to open in Google Maps");
        document.write("</a>");
      });
      event.preventDefault();
  });
});

$(document).ready(function(){
  $("#brand").mouseenter(function(){
    $("#dropdown").slideDown();
  });
  $("#dropdown").mouseleave(function(){
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
