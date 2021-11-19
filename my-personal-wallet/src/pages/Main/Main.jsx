import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CloseButton } from 'react-bootstrap';

import Header from './Components/Header';
import Wallet from './Components/Wallet';
import Currencies from './Components/Currencies';

const Main = function () {
  const [handlePages, setHandlePages] = useState('');
  const [togleText, setTogleText] = useState(false);

  return (
    <>
      <Header setHandlePages={setHandlePages} handlePages={handlePages} />
      <div data-testid="close-div" hidden={togleText} className="container overflow-hidden">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border bg-light">
              <CloseButton data-testid="close-button" onClick={() => setTogleText(!togleText)} aria-label="Hide" />
              <h3>Select Wallet to view your wallet or Currencies to view market offers</h3>
            </div>
          </div>
        </div>
      </div>
      {handlePages === 'wallet' ? <Wallet /> : ''}
      {handlePages === 'currencies' ? <Currencies /> : ''}
    </>
  );
};

export default connect()(Main);
