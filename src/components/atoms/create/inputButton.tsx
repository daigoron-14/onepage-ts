import styled from "styled-components";

type InputButtonType = {
  onClickEvent: Function;
};

export const InputButton = (props: InputButtonType) => {
  const { onClickEvent } = props;
  const create = () => {
    onClickEvent();
  };

  return (
    <InputButtons>
      <div></div>
      <button onClick={create} type="button">
        next
      </button>
    </InputButtons>
  );
};

const InputButtons = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  opacity: 1;
  background: transparent;
  color: rgb(52, 71, 103);

  div {
    opacity: 1;
    background: transparent;
    color: rgb(52, 71, 103);
  }

  button {
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px;
    cursor: pointer;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    letter-spacing: 0.02857em;
    min-width: 64px;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 0.5rem;
    line-height: 1.4;
    text-align: center;
    text-transform: uppercase;
    user-select: none;
    transition: all 150ms ease-in 0s;
    min-height: 2.5rem;
    box-shadow: rgb(0 0 0 / 11%) 0rem 0.25rem 0.4375rem -0.0625rem,
      rgb(0 0 0 / 7%) 0rem 0.125rem 0.25rem -0.0625rem;
    padding: 0.75rem 1.5rem;
    background-image: linear-gradient(
      310deg,
      rgb(20, 23, 39),
      rgb(58, 65, 111)
    );
    background-position-y: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    color: rgb(255, 255, 255);
    background-size: 150% !important;
    background-position-x: 25% !important;
  }
`;
