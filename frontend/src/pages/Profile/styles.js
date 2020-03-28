import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 73.75rem;
  padding: 0 1.875rem;
  margin: 2rem auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 2rem;
  }

  span {
    font-size: 1.25rem;
    margin-left: 1.5rem;
  }

  a {
    width: 16.25rem;
    margin-left: auto;

    button {
      margin-top: 0;
    }
  }

  > button {
    height: 3.75rem;
    width: 3.75rem;
    border-radius: 4px;
    border: 1px solid #dcdcd6;
    background: transparent;
    margin-left: 1rem;
    transition: border-color 0.2s;

    &:hover {
      border-color: #aaa;
    }
  }
`;

export const IncidentsHeading = styled.h1`
  margin-top: 5rem;
  margin-bottom: 1.5rem;
`;

export const IncidentsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;

  li {
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    position: relative;

    span {
      font-weight: bold;
      display: block;
    }

    p {
      color: #737380;
      line-height: 1.3125rem;
      font-size: 1em;

      & + span {
        margin-top: 2rem;
      }
    }

    button {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
