import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: grid;
  place-items: center;
  height: 35px;
  background: var(--secondary-color);
  color: black;
  font-size: 12px;
  font-weight: 400;
`;

const FooterComponent = () => {
  return (
    <Footer data-testid="footer">
      MKS sistemas © Todos os direitos reservados
    </Footer>
  );
};

export default FooterComponent;
