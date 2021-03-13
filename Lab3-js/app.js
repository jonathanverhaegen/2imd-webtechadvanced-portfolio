class Note {
  constructor(title) {
    
    // HINT🤩 this.element = this.createElement(title);

    this.title = title;
    this.element = this.createElement(title);

    

    
    
  }

  createElement() {
    let newNote = document.createElement("li");

    // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));

    newNote.addEventListener("click", this.remove.bind(newNote));
    
    return newNote;

    
  }

  add(title) {
    // HINT🤩
    // this function should append the note to the screen somehow
    
    
    let list = document.querySelector("#taskList");
    let node = document.createTextNode(title);
    let newNote = this.element;
    
    list.appendChild(newNote);
    newNote.appendChild(node);
    
    


    
    
    
   
    

  }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

    if(localStorage.getItem("notes") === null){
      let arrayNotes = [];
      arrayNotes.push(this.title);
      localStorage.setItem("notes", JSON.stringify(arrayNotes));
    }else{
      
      let arrayNotes = JSON.parse(localStorage.getItem("notes"));
      arrayNotes.push(this.title);
      let jsonNotes = JSON.stringify(arrayNotes);
      localStorage.setItem("notes", jsonNotes);

    }
    
    

    
  }

  remove() {
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    // .removeChild(this)
    // remove the item from screen and from localstorage

    //remove from screen

    let list = document.querySelector("#taskList");

    list.removeChild(this);
    



    //remove from localStorage

    let arrayNotes = JSON.parse(localStorage.getItem("notes"));

    
    let title = this.innerHTML;

    let indexTitle = arrayNotes.indexOf(title);

    console.log(indexTitle);
    

   

   

    /*for(let i = 0; i<arrayNotes.length; i++){
      

      if(arrayNotes[i] == title ){
        
      }

    }*/
    

    
    

    
  }
}

class App {
  constructor() {
    //console.log("👊🏼 The Constructor!");

    // HINT🤩
    // pressing the enter key in the text field triggers the createNote function
    // this.txtTodo = ???
    // this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    // read up on .bind() -> we need to pass the current meaning of this to the eventListener
    // when the app loads, we can show previously saved noted from localstorage
    // this.loadNotesFromStorage();


    this.txtTodo = document.querySelector("#taskInput");
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    this.loadNotesFromStorage();
    

    

    


    



  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen


    if(localStorage.getItem("notes") != null){
      let arrayNotes = JSON.parse(localStorage.getItem("notes"));

      for(let i = 0; i<arrayNotes.length;i++){

        let newNote = new Note(arrayNotes[i]);
        newNote.add(newNote.title);
  
      }

    }


    

    


    

    
   

  }

  createNote(e) {
    // this function should create a new note by using the Note() class
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // clear the text field with .reset in this class
    // if (e.key === "Enter")

    if(e.key === "Enter"){
      e.preventDefault();

      let note = new Note(this.txtTodo.value);

      note.add(note.title);
      note.saveToStorage();
      
      this.reset();
    }

    
    }

   


  

  reset() {
    // this function should reset the form / clear the text field
    this.txtTodo.value = "";
  }
}

let app = new App();
