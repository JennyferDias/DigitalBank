import React, {} from "react";
import styled, {} from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import {Link} from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {
const[apiData, setApiData] = useState([])
const[cpf, setcpf] = useState("")
  function logar(){
    axios.get("http://127.0.0.1:8000/api_cliente/").then(resp => setApiData(resp.data)) //Pegando os dados da api
    for(let i = 0; i < apiData.length; i++){      //Verificação linha por linha
      console.log(apiData[i]);
      if(cpf === apiData[i].cpf){
      localStorage.setItem("cpf", cpf)
      window.location.href = "/Menu"
      }
    }

  }
    return (
        <Container>
            <Image>
              
                <Group1Row>
                    <Group1>
                        <Image4 src={require("../assets/images/mdi_alpha-d-boxDias.png")}></Image4>
                    </Group1>
                    <Image1Stack>
                        <Image1>
                            <Image2 src={require("../assets/images/VectorDias.png")}></Image2>
                        </Image1>
                        <Image3 src={require("../assets/images/mdi_alpha-aDias.png")}></Image3>
                    </Image1Stack>
                    <Link to= "/Home">
                    <Icon1Stack>
                        <EntypoIcon
                            name="chevron-thin-left"
                            style={{
                                top: -180,
                                left: 120,
                                position: "absolute",
                                color: "rgba(169,217,65,1)",
                                fontSize: 40,
                                height: 44,
                                width: 40
                            }}></EntypoIcon>
                    </Icon1Stack>
                    </Link>
                    <SejaBemVindo>Seja bem vindo novamente!</SejaBemVindo>
                </Group1Row>
                <Rect1>
                    <TextInput1 placeholder="Digite seu CPF" onChange={(e)=>setcpf(e.target.value)}></TextInput1>
                </Rect1>
                <Rect2>
                    <TextInput2 placeholder="Digite sua senha" type="password"></TextInput2>
                </Rect2>
                <Button1 onClick={()=>logar()}>
                    <ButtonOverlay>
                        <Confirmar1>Confirmar</Confirmar1>
                    </ButtonOverlay>
                </Button1>
            </Image>
        </Container>
    );
}

const Container = styled.div `
  display: flex;
  background-color: rgba(39,47,49,1);
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button `
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none;
 `;
const Image = styled.div `
  width: 1250px;
  height: 100%;
  flex-direction: column;
  display: flex;
  margin-left: -430px;
  background-image: url(${require("../assets/images/girl.png")});
  background-size: cover;
`;

const Group1 = styled.div `
  width: 103px;
  height: 111px;
  flex-direction: column;
  display: flex;
`;

const Image4 = styled.img `
  width: 103px;
  height: 100%;
  object-fit: contain;
  margin-top: -200px;
`;

const Image1 = styled.div `
  top: 5px;
  left: 27px;
  width: 111px;
  height: 113px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/mdi_size-sDias.png")});
  background-size: cover;
  margin-top: -200px;
`;

const Image2 = styled.img `
  width: 30px;
  height: 100%;
  transform: rotate(2.00deg);
  margin-top: -2px;
  margin-left: 1px;
  object-fit: contain;
`;

const Image3 = styled.img `
  top: 0px;
  left: 0px;
  width: 113px;
  height: 118px;
  position: absolute;
  object-fit: contain;
  margin-top: -200px;
`;

const Image1Stack = styled.div `
  width: 138px;
  height: 118px;
  position: relative;
`;

const Icon1Stack = styled.div `
  width: 85px;
  height: 85px;
  margin-left: 627px;
  margin-top: 5px;
  position: relative;
`;

const SejaBemVindo = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(169,217,65,1);
  font-size: 40px;
  text-align: center;
  margin-left: 500px;
  margin-top: -150px;
`;

const Group1Row = styled.div `
  height: 192px;
  flex-direction: row;
  display: flex;
  margin-top: 230px;
  margin-left: 430px;
  margin-right: 18px;
`;

const Rect1 = styled.div `
  width: 320px;
  height: 55px;
  background-color: rgba(234,237,231,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 10px;
  margin-left: 1705px;
`;

const TextInput1 = styled.input `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  width: 265px;
  height: 40px;
  margin-top: 7px;
  margin-left: 25px;
  border: none;
  background: transparent;
`;

const Rect2 = styled.div `
  width: 320px;
  height: 55px;
  background-color: rgba(234,237,231,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 52px;
  margin-left: 1705px;
`;

const TextInput2 = styled.input `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  width: 265px;
  height: 40px;
  margin-top: 8px;
  margin-left: 25px;
  border: none;
  background: transparent;
`;

const Button1 = styled.div `
  width: 265px;
  height: 55px;
  background-color: rgba(169,217,65,1);
  border-radius: 33px;
  flex-direction: column;
  display: flex;
  margin-top: 66px;
  margin-left: 1730px;
  border: none;
`;

const Confirmar1 = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  margin-top: 12px;
  margin-left: 5px;
`;

export default Login;
