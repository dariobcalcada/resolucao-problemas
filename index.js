// variável, seu valor pode ser alterado no decorrer do programa
//let nomeEstudante = "Helena";
//console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
//const nomeDoEstudante = "Helena";
//console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
String: nomeEstudante = "Helena";

let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
//console.log(quantidadeDeEstudantes);

// ********* Com FOR
for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
	const alunoCorrente = listaDeEstudantes[indice];
	console.log(alunoCorrente);
}

//------------------------------------------------//


// ********* Com DO

let inicio = 0;

do {
	console.log(listaDeEstudantes[inicio]);
	inicio++;
} while (inicio < quantidadeDeEstudantes);


//------------------------------------------------//

// ********* Com WHILE
let outro_inicio = 0;
while (outro_inicio < quantidadeDeEstudantes) {
	console.log(listaDeEstudantes[outro_inicio]);
	outro_inicio++;
}



//------------------------------------------------//
// CONTADOR

for (let numero = 1; numero <= 10; numero++) {
	console.log(numero);
}


//inserir elemento na lista
listaDeEstudantes.push("José");
console.log(listaDeEstudantes);


///condicionado

if (quantidadeDeEstudantes < 5) {
	listaDeEstudantes.push("João");
}
console.log(listaDeEstudantes);


const notas = [10, 6, 8];

for (let index = 0; index < notas.length; index++) {
    const elemento = notas[index];
    console.log(elemento);
}

let indice = 0;
   while (indice < 3) {
       console.log(notas[indice]);
       indice++;
   }