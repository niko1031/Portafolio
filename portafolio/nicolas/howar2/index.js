// caso 1
/*Eres estudiante de Hogwarts, tienes la edad suficiente para entrar a estudiar,
tienes padres, y un linaje de sangre, aun no sabes tu casa, ni tu animal patronus,
también tienes cualidades, que son muy importantes para que el sombrero
seleccionador te asigne una casa.
Crear un objeto, con Nombre, edad, familia, linaje, casa, animal patronus,
cualidades, debes tener en tus cualidades solo los 3 de alguna de las casas:
“Valor, fuerza, audacia"
"Justicia, Lealtad, Paciencia"
“Creatividad, Erudición, Inteligencia"
"Ambición, Determinación, Astucia"
Linajes: Mestizo, muggle, Sangre pura*/
const mostrar = () => {
    const nombre = document.getElementById("name").value
    const edad = document.getElementById("edad").value
    alert(`tu nombre es : ${nombre}`);
    alert(`tu edad es: ${edad}`);
}
const estudiante = {
    nombre: "nicolas",
    edad: "20",
    familia: "barrientos",
    linaje: "muggle",
    casa: "",
    animalpatronus: "",
    cualidades: ["Justicia", "Lealtad", "Paciencia"]

}

//caso 2
/*Es una año difícil en Hogwarts, ya que corren rumores que el innombrable ha vuelto,
y el y el famoso Harry Potter también ha ingresado contigo ¡¡¡
Crear Objeto de clases:
tus clases y tus profesores:
transformaciones: "Profesor Kevin Slughorn",
herbologia: "Profesor Maria Umbridge",
pociones: "Profesor Liliana McGonagall",
encantamientos: "Profesora Jackie",
defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
animalesMagicos: "Profesor David Filch",
historiaDeMagia: "Profesor Ronald Sprout"*/

const profesores = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",

}
//caso 3

/*Inicia un nuevo día, es el día del sombrero seleccionador¡¡
hay una gran cena de bienvenida, estas tu con todos tus compas, según tu linaje y
cualidades, el sombrero seleccionador te asignara una casa.
Actividades Modulo 3
crear un objeto que sirva para escoger la casa al que pertenece el estudiante, será
condicional según tus cualidades y linaje.
Gryffindor ("Valor, fuerza, audacia"
Linaje: Mestizo, muggle, Sangre pura )
Hufflepuff("Justicia, Lealtad, Paciencia"
Linaje: Mestizo, muggle)
Ravenclaw(“Creatividad, Erudición, Inteligencia"
Linaje: Mestizo, muggle, Sangre pura)
Slytherin ("Ambición, Determinación, Astucia"
Linaje: "Sangre Pura")*/

if (estudiante.cualidades.includes("Creatividad") &&  estudiante.cualidades.includes,("Erudicion") && estudiante.cualidades.includes ("Inteligencia") &&estudiante.linaje == "muggle" | estudiante.linaje == "sangre pura" | estudiante.linaje == "mestizo") {
    estudiante.casa = "Ravenclaw"
}
else if (estudiante.cualidades.includes("Valor") &&  estudiante.cualidades.includes,("Fuerza") && estudiante.cualidades.includes ("Audacia") && estudiante.linaje == "muggle" | estudiante.linaje == "sangre pura" | estudiante.linaje == "mestizo") {
    estudiante.casa = "Gryffindor"
}
else if (estudiante.cualidades.includes("Junticia") &&  estudiante.cualidades.includes,("Lealtad") && estudiante.cualidades.includes ("Paciencia") && estudiante.linaje == "muggle" | estudiante.linaje == "sangre pura" | estudiante.linaje == "mestizo")  {
    estudiante.casa = "Hufflepuff"
}
else if (estudiante.cualidades.includes("Amabician") &&  estudiante.cualidades.includes,("Determinacion") && estudiante.cualidades.includes ("Astucia") && estudiante.linaje == "muggle" | estudiante.linaje == "sangre pura" | estudiante.linaje == "mestizo")  {
    estudiante.casa = "Slytherin"
} 
console.log("Tu casa es",estudiante.casa)


