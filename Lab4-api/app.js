class App{
    constructor(){
        

        this.getLocation();


    }


    getLocation(){
        navigator.geolocation.getCurrentPosition(this.succes);

        
    }

    succes(pos){
        
        let lat = pos.coords.latitude;
        let lng = pos.coords.longitude;

        app.getWeather(lat,lng);
        
    }

    getWeather(lat,lng){

        let key = "9cd9448ff8d4a9eacad8bf68ece69a39";

        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`

        fetch(url).then((response) =>{
            return response.json();
        }).then((json) =>{
            let temp = json.main.temp;

            app.showWeater(temp);
        })

    }


    showWeater(temp){
        document.querySelector("h1").innerHTML = temp + " °c";
    }

}



let app = new App();