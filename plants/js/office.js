const offices = [
  {
    city: 'Yonkers, NY',
    phone: '+1 914 678 0003',
    phoneSrc: '+19146780003',
    address: '511 Warburton Ave'
  },
  {
    city: 'Canandaigua, NY',
    phone: '+1 585 393 0001',
    phoneSrc: '+15853930001',
    address: '151 Charlotte Street'
  },
  {
    city: 'Sherrill, NY',
    phone: '+1 315 908 0004',
    phoneSrc: '+13159080004',
    address: '14 WEST Noyes BLVD'
  },
  {
    city: 'New York City',
    phone: '+1 212 456 0002',
    phoneSrc: '+12124560002',
    address: '9 East 91st Street'
  }
]

const cityEl = document.querySelector('.office__row--city .office__value');
const phoneEl = document.querySelector('.office__row--phone .office__value');
const addressEl = document.querySelector('.office__row--address .office__value');
const officeBtnEl = document.querySelector('.office__button');
const officeEl = document.querySelector('.contacts__office');

const picEl = document.querySelector('.contacts__pic');
const innerEl = document.querySelector('.contacts__inner');

const contactSelectorEl = document.querySelector(".contacts__select .selected");
contactSelectorEl.addEventListener('selected', event => {
  showOffice(event.detail.value);
});

function showOffice(cityName) {
  const cityObj = offices.find(cityItem => cityItem.city === cityName);
  cityEl.innerHTML = cityObj.city;
  phoneEl.innerHTML = cityObj.phone;
  addressEl.innerHTML = cityObj.address;

  officeBtnEl.setAttribute('href', `tel:${cityObj.phoneSrc}`)

  officeEl.classList.add('shown');

  picEl.classList.add('hide');
  innerEl.classList.add('active');
}
