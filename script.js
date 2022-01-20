//dichiaro variabli 
// let nome = "", cognome = "", email, telefono, indirizzo, nazione, cap, città;
// let prezzo = 0, valuta = Euro, discount = 10, anno_partenza = 1970;
// let giocatori =  [];
// let records = [];

const x7 = function(){};


function miaFunzioneNuova(a, b, y) {

        if ( a == b){
                y = a; 
        }else{
            y = b; 
        }

}


document.getElementById("caos").innerHTML = miaFunzioneNuova(3, 3, 5);

function addNomi(){
    let nomi = [];
    nomi.push("pippo");
    let nome = document.getElementById("testo").innerHTML = nomi; 
}

function addUser(){
    let utente = "giovanni";
    let user = document.getElementById("demo").innerHTML = utente + " abbiamo aggiunto qualcosa" + addNomi("giorgio");

}


let valore = miaFunc(4, 5);

function miaFunc(a, b){
    return a * b;
}

document.getElementById("area").innerHTML = valore;

function toCelsius(fahrenheit, gradi = 10){
    return (5/9) * (fahrenheit-32) + gradi;
}

document.getElementById("celsius").innerHTML = toCelsius(77) + ' gradi ';

let a = toCelsius(55);
let risultato = "il risultato è " + a + "gradi";
document.getElementById("new").innerHTML = risultato; 


const numeri = [34, 45, 46, 23, 11];
const nomi = ['pioppo','slippa','cippa','miccia'];
let valori = "";
let txt = "";
numeri.forEach(nFunc);
nomi.forEach(nomiFunc);

function nFunc(value, index, array){
    txt += value + "<br>";
}

function nomiFunc(cazzi, mazzi, pazzi){
    valori += cazzi + "<br>";
}

//document.getElementById("array").innerHTML = txt;

//document.getElementById("array").innerHTML = valori; 


const numeri1 = [32, 11, 56, 89];
const numeri2 = numeri1.map(myFunc);

function myFunc(value, index, array){
    return value * 2; 
}


document.getElementById("array").innerHTML = numeri2; 



const persone = [12, 45, 67, 17, 16];
const over18 = persone.filter(valoriMaggiori);


function valoriMaggiori(value, index, array){
    return value > 18;
}

document.getElementById("valori").innerHTML = over18; 

const numbers = [32, 34, 51, 11, 10];
let sum = numbers.reduce(sommaNumeri);

function sommaNumeri(total, value, index, array){
    return total + value; 
}

document.getElementById("somma").innerHTML = sum; 


const alunni = [23, 18, 43];
let someOver18 = alunni.some(viewAge);

function viewAge(value, index, array){
    return value > 18; 
}

document.getElementById("age").innerHTML = someOver18; 

const frutti = ["mela","pera","qrancia","banana","putana"];
let posizione = frutti.indexOf("putana") + 1; 


document.getElementById("posizione").innerHTML = "il valor è stato trovato in : " + posizione; 



//keys
const studenti = ['enrico','flavio','enzo','matteo'];
const keys = studenti.keys(); 

let text = "";

for (let x of keys){
    text += x + "<br>";
}


document.getElementById("studenti").innerHTML = text; 

//regex

let testo = "questo è un testo di prova della troia";
let search = testo.search(/testo/i);
let replace = testo.replace(/testo/i, "Buddha");
let result = testo.match(/(testo|troia)/g)

//document.getElementById("search").innerHTML = search; 
document.getElementById("search").innerHTML = search + ' '+  replace + ' '  + result; 


try {
    adddlert("benvuto");
}
catch (err) {
    document.getElementById("demo").innerHTML = err.message; 

}

città = "torino";

document.getElementById("luogo").innerHTML = città;


let elenco = {"firstName":"pippo","surName":"angels", "age":55}

function printElenco(){ 
    let elenchi = [12,23,345,56];
let l = elenchi.length;
for(let i = 0; i < l; i++){
    document.getElementById("array").innerHTML = i++;
    }

}