import styled from 'styled-components';

const Button = styled.button.attrs(props => ({
  type: props.type ? props.type : 'button',
}))`
  width: 100%;
  height: 3.75rem;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  margin-top: 1rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 1.125em;
  line-height: 3.75rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export default Button;
