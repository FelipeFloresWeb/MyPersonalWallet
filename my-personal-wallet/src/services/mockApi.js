const getUser = ({ email, password }) => new Promise((resolve, reject) => {
  if (email && password) {
    resolve({
      status: 200,
      user: {
        name: 'Pedro', email, id: '1', balance: 10000, wallets: { USD: 1.2 },
      },
    });
  } else {
    reject(new Error('User Not Found'));
  }
});

const addGainUser = ({ email, balance, wallets }) => new Promise((resolve, reject) => {
  if (email && balance && wallets) {
    resolve({
      status: 201,
      // token: 'sad65f1as5df1as65df1a5s6df15a6sd1fas65df165asd1fa6sd1fa6sd516sd',
      user: {
        balance: Number(balance), wallets,
      },
    });
  } else {
    reject(new Error('Invalid Fields'));
  }
});

const addSpentUser = ({ email, balance, wallets }) => new Promise((resolve, reject) => {
  if (email && balance && wallets) {
    resolve({
      status: 201,
      // token: 'sad65f1as5df1as65df1a5s6df15a6sd1fas65df165asd1fa6sd1fa6sd516sd',
      user: {
        balance: Number(balance), wallets,
      },
    });
  } else {
    reject(new Error('Invalid Fields'));
  }
});

const createUser = ({ name, email, password }) => new Promise((resolve, reject) => {
  if (name && email && password) {
    resolve({
      status: 201,
      // token: 'sad65f1as5df1as65df1a5s6df15a6sd1fas65df165asd1fa6sd1fa6sd516sd',
      user: {
        name, email, balance: 0, wallets: {},
      },
    });
  } else {
    reject(new Error('Invalid Fields'));
  }
});

const ApiMock = {
  getUser,
  createUser,
  addSpentUser,
  addGainUser,
};

export default ApiMock;
