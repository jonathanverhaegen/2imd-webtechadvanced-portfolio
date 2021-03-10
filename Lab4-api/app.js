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

        let number = Math.floor(Math.random() * 6) + 1 

        

        if(temp < 15){

           
            

            let text = `Ooh it is ${temp} °c today. That is very cold. Stay inside and watch star wars`;
            document.querySelector("h1").innerHTML = text;
            app.getMovie(number);
            
            
        }else{

           

            let text = `Ooh it is ${temp} °c today. That is too warm. Stay inside and watch star wars`;
            document.querySelector("h1").innerHTML = text;
            
            
        }
    }

    //function yodatranslate skip for now, better api search


    //functie voor film op te vragen

    getMovie(number){
        let url = `https://swapi.dev/api/films/${number}/`

        fetch(url).then((response) =>{
            return response.json();
        }).then((json) =>{
            
            let movie = json.title;
            console.log(movie);
            

        })

        
    }

    

    

}


let app = new App();