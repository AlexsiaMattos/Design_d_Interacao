
let menuItems = ['Home', 'Sobre', 'Contato'];


const form = document.querySelector('#menu-form');
const itemsContainer = document.querySelector('#items-container');
const btnAdd = document.querySelector('#btn-add-item');
const btnRemove = document.querySelector('#btn-remove-item');
const previewList = document.querySelector('#preview-list');
const previewImg = document.querySelector('#preview-image');


const bgColorInput = document.querySelector('#bg-color');
const itemColorInput = document.querySelector('#item-color');
const textColorInput = document.querySelector('#text-color');
const spacingInput = document.querySelector('#spacing');
const imgUrlInput = document.querySelector('#menu-image');


function renderInputs() {
    itemsContainer.innerHTML = '';
    menuItems.forEach((item, index) => {
        const wrapper = document.createElement('div');
        const label = document.createElement('label');
        label.textContent = `Texto do Item ${index + 1}:`;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = item;
        
       
        input.addEventListener('input', (e) => {
            menuItems[index] = e.target.value;
            updatePreview();
        });

        wrapper.appendChild(label);
        wrapper.appendChild(input);
        itemsContainer.appendChild(wrapper);
    });
    updatePreview();
}


function updatePreview() {
  
    if (imgUrlInput.value.trim() !== '') {
        previewImg.src = imgUrlInput.value;
        previewImg.style.display = 'block';
    } else {
        previewImg.style.display = 'none';
    }

   
    previewList.style.backgroundColor = bgColorInput.value;
    previewList.style.gap = `${spacingInput.value}px`;

    previewList.innerHTML = '';
    menuItems.forEach(text => {
        if(text.trim() === '') return; 
        const li = document.createElement('li');
        li.textContent = text;
        li.style.backgroundColor = itemColorInput.value;
        li.style.color = textColorInput.value;
        previewList.appendChild(li);
    });
}


btnAdd.addEventListener('click', () => {
    if (menuItems.length < 8) { 
        menuItems.push('Novo Item');
        renderInputs();
    }
});

btnRemove.addEventListener('click', () => {
    if (menuItems.length > 1) { 
        menuItems.pop();
        renderInputs();
    }
});


[bgColorInput, itemColorInput, textColorInput, spacingInput, imgUrlInput].forEach(input => {
    input.addEventListener('input', updatePreview);
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
});


renderInputs();