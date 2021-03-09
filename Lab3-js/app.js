class Note {
  constructor(title) {
    this.title = title;
    // HINT🤩 this.element = this.createElement(title);
    
    this.element = this.createElement(title);
    
  }

  createElement(title) {
    let newNote = document.createElement("li");

    // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));

    newNote.addEventListener("click", this.remove.bind(newNote));
    
    return newNote;

    
  }

  add() {
    // HINT🤩
    // this function should append the note to the screen somehow
    
    let list = document.querySelector("#taskList");
    let node = document.createTextNode(this.title);
    let newNote = document.createElement("li");
    
    list.appendChild(newNote);
    newNote.appendChild(node);


    
    
    
   
    

  }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify

    let notes = ["test1", "test2", "test3"];

    let JSONnotes = JSON.stringify(notes);

    console.log(JSONnotes);
    

    
  }

  remove() {
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    // .removeChild(this)
    // remove the item from screen and from localstorage

    console.log("test");
    

    
    

    
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

    


    



  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
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

      note.add();
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
