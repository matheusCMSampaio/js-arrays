
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNotaEMedia(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const [alunos, media] = listaDeAlunosEMedias;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = media[indice];
        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    }else{
        console.log(`Aluno não encontrado`)
    }
}

exibeNotaEMedia("João")