const titleCount = document.querySelector('.goods-count');
const goodsInCard = document.querySelector('.user-menu__quantity--goods')
const titlePrice = document.querySelector('.goods-price');
const cardPrice = document.querySelector('.submit__price-all');
const promoContainer = document.querySelector('.submit__item--promo-code');
const promo = promoContainer.querySelector('.price-promo');
const discounts = document.querySelector('.price-discounts');
const priceStocks = document.querySelector('.price-stocks');
const deliveryContainer = document.querySelector('.submit__item--delivery');
const delivery = deliveryContainer.querySelector('.price-delivery');
const inputDelivery = document.querySelector('.submit__input-checkbox');
const cardTotalPrice = document.querySelector('.submit__total-price');
const goods = document.querySelectorAll('.goods__item');

let promoСount = 0; // размер промокода
let deliveryCount = 0; // стоимость доставки
let totalPrice = 0; // стоимость без скидки
let amountSale = 0; // размер акции
let amountCount = 0; // количество товаров
let visible = 0;
let arrayGoods = []; 

export function displayDate() {
  getObjectGoods(goods);

  // проверяем применен ли промокод
  if (promoContainer !== null) {
    promoСount = Number(promo.dataset.promo); 
    promo.textContent = formatDate(promoСount);
  }

  // проверяем определена ли стоимость доставки
  if (delivery !== null) {
    let deliveryActive = Number(delivery.dataset.priceDelivery);
    deliveryCount = deliveryActive;
  }

  // отображаем доставку
  getDateDelivery();

  //смотрим есть за изменение доставки
  watcherChangeDelivery();

  // отображаем  общую стоимость
  getTotalPrice()

  // отображаем изменения в количестве
  watcherChangeCount(goods)
}

function getDateGoods() {
  const arrayGoods = Array.from(document.querySelector)
}

// собираем данные о товарах 
function getObjectGoods(array) {
  if (array.length > 0) {
    array.forEach(good => {
      let count = Number(good.dataset.count);
      let price = Number(good.dataset.price);
      let sale = Number(good.dataset.sale);
      let hidden = good.dataset.hidden;
      
      if (hidden === 'false') {
        totalPrice += price*count;
        amountSale += sale*count;
        amountCount += count;
        visible = visible + 1;
      }
    })
  }
}

// считаем стоимость доставки

function getDateDelivery() {
  if (inputDelivery.checked) {
    deliveryCount = 0;
    deliveryContainer.classList.add('is-unactive');
    delivery.textContent = '0';
  } else {
    let lengthItem = document.querySelectorAll('.goods__item').length;   
    deliveryContainer.classList.remove('is-unactive');
    if (lengthItem === 0) {
      delivery.textContent = formatDate(deliveryCount);
      return
    } 
    deliveryCount = Number(delivery.dataset.priceDelivery);
    delivery.textContent = formatDate(deliveryCount);
  }  
}

//следим за выбором способа доставки

function watcherChangeDelivery() {
  inputDelivery.addEventListener('change', () => {
    getDateDelivery();
    displayTotalPrice();
  })
}

// отображаем изменение стоимости

function getTotalPrice() {
  // отображаем количество товара
  titleCount.textContent = formatDate(amountCount);

  //ототбражаем количество товара в иконке корзины
  goodsInCard.textContent = formatDate(amountCount)

  // отображаем стоимость товара
  titlePrice.textContent = (totalPrice - amountSale).toLocaleString();
  
  // отображаем стоимость без скидки
  cardPrice.textContent = formatDate(totalPrice);

  //отображаем размер скидки
  priceStocks.textContent = formatDate(amountSale);

  // отображаем размер скидки с учетом промокода
  const amountDiscount = amountSale + promoСount;
  discounts.textContent = formatDate(amountDiscount);

  //отображаем общий размер оплаты
  displayTotalPrice()
}

// изменяем формат отображения данных

function formatDate(number) {
  return number.toLocaleString()
}

// считаем общую сумму оплаты

function displayTotalPrice() {
  cardTotalPrice.textContent = (totalPrice - amountSale - promoСount + deliveryCount).toLocaleString();
}

// смотрим за изменением значений товара

function watcherChangeCount (array) {
  if (array.length > 0) {
    array.forEach(good => {
      const btnAdd = good.querySelector('.price__quantity-add');
      const btnReduce = good.querySelector('.price__quantity-reduce');
      const btnRecover = good.querySelector('.remove-item__button-recover');
      const btnGoodsDelete = good.querySelector('.goods__button-delete');
      const btnRemoveMessage = good.querySelector('.remove-item__button-delete');
      const input = good.querySelector('.price__count');
      const newPrice = good.querySelector('.price__item-new-all');
      const oldPrice = good.querySelector('.price__item-old-all');
      let priceItem = Number(good.dataset.price);
      let saleItem = Number(good.dataset.sale);
      let goodsCount = Number(good.dataset.count);

      btnAdd.addEventListener('click', ()=>{
        if (goodsCount === 1) {
          btnReduce.disabled = false;
        }

        amountCount = amountCount + 1;
        goodsCount = goodsCount + 1;
        amountSale = amountSale + saleItem;
        totalPrice = totalPrice + priceItem;
        good.dataset.count = Number(good.dataset.count) + 1;

        input.value = goodsCount;
        newPrice.textContent = (priceItem - saleItem) * goodsCount;

        if (oldPrice !== null) {
          oldPrice.textContent = priceItem * goodsCount;
        }

        getTotalPrice()
      })

      btnReduce.addEventListener('click', ()=>{
        if (goodsCount === 1) {
          btnReduce.disabled = true;
          return
        }

        amountCount = amountCount - 1;
        goodsCount = goodsCount - 1;
        amountSale = amountSale - saleItem;
        totalPrice = totalPrice - priceItem;
        good.dataset.count = Number(good.dataset.count) - 1;

        input.value = goodsCount;
        newPrice.textContent = (priceItem - saleItem) * goodsCount;

        if (oldPrice !== null) {
          oldPrice.textContent = priceItem * goodsCount;
        }

        if (goodsCount === 1) {
          btnReduce.disabled = true;
        } 

        getTotalPrice();
      })

      btnRecover.addEventListener('click', ()=>{
        good.classList.remove('is-closed');
        amountCount = amountCount + goodsCount;
        amountSale = amountSale + saleItem * goodsCount;
        totalPrice = totalPrice + priceItem * goodsCount;
        visible = visible + 1;
        good.dataset.hidden = false;

        if (visible === 1) {
          if (promoContainer !== null) {
            promoСount = Number(promo.dataset.promo); 
            promo.textContent = formatDate(promoСount);
          }
        }

        getTotalPrice()
      })

      btnGoodsDelete.addEventListener('click', ()=>{
        good.classList.add('is-closed');
        amountCount = amountCount - goodsCount;
        amountSale = amountSale - saleItem * goodsCount;
        totalPrice = totalPrice - priceItem * goodsCount;
        visible = visible - 1;
        good.dataset.hidden = true;
        
        if (visible === 0 ) {         
          if (promoContainer !== null) {
            promoСount = 0; 
            promo.textContent = formatDate(promoСount);
          }          
        }        

        getTotalPrice()
      })

      if (btnRemoveMessage !== null) {
        btnRemoveMessage.addEventListener('click', ()=>{
          good.remove();
          let lengthGoods = document.querySelectorAll('.goods__item').length;

          if (lengthGoods === 0) {
            promoСount = 0; // размер промокода
            deliveryCount = 0; // стоимость доставки
            totalPrice = 0; // стоимость без скидки
            amountSale = 0; // размер акции
            amountCount = 0;
            delivery.textContent = formatDate(deliveryCount);
            getTotalPrice();
          }
        })
      }
    })
  }
}

