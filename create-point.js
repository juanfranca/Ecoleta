function populateUfs(){
    const uFselect =  document.querySelector('select[name=uf]')
 fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  // FENTCH OU PROMESSA BUSCA DADOS NO SITE QUE LHE FOI DESIGNADO E VIRA OBJETO EM PLACEHOLDERS
.then(res => res.json())// <<VERSÃO SIMPLIFICADA   vs    VERSÃO EXTENSA >>.then((res)=>{return res.json()}) FUNÇÃO !
 .then(states =>{
     for(const state of states){ 
     uFselect.innerHTML +=`<option value ='${state.id}'>${state.nome}</option>` // buscando valores dentro do fentch
     }
 })
}
populateUfs()


function getCities(event){ 
    const CitySelect = document.querySelector('select[name=city]')
    const stateInput = document.querySelector('input[name=state]')

    const uFValue = event.target.value

    const IndexOfSelectState = event.target.selectedIndex
     stateInput.value = event.target.options[IndexOfSelectState].text 

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uFValue}/municipios`

    CitySelect.innerHTML = '<option value>Selecione a cidade</option>'
    CitySelect.disabled = true
    fetch(url)
  // FENTCH OU PROMESSA BUSCA DADOS NO SITE QUE LHE FOI DESIGNADO E VIRA OBJETO EM PLACEHOLDERS
.then(res => res.json())// <<VERSÃO SIMPLIFICADA   vs    VERSÃO EXTENSA >>.then((res)=>{return res.json()}) 
 .then(cities =>{
  
     for(const city of cities){ 
     CitySelect.innerHTML +=`<option value ='${city.nome}'>${city.nome}</option>` // buscando valores dentro do fentch
     }
     CitySelect.disabled = false
 })
   

}

document
.querySelector('select[name=uf]')
.addEventListener('change', getCities) 
//()=>{}função vazia,  Criação de arrow function quando se cria uma função anonima automatico com a flecha.
  
// ITENS DE COLETA
//Pegar todos os li's
const itemsToCollect = document.querySelectorAll('.items-grid li')
for(item of itemsToCollect){ 
  item.addEventListener('click', handleSelectedItem) 
}
const collectedItems= document.querySelector('input[name=items]')
let selectedItems = []


function handleSelectedItem(event){ 
  //add or remove uma classe com java script
  const itemLi = event.target

  itemLi.classList.toggle('selected')//toggle tem a função de adicionar ou remover um item 


  const ItemId = itemLi.dataset.id

  console.log('ITEM ID:', ItemId)
  //verificar se existem items selecionados, se sim
  //pegar os items seleecionados 

const alreadySelected = selectedItems.findIndex( item =>{
  const itemFound = item == ItemId // Isso será true ou falso. 
  return itemFound
})
  //se já estiver selecionado 
    if(alreadySelected >= 0) {
      // tirar da seleção 
      const filteredItems = selectedItems.filter(item => { 
        const itemIsDifferent = item != ItemId
        return itemIsDifferent
      }) 
    selectedItems=filteredItems
    }else{ 
      // se não estiver selecionado adicionar a seleção 
      //adicionar a seleção 
      selectedItems.push(ItemId)
    }
    console.log('selectedItems:', selectedItems)
    collectedItems.value = selectedItems
  // atualizar o campo escondido com os  itens selecionados.
   
}
