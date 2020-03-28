import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';

import { Container, Header, IncidentsList, IncidentsHeading } from './styles';
import Button from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
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

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: { Authorization: ongId },
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
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

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </IncidentsList>
    </Container>
  );
}
