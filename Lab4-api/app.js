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
            

            app.textAd(temp);
        })

    }


    textWeater(temp){

        

        

        if(temp < 15){

           
            

            let text = `Ooh it is ${temp} °c today. That is very cold. Stay inside and watch Star Wars: `;
            return text;
            
            
            
        }else{

           

            let text = `Ooh it is ${temp} °c today. That is too warm. Stay inside and watch Star Wars: `;
            
            return text
            
        }
    }


    textAd(temp){

        let text = app.textWeater(temp);

        

        app.getMovie(text,temp);



    }

    //function yodatranslate skip for now, better api search


    //functie voor film op te vragen

    getMovie(text,temp){

        let number = Math.floor(Math.random() * 6) + 1 

        let url = `https://swapi.dev/api/films/${number}/`

        fetch(url).then((response) =>{
            return response.json();
        }).then((json) =>{
            
            let movie = json.title;
            

            app.showAd(text, movie,temp);
            

        })

        
    }

    showAd(text, movie,temp){

        document.querySelector("p").innerHTML = text + movie;

        if(temp < 15){
            document.querySelector("article").style.backgroundColor = "blue";
        }else{
            document.querySelector("article").style.backgroundColor = "red";
        }
        

    }

    

    

}


let app = new App();