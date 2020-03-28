import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import { FormSection, Form } from './styles';
import Container from '../../components/Container';
import { Input } from '../../components/Form';
import Button from '../../components/Button';
import AuthRedirect from '../../components/AuthRedirect';

import heroesImg from '../../assets/images/heroes.png';
import logoImg from '../../assets/images/logo.svg';

export default function Logon() {
  const [id, setID] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/session', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      toast.error('Falha no login, tente novamente.', {
        className: 'toast-background',
      });
    }
  }

  return (
    <Container>
      <FormSection>
        <img src={logoImg} alt="Be The Hero" />

        <Form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <Input
            placeholder="Sua ID"
            value={id}
            onChange={e => setID(e.target.value)}
          />
          <Button type="submit">Entrar</Button>

          <AuthRedirect.Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </AuthRedirect.Link>
        </Form>
      </FormSection>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
