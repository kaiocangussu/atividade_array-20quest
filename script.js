const equipe = [
  "André Luiz", "Arthur", "Breno", "Carlos Eduardo",
  "Cauã", "Davi", "Davi", "Eduardo",
  "Emerson", "Erick", "Eris", "Ezequiel",
  "Felipe", "Francisco", "Gabrielly", "Guilherme",
  "Gustavo Alexandre", "Gustavo Augusto", "Heloa", "Isabelle",
  "Ivaneide", "Jayme", "Jorge", "João Pedro",
  "João Vitor", "Kaio", "Luis Otávio", "Layson",
  "Lorenzzo", "Lucas", "Lucas Matheus", "Luis Gustavo",
  "Luiz", "Magsdene", "Marco Antônio", "Mateus",
  "Nickson", "Octavio", "Otávio", "Patrick",
  "Pedro Junio", "Rafael", "Victor Hugo", "Victor Hugo",
  "Vinícius", "Willky",
];
// Nível 1 — Fundamentos

const escalaManha = ["Heloa", "Erick", "Vinícius", "Davi", "Luiz"];
console.log(escalaManha[0]);
console.log(escalaManha[escalaManha.length - 1]);
console.log(escalaManha.length);

// ### 2. Reforço no estoque
const equipeEstoque = ["Ezequiel", "Pedro Junio"];
equipeEstoque.push("Nickson");
const funcionarioSaiu = equipeEstoque.pop();
console.log(funcionarioSaiu);
console.log(equipeEstoque);

// 3. Fila do cafezinho

//unshift()adiciona o pessoa no inicio
// shift() remove o primeiro elemento e devolve o seu valor
const filaCafe = ["Lucas", "Mateus", "Otávio"];
filaCafe.unshift("Isabelle");
console.log(filaCafe);
const pessoaAtendida = filaCafe.shift();
console.log(pessoaAtendida);
console.log(filaCafe);

// 4. Churrasco de fim de ano
const confirmados = [
  "Gustavo Alexandre", "João Vitor", "Heloa", "Victor Hugo",
  "Breno", "Octavio", "Kaio", "Lorenzzo",
];
//includes() retorna true se o nome estiver no way caso nao estiver retonar false
console.log(confirmados.includes("Heloa"));
console.log(confirmados.includes("Pedro Junio"));
console.log(confirmados.push("Pedro Junio"))
console.log(confirmados)

// 5. Crachás dos novatos
//   `map()`
// toUpperCase() comando para letrar em maiusculas 
const novatos = ["patrick", "magsdene", "willky"];
const resultado = novatos.map(nome => {
  return nome.toUpperCase()
});
console.log(novatos)
console.log(resultado)

// 6. Reajuste do vale-alimentação
const valesAtuais = [400, 450, 500, 380];
const comReajuste = valesAtuais.map(valor =>  {
  return valor + 50;
});
console.log(valesAtuais)
console.log(comReajuste)

// 7. Ordem da reunião
const apresentacoes = ["Isabelle", "Francisco", "Guilherme"];
const ordem = apresentacoes.map((nome, indice) => {
  return `${indice + 1}º - ${nome}`;
});
console.log(ordem)

// 8. Bom dia no grupo

const mensagens = equipe.map(nome => {
  return `Bom dia, ${nome}!`;
});
console.log(mensagens);

// Nível 3 — `filter()`

// 9. Dias de muito bolo
const bolosPorDia = [32, 18, 25, 40, 12, 27];
const diasSelecionados = bolosPorDia.filter(quantidade => {
  return quantidade >= 25;
});
console.log(diasSelecionados);

// 10. Camisetas do time de futebol
const nomesComG = equipe.filter(nome => {
  return nome.startsWith("G");
})
console.log(nomesComG)

// 11. Horas extras para assinar
const horasExtras = [6, 2, 8, 0, 5, 7, 3, 9, 4, 10, 1, 6, 0, 12, 5, 2];
const horasSelecionadas = 
horasExtras.filter(horas => {
   return horas >= 5 && horas <= 10;
})
console.log(horasSelecionadas);

/// 12. Nomes compostos no ponto
const nomesCompostos = equipe.filter(nome => {
  return nome.includes(" ");
})
console.log(nomesCompostos);
console.log(nomesCompostos.length);

// Nível 4 — `find()`, `findIndex()`, `some()` e `every()`
// 13. Crachá rasgado
const  funcionario = equipe.find(nome => {
  return nome.startsWith("Nic")
});
if (funcionario !== undefined) {
  console.log(`O crachá é de ${funcionario}`);
} else {
  console.log("Crachá não pertence a ninguém da equipe.");
}
const outroFuncionario = 
equipe.find(nome => {
  return nome.startsWith("Zé");
});
if (outroFuncionario === undefined) {
  console.log("Crachá não pertence a ninguém da equipe");
}
// 14. Otávio ou Octavio?