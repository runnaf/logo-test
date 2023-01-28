const contactsInputs = document.querySelectorAll('.contacts__input');
const contactsPlaceholders = document.querySelectorAll('.contacts__placeholder');
const formSubmit = document.querySelector('#form-submit');
const promoButtonText = document.querySelector('.submit__promo-button-text');
const promoInput = document.querySelector('.submit__promo-input');
const text = document.querySelector('.contacts__button-text');


export {contactsInputs, contactsPlaceholders, formSubmit, promoButtonText, promoInput, text}

// const successContainer = document.querySelector('#success').content.querySelector('.success');
// const errorContainer = document.querySelector('#error').content.querySelector('.error');
// const errorButton = errorContainer.querySelector('.error__button');


// const submitButton = formSubmit.querySelector('#submit-button');

// const productsTitle = document.querySelector('.products__legend');
// const productsTitleText = productsTitle.querySelector('.products__legend-text');

// const productsCounts = productsTitle.querySelector('#products-count');
// const productsPrice = productsTitle.querySelector('#products-price');
// const productsWord = productsTitle.querySelector('.products__word');

// const productsList = document.querySelector('.products__list');

// const totalPrice = document.querySelector('#total-price-items');
// const priceStocks = document.querySelector('#price-stocks');
// const priceDiscounts = document.querySelector('#price-discounts');
// const pricePromo = document.querySelector('#price-promo');
// const totalPriceAll = document.querySelector('#total-price');
// const priceDelivery = document.querySelector('#price-delivery');

// const bagCounter = document.querySelector('.bag__counter');

// // Блокирует кнопку во время отправки формы
// const blockSubmitButton = () => {
//   submitButton.disabled = true;
//   submitButton.textContent = 'Оформляю заказ...';
// };

// // Разблокирует кнопку
// const unblockSubmitButton = () => {
//   submitButton.disabled = false;
//   submitButton.textContent = 'Оформить заказ';
// };

// // Находит кнопку Esc
// const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

// // Закрытвает попап при нажатии Esc
// const onPopupEscKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     removePopup();
//   }
// };

// // Удаляет попап
// const onPopupClick = () => {
//   removePopup();
// };

// // Удаляет попап и обработчик событий
// function removePopup() {
//   errorContainer.remove();
//   successContainer.remove();

//   document.removeEventListener('click', onPopupClick);

//   document.removeEventListener('keydown', onPopupEscKeydown);
// }

// // Показывает сообщение при неудачной отправке формы, закрывает попап при клике мимо окна, на кнопку или на Esc
// const showError = () => {
//   document.body.append(errorContainer);
//   errorContainer.append(errorButton);

//   errorButton.addEventListener('click', () => {
//     errorContainer.remove();
//   });

//   document.addEventListener('click', onPopupClick);

//   document.addEventListener('keydown', onPopupEscKeydown);

//   setTimeout(() => {
//     errorContainer.remove();
//   }, SHOW_TIME);
// };

// // Показывает сообщение при удачной отправке формы, закрывает попап при клике мимо окна или на Esc
// const showSuccess = () => {
//   document.body.append(successContainer);

//   document.addEventListener('click', onPopupClick);

//   document.addEventListener('keydown', onPopupEscKeydown);

//   setTimeout(() => {
//     successContainer.remove();
//   }, SHOW_TIME);
// };