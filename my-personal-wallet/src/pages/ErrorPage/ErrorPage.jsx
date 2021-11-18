import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import NotFoundLogo from '../../assets/NotFoundLogo.png';

const ErrorPage = function () {
  const [canRedirect, setCanRedirect] = useState(false);
  const redirect = () => {
    setTimeout(() => {
      setCanRedirect(true);
    }, 4000);
  };
  useEffect(() => redirect(), []);
  return (
    <div>
      {canRedirect ? <Navigate to="/login" /> : ''}
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <img src={NotFoundLogo} alt="Not Found Page" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorPage;
