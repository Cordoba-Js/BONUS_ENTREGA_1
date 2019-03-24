const express = require('express')
const app = express()
const fs = require('fs')

const opciones = {
    id : {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'x'
    }
}

const argv = require('yargs')
    .command('inscribir', 'inscripción en el curso', opciones)
    .argv

let cursos = [
    {
        id: 1,
        nombre: 'Node.JS',
        duracion: 32,
        costo: 0,
    },
    {
        id: 2,
        nombre: 'Inglés',
        duracion: 64,
        costo: 200000,
    },
    {
        id: 3,
        nombre: 'Bolsa de valores',
        duracion: 32,
        costo: 150000,
    }
];


let curso = cursos.find(curso1 => curso1.id == argv.id)

if(curso == undefined && argv._ == "inscribir"){
    console.log('El id del curso no existe.')

}
else if(argv._ == "inscribir"){
    
    let texto = 'El estudiante ' + argv.nombre + '\n' +
    'con CC: ' + argv.cedula + '\n' +
    'Se ha inscrito en el curso ' + curso.nombre + ' satisfactoriamente, \n'+
    'que tiene una duración de ' + curso.duracion + ' horas y un costo de ' + curso.costo + '.'
    
    app.get('/', function (req, res) {
        res.send(texto)
    })
    app.listen(8000)

    /*let crearArchivo = (opciones) => {    
        let texto = 'El estudiante ' + argv.nombre + '\n' +
        'con CC: ' + argv.cedula + '\n' +
        'Se ha inscrito en el curso ' + curso.nombre + ' satisfactoriamente, \n'+
        'que tiene una duración de ' + curso.duracion + ' horas y un costo de ' + curso.costo + '.'
        fs.writeFile('Inscripciones.txt', texto, (err) => {
            if(err) throw(err);
            console.log('La inscripción se ha creado con éxito.')
                        
        })        
    }
    crearArchivo(opciones)
    app.get('/', function (req, res) {
        res.send(fs.readFileSync('./Inscripciones.txt','utf8'))
    })
    app.listen(8000)*/
        

}else{
    let i = 1;
    cursos.forEach (function(c){
        setTimeout(function(){
            console.log("El id del curso es: "+ c.id +'.\n'+
            "El nombre del curso es: "+ c.nombre +'.\n'+
            "La duración del curso es: "+ c.duracion +' horas.\n'+
            "El costo del curso es: "+ c.costo +'.\n')
        },2000*i)
        i = i+1;        
    })    
}

