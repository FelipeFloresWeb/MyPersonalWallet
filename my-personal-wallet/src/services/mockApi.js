const getUser = ({ email, password }) => new Promise((resolve, reject) => {
  if (email && password) {
    resolve({
      status: 200,
      user: {
        name: 'Pedro', email: 'pedro@pedro.com', id: '1', balance: 2000,
      },
    });
  } else {
    reject(new Error('User Not Found'));
  }
});

const createUser = ({ name, email, password }) => new Promise((resolve, reject) => {
  if (name && email && password) {
    resolve({
      status: 201,
      // token: 'sad65f1as5df1as65df1a5s6df15a6sd1fas65df165asd1fa6sd1fa6sd516sd',
      user: {
        name, email, balance: 0,
      },
    });
  } else {
    reject(new Error('Invalid Fields'));
  }
});

const ApiMock = {
  getUser,
  createUser,
};

export default ApiMock;
