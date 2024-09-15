import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  &:last-child {
    margin-right: 0;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">
          <Button>Cart</Button>
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
