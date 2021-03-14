"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note = /*#__PURE__*/function () {
  function Note(title) {
    _classCallCheck(this, Note);

    // HINT🤩 this.element = this.createElement(title);
    this.title = title;
    this.element = this.createElement(title);
  }

  _createClass(Note, [{
    key: "createElement",
    value: function createElement() {
      var newNote = document.createElement("li"); // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));

      newNote.addEventListener("click", this.remove.bind(newNote));
      return newNote;
    }
  }, {
    key: "add",
    value: function add(title) {
      // HINT🤩
      // this function should append the note to the screen somehow
      var list = document.querySelector("#taskList");
      var node = document.createTextNode(title);
      var newNote = this.element;
      list.appendChild(newNote);
      newNote.appendChild(node);
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      if (localStorage.getItem("notes") === null) {
        var arrayNotes = [];
        arrayNotes.push(this.title);
        localStorage.setItem("notes", JSON.stringify(arrayNotes));
      } else {
        var _arrayNotes = JSON.parse(localStorage.getItem("notes"));

        _arrayNotes.push(this.title);

        var jsonNotes = JSON.stringify(_arrayNotes);
        localStorage.setItem("notes", jsonNotes);
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // .removeChild(this)
      // remove the item from screen and from localstorage
      //remove from screen
      var list = document.querySelector("#taskList");
      list.removeChild(this); //remove from localStorage

      var arrayNotes = JSON.parse(localStorage.getItem("notes"));
      var title = this.innerHTML;
      var indexTitle = arrayNotes.indexOf(title);
      arrayNotes.splice(indexTitle, 1);
      var jsonNotes = JSON.stringify(arrayNotes);
      localStorage.setItem("notes", jsonNotes);
    }
  }]);

  return Note;
}();

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

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

  _createClass(App, [{
    key: "loadNotesFromStorage",
    value: function loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      if (localStorage.getItem("notes") != null) {
        var arrayNotes = JSON.parse(localStorage.getItem("notes"));

        for (var i = 0; i < arrayNotes.length; i++) {
          var newNote = new Note(arrayNotes[i]);
          newNote.add(newNote.title);
        }
      }
    }
  }, {
    key: "createNote",
    value: function createNote(e) {
      // this function should create a new note by using the Note() class
      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // clear the text field with .reset in this class
      // if (e.key === "Enter")
      if (e.key === "Enter") {
        e.preventDefault();
        var note = new Note(this.txtTodo.value);
        note.add(note.title);
        note.saveToStorage();
        this.reset();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      // this function should reset the form / clear the text field
      this.txtTodo.value = "";
    }
  }]);

  return App;
}();

var app = new App();