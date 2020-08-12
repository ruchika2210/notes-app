// const validator=require('validator')
// const chalk=require('chalk')
const yargs=require('yargs')

const notes=require('./notes');
// const { require } = require('yargs');
// const add=require('./utils')

// // const name="Ruchika"
// const sum=add(2,9);
// console.log(sum)
    // const get=getN();
// console.log(get)
// console.log(validator.isEmail('ruchikaexamole.com'))
// console.log(validator.isURL('https:/www.mitacs.ca/en/programs/globalink/globalink-research-internship'))
// console.log(chalk.blue.inverse.bold("Hey there! Success"))
// console.log(process.argv)

//customize yargs
    yargs.version('1.0.1')

    //add ,remove,read version

//add command
yargs.command({
    command:'add',
    describe:"describing added items",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
        
    },
    handler:function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

//remove items

yargs.command({
    command:'remove',
    describe:"describing removed items",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//listing 

yargs.command({
    command:'list',
    describe:"listing  items",
    handler(argv){
        notes.listNotes()
    }
})

//read

yargs.command({
    command:'read',
    describe:"reading  items",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'

        }
    },

    
    handler(argv){
        notes.readNotes(argv.title)
    }
})


// console.log(yargs.argv) instead write below also
yargs.parse()
// const command=process.argv[2]
// if(command==='add'){
//     console.log("Adding notes")
// }