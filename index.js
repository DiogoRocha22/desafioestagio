//Obj 1
function pertainsFibonacci() {
    let number = parseInt(prompt("Informe um número:"));
    let pertains = false;
    
    let a = 0;
    let b = 1;
    
    if (number === a || number === b) {
        pertains = true;
    }
    
    while (b < number) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    
    pertains = (b === number);
    
    if (pertains) {
        alert(`${number} pertence à sequência de Fibonacci.`);
        return
    }
    
    alert(`${number} não pertence à sequência de Fibonacci.`);
}
pertainsFibonacci();

//Obj 2
function verifyCharInString(){
    let string = prompt("Digite uma palavra:");
    let aCount = 0;

    let stringArray = string.split("");
    stringArray.forEach(char => {
        if(char.toLocaleLowerCase() == "a"){
            aCount++;
        }
    })
    
    if(aCount){
        alert(`A string possui o character 'a' e ele aparece ${aCount} vezes.`);
        return
    }

    alert("A string não possui a letra 'a'");
}
verifyCharInString();

//Obj 3
function logSum(){
    let index = 12, sum = 0, k = 1; 
    
    while(k < index){
        k++;
        sum += k;
    }
    
    alert(sum);
}
logSum() // O numero exibido no alerta será 77

//Obj 4
//a) 1, 3, 5, 7, 9
//b) 2, 4, 8, 16, 32, 64, 128
//c) 0, 1, 4, 9, 16, 25, 36, 49
//d) 4, 16, 36, 64, 100
//e) 1, 1, 2, 3, 5, 8, 13
//f) 2, 10, 12, 16, 17, 18, 19, 20

//Obj 5 
//Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? 

//  1º - Eu ligaria o primeiro interruptor e deixaria tempo suficiente, até a lampara ficar aquecida.. 
//  2º - Desligaria o primeiro interruptor, e ligaria o segundo.
//  3º - Entraria na sala, e ia verificar, a lampada que estiver acesa, está ligada ao segundo interruptor, a que estiver quente, está ligada ao primeiro, e a lampada que sobrou estará ligada ao terceiro
