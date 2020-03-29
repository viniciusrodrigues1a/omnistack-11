import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/images/logo.png';

import {
  StyledIncidentContainer,
  StyledIncidentProperty,
  StyledIncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText,
} from './styles';
import Container from '../../components/Container';
import Header from '../../components/Header';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;
  const message = `Olá ${incident.ong_name}, estou entrando em contato, pois gostaria de ajudar no caso "${incident.title}" com o valor de ${incident.formattedPrice}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: [incident.ong_email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.ong_whatsapp}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </Header>

      <StyledIncidentContainer>
        <StyledIncidentProperty style={{ marginTop: 0 }}>
          ONG:
        </StyledIncidentProperty>
        <StyledIncidentValue>
          {incident.ong_name} de {incident.ong_city}/{incident.ong_uf}
        </StyledIncidentValue>

        <StyledIncidentProperty>CASO:</StyledIncidentProperty>
        <StyledIncidentValue>{incident.title}</StyledIncidentValue>

        <StyledIncidentProperty>VALOR:</StyledIncidentProperty>
        <StyledIncidentValue>{incident.formattedPrice}</StyledIncidentValue>
      </StyledIncidentContainer>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>

          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
