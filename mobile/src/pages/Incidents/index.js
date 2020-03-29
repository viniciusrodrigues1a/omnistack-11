import React, { useState, useEffect, useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import formatPrice from '../../utils/formatPrice';
import api from '../../services/api';

import logoImg from '../../assets/images/logo.png';

import {
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentList,
  DetailsButton,
  DetailsButtonText,
} from './styles';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Incident from '../../components/Incident';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const loadIncidents = useCallback(async () => {
    setLoading(true);

    const response = await api.get(`/incidents?page=${page}`);

    const data = response.data.map(incident => ({
      ...incident,
      formattedPrice: formatPrice(incident.value),
    }));

    // eslint-disable-next-line no-shadow
    setIncidents(incidents => [...incidents, ...data]);
    setTotalIncidents(response.headers['x-total-count']);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    loadIncidents();
  }, [loadIncidents]);

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  function nextPage() {
    if (loading) {
      return;
    }

    if (incidents.total && incidents.data.length === incidents.total) {
      return;
    }

    setPage(page + 1);
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>{totalIncidents} casos.</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Bem-vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        onEndReached={nextPage}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <Incident.Container>
            <Incident.Property>ONG:</Incident.Property>
            <Incident.Value>
              {incident.ong_name} de {incident.ong_city}/{incident.ong_uf}
            </Incident.Value>

            <Incident.Property>CASO:</Incident.Property>
            <Incident.Value>{incident.title}</Incident.Value>

            <Incident.Property>VALOR:</Incident.Property>
            <Incident.Value>{incident.formattedPrice}</Incident.Value>

            <DetailsButton onPress={() => navigateToDetail(incident)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </Incident.Container>
        )}
      />
    </Container>
  );
}