//caso 4
/*primer día de clases: vas temprano a clase de transformaciones, en clase de
transformaciones que es un objeto, con transformaciones con boggarts, «Altera
la habilidad de un boggart para cambiar de forma y provoca risa para derrotarlo.»
esto se logra con el encantamiento "Riddikulus".
- Definir la clase de Transformaciones
En este paso, estás creando un objeto llamado claseTransformaciones que
representa la clase de Transformaciones. Estableces el nombre del profesor,
el horario y una propiedad para rastrear la transformación de los boggarts.
- Paso 2: Crear una función para realizar la transformación con "Riddikulus"
Aquí defines una función realizarTransformacionRiddikulus dentro de
claseTransformaciones. Esta función verifica si hay un boggart presente y, si
es así, realiza la transformación con el encantamiento "Riddikulus".
- Paso 3: Crear una función para enfrentar un boggart
Aquí defines otra función enfrentarBoggart dentro de
claseTransformaciones. Esta función toma un boggart como argumento,
muestra un mensaje con la forma original del boggart, realiza la
transformación y muestra el resultado.
- Paso 4: Uso y llamada a las funciones
En este paso, creas un objeto boggartEjemplo y luego llamas a la función
enfrentarBoggart de claseTransformaciones para enfrentar el boggart.*/

const claseTransformaciones1 = {
nombreProfesor : profesores.transformaciones,
horario: "16:15 - 21:45",
riddiculus: function(){
let preguntaBogg = prompt("hay un boggar en el sitio?")
if(preguntaBogg == "si"){
function enfrentarBogg(cualidadesBogg, risa){
console.log(`El boggart con forma ${cualidadesBogg}, se le ha aplicado el hechizo y quedo ${risa}`)
}
}else if (preguntaBogg == "no"){
alert ('No hay boggarts por aqui')
} else{
console.log ("respuesta incorrecta")
}
},
}

let preguntaBogg = prompt("hay un boggart peligroso y malevolo en el sitio?")
let cualidadesBogg = prompt("como se llama: ")
let risa = prompt("que te produce risa: ")
alert(`el boggart es: ${cualidadesBogg}`)

//paso 1: definir la clase de trasformaciones
class ClaseTransformaciones {
    constructor(nombreProfesor, horario) {
    this.nombreProfesor = "profesor kevin slughorn";
    this.horario = "16:15 - 21:45";
    this.boggartrasformado = false;
    }
//paso 2: crear una funcion para realizar trasformacion con "ra¡iddikulus"    
realizartrasformacionriddikulus(){
if (this.boggartrasformado){
    console.log("ya has trasnformado al boggart con 'raddikulus'.");
} else {
    alert("realizando la trasformacion con 'raddikulus'...");
    this.boggartrasformado = true;
    alert("Has derrotado al boggart con exito!");
}
}
// paso 3: crear una funcion para enfrentar un boggart
enfrentarBoggart(boggart){
    alert(`te enfrentaras a un boggart con: ${boggart.forma0riginal}.`);
    this.realizartrasformacionriddikulus();
    alert (`el boggart se ha transformado: ${boggart.formatrasnformada}.`);
}
}
// paso 4: uso y llamada a las funciones
const boggartEjemplo = {
    forma0riginal: "aspecto aterrador, mas malo que bandida desjuiciada, mas peligroso que los de riwi despues de salir el viernes en la noche",
    formatrasnformada: "en piolin"
};
const claseTransformaciones = new ClaseTransformaciones("profesor kevin slugho", "8:00 AM");
claseTransformaciones.enfrentarBoggart(boggartEjemplo);

// caso 5
/*puedes ir agregando las demás clases, pero es importante que vayas a la clase de
defensa contra las artes oscuras, para puedas defenderte de los dementores que
han escapado de Azkaban.
crear un objeto con nombre defensaContraLasArtesOscuras con la función de
generar un animal de patronus, lo genere random y llenar la variable, de la
propiedad animalPatronus.
Crear función donde aparece un dementor, y si el estudiante tiene ya su animal
patronus detiene el dementor, si no, el estudiante será absorbido, y será llevado a
la enfermería*/

const defensaContraLasArtesOscuras = {
    animalpatronus: "",
    generaranimalpatronus : function(){
    const animalespatronus = ["leon", "aguila", "delfin", "zorro", "fenix", "dragon", "tigre", "lobo"];
    const indicealeatorio = animalespatronus[Math.floor(Math.random() * animalespatronus.length)];
    estudiante.animalpatronus = indicealeatorio;
    }
};

defensaContraLasArtesOscuras.generaranimalpatronus();


//caso 6
/*mostrar informacion del estudiante con los cambios realizador a su objeto*/
Object.entries(estudiante). forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
    alert(`${key}: ${value}`);
})
