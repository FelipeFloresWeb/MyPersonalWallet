import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import store from '../../store';

const historyMock = createMemoryHistory();

function renderWithProvider(componentToRender) {
  const renderObject = render(
    <Provider history={historyMock} store={store}>
      {componentToRender}
    </Provider>,
  );

  return {
    ...renderObject,
    history: historyMock,
  };
}

export default renderWithProvider;
