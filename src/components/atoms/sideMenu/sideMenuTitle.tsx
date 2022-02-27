import styled from "styled-components";
import logo from "../../img/OnePage3.png";

export const SideMenuTile = () => {
  return (
    <SideTitle>
      <span className="sideMenu-logo">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </span>
    </SideTitle>
  );
};

const SideTitle = styled.div`
  .sideMenu {
    &-logo {
      img {
        margin-top: 10px;
        padding-left: 20px;
        margin-bottom: 20px;
        width: 200px;
      }
    }
  }
`;
