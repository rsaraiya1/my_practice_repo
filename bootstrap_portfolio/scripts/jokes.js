function getJoke() {
    var request = new XMLHttpRequest();
    //use this end point to get one joke
     request.open("GET", "https://official-joke-api.appspot.com/random_joke");
     request.onload = functino() {
        var data = JSON.parse(this.response);
        console.log(data);
        
     }

     
    request.send();

}