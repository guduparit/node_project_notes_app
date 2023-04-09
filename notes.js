const fs = require('fs');
// const chalk = require('chalk');

const getNotes = function(){
    return 'Your Notes...'
}

//function to add a Note 

const addNote = function(title, body){

    const notes = loadNotes();

    const notesDuplicate = notes.filter(function(note){
        return note.title === title
    })

    if (notesDuplicate.length === 0){
        notes.push({
            title: title,
            body:body
        })
    
        saveNotes(notes) 
        console.log('Note is added')
    } else {
        console.log('Title is taken')
    }


}

//function to remove the notes 

const removeNotes = function(title){
    const notesRemove = loadNotes();
    
    for (let i=0; i < notesRemove.length; i++){
        if (notesRemove[i].title === title){
            notesRemove.splice(i,1);
        }
        saveNotes(notesRemove)
    }

    
}

//function to list out all the notes 

const listNotes = () => {

    const notes = loadNotes();

    if (notes.length > 0) {

        for (let i=0; i < notes.length; i++){

            console.log(notes[i].title);
            console.log(notes[i].body);
    
        }
    } else {
        console.log('No Notes Exist');
    }

}

//function to read a note

const readNote = (title) => {
    const notes = loadNotes();

    const readNote = notes.find((note) => {
        return note.title === title
    })

    if(readNote) {
        console.log(readNote.title);
    }else{
        console.log('Note not found');
    }
}

//function to save the note
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

//function to load off the notes
const loadNotes = function(){

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch(e) {
        return [];
    }
    
}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNotes:removeNotes,
    listNotes: listNotes,
    readNote:readNote
}