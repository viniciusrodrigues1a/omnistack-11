import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { FiPower, FiTrash2, FiRefreshCw, FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';

import { store } from '../../store';
import { signOut } from '../../store/modules/auth/actions';

import {
  ProfileContainer,
  Header,
  IncidentsHeading,
  IncidentsList,
  IncidentOptions,
  Modal,
} from './styles';
import Container from '../../components/Container';
import Content from '../../components/Content';
import AuthRedirect from '../../components/AuthRedirect';
import Section from '../../components/Section';
import Button from '../../components/Button';
import { Form, Input, Textarea } from '../../components/Form';

import logoImg from '../../assets/images/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [currentIDBeingUpdated, setCurrentIDBeingUpdated] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const ongName = store.getState().auth.name;
  const ongId = store.getState().auth.id;

  const apiCall = useCallback(() => {
    api
      .get('/profile', { headers: { Authorization: ongId } })
      .then(({ data }) => {
        const newData = data.map(incident => ({
          ...incident,
          value: formatPrice(incident.value),
        }));

        setIncidents(newData);
      });
  }, [ongId]);

  useEffect(() => {
    apiCall();
  }, [apiCall]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: { Authorization: ongId },
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      toast.error('Erro ao deletar caso.', {
        className: 'toast-background',
      });
    }
  }

  function handleShowUpdateModal(id) {
    if (modalShow === false) {
      setCurrentIDBeingUpdated(id);
    } else {
      setCurrentIDBeingUpdated(null);
    }

    setModalShow(!modalShow);
  }

  async function handleUpdateIncident(e) {
    e.preventDefault();

    const data = {
      title: title || undefined,
      description: description || undefined,
      value: value || undefined,
    };

    try {
      await api.put(
        `/incidents/${currentIDBeingUpdated}`,
        { ...data },
        { headers: { Authorization: ongId } }
      );

      apiCall();
      handleShowUpdateModal();
    } catch (err) {
      toast.error('Erro ao atualizar caso.', {
        className: 'toast-background',
      });
    }
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <>
      <ProfileContainer>
        <Header>
          <img src={logoImg} alt="Be The Hero" />
          <span>Bem vindo(a), {ongName}</span>

          <Link to="/incidents/new">
            <Button>Cadastrar novo caso</Button>
          </Link>
          <button type="button" onClick={handleLogout}>
            <FiPower size={18} color="#e02041" />
          </button>
        </Header>

        <IncidentsHeading>Casos cadastrados</IncidentsHeading>

        <IncidentsList>
          {incidents.map(incident => (
            <li key={incident.id}>
              <span>CASO:</span>
              <p>{incident.title}</p>

              <span>DESCRIÇÃO:</span>
              <p>{incident.description}</p>

              <span>VALOR:</span>
              <p>{incident.value}</p>

              <IncidentOptions>
                <button
                  onClick={() => handleShowUpdateModal(incident.id)}
                  type="button"
                >
                  <FiRefreshCw size={20} color="#a8a8b3" />
                </button>

                <button
                  onClick={() => handleDeleteIncident(incident.id)}
                  type="button"
                >
                  <FiTrash2 size={20} color="#a8a8b3" />
                </button>
              </IncidentOptions>
            </li>
          ))}
        </IncidentsList>
      </ProfileContainer>
      <Modal show={modalShow}>
        <Container>
          <Content>
            <Section>
              <img src={logoImg} alt="Be The Hero" />

              <h1>Atualizar caso</h1>
              <p>
                Deixe as informações do caso sempre atualizadas para encontrar
                um herói para resolvê-lo.
              </p>

              <AuthRedirect.Button onClick={handleShowUpdateModal}>
                <FiArrowLeft size={16} color="#e02041" />
                Voltar
              </AuthRedirect.Button>
            </Section>
            <Form onSubmit={handleUpdateIncident}>
              <Input
                placeholder="Título do caso"
                value={title}
                onChange={e => {
                  setTitle(e.target.value);
                }}
              />
              <Textarea
                placeholder="Descrição"
                value={description}
                onChange={e => {
                  setDescription(e.target.value);
                }}
              />
              <Input
                placeholder="Valor em reais"
                value={value}
                onChange={e => {
                  setValue(e.target.value);
                }}
              />

              <Button type="submit">Cadastrar</Button>
            </Form>
          </Content>
        </Container>
      </Modal>
    </>
  );
}
