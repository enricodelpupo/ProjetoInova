class Grupo {
    nome: String;
    integrantes: String;

    constructor(nome: String, integrantes: String){
        this.nome = nome,
        this.integrantes = integrantes;
    }
}

class Apresentacao  {
    public grupo: Grupo;
    nota: number;
    avaliado: boolean;

    constructor(nota: number, avaliado: boolean){
        this.nota = nota;
        this.avaliado = avaliado;
    }
}

class Avaliador {
    nome: String;
    tipo: String;
    public avaliar: Avaliar;

    constructor(nome: String, tipo: String){
        this.nome = nome;
        this.tipo = tipo;
    }
}

class Avaliar {
    inovacao: number;
    adaptMercado: number;
    apresentacao: number;
    prototipo: number;
    manutenabilidade: number;

    // todos os itens acima são notas, por isso estão como "number".

    constructor(inovacao: number, adaptMercado: number, apresentacao: number, prototipo: number, manutenabilidade: number){
        this.inovacao = inovacao;
        this.adaptMercado = adaptMercado;
        this.apresentacao = apresentacao;
        this.prototipo = prototipo;
        this.manutenabilidade = manutenabilidade;
    }

}
