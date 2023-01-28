import {sendData} from './api.js';

const submitButton = formSubmit.querySelector('#submit-button');
const successContainer = document.querySelector('#success').content.querySelector('.success');
const errorContainer = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorContainer.querySelector('.error__button');

export function sendsSuccess (form) {
  blockSubmitButton();

  sendData(form, () => {
    showSuccess();
    unblockSubmitButton();
  }, () => {
    showError();
    unblockSubmitButton();
  })
}

// Блокирует кнопку во время отправки формы

function blockSubmitButton() {
  submitButton.disabled = true;
  submitButton.textContent = 'Оформляю заказ...';
}

// Показывает сообщение при неудачной отправке формы, закрывает попап при клике мимо окна, на кнопку или на Esc

function showError() {
  document.body.append(errorContainer);
  errorContainer.append(errorButton);
  
  errorButton.addEventListener('click', () => {
    errorContainer.remove();
  });
  
  document.addEventListener('click', onPopupClick);
  
  document.addEventListener('keydown', onPopupEscKeydown);
  
  setTimeout(() => {
    errorContainer.remove();
  }, SHOW_TIME);
};

function showSuccess() {
  document.body.append(successContainer);
  document.addEventListener('click', onPopupClick);
  document.addEventListener('keydown', onPopupEscKeydown);

  setTimeout(() => {
    successContainer.remove();
  }, SHOW_TIME);
}

// Разблокирует кнопку

function unblockSubmitButton() {
  submitButton.disabled = false;
  submitButton.textContent = 'Оформить заказ';
}

// Удаляет попап
function onPopupClick() {
  removePopup();
};

// Удаляет попап и обработчик событий
function removePopup() {
  errorContainer.remove();
  successContainer.remove();

  document.removeEventListener('click', onPopupClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
}

// Закрытвает попап при нажатии Esc

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removePopup();
  }
};




