var fs =require("fs");
var chalk=require("chalk");
var RemoveNotes= (title) => {
   var available_notes= Return_Data();
   const  searched_note=  available_notes.filter((one) => one.title === title);
//  console.log(note);
   if(searched_note.length ===1){
         available_notes.pop(searched_note);
         Save_Data(available_notes);
         console.log(chalk.green.inverse("Data Removed"));

  }else {
         console.log(chalk.red.inverse("Data not found"));
         }
         }

var AddNotes=(title, body) =>{
  var date = new Date();
    var data= Return_Data();
    const duplication=  data.filter((one) =>  one.title === title );
    console.log("the duplication :"+ duplication.length);
    if(duplication.length=== 0){
       data.push({
       title:title,
       body:body,
       date:date.getDate() +" / " +(date.getMonth()+1) + " / "+ date.getFullYear()
       });
      Save_Data(data);
   } else if(duplication.length>0){
      console.log(chalk.keyword('orange')("Duplicated Data"));
      }
      }
var ListNotes= () =>{
    var  notes=Return_Data();
    notes.forEach((note)=> console.log(chalk.green(note.body)+"     " +note.date));
                     }

var ReadNote= (title) =>{
    var notes=Return_Data();
    var find_note=notes.filter((note)=> note.title === title);
    if(find_note.length >0){
      var found_note=notes.find((note)=> note.title === title);

      console.log(chalk.green.inverse("The found note")+ found_note.body);

    }else {
      console.log(chalk.red.inverse("Data Not Found !!!"));
    }
    }
//functions used in the all the handler functions
    var Return_Data= ()=>{
    try {
        databuffer=fs.readFileSync("information.json");
        string_data=databuffer.toString();
        object=JSON.parse(string_data);
        return object;
    } catch (e) {
       return [];
       }
       }

var Save_Data =(data) => {
    fs.writeFileSync("information.json",JSON.stringify(data));
}

module.exports=
{
AddNotes: AddNotes,
RemoveNotes:RemoveNotes,
ListNotes:ListNotes,
ReadNote:ReadNote
}
