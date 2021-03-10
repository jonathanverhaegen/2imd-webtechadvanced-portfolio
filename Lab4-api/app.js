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

        

        if(temp < 15){
            let text = `Ooh it is ${temp} °c today. That is very cold. Stay inside and watch star wars`;
            document.querySelector("h1").innerHTML = text;
        }else{
            let text = `Ooh it is ${temp} °c today. That is too warm. Stay inside and watch star wars`;
            document.querySelector("h1").innerHTML = text;
        }
    }

}



let app = new App();