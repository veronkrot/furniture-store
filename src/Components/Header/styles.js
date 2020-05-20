import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  margin: 30px;
  width: 100%
  height: 40px;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
display: flex;
width: 200px;
`;

export const LogoImg = styled.img`
width: 45px;
height: 40px;
margin: -6px 5px 0 5px;
`;

export const StoreName = styled.p`
font-size: 20px;
font-weight: bold;
`;

export const Nav = styled.div`
display: flex;
width: 150px;
justify-content: space-between;
margin-top: 2px;
`;

export const NavItem = styled.a`
font-weight: bold;
font-size: 18px;
color: #0c1213;

&:hover {
cursor: pointer;
text-decoration: underline;
color: #53c0c7;
  }
`;
