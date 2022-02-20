import styled from "styled-components";
import { useState, ChangeEvent, useEffect } from "react";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

type AddFileType = {
  title: string;
  labels: string;
  setValue: Function;
  image: string;
  alert?: string;
};

export const AddFileSelected = (props: AddFileType) => {
  const { title, labels, setValue, image, alert } = props;
  const [imagePreview, setImagePreview] = useState("");
  const [imageFlag, setImageFlag] = useState(false);

  useEffect(() => {}, []);

  const OnChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      const imageFile = e.target.files[0];
      setImagePreview(URL.createObjectURL(imageFile));
      setValue(imageFile);
      setImageFlag(true);
    }
  };

  return (
    <AddFile>
      <div className="label">
        <label className="label-item">{title}</label>
      </div>
      <div className="button">
        <div className="button-selected">
          {(imageFlag && (
            <img
              src={imagePreview}
              alt="##"
              className="button-selected-image"
            />
          )) || <img src={image} alt="##" className="button-selected-image" />}
          <div className="button-selected-button">
            <label htmlFor="file" className="button-selected-label">
              <input
                type="file"
                id="file"
                accept="image/*"
                className="button-selected-input"
                onChange={OnChangeImage}
              />
              <PhotoLibraryIcon />
            </label>
          </div>
        </div>
      </div>
      <div className="alert">
        <div className="alert-item">{alert}</div>
      </div>
    </AddFile>
  );
};

const AddFile = styled.div`
  padding-top: 24px;
  padding-right: 24px;
  width: 100%;
  height: 100%;

  .alert {
    margin-top: 6px;
    background: transparent;
    color: rgb(52, 71, 103);

    &-item {
      margin: 0px;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.25;
      letter-spacing: 0.03333em;
      opacity: 1;
      text-transform: none;
      vertical-align: unset;
      text-decoration: none;
      color: rgb(234, 6, 6);
    }
  }

  .label {
    margin-bottom: 8px;
    margin-left: 4px;
    line-height: 0;
    display: inline-block;
    opacity: 1;
    background: transparent;
    color: rgb(52, 71, 103);

    &-item {
      margin: 0px;
      font-size: 0.75rem;
      line-height: 1.25;
      letter-spacing: 0.03333em;
      opacity: 1;
      text-transform: capitalize;
      vertical-align: unset;
      text-decoration: none;
      color: rgb(52, 71, 103);
      font-weight: 700;
    }
  }

  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.0625rem solid rgb(210, 214, 218);
    border-radius: 0.5rem;
    width: 260px;
    height: 151px;

    &-selected {
      height: 100%;
      width: 100%;
      position: relative;

      &-image {
        border: 0.0625rem solid rgb(210, 214, 218);
        border-radius: 0.5rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &-button {
        position: absolute;
        align-items: center;
        justify-content: center;
        top: 110px;
        left: 228px;
        border: 1px solid rgb(210, 214, 218);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-color: rgb(255, 255, 255);
        color: rgb(52, 71, 103);
        font-size: 30px;
        cursor: pointer;
        z-index: 100;

        &:hover {
          background-color: rgb(23, 193, 232);
          color: rgb(255, 255, 255);
          transition: all 0.3s;
        }
      }

      &-label {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      &-input {
        display: none;
      }
    }

    &-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-input {
      display: none;
    }

    &-label {
      opacity: 1;
      background: transparent;
      color: rgb(103, 116, 142);
      font-size: 0.875rem;
      line-height: 1.5;
      letter-spacing: 0.02857rem;
      margin-bottom: 8px;
    }

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgb(210, 214, 218);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      background-color: rgb(255, 255, 255);
      color: rgb(52, 71, 103);
      font-size: 30px;
      cursor: pointer;

      &:hover {
        background-color: rgb(23, 193, 232);
        color: rgb(255, 255, 255);
        transition: all 0.3s;
      }
    }
  }
`;
