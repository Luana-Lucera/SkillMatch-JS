//RF1 criar perfil do candidato
const candidato = {
  nome: "Luana",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
  experienciaMeses: 3
};

//RF9 criar uma classe
class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
}

//RF11 demonstrar uso do this
exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

//RF10 usar herança
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {

     super(empresa, cargo, requisitos, salario, modalidade);
     this.nivel = nivel;
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}

//RF2 lista de vagas
const vagas = [
  new VagaFrontEnd(
    "TechStart",
    "Desenvolvedor Front-End Júnior",
    ["JavaScript", "GitHub", "Lógica de Programação"],
    2800,
    "Remoto",
    "Júnior"
  ),

  new VagaFrontEnd(
    "CodeLab",
    "Estágio Front-End",
    ["JavaScript", "Kanban", "POO"],
    1800,
    "Híbrido",
    "Estágio"
  ),

  new VagaFrontEnd(
    "WebSolutions",
    "Programador JavaScript Júnior",
    ["JavaScript", "Arrays", "Objetos", "Funções"],
    3000,
    "Presencial",
    "Júnior"
  )
];

//RF4 classificar compatibilidade
const classificar = (percentual) => {
  if (percentual >= 80) return "Alta compatibilidade";
  if (percentual >= 50) return "Média compatibilidade";
  return "Baixa compatibilidade";
};

//RF3 calcular compatibilidade com cada vaga
//RF5 listas habilidades faltantes
//RF8 usar métodos de array
const analisarVaga = (vaga) => {

//RF8 filter
const encontradas = vaga.requisitos.filter((req) =>
    candidato.habilidades.includes(req)
  );


//RF5 habilidades faltantes
const faltantes = vaga.requisitos.filter((req) =>
    !candidato.habilidades.includes(req)
);

//RF3 cálculo da compatibilidade
const compatibilidade = Math.round(
    (encontradas.length / vaga.requisitos.length) * 100
);

return {
    ...vaga,

    resumo: vaga.exibirResumo(),
    nivel: vaga.exibirNivel(),

    encontradas,
    faltantes,
    compatibilidade,

    classificacao: classificar(compatibilidade),

//RF8 every
 atendeTudo: vaga.requisitos.every((req) =>
    candidato.habilidades.includes(req)
    )
  };
};

//RF6 encontrar a vaga com maior compatiblidade (reduce)
const encontrarMelhorVaga = (resultados) => {
  return resultados.reduce((melhor, atual) =>
    atual.compatibilidade > melhor.compatibilidade ? atual : melhor
  );
};


//RF7 gerar recomendação de estudo (set)
const gerarRecomendacao = (resultados) => {
  const recomendacao = [
    ...new Set(resultados.flatMap((vaga) => vaga.faltantes))
  ];

return recomendacao.length
    ? `Priorize estudar ${recomendacao.join(", ")}.`
    : "Você já atende todos os requisitos.";
};


//RF8 usar métodos de array (map, filter, every, reduce, find)
const buscarVagaPorEmpresa = (vagas, empresa) => {
  return vagas.find((vaga) => vaga.empresa === empresa);
};


//RF12 usar callback
function finalizarAnalise(nome, callback) {
  console.log("\nAnálise finalizada.");
  callback(nome);
}

function mensagemFinal(nome) {
  console.log(
    `${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`
  );
}


//RF13 usar closure
function criarContadorDeAnalises() {
  let total = 0;

  return () => ++total;
}

const contarAnalise = criarContadorDeAnalises();


//RF14 usar promise
function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(vagas), 1000);
  });
}


//RF14 usar async/await
async function iniciarSistema() {
  console.log("Carregando vagas...\n");

const vagasCarregadas = await buscarVagasSimuladas();

//RF8 map
const resultados = vagasCarregadas.map(analisarVaga);

//Exibe o resultado de cada vaga analisada.
resultados.forEach((vaga) => {
    console.log("=================================");
    console.log(`Empresa: ${vaga.empresa}`);
    console.log(`Cargo: ${vaga.cargo}`);
    console.log(`Resumo: ${vaga.resumo}`);
    console.log(vaga.nivel);
    console.log(`Compatibilidade: ${vaga.compatibilidade}%`);
    console.log(`Habilidades encontradas: ${vaga.encontradas.join(", ") || "Nenhuma"}`);
    console.log(`Habilidades faltantes: ${vaga.faltantes.join(", ") || "Nenhuma"}`);
    console.log(`Atende todos os requisitos? ${vaga.atendeTudo}`);
    console.log(`Classificação: ${vaga.classificacao}`);
    console.log(`Número da análise: ${contarAnalise()}`);
});

//RF6 melhor vaga
const melhorVaga = encontrarMelhorVaga(resultados);

//RF8 find
const vagaCodeLab = buscarVagaPorEmpresa(vagasCarregadas, "CodeLab");

//RF07 recomendação de estudo
const recomendacao = gerarRecomendacao(resultados);

  console.log("\nVaga mais compatível:");
  console.log(`${melhorVaga.empresa} - ${melhorVaga.cargo}`);
  console.log(`Compatibilidade: ${melhorVaga.compatibilidade}%`);

  console.log("\nBusca com find:");
  console.log(vagaCodeLab.exibirResumo());

  console.log("\nRecomendação de estudo:");
  console.log(recomendacao);

//RF12 chamada do callback
finalizarAnalise(candidato.nome, mensagemFinal);
}


//iniciar o programa
iniciarSistema();

