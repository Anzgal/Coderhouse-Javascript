alert("Bienvenido al proyecto. \nSe te pedirá que contestes varias preguntas y se te dará el resultado al final.");

const questionsList = [
    {
        question: "¿Cómo se denomina el lenguaje de marcas de hipertexto?",
        a: "HTML",
        b: "PHP",
        c: "CSS",
        d: "Javascript",
        correct: "a",
    },
    {
        question: "¿Cuál de estas etiquetas permite hacer saltos de línea?",
        a: "<br>",
        b: "<table>",
        c: "<body>",
        d: "<font size>",
        correct: "a",
    },
    {
        question: "HTML se conoce como el lenguaje de marcación porque los autores insertan instrucciones especiales llamadas _____ HTML, que especifican cómo debe aparecer un documento cuando se despliega en la pantalla de un ordenador o se imprime",
        a: "echo",
        b: "URL",
        c: "etiquetas",
        d: "mandatos",
        correct: "c",
    },
    {
        question: "¿Qué está mal en esta regla de estilo?: .cuadro { border: 1px blue dotted padding: 10px 5px; }",
        a: "Falta un ';' (punto y coma) al final de la declaración del estilo 'border'",
        b: "Falta una ',' (coma) entre los dos valores de la propiedad padding (10px 5px)",
        c: "No se puede poner un '.' (punto) al inicio de una declaración (antes de la palabra 'cuadro)'",
        d: "En lugar de ':' se tiene que utilizar '\"' ",
        correct: "a",
    },
    {
        question: "La etiqueta HTML <img src> se utiliza para hacer referencia a una ____ que aparecerá en la página web",
        a: "Lista",
        b: "Tabla",
        c: "Imagen",
        d: "Foto",
        correct: "c",
    },
    {
        question: "Es un protocolo que funciona en conjunto con TCP/IP para llevar recursos web al escritorio",
        a: "HTTP",
        b: "Navegador",
        c: "www",
        d: "Buscador",
        correct: "a",
    },
    {
        question: "¿Cómo se incluye un comentario nuestro en una página HTML para que no se interprete por el navegador?",
        a: "Con 3 asteriscos al principio y final del comentario. Ej: ***comentario sobre el código***",
        b: "Con 3 barras al principio y final del comentario. Ej: ///comentario sobre el código///",
        c: "Con la etiqueta de apertura ' al principio y final del comentario. Ej: <!--comentario sobre el código-->",
        d: "Con 2 barras al principio del comentaria Ej; //comentario sobre el código",
        correct: "c",
    },
    {
        question: "¿Por qué es conveniente incluir la declaración de DOCTYPE en la página HTML?",
        a: "Para evitar que el navegador entre en 'Quirk Mode' y la interprete/muestre mal",
        b: "Para indicar si se ha utilizado o no Flash",
        c: "Si no se incluye el navegador no puede renderizar (mostrar) la página",
        d: "Para cargar los estilos",
        correct: "a",
    },
    {
        question: "¿Cuál crees que es la mejor manera de aplicar estilos a una página web?",
        a: "Incluir los estilos en las etiquetas HTML para que se carguen y ejecuten antes",
        b: "Incluirlos en un fichero externo vinculado a ese fichero HTML",
        c: "Incluirlos en la sección cabecera ('head') para agruparlos en unmismo sitio en la misma página",
        d: "Incluirlos al final del body",
        correct: "b",
    },
    {
        question: "¿Cuál es el lenguaje estándar específico para aplicar estilos de presentación a nuestras páginas web?",
        a: "CSS",
        b: "Javascript",
        c: "Flash",
        d: "HTML",
        correct: "a",
    },
    {
        question: "¿Cuál es la etiqueta que se utiliza para poner el texto en cursiva?",
        a: "<font>",
        b: "<p>",
        c: "<i>",
        d: "<m>",
        correct: "c",
    },
]

let verifyAnswer = (response, correct) => {
    if (response === correct) {
        return true;
    } else {
        return false;
    }
}

let evaluatePerformance = (score) => {
    if (score == 11) {
        return "Excelente resultado!"
    } else if (score > 8) {
        return "Tuviste un buen desempeño pero puedes mejorar"
    } else {
        return "Necesitas estudiar"
    }
}

let score = 0;

questionsList.forEach((element, i) => {
    let question = prompt((i+1) + ". " + element.question + "\na: " + element.a + "\nb: " + element.b + "\nc: " + element.c + "\nd: " + element.d);
    if(verifyAnswer(question, element.correct)){
        score ++;
    }
});

alert("Tuviste " + score + " preguntas correctas de " + questionsList.length + "\n" + evaluatePerformance(score));




