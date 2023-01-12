
const advertItem = {};
const advertForm = document.querySelector('#advert-form');

function errorHandling(obj) {
  try {
    for (const key in obj) {
      if (obj[key] == '') {
        throw `One or more fields are EMPTY`; // generates an exception
      }
    }
    advertBase.values.push(obj);
    localStorage.setItem('adverData', JSON.stringify(advertBase.values)); // add data to local storage
  } catch (e) {
    console.error(e); // pass exception object to error handler
  }
}

if (advertForm) {
  const urlInput = document.querySelector('#image');
  const previewOut = document.querySelector('.preview');
  urlInput.addEventListener('input', (e) => {
    previewOut.innerHTML = `<div class="card-header">
    <img src="${e.target.value}" alt="img" />
  </div>`;
  });

  advertForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formItems = e.target.elements;
    let timeStamp = new Date();

    advertItem.imageSrc = formItems.image.value;
    advertItem.userName = formItems.name.value;
    advertItem.userSurname = formItems.surname.value;
    advertItem.userPhone = formItems.phone.value;
    advertItem.userEmail = formItems.email.value;
    advertItem.title = formItems.title.value;
    advertItem.price = formItems.price.value;
    advertItem.description = formItems.text.value;
    advertItem.term = `${new Intl.DateTimeFormat("en-US", { month: "long" }).format(timeStamp)} ${timeStamp.getFullYear()}`;

    errorHandling(advertItem);
    document.location = 'index.html';
  });
}

//code to render home page
const advertContainer = document.querySelector('.cards-container');

if (advertContainer) {
  for (let index = 0; index < advertBase.quantity(); index++) {
    const element = advertBase.values[index];

    advertContainer.insertAdjacentHTML(
      'beforeend',
      `
    <div class="card">
      <div class="card-header">
        <img src="${element.imageSrc}" alt="img" />
      </div>
      <div class="card-body">
        <h3 class="title">${element.title}</h3>
      </div>
      <div class="card-footer">
      <span class="price">$ ${element.price}</span>
      </div>
      </div>
      `
    );
  }
}


// Render single item page by clicking on main page item
const cards = [...document.querySelectorAll('.card')];
cards.forEach(card => {
  card.addEventListener('click', (e) => {
    let idx = cards.indexOf(e.currentTarget);
    localStorage.setItem('index', idx);
    document.location = 'post.html';

  });
});
// Code to render single item
const postPage = document.querySelector('#post');
if (postPage) {
  // Image field
  const singleImg = document.querySelector('.photo img');

  //Name field
  const userName = document.querySelector('.name');

  // Term field
  const term = document.querySelector('.term');
  const termDate = term.querySelector('b');

  // Title field
  const descClass = document.querySelector('.description');
  const title = descClass.querySelector('h2');

  // Price field
  const price = document.querySelector('.price');

  // Description field
  const description = document.querySelector('article');

  // function to inject advertisement data
  const injectData = (idx) => {
    console.log(idx);
    singleImg.setAttribute('src', advertBase.values[idx].imageSrc);
    userName.innerText = advertBase.values[idx].userName;
    termDate.innerText = advertBase.values[idx].term;
    title.innerText = advertBase.values[idx].title;
    price.innerText = `$ ${advertBase.values[idx].price}`;
    description.innerText = advertBase.values[idx].description;
  };

  injectData(localStorage.getItem('index'));
}

console.log(advertBase.quantity());
