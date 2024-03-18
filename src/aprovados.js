const estudantes = [
    {nome:'Pedro', nota: 6},
    {nome:'Paulo', nota: 7},
    {nome:'Matheus', nota: 8},
    {nome:'João', nota: 5},
    {nome:'Samuel', nota: 3},
    {nome:'Bruno', nota: 5},
];

function aprovados(listaAlunos) {
    const alunosAprovados = [];
    for (const estudante of listaAlunos) {
        if (estudante.nota >= 6) {
            alunosAprovados.push(estudante);
        }
    }
    return alunosAprovados;
}

const Aprovados = aprovados(estudantes);

console.log('--------------------------')
console.log('Os alunos aprovados foram:');
for (const estudante of Aprovados) {
    console.log(`Nome: ${estudante.nome}, Nota: ${estudante.nota}`);
};
console.log('--------------------------')

