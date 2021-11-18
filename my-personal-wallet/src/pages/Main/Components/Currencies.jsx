import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container, Row, Col, ListGroup, Button, Card,
} from 'react-bootstrap';

import { mockAPIThunkSpent, mockAPIThunkGain } from '../../../actions';
import modalBuy from '../../../effects/modalBuy';
import modalSell from '../../../effects/modalSell';
import getIcon from '../../../utils/icons';

const Currencies = function (props) {
  const {
    exchangeRates, balance, wallets, userApiSpent, email, userApiGain,
  } = props;

  const [renderCurr, setRenderCurr] = useState(false);
  const [currencie, setCurrencie] = useState({});

  const allCurrenciesTypes = Object.keys(exchangeRates);

  const renderCurrencie = async (e) => {
    setRenderCurr(true);
    const { innerHTML } = e.target;
    const Currcurrencie = exchangeRates[innerHTML];
    setCurrencie(Currcurrencie);
  };

  const state = {
    balance,
    wallets,
    email,
    exchangeRates,
    currencie,
  };

  const handleBuy = async () => {
    await modalBuy(state, userApiSpent);
  };

  const handleSell = async () => {
    await modalSell(state, userApiGain);
  };

  return (
    <div>
      <h2>Currencies</h2>
      <Container>
        <Row>
          {allCurrenciesTypes.map((item) => (
            <Col style={{ cursor: 'pointer' }} onClick={renderCurrencie} key={item}>{item}</Col>
          ))}
        </Row>

      </Container>
      <br />
      {!renderCurr ? '' : (
        <>
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Card.Img
                  variant="top"
                  style={{ width: '5rem' }}
                        // https://github.com/spothq/cryptocurrency-icons
                  src={getIcon(currencie.code.toLowerCase())}
                />
              </Col>
            </Row>
          </Container>
          <br />
          <ListGroup>
            <ListGroup.Item>{`Conversion currency: ${currencie.name}`}</ListGroup.Item>
            <ListGroup.Item>{`Buy now for: R$ ${currencie.bid}`}</ListGroup.Item>
            <ListGroup.Item>{`Sell now for: R$ ${currencie.ask}`}</ListGroup.Item>
            <ListGroup.Item>
              {`Last update: ${currencie.create_date.split(' ')[0]} Hour: ${currencie.create_date.split(' ')[1]}`}
            </ListGroup.Item>
          </ListGroup>
          <br />
          <Container>

            <Row className="justify-content-md-center">
              <Col md="auto">
                <Button onClick={handleBuy} variant="primary">Buy</Button>
              </Col>
              <Col md="auto">
                <Button onClick={handleSell} variant="dark">Sell</Button>
              </Col>
            </Row>
          </Container>
        </>
      ) }
    </div>
  );
};

const mapStateToProps = ({
  wallet: { exchangeRates },
  user: {
    balance, wallets, email,
  },
}) => ({
  exchangeRates,
  balance,
  wallets,
  email,
});

const mapDispatchToProps = (dispatch) => ({
  userApiSpent: (payload) => dispatch(mockAPIThunkSpent(payload)),
  userApiGain: (payload) => dispatch(mockAPIThunkGain(payload)),
});

Currencies.propTypes = {
  currencies: PropTypes.arrayOf({}),
  isLoading: PropTypes.bool,
  balance: PropTypes.number,
  wallets: PropTypes.arrayOf({}),
  userApiSpent: PropTypes.func,
  userApiGain: PropTypes.func,
  email: PropTypes.string,
  spentError: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
