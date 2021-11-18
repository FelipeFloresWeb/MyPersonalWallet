import Swal from 'sweetalert2';

const buySellModal = (boolValue, msg1, msg2) => {
  if (boolValue === 'error') {
    return Swal.fire({
      title: 'Error!',
      text: 'You have canceled the purchase.',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
  }
  return Swal.fire({
    title: 'Sucess!',
    text: `Congratulations! You have just purchased ${msg1} ${msg2}`,
    icon: 'success',
    confirmButtonText: 'Cool',
  });
};

const buyCurrencie = async (state, userApiSpent) => {
  const {
    balance, wallets, email,
    exchangeRates,
    currencie,
  } = state;

  const { ask, code } = exchangeRates[currencie.code];
  let askNumber = Number(ask).toFixed(2);

  if (code === 'BTC') askNumber *= 100;

  // src: https://sweetalert2.github.io/recipe-gallery/input-number-input-range.html
  const inputValue = 0;
  const inputStep = 0.1;

  const modal = await Swal.fire({
    title: `Would you like to buy ${currencie.code}?`,
    html: `
        <h2
          class="swal2-label"
          >Total:<br> R$ <span id="range-value">${inputValue}</span></h2>
          `,
    input: 'range',
    inputValue,
    inputAttributes: {
      min: 0,
      max: balance / askNumber,
      step: inputStep,
    },
    didOpen: () => {
      const inputRange = Swal.getInput();
      const inputNumber = Swal.getHtmlContainer().querySelector('#range-value');

      inputRange.style.width = '100%';

      inputRange.addEventListener('input', () => {
        inputNumber.innerHTML = (Number(inputRange.value) * Number(askNumber)).toFixed(2);
      });

      inputNumber.addEventListener('change', () => {
        inputRange.value = {
          Total: Number(inputNumber.innerHTML) * Number(askNumber),
        };
      });
    },
  });

  if (modal.isDismissed) return buySellModal('error');

  const total = Number(Number(modal.value) * Number(askNumber)).toFixed(2);
  const totalCurrencies = Number(modal.value);
  let sumCurrencies = 0;

  if (wallets[code]) sumCurrencies = wallets[code];

  await userApiSpent({
    email, balance: total, wallets: { ...wallets, [code]: totalCurrencies + sumCurrencies },
  });

  return buySellModal('ok', totalCurrencies, code);
};

export default buyCurrencie;
