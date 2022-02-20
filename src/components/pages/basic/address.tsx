import { BasicInput } from "../../atoms/create/basicInput";
import { InputButton } from "../../atoms/create/inputButton";

import { BInfromation } from "./basic";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type CreateAddressType = {
  setColor: Function;
};

export const CreateAddress = (props: CreateAddressType) => {
  const { setColor } = props;
  const navigate = useNavigate();

  const [postcard, setPostcard] = useState("");
  const [fixedPhone, setFixedPhone] = useState("");
  const [address, setAddress] = useState("");
  const [houce, setHouce] = useState("");
  const [building, setBuilding] = useState("");
  const [room, setRoom] = useState("");
  const [update, setUpdate] = useState(false);

  const [errPostcard, setErrPostcard] = useState("");
  const [errFixedPhone, setErrFixedPhone] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errHouce, setErrHouce] = useState("");
  const [errBuilding, setErrBuilding] = useState("");

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    setColor("addressN");

    axios
      .get("https://onepage-server.com/onepage/address/", {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then((res) => {
        console.log("response body:", res.data);
        if (res.data.length === 1) {
          setUpdate(true);
          setPostcard(res.data[0].postcard);
          setFixedPhone(res.data[0].fixed_phone);
          setAddress(res.data[0].address);
          setHouce(res.data[0].houce);
          setBuilding(res.data[0].building);
          setRoom(res.data[0].room);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        setUpdate(false);
      });
  }, []);

  const createData = () => {
    const data = {
      user: userid,
      postcard: postcard,
      fixed_phone: fixedPhone,
      address: address,
      houce: houce,
      building: building,
      room: room
    };

    if (update === false) {
      axios
        .post("https://onepage-server.com/onepage/address/", data, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log("response body:", res.data);
          navigate("/dashboard/success");
        })
        .catch((err) => {
          console.log(err.response.data);
          setErrPostcard(err.ressponse.data.postcard);
          setErrFixedPhone(err.ressponse.data.fixed_phone);
          setErrAddress(err.ressponse.data.address);
          setErrHouce(err.ressponse.data.houce);
        });
    } else {
      axios
        .put(`https://onepage-server.com/onepage/address/${userid}/`, data, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then((res) => {
          console.log("response body:", res.data);
          navigate("/dashboard/success");
        })
        .catch((err) => {
          console.log(err.response);
          setErrPostcard(err.ressponse.data.postcard);
          setErrFixedPhone(err.ressponse.data.fixed_phone);
          setErrAddress(err.ressponse.data.address);
          setErrHouce(err.ressponse.data.houce);
        });
    }
  };

  return (
    <BInfromation>
      <div className="basic" style={{ marginTop: "80px" }}>
        <div className="basic-information">
          <form action="">
            <div className="basicBox">
              <div className="basicBox-root">
                <div className="basicBox-container">
                  <div className="basicBox-title">
                    <h5>住所情報</h5>
                    <span>住所情報を入力してください</span>
                  </div>
                  <div className="basicBox-item">
                    <div className="basicBox-item-containt">
                      <BasicInput
                        title="郵便番号"
                        name="postcard"
                        placeholder="XXX-XXX"
                        setValue={setPostcard}
                        value={postcard}
                      />
                      <BasicInput
                        title="自宅電話番号"
                        name="phone"
                        placeholder="XXX-XXX-XXXX"
                        setValue={setFixedPhone}
                        value={fixedPhone}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicInput
                        title="住所"
                        name="address"
                        placeholder="〇〇県〇〇市〇〇区〇〇条〇〇丁目"
                        setValue={setAddress}
                        value={address}
                      />
                      <BasicInput
                        title="番地・号"
                        name="houce"
                        placeholder="〇〇番地〇〇号"
                        setValue={setHouce}
                        value={houce}
                      />
                    </div>
                    <div className="basicBox-item-containt">
                      <BasicInput
                        title="建物名"
                        name="building"
                        placeholder="〇〇"
                        setValue={setBuilding}
                        value={building}
                      />
                      <BasicInput
                        title="部屋番号"
                        name="room"
                        placeholder="〇〇号室"
                        setValue={setRoom}
                        value={room}
                      />
                    </div>
                  </div>
                </div>
                <InputButton onClickEvent={createData} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </BInfromation>
  );
};
