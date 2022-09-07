alert("Bienvenido a la calculadora del índice de masa corporal. \nSe te pedirá que llenes varios campos para calcularlo.")

let calculateIMC = (height, weight) => {
    let imc = (weight / ((height * height) / 10000)).toFixed(2);
    return imc;
}

const complexionArray = [{name: "Insuficiencia ponderal", min: 0, max: 18.5}, {name: "normal", min: 18.5, max: 25}, {name: "Sobrepeso", min: 25, max: 30}, {name: "Obesidad", min: 30, max: Infinity},]

let evaluateObj = (imc, obj) => {
    if (imc >= obj.min && imc < obj.max) {
        return obj.name;
    }else{
        return null;
    }
}

let evaluateArray = (imc, array) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let eval = evaluateObj(imc, element);
        if (eval) {
            return eval;
        }
    }
}
let height = Number(prompt("¿Cuál es tu estatura? (cm)"));
let weight = Number(prompt("¿Cuánto pesas (kg)?"));

let result = calculateIMC(height, weight);
let complexion = evaluateArray(result, complexionArray);

alert("Tu Índice de Masa Corporal es: " + result + "\nTu complexión es: " + complexion);







