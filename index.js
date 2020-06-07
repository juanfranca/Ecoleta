const buttonsearch = document.querySelector('#page-home main a')
const model = document.querySelector('#model')
const close = document.querySelector('#model .header a')

buttonsearch.addEventListener('click', ()=>{
model.classList.remove('hide') // pode usar o toggle() tb
})
close.addEventListener('click', ()  =>{ 
    model.classList.add('hide')
})