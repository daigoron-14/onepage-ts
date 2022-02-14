import styled from "styled-components";

type CreateButtonTyep = {
  onClickEvent: Function;
};

export const CreateButton = (props: CreateButtonTyep) => {
  const { onClickEvent } = props;
  const create = () => {
    onClickEvent();
  };

  return (
    <CreateButtonBox>
      <div onClick={create} className="create">
        <span className="create-button">Create</span>
      </div>
    </CreateButtonBox>
  );
};

const CreateButtonBox = styled.div`
  width: 31%;
  height: 189px;

  .create {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 0.75rem;
    box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
    background-image: linear-gradient(
      310deg,
      rgba(20, 23, 39),
      rgba(58, 65, 111)
    );

    &:hover {
      background-image: linear-gradient(
        310deg,
        rgba(20, 23, 39, 0.9),
        rgba(58, 65, 111, 0.9)
      );
    }

    &-button {
      color: #fff;
      font-weight: 500;
      font-size: 40px;
    }
  }
`;
