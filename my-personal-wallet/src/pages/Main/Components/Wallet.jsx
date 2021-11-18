import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container, Row, Col, Card,
} from 'react-bootstrap';

import getIcon from '../../../utils/icons';

const Wallet = function () {
  // alternativa de uso para acessar algum valor do redux (useSelector)
  const { user } = useSelector((state) => state);

  const currencies = Object.keys(user.wallets);
  const quantities = Object.values(user.wallets);

  return (

    <Container>
      <Row className="justify-content-md-center">
        { currencies.length < 1
          ? <h3>You do not have any currency yet...  :)</h3>
          : currencies.map((item, index) => (
            <Col key={item} md="auto">
              <Card style={{ width: '18rem' }}>
                <Container>
                  <Row className="justify-content-md-center">
                    <Col key={item} md="auto">
                      <Card.Img
                        variant="top"
                        style={{ width: '5rem' }}
                        // https://github.com/spothq/cryptocurrency-icons
                        src={getIcon(item.toLowerCase())}
                      />
                    </Col>
                  </Row>
                </Container>
                <Card.Body>
                  <Container>
                    <Row className="justify-content-md-center">
                      <Col key={item} md="auto">
                        <Card.Title>{item}</Card.Title>
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col key={item} md="auto">
                        <Card.Text>
                          {`${item} quantity: ${quantities[index]}`}
                        </Card.Text>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          )) }
      </Row>
    </Container>
  );
};

export default Wallet;
