let advertItems;
if (localStorage.getItem('adverData')) {
  advertItems = JSON.parse(localStorage.getItem('adverData'));
} else {
  advertItems = [{
    imageSrc: "./img/powerbank.jpg",
    userName: "Joseph",
    userSurname: "Doe",
    userPhone: "0602332444",
    userEmail: "joseph@gmail.net",
    title: "Anker 737 Power Bank 140W 24000mAh",
    price: "149.99",
    description: `
    Ultra-Powerful Two-Way Charging:</b> Equipped with the latest
    Power Delivery 3.1 and bi-directional technology to quickly recharge
    the portable charger or get a 140W ultra-powerful charge.
    High Capacity and Long-Lasting: Featuring a 24,000mAh battery
    capacity and 2x longer-lasting battery life, juice up an iPhone 13
    almost 5 times or a 2021 iPad Pro 12.9" 1.3 times.
    Smart Digital Display: Easy-to-read digital display shows the
    output and input power and estimated time for the portable charger
    to fully recharge.
    What You Get: Anker 737 Power Bank (PowerCore 24K), welcome
    guide, 140W USB-C to USB-C cable, 24-month stress-free warranty, and
    friendly customer service.`,
    term: "December 2022"
  },
  {
    imageSrc: "./img/Charger_747.jpg",
    userName: "Maxim",
    userSurname: "Doe",
    userPhone: "0602332444",
    userEmail: "maxim@gmail.net",
    title: "Some Charger 140W 24000mAh",
    price: "1000.00",
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur, 
    tenetur aspernatur nulla ducimus rem laboriosam doloribus aperiam repudiandae autem 
    nesciunt accusantium optio quibusdam eveniet? Quisquam doloremque eveniet earum dicta.
    `,
    term: "January 2023"
  },
  {
    imageSrc: "./img/PowerStation_767.jpg",
    userName: "Veronika",
    userSurname: "Doe",
    userPhone: "0802233444",
    userEmail: "ver@gmail.com",
    title: "Some PowerStation",
    price: "10856.00",
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur, 
    tenetur aspernatur nulla ducimus rem laboriosam doloribus aperiam repudiandae autem 
    nesciunt accusantium optio quibusdam eveniet? Quisquam doloremque eveniet earum dicta.
    `,
    term: "December 2023"
  }];
}

const advertItem = {};
const advertForm = document.querySelector('#advert-form');

function errorHandling(obj) {
  try {
    for (const key in obj) {
      if (obj[key] == "") {
        throw `One or more fields are EMPTY`; // generates an exception
      }
    }
    advertItems.push(obj);
    localStorage.setItem('adverData', JSON.stringify(advertItems)); // add data to local storage
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
  </div>`
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

  for (let index = 0; index < advertItems.length; index++) {
    const element = advertItems[index];

    advertContainer.insertAdjacentHTML('beforeend', `
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
  `);
  }
}

// Code to render single item
const photo = document.querySelector('.photo');
const userName = document.querySelector('.name');
const term = document.querySelector('.name-general');

const adBase = [
  {
    image: `${'<img src="./powerbank.jpg" alt="item" />'}`,
    name: 'Joseph',
    term: `<p>User since: <b>December 2022</b></p>`,
  },
];

// function to inject advertisement data 
const injectData = () => {
  photo.innerHTML = adBase[0].image;
  userName.innerText = adBase[0].name;

}

injectData();

// <p>User since: <b>December 2022</b></p>
//  <p class="deals"><b>+500 </b>Successful deals</p>
