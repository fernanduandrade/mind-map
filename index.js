const nodes = []

const createNew = () => {
  const input = document.getElementById('nodo')
  const main = document.getElementById('wrapper')
  const div = document.createElement('div')
  const spanText = document.createElement('span').innerText = input.value
  div.append(spanText)
  div.classList.add('node-map')
  main.appendChild(div)
  input.value = ''
}

document.addEventListener('click', function (e) {
  const centerMap = document.getElementById('main__map')
  if(document.getElementById('main__map').contains(e.target)) centerMap.classList.add('menu')
  else centerMap.classList.remove('menu')

}, false);

const render = (nodo) => {

} 