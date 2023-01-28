const productsWord = document.querySelector('.goods-word');

const changeWord = (count) => {
  const countProcent = count % 100;
  const countProcentTen = countProcent % 10;

  if (countProcent >= 10 && countProcent <= 19) {
    productsWord.textContent = 'товаров';
    return;
  }

  if (countProcentTen === 1) {
    productsWord.textContent = 'товар';
    return;
  }

  if (countProcentTen >= 2 && countProcentTen <= 4) {
    productsWord.textContent = 'товара';
    return;
  }

  if (countProcentTen === 0 || (countProcentTen >= 5 && countProcentTen <= 9)) {
    productsWord.textContent = 'товаров';
    return;
  }
}


const formatNumber = (number) => {
  const arrSymbols = String(number).split('');
  arrSymbols.splice(-3, 0, '\u00A0');
  const numberSpace = arrSymbols.join('');
  return numberSpace;
}

export { formatNumber, changeWord }