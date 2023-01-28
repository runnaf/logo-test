import {resetForm} from './resetForm.js';

const SERVER_URL_GET = 'https://geocode-maps.yandex.ru/1.x/?apikey=bb32e304-92c1-4f44-8826-c90e304b0dc3&format=json';
const URL_SEND_DATA = 'https://echo.htmlacademy.ru/';
const METHOD = 'POST';

async function getData(address) {
  try {
    const url = SERVER_URL_GET + '&geocode=' + address.value;
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

const sendData = (dataForm, onSuccess, onFail) => {
  fetch(
    URL_SEND_DATA,
    {
      method: METHOD,
      body: dataForm,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        resetForm();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {
  getData,
  sendData
};