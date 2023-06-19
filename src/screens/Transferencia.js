import React, {  } from "react";
import styled, {  } from "styled-components";
import { Link } from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import { useState } from "react";
import axios, {  } from "axios";

function Transferencia(props) {
  const [apiData, setApiData] = useState([])
  const [id, setId] = useState("")
  const [id2, setId2] = useState("")
  const [cpf, setCpf] = useState("")
  const [valor, setValor] = useState("")
  const [saldo, setSaldo] = useState("")
  const [saldo2, setSaldo2] = useState("")


  function transferir(){
  axios.get("http://127.0.0.1:8000/api_cliente/?format=json").then(resp => setApiData(resp.data))
  for(let i =0; i < apiData.length; i++){
    const apiItem = apiData[i]
    if(localStorage.getItem("cpf") === apiItem.cpf){            //Passando por todos os dados da api, pegando o id.
      setId(apiItem.id)                                         
      setSaldo(apiItem.saldo)
    }
    if(cpf === apiItem.cpf){
      setId2(apiItem.id)
      setSaldo2(apiItem.saldo)
    }
  axios.post("http://127.0.0.1:8000/api_transacoes/",{
    id_transacao:id,
    destinatario:id2,                                         //Fazendo a transação
    valor:valor

  }).then(resp => console.log(resp.status))
  }
  var result = parseFloat(saldo) - parseFloat(valor)
  var result2 = parseFloat(saldo2) + parseFloat(valor)

  axios.patch(`http://127.0.0.1:8000/api_cliente/${id}/?format=json`,{
    saldo:result
  }).then(resp => console.log(resp.status))                                 //Atualizando o saldo dos dois ids dos clientes

  axios.patch(`http://127.0.0.1:8000/api_cliente/${id2}/?format=json`,{
    saldo:result2
  }).then(resp => {
    if(resp.status === 200){
      alert("Transferência feita com sucesso!")
      window.location.href = "/Menu"
    }
  })
}
  return (
    <Rect1StackStack>
      <Rect1Stack>
        <Rect1>
          <Button1Row>
            <Link to="/Menu">
              <Button1>
                <ButtonOverlay>
                  <EntypoIcon
                    name="chevron-thin-left"
                    style={{
                      color: "rgba(39,47,49,1)",
                      fontSize: 40,
                      height: 42,
                      width: 40,
                      marginTop: 42,
                      marginLeft: 40
                    }}
                  ></EntypoIcon>
                </ButtonOverlay>
              </Button1>
            </Link>
            <Text>Transferência</Text>
          </Button1Row>
        </Rect1>
        <Image src={require("../assets/images/golpe.png")}></Image>
        <LoremIpsum>
          Cuidado, não caia em{"\n"}golpes de gostosas {"\n"}na net
        </LoremIpsum>
      </Rect1Stack>
      <Rect2>
        <TextInput placeholder="CPF" onChange={(e)=>setCpf(e.target.value)}></TextInput>
      </Rect2>
      <Rect3>
        <TextInput1 placeholder="Valor" onChange={(e)=> setValor(e.target.value)}></TextInput1>
      </Rect3>
      <Rect4 onClick={()=> transferir()}>
        <Enviar>Enviar</Enviar>
      </Rect4>
    </Rect1StackStack>
  );
}

const Rect1 = styled.div`
  top: 0px;
  left: 0px;
  width: 2000px;
  height: 128px;
  position: absolute;
  background-color: rgba(169,217,65,1);
  flex-direction: row;
  display: flex;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Button1 = styled.div`
  width: 120px;
  height: 128px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Text = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 50px;
  margin-left: 600px;
  margin-top: 42px;
`;

const Button1Row = styled.div`
  height: 128px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 531px;
`;

const Image = styled.img`
  left: 822px;
  width: 509px;
  height: 594px;
  position: absolute;
  top: 60px;
  border-radius: 100px;
  object-fit: contain;
`;

const LoremIpsum = styled.span`
  font-family: Verdana;
  top: 579px;
  left: 805px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 50px;
  text-align: center;
`;

const Rect1Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 1366px;
  height: 758px;
  position: absolute;
`;

const Rect2 = styled.div`
  top: 234px;
  left: 0px;
  width: 683px;
  height: 96px;
  position: absolute;
  background-color: rgba(39,47,49,1);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  flex-direction: column;
  display: flex;
`;

const TextInput = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 481px;
  height: 63px;
  font-size: 30px;
  margin-top: 17px;
  margin-left: 13px;
  border: none;
  background: transparent;
`;

const Rect3 = styled.div`
  top: 419px;
  left: 0px;
  width: 683px;
  height: 96px;
  position: absolute;
  background-color: rgba(39,47,49,1);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  flex-direction: column;
  display: flex;
`;

const TextInput1 = styled.input`
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 481px;
  height: 63px;
  font-size: 30px;
  margin-top: 16px;
  margin-left: 13px;
  border: none;
  background: transparent;
`;

const Rect4 = styled.div`
  top: 589px;
  left: 0px;
  width: 683px;
  height: 108px;
  position: absolute;
  background-color: rgba(169,217,65,1);
  border-radius: 15px;
  flex-direction: column;
  display: flex;
`;

const Enviar = styled.span`
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 30px;
  margin-top: 36px;
  margin-left: 301px;
`;

const Rect1StackStack = styled.div`
  width: 1366px;
  height: 758px;
  position: relative;
`;

export default Transferencia;
