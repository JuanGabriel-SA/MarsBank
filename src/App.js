import { Col, Grid, Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { AiFillMail, AiOutlineLogin } from 'react-icons/ai';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import './App.css';
import Button from './components/Button';
import Field from './components/Field';
import InputField from './components/InputField';
import Modal from './components/Modal';
import Title from './components/Title';
import Logo from './imgs/logo-assets/logo_transparent.png';
import Container from './patterns/Container';
import Main from './patterns/Main';
const { useBreakpoint } = Grid;

const App = () => {
  const screens = useBreakpoint();
  const [toggleModal01, setToggleModal01] = useState(false);
  const [toggleModal02, setToggleModal02] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [password, setPassword] = useState('');


  function responsiveFont(lg, md, sm) {
    if (screens.xxl || screens.xl || screens.lg)
      return lg;
    if (screens.md)
      return md;
    else
      return sm;
  }

  function changeModals(to) {
    if (to == 'login') {
      setToggleModal01(false);
      setToggleModal02(true);
    } else {
      setToggleModal02(false);
      setToggleModal01(true);
    }
  }

  useEffect(() => {
    console.log(newUser)
  }, [newUser])

  return (
    <Main className="home">
      {/*MODAL CADASTRAR*/}
      <Modal toggle={toggleModal01} setToggle={setToggleModal01} style={{ width: 400 }}>
        <Row>
          <Col xs={{ span: 24 }}>
            <Row justify='center'>
              <Field>
                <Title thickness={600}>Cadastrar-se</Title>
              </Field>
            </Row>
          </Col>
          <Col xs={{ span: 24 }}>
            <Field>
              <InputField
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                block
                display='line'
                type='text'
                placeholder='Digite seu nome'
                icon={FaUserAlt}
                iconStyle={{ top: 2 }}>
                Nome
              </InputField>
            </Field>
          </Col>
          <Col xs={{ span: 24 }}>
            <Field>
              <InputField
                onChange={(e) => setNewUser({ ...newUser, mail: e.target.value })}
                block
                display='line'
                type='email'
                placeholder='Digite seu email'
                icon={AiFillMail}
                iconStyle={{ top: 3 }}>
                Email
              </InputField>
            </Field>
          </Col>
          <Col xs={{ span: 24 }}>
            <Field>
              <InputField
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                block
                display='line'
                type='password'
                placeholder='Digite sua senha'
                icon={FaLock}
                iconStyle={{ top: 3 }}>
                Senha
              </InputField>
            </Field>
          </Col>
          <Col xs={{ span: 24 }}>
            <Field>
              <InputField
                onChange={(e) => setPassword(e.target.value)}
                block
                display='line'
                type='password'
                placeholder='Confirme a senha'
                icon={FaLock}
                iconStyle={{ top: 3 }}>
                Confirmar senha
              </InputField>
            </Field>
          </Col>
          <Col xs={{ span: 24 }}>
            <Row justify='center'>
              <Field block>
                <Button type='modern-primary' block icon={AiOutlineLogin}>
                  Cadastrar-se
                </Button>
              </Field>
            </Row>
          </Col>
          <Col xs={{ span: 24 }}>
            <Row justify='center'>
              <Field top={0}>
                <label>Já tem um conta? <a onClick={() => changeModals('login')} style={{ marginLeft: 2 }}> Fazer login</a></label>
              </Field>
            </Row>
          </Col>
        </Row>
      </Modal>
      {/*FIM MODAL CADASTRAR*/}
      {/*MODAL LOGIN*/}
      <Modal toggle={toggleModal02} setToggle={setToggleModal02} style={{ width: 400 }}>
        <Row>
          <Col xs={{ span: 24 }}>
            <Row justify='center'>
              <Field>
                <Title thickness={600}>Login</Title>
              </Field>
            </Row>
          </Col>
          <Col xs={{ span: 24 }}>
            <Field>
              <InputField block display='line' type='email' placeholder='Digite seu email' icon={AiFillMail} iconStyle={{ top: 3 }}>
                Email
              </InputField>
            </Field>
          </Col>
          <Col xs={{ span: 24 }}>
            <Field>
              <InputField block display='line' type='password' placeholder='Digite sua senha' icon={FaLock} iconStyle={{ top: 3 }}>
                Senha
              </InputField>
            </Field>
          </Col>
          <Col xs={{ span: 24 }}>
            <Row justify='center'>
              <Field block>
                <Button type='modern-primary' block icon={AiOutlineLogin}>
                  Entrar
                </Button>
              </Field>
            </Row>
          </Col>
          <Col xs={{ span: 24 }}>
            <Row justify='center'>
              <Field top={0}>
                <label>Não possui uma conta? <a onClick={() => changeModals('cadastrar-se')} style={{ marginLeft: 2 }}> Cadastrar-se</a></label>
              </Field>
            </Row>
          </Col>
        </Row>
      </Modal>
      {/*FIM MODAL LOGIN*/}
      <Row>
        <Col xs={{ span: 24 }}>
          <img id="logo" src={Logo} width={250} />
          <Row justify='end'>
            <Field className='button-field'>
              <Button onClick={() => setToggleModal02(true)}>Entrar</Button>
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
                      <Title size={70} thickness={600} color='white' responsive animated>
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
