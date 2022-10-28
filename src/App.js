import { Col, Grid, Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Field from './components/Field';
import Modal from './components/Modal';
import Title from './components/Title';
import Logo from './imgs/logo-assets/logo_transparent.png';
import Container from './patterns/Container';
import Main from './patterns/Main';
const { useBreakpoint } = Grid;

const App = () => {
  const screens = useBreakpoint();
  const [toggleModal01, setToggleModal01] = useState(false);


  function responsiveFont(lg, md, sm) {
    if (screens.xxl || screens.xl || screens.lg)
      return lg;
    if (screens.md)
      return md;
    else
      return sm;
  }

  return (
    <Main className="home">
      <Modal toggle={toggleModal01} setToggle={setToggleModal01} title='Cadastrar-se'>

      </Modal>
      <Row>
        <Col xs={{ span: 24 }}>
          <img id="logo" src={Logo} width={250} />
          <Row justify='end'>
            <Field className='button-field'>
              <Button>Entrar</Button>
              <Button onClick={() => setToggleModal01(true)}>Cadastrar-se</Button>
            </Field>
          </Row>
        </Col>
        <Col xs={{ span: 24 }}>
          <Container style={{ marginTop: '10vh' }}>
            <Row>
              <Col xs={{ span: 24 }}>
                <Row justify="center">
                  <Col xs={{ span: 12 }}>
                    <Row justify='center'>
                      <Title size={70} thickness={600} color='white' responsive>
                        Domine o <label style={{ color: 'var(--primary-color3)', fontSize: responsiveFont(110, 80, 70), marginLeft: -5 }}>consumidor</label> dentro de você.
                      </Title>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Main>
  );
};

export default App;
