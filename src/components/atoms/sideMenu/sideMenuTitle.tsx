import styled from "styled-components";
// import logo from "../../img/OnePage.png";

type SideTitleType = {
  image: string;
  name: string;
};

export const SideMenuTile = (props: SideTitleType) => {
  const { image, name } = props;

  return (
    <SideTitle>
      <span className="sideMenu-logo">
        <a href="#">
          {/* <img src={logo} alt="" /> */}
        </a>
      </span>
      <div className="sideMenu-profile">
        <img src={image} alt="" />
        <span>{name}</span>
      </div>
    </SideTitle>
  );
};

const SideTitle = styled.div`
  .sideMenu {
    &-logo {
      img {
        padding-left: 20px;
        margin-bottom: 20px;
        width: 180px;
      }
    }

    &-profile {
      display: flex;
      align-items: center;
      padding-left: 22px;

      img {
        border: 2px solid rgba(52, 71, 103, 0.3);
        margin: 8px 0px 8px 8px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }
      span {
        font-size: 16px;
        font-weight: 500;
        margin-left: 25px;
        color: rgb(52, 71, 103);
      }
    }
  }
`;
