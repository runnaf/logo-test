import {sendsSuccess} from './sendSuccess.js';

const formSubmit = document.querySelector('#form-submit');
const validation = new window.JustValidate('#form-submit');


const validationForm = () => {
  let tel = document.querySelector('#phone');
  let telMask = new Inputmask('+7(999)999-99-99');
  telMask.mask(tel);

  validation.addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно к заполнению'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум 2 символа',
    }
  ])
    .addField('#surname', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно к заполнению'
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа'
      }
    ])
    .addField('#phone', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно к заполнению'
      },
      {
        validator: (value) => {
          const phone = tel.inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length === 10)
        },
        errorMessage: 'Введите телефон полностью'
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно к заполнению'
      },
      {
        rule: 'email',
        errorMessage: 'Введите валидный адрес почты'
      },
    ])
    .addField('#address', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно к заполнению'
      }
    ])
    .addField('#promo', [
      {
        rule: 'maxLength',
        value: 7,
        errorMessage: 'Максимум 7 символов'
      }
    ])
    .onSuccess(() => {
      const formData = new FormData(formSubmit);
      sendsSuccess(formData);

      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
    })
}

export {
  validationForm,
  validation
};
