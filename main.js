const color=require("chalk");
const yargs= require("yargs");
const notes=require("./notes.js");

yargs.command({
      command:"add",
      describe:"Adding a note",
      builder:{
      title:{
      describe:"Note Title",
      demandOption:true,
      type:"string"
    },
     body:{
     describe:"Note Body",
     demandOption:true,
     type:"string"
     }
    },

      handler(argv){
           notes.AddNotes(argv.title, argv.body);
      }
});
yargs.command({
      command:"remove",
      describe:"Removing a note",
      builder:{
      title: {
              describe:"Note removal",
              demandOption:true,
              type:"string"
             }
             },
     handler(argv){
        notes.RemoveNotes(argv.title);
       }
});
yargs.command({
      command:"list",
      describe:"Listing all the notes",
      handler(){
        notes.ListNotes();
       }
});
yargs.command({
      command:"read",
      describe:"reading a specific note",
      builder: {
             title:{
                  describe:"read note through a title",
                  demandOption:true,
                  type:"string"

             }
      },
      handler(argv){
          notes.ReadNote(argv.title)
       }
});

yargs.parse();
