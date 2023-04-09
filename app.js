const yargs = require('yargs');
const notes = require('./notes');

// console.log(yargs.argv);



//create add command 

yargs.version('1.1.0');

yargs.command({
    command: 'add', 
    describe: 'Add a new Note', 
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log('Title: ' + argv.title + ' Body: ' + argv.body);
        notes.addNote(argv.title, argv.body);

    }
})

//create remove command 

yargs.command({
    command: 'remove', 
    describe: 'Remove a new Note', 
    builder:{
        title: {
            describe: 'Give the title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log("Removing a new Note");
        notes.removeNotes(argv.title);
    }
})

//create list command

yargs.command({
    command: 'list', 
    describe: 'Listing All the notes', 
    handler: function () {
        // console.log("Listing all the notes");
        notes.listNotes();
    }
})

//create read command

yargs.command({
    command: 'read', 
    describe: 'Reading a new Note', 
    builder:{
        title:{
            describe:'title of he note to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log("Reading a new Note");
        notes.readNote(argv.title);
    }
})

yargs.parse()
// console.log(yargs.argv)