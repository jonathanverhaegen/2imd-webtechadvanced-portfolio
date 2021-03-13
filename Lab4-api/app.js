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
            let temp = Math.round(json.main.temp);

            //localStorage.setItem("temp", temp);
            app.textAd(temp);

            
            

            
        })
        

        

        /*if(localStorage.getItem("temp") === null){


            fetch(url).then((response) =>{
                return response.json();
            }).then((json) =>{
                let temp = Math.round(json.main.temp);

                localStorage.setItem("temp", temp);
                app.textAd(temp);
                
    
                
            })

            
        }else{
            let temp = localStorage.getItem("temp");
            app.textAd(temp);
        }*/

        

    }


    textWeater(temp){

        

        

        if(temp < 15){

           
            

            let text = `Ooh it is ${temp} °c today. That is too cold. Stay inside and watch Star Wars `;
            return text;
            
            
            
        }else{

           

            let text = `Ooh it is ${temp} °c today. That is too warm. Stay inside and watch Star Wars `;
            
            return text
            
        }
    }


    textAd(temp){

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

        app.showAd(text, movie, temp);

        

     
        /*fetch(url).then((response) =>{
            return response.json();
        }).then((json) =>{
            console.log(json);
            let textYoda = json.contents.translated;
           
            

            app.showAd(textYoda, movie,temp);
            

        })*/



        

    }



    showAd(text, movie,temp){

        document.querySelector("p").innerHTML = text + movie + " on Disney+";
        
        if(temp < 15){
            document.querySelector("article").style.backgroundImage = "url(https://www.wallpapertip.com/wmimgs/3-36952_star-wars-wallpaper-hd-1080p-star-wars-planet.jpg)";
        }else{
            document.querySelector("article").style.backgroundImage = "url(https://images.theconversation.com/files/3624/original/tatooine.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop)";
        

    }

    

    

}

}


let app = new App();