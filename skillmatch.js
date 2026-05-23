//RF1 criar perfil do candidato
const candidato = {
  nome: "Luana",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
  experienciaMeses: 3
};

//RF2 criar uma lista de vagas
//RF9 criar uma classe
class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;

//RF11 demonstrar uso do this
exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

//RF10 usar herança
