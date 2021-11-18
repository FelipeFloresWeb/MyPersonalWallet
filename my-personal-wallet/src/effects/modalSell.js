import Swal from 'sweetalert2';

const buySellModal = (boolValue, msg1, msg2) => {
  if (boolValue === 'error') {
    return Swal.fire({
      title: 'Error!',
      text: 'You canceled the sale.',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
  }
  return Swal.fire({
    title: 'Sucess!',
    text: `Congratulations! You have sold ${msg1} ${msg2}`,
    icon: 'success',
    confirmButtonText: 'Cool',
  });
};

const buyCurrencie = async (state, userApiGain) => {
  const {
    wallets, email,
    exchangeRates,
    currencie,
  } = state;

  const { bid, code } = exchangeRates[currencie.code];
  const maxSell = wallets[code];

  let bidNumber = Number(bid).toFixed(2);

  if (code === 'BTC') bidNumber *= 100;

  // src: https://sweetalert2.github.io/recipe-gallery/input-number-input-range.html
  const inputValue = 0;
  const inputStep = 0.1;

  const modal = await Swal.fire({
    title: `Would you like to Sell ${currencie.code}?`,
    html: `
        <h2
          class="swal2-label"
          >Total:<br>${currencie.code} <span id="range-value">${inputValue}</span></h2>
          `,
    input: 'range',
    inputValue,
    inputAttributes: {
      min: 0,
      max: maxSell || 0,
      step: inputStep,
    },
    didOpen: () => {
      const inputRange = Swal.getInput();
      const inputNumber = Swal.getHtmlContainer().querySelector('#range-value');

      inputRange.style.width = '100%';

      inputRange.addEventListener('input', () => {
        inputNumber.innerHTML = (Number(inputRange.value) * Number(bidNumber)).toFixed(2);
      });

      inputNumber.addEventListener('change', () => {
        inputRange.value = {
          Total: Number(inputNumber.innerHTML) * Number(bidNumber),
        };
      });
    },
  });

  if (modal.isDismissed) return buySellModal('error');

  const total = Number(Number(modal.value) * Number(bidNumber)).toFixed(2);
  const totalCurrencies = Number(modal.value).toFixed(2);
  let sumCurrencies = 0;

  if (wallets[code]) { sumCurrencies = wallets[code]; }

  await userApiGain({
    email,
    balance: total,
    wallets: { ...wallets, [code]: (sumCurrencies - totalCurrencies).toFixed(2) },
  });

  return buySellModal('ok', totalCurrencies, code);
};

export default buyCurrencie;
