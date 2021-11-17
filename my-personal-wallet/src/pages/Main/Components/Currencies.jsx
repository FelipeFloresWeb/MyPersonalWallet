import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const Currencies = function (props) {
  const { exchangeRates } = props;

  const allCurrenciesTypes = Object.keys(exchangeRates);

  const handleCurrencie = (e) => {
    const { innerHTML } = e.target;
    console.log(innerHTML);
  };

  return (
    <div>
      <h2>Currencies</h2>
      <Container>
        <Row>
          {allCurrenciesTypes.map((currencie) => (
            <Col onClick={handleCurrencie} key={currencie}>{currencie}</Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ wallet: { exchangeRates } }) => ({
  exchangeRates,
});

Currencies.propTypes = {
  currencies: PropTypes.arrayOf({}),
}.isRequired;

export default connect(mapStateToProps)(Currencies);
