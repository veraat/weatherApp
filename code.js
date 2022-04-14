alert("If you are are putting a name of a place with spaces it it pls put underscore '_' instead of space ")
var input = document.getElementById("location");
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
   event.preventDefault();
   document.getElementById("search").click();
  }
});
function start() {
    locationn = document.getElementById("location").value;
    url = "https://4cce-122-161-69-109.ngrok.io/temp/?location=" + locationn;
    console.log(url)
    document.getElementById("country").innerHTML = "Loading ...."
    document.getElementById("t").innerHTML = ""
    document.getElementById("mat").innerHTML = ""
    document.getElementById("mit").innerHTML = ""
    var tempData = null
    fetch(url)
    .then(res => res.json())
    .then(function(data) {
        tempData = data;
        console.log(tempData);
        put(tempData);
    })
    .catch(function(error) {
        console.log("error")
        document.getElementById("country").innerHTML = "Please check you location name if still it does not works then it could be that server is down and pls message me at guptasgurgaon@gmail.com about site not working "
        document.getElementById("t").innerHTML = ""
        document.getElementById("mat").innerHTML = ""
        document.getElementById("mit").innerHTML = ""
    
    });
    // console.log(dataa)
    
}

function put(tempData) {
    document.getElementById("country").innerHTML = "Country: " + tempData["Country"]
    document.getElementById("t").innerHTML = "Temperature C: " + tempData["Temperature_C"]
    document.getElementById("mat").innerHTML = "MaxTemperature C: " + tempData["MaxTemperature_C"]
    document.getElementById("mit").innerHTML = "MinimumTemperature C: " + tempData["MinimumTemperature"]
}