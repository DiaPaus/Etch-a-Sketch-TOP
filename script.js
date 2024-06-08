const container=document.querySelector('.container');
const btn=document.querySelector('button');
let squares=16;
btn.addEventListener('click',getSquaresPerSide);

function getSquaresPerSide(){
squares=+prompt('Enter number of squares per side, maximum 100');
    if (isNaN(squares)||squares>100) alert ('Wrong input');
    else appendDivs(squares);
}

function randomRGB(){
    return Math.floor(Math.random()*256)
}

function appendDivs(squares){  
    container.innerHTML=''; 
for (let i=0;i<squares*squares;i++){
    const square=document.createElement('div');
    square.classList.add('square');
    square.style.setProperty('--numberOfSquaresPerSide',`${squares}`)
    square.addEventListener('mouseover',function(){this.style.backgroundColor=`rgb(${randomRGB()} ${randomRGB()} ${randomRGB()})`;
        if(!this.style.opacity) this.style.opacity=1;
        opacity=parseFloat(this.style.opacity);
        this.style.opacity=opacity-0.1;
        })
    container.appendChild(square);
}
}

//On load
appendDivs(squares);

