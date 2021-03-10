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

        console.log(lat + " " + lng);
        
    }

}



let app = new App();