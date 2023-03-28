const slider = document.querySelectorAll('.slider');
const voltar=document.getElementById('voltar');
const avançar=document.getElementById('avançar');


let sliderAtivo = 0;


function esconderSlider(){
    slider.forEach(item => item.classList.remove('on'))//remove a class slider on

}

function mostrarSlider(){
    slider[sliderAtivo].classList.add('on')//vai adicional outro slide na posição 0

}

function avançarSlider(){
    esconderSlider()
    if(sliderAtivo === slider.length -1){
        sliderAtivo = 0
    }
    else{
        sliderAtivo ++
    }

    mostrarSlider()
}

function voltarSlider(){
    esconderSlider()
    if(sliderAtivo === 0){
        sliderAtivo = slider.length -1
    }
    else{
        sliderAtivo--
    }

    mostrarSlider()
}


avançar.addEventListener('click', avançarSlider)
voltar.addEventListener('click', voltarSlider)

sliderAtivo = sliderAtivo + 1
sliderAtivo = sliderAtivo -1