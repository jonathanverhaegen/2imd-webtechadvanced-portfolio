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

        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;

        

        let hourStorage = parseInt(localStorage.getItem("hour"));
        let hourNow = app.getHourNow();

        console.log(hourStorage);
        console.log(hourNow);

        

        

        if(localStorage.getItem("temp") === null || hourStorage < hourNow){

            fetch(url).then((response) =>{
                return response.json();
            }).then((json) =>{

                localStorage.clear();

                
                let temp = Math.round(json.main.temp);
                
    
                localStorage.setItem("temp", temp);
                
                app.textAd(); 
                console.log("nieuw temp");
            })

        }else{
            
            app.textAd();
            console.log("oude temp");
        }
        

    }


    textWeater(temp){

        
               
        

        if(temp < 15){

           
            

            let text = `Ooh it is ${temp} °c today. That is too cold. Stay inside and watch Star Wars`;
            return text;
            
            
            
        }else{

           

            let text = `Ooh it is ${temp} °c today. That is too warm. Stay inside and watch Star Wars`;
            
            return text
            
        }
    }


    textAd(){

        let temp = parseInt(localStorage.getItem("temp"));

       


        let text = app.textWeater(temp);


        

        

        app.getMovie(text,temp);



    }

    


    //functie voor film op te vragen

    getMovie(text,temp){

        let number = Math.floor(Math.random() * 6) + 1 

        let url = `https://swapi.dev/api/films/${number}/`

        fetch(url).then((response) =>{
            return response.json();
        }).then((json) =>{
            
            let movie = json.title;

            
            

            app.translateYoda(text, movie,temp);
            

        })
        

        
    }



    translateYoda(text, movie,temp){

        let url = `https://api.funtranslations.com/translate/yoda.json?text=${text}.`

        let hourStorage = parseInt(localStorage.getItem("hour"));
        let hourNow = app.getHourNow();

       

     
        

        if(localStorage.getItem("textYoda") === null || hourNow < hourStorage){
            fetch(url).then((response) =>{
            return response.json();
            }).then((json) =>{
            console.log(json);

                let hour = app.getHourNow();
                
                let textYoda = json.contents.translated;

                localStorage.setItem("textYoda", textYoda);
                localStorage.setItem("hour", hour);
           
        
                app.showAd(movie,temp);

                console.log("nieuwe tekst");
            

            })
        }else{
            app.showAd(movie,temp);
            console.log("oude tekst");
        }

    }



    showAd(movie,temp){

        let textYoda = localStorage.getItem("textYoda");

        document.querySelector(".yoda").innerHTML = textYoda

        document.querySelector(".info").innerHTML = movie + " now streaming on Disney+";
        
        
        if(temp < 15){
            document.querySelector("article").style.backgroundImage = "url(https://www.wallpapertip.com/wmimgs/3-36952_star-wars-wallpaper-hd-1080p-star-wars-planet.jpg)";
        }else{
            document.querySelector("article").style.backgroundImage = "url(https://images.theconversation.com/files/3624/original/tatooine.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop)";
    
    } 

}

getHourNow(){
    let date = new Date();
    let hour = date.getHours();

    return hour;
}


}


let app = new App();