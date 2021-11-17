import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './Components/Header';
import Wallet from './Components/Wallet';
import Currencies from './Components/Currencies';

const Main = function (props) {
  const { name } = props;
  const [handlePages, setHandlePages] = useState('');

  return (
    <>
      <Header setHandlePages={setHandlePages} handlePages={handlePages} />
      <h3>{`Welcome ${name} Select 'Wallet' to view your wallet or 'Currencies' to view market offers`}</h3>
      {handlePages === 'wallet' ? <Wallet /> : ''}
      {handlePages === 'currencies' ? <Currencies /> : ''}
    </>
  );
};

const mapStateToProps = ({ user: { name } }) => ({
  name,
});

Main.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Main);
