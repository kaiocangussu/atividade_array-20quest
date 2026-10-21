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
const nome1 = equipe.find(nome => nome === "Octavio");
const nome2 = equipe.find(nome => nome === "Otavio");

console.log(nome1);
console.log(nome2);

const posicaoOtavio = equipe.findIndex(nome => nome === "Otávio");
const posicaoOctavio = equipe.findIndex(nome => nome === "Octavio");

console.log(posicaoOtavio);
console.log(posicaoOctavio);

const nomesOtavio = equipe.filter(nome => nome.includes("Otávio"));
console.log(nomesOtavio);

// 15. Checagem de luvas no açougue
const equipeAcougue = ["Otávio", "Gustavo Augusto", "Pedro Junio"];
const usandoLuva = [true, true, false];

const todosUsamLuva = usandoLuva.every(status => status === true);
const alguemSemLuva = usandoLuva.some(status => status === false);

const posicaoSemLuva = usandoLuva.findIndex(status => status === false);

console.log(todosUsamLuva);
console.log(alguemSemLuva);
console.log(posicaoSemLuva);
console.log(equipeAcougue[posicaoSemLuva]);

// 16. Fila do almoço
const filaAlmoco = ["Davi", "Erick", "Vinícius", "Heloa", "Nickson"];

const posicaoVinicius = filaAlmoco.findIndex(nome => nome === "Vinícius");
const posicaoBreno = filaAlmoco.findIndex(nome => nome === "Breno");

console.log(`Vinícius é o ${posicaoVinicius + 1}º da fila`);
console.log(posicaoBreno);

// Nível 5 — `reduce()`

// 17. Vaquinha do bolo
const vaquinha = [10, 15, 20, 5, 10];

const totalArrecadado = vaquinha.reduce((soma, valor) => {
  return soma + valor;
}, 0);

const precoBolo = 80;
const falta = precoBolo - totalArrecadado;

console.log("Arrecadado:", totalArrecadado);
console.log("Falta:", falta);

// 18. Melhor dia da Heloa
const cadastrosHeloa = [14, 9, 21, 17, 11];

const maiorNumero = cadastrosHeloa.reduce((maior, atual) => {
  if (atual > maior) {
    return atual;
  }

  return maior;
}, cadastrosHeloa[0]);

const posicao = cadastrosHeloa.indexOf(maiorNumero);

console.log("Maior número:", maiorNumero);
console.log("Posição:", posicao);

// 19. Plantões do fim de semana
const plantoes = [
  "Emerson", "Jorge", "Emerson", "Eris",
  "Jorge", "Emerson", "Rafael"
];

const totalEmerson = plantoes.reduce((contador, nome) => {
  if (nome === "Emerson") {
    return contador + 1;
  }

  return contador;
}, 0);

const totalJorge = plantoes.reduce((contador, nome) => {
  if (nome === "Jorge") {
    return contador + 1;
  }

  return contador;
}, 0);

console.log("Emerson:", totalEmerson);
console.log("Jorge:", totalJorge);

// Nível 6 — Combinando métodos

// 20. Pagamento das horas extras

const horasExtra = [
  6, 2, 8, 0, 5, 7, 3, 9,
  4, 10, 1, 6, 0, 12, 5, 2
];

// 1. Remover registros com zero hora
const horasValidas = horasExtra.filter(horas => horas > 0);

// 2. Transformar horas em valores a pagar
const pagamentos = horasValidas.map(horas => horas * 25);

// 3. Somar todos os pagamentos
const totalPagamento = pagamentos.reduce((total, valor) => {
  return total + valor;
}, 0);

console.log("Quantidade de registros:", horasValidas.length);
console.log("Pagamentos:", pagamentos);
console.log("Total a pagar: R$", totalPagamento);

// 21. Mini projeto — fechamento do caixa do Vinícius


const vendas = [120, 45, 0, 300, 80, 0, 15, 210];

// 1. Remover as vendas canceladas
const vendasValidas = vendas.filter(valor => valor > 0);

// 2. Contar as vendas canceladas
const canceladas = vendas.filter(valor => valor === 0).length;

// 3. Transformar os valores em textos
const vendasFormatadas = vendasValidas.map(valor => {
  return `R$ ${valor}`;
});

// 4. Encontrar a primeira venda acima de R$ 100
const primeiraAcimaDe100 = vendasValidas.find(valor => valor > 100);

// 5. Verificar se alguma venda foi acima de R$ 250
const houveVendaAcimaDe250 = vendasValidas.some(valor => valor > 250);

// 6. Calcular o total vendido
const totalVendido = vendasValidas.reduce((total, valor) => {
  return total + valor;
}, 0);

// Encontrar a maior venda
const maiorVenda = vendasValidas.reduce((maior, valor) => {
  return valor > maior ? valor : maior;
}, vendasValidas[0]);

// 7. Exibir o relatório
console.log("Vendas válidas:", vendasValidas);
console.log("Canceladas:", canceladas);
console.log("Vendas formatadas:", vendasFormatadas);
console.log("Primeira acima de R$ 100:", primeiraAcimaDe100);
console.log("Alguma acima de R$ 250:", houveVendaAcimaDe250);
console.log("Total vendido: R$", totalVendido);
console.log("Maior venda: R$", maiorVenda);

console.log(
  `Vinícius fez ${vendasValidas.length} vendas, total de R$ ${totalVendido}`
);


