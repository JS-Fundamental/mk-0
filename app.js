const photo = document.querySelector('.photo');
const userName = document.querySelector('.name');
const term = document.querySelector('.name-general');

const adBase = [
  {
    image: `${'<img src="./powerbank.jpg" alt="item" />'}`,
    name: 'Joseph',
    term:  `<p>User since: <b>December 2022</b></p>`,
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

/*
   <div class="description">
      <h2>Anker 737 Power Bank 140W 24000mAh</h2>
      <p class="price">$149.99</p>
      <ul>
        <li>
          <b>Ultra-Powerful Two-Way Charging:</b> Equipped with the latest Power
          Delivery 3.1 and bi-directional technology to quickly recharge the
          portable charger or get a 140W ultra-powerful charge.
        </li>
        <li>
          <b>High Capacity and Long-Lasting:</b> Featuring a 24,000mAh battery
          capacity and 2x longer-lasting battery life, juice up an iPhone 13
          almost 5 times or a 2021 iPad Pro 12.9" 1.3 times.
        </li>
        <li>
          <b>Smart Digital Display:</b> Easy-to-read digital display shows the
          output and input power and estimated time for the portable charger to
          fully recharge.
        </li>
        <li>
          <b>What You Get:</b> Anker 737 Power Bank (PowerCore 24K), welcome
          guide, 140W USB-C to USB-C cable, 24-month stress-free warranty, and
          friendly customer service.
        </li>
      </ul>
    </div>
*/