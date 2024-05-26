// Load notes from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadNotes();
  });
  
  // Function to load notes from localStorage
  function loadNotes() {
    var notes = JSON.parse(localStorage.getItem("notes")) || [];
    var noteList = document.getElementById("noteList");
  
    // Clear previous notes
    noteList.innerHTML = "";
  
    // Display notes
    notes.forEach(function(noteText) {
      var li = createNoteElement(noteText);
      noteList.appendChild(li);
    });
  }
  
  // Function to create a new note element
  function createNoteElement(noteText) {
    var li = document.createElement("li");
    li.textContent = noteText;
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
      deleteNote(li);
    };
  
    li.appendChild(deleteButton);
    return li;
  }
  
  // Function to add a note
  function addNote() {
    var noteInput = document.getElementById("noteInput");
    var noteText = noteInput.value.trim();
  
    if (noteText !== "") {
      var noteList = document.getElementById("noteList");
      var li = createNoteElement(noteText);
      noteList.appendChild(li);
  
      // Save notes to localStorage
      saveNotes();
  
      noteInput.value = "";
    } else {
      alert("Please enter a note.");
    }
  }
  
  // Function to delete a note
  function deleteNote(noteElement) {
    var noteList = document.getElementById("noteList");
    noteList.removeChild(noteElement);
  
    // Save notes to localStorage after deletion
    saveNotes();
  }
  
  // Function to save notes to localStorage
  function saveNotes() {
    var notes = [];
    var noteList = document.getElementById("noteList").getElementsByTagName("li");
  
    // Extract note texts
    for (var i = 0; i < noteList.length; i++) {
      notes.push(noteList[i].textContent);
    }
  
    // Store notes in localStorage
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  