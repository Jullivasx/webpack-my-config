import x from './myconst'

function component() {
    const element = document.createElement('div');
    element.innerHTML = x
    return element;
  }
  
  document.body.appendChild(component());