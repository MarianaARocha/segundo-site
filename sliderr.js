const sliderr = document.querySelectorAll('.sliderr');
const voltarr=document.getElementById('voltarr');
const avançarr=document.getElementById('avançarr');


let sliderrAtivo = 0;


function esconderSliderr(){
    sliderr.forEach(item => item.classList.remove('on'))//remove a class slider on

}

function mostrarSliderr(){
    sliderr[sliderrAtivo].classList.add('on')//vai adicional outro slide na posição 0

}

function avançarSliderr(){
    esconderSliderr()
    if(sliderrAtivo === sliderr.length -1){
        sliderrAtivo = 0
    }
    else{
        sliderrAtivo ++
    }

    mostrarSliderr()
}

function voltarSliderr(){
    esconderSliderr()
    if(sliderrAtivo === 0){
        sliderrAtivo = sliderr.length -1
    }
    else{
        sliderrAtivo--
    }

    mostrarSliderr()
}


avançarr.addEventListener('click', avançarSliderr)
voltarr.addEventListener('click', voltarSliderr)

sliderrAtivo = sliderrAtivo + 1
sliderrAtivo = sliderrAtivo -1