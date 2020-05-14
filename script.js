const input = document.getElementById('input');
const ul = document.querySelector('ul');
const li = document.getElementsByTagName('li');
const btn = document.getElementById('button');


const features = () => {
  const li = document.createElement('li');
    const btn = document.createElement('button')
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    btn.innerHTML = 'x'
    btn.classList.add("btn")
    li.appendChild(btn);
    input.value = '';
    linethrough()
    removeParent()
}

const onclick = () => {
  if(input.value.length > 0) {
    features()
  }
}

const addlist = (e) => {
  if (e.key === 'Enter' && input.value.length > 0){
    features()
  }
}

const linethrough = () => {
  for(let i = 0; i <li.length; i++) {
    li[i].addEventListener('click', changeclass);
    const btnclass = document.querySelector('.btn');
    btnclass.classList.add('.removelinethrough');
  }
}

function changeclass() {
  this.classList.toggle('done');
}

function removeParent() {
  const btn = document.querySelectorAll('li button');
  for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',removeFunction)
  }
}

function removeFunction() {
  this.parentNode.remove();
}

btn.addEventListener('click', onclick)

input.addEventListener('keydown', addlist);



