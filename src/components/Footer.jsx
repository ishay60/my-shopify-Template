import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: white;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} MyStore. All rights reserved.
    </FooterContainer>
  );
}

export default Footer;
