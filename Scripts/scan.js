function runCode2(){
    var data;
    navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
    var data2 = "Latitude: " + position.coords.latitude + 
    "     Longitude: " + position.coords.longitude;
    alert(data2); 
  }
  function errorCoor(){
      
}
