const fs=require('fs')
const chalk=require('chalk')
const { title } = require('process')
const getNotes=() => 'Your notes are ready'



//add a note
const addNotes=(title,body) => {
        const notes=loadNotes()
        //returns array of matches
        // const duplicatenotes=notes.filter((note) => note.title===title )
        //return only first match if find out
            const duplicatenote=notes.find((note) => note.title===title)
        //data coming from user and saving it

         debugger
         
        if(!duplicatenote){
            notes.push({
                title:title,
                body:body
            })
            // console.log(notes)
            saveNotes(notes)
            console.log("notes added!")

        }
        else{
            console.log("noted are taken!")
        }
        

}

const removeNotes=function(title){
    const notes=loadNotes()
    const notesToKeep=notes.filter( note => 
        note.title!==title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Notes removes'))
        saveNotes(notesToKeep)
 } 
    else{
        console.log(chalk.red.inverse('No note found'))
    }

}

const listNotes=() =>{
    const notes=loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
        
    });
    console.log(chalk.inverse('Ur notes'))
}

//saving the notes and changing into json
  const saveNotes=(notes) => {
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}
const loadNotes=() => {
    try {
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)

        } catch (error) {
            return []
    }
    
}

const readNotes=(title) =>{
    const notes=loadNotes()
    const note=notes.find((note) =>note.title===title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.inverse.red('note not found'))
    }
}
module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}