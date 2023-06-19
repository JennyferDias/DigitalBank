import React, {} from "react";
import styled, {} from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Extrato() {
  const[apiData, setApiData] = useState([])
  const[apiData2, setApiData2] = useState([])
  const extrato = []
  const[id, setId] = useState("")

  function extract() {
    axios.get("http://127.0.0.1:8000/api_cliente/").then(resp => setApiData(resp.data))

    for(let i = 0; i < apiData.length; i++){
      const apiItem = apiData[i] 
      if(localStorage.getItem("cpf") === apiItem.cpf){
        setId(apiItem.id)

        
      }
    }

    axios.get("http://127.0.0.1:8000/api_transacoes/").then(resp => setApiData2(resp.data))

    for(let i = 0; i < apiData2.length; i++){
      const apiItem = apiData2[i]

      if(id === apiItem.id_transacao){
        extrato.push(apiItem)
      }
    }
    const getDiv = document.getElementById("extract")
    console.log(id);
    for(let i = 0; i < extrato.length; i++){
      const element = document.createElement("h5")
      const element2 = document.createElement("hr")
      const element3 = document.createElement("br")
     
      extrato[i] = JSON.stringify(extrato[i])
      extrato[i] = JSON.parse(extrato[i])

      element.append(`id_transação: ${extrato[i].id_transacao} valor: R$${extrato[i].valor} destinatario: ${extrato[i].destinatario}`)

      getDiv.appendChild(element2)
      getDiv.appendChild(element)
      getDiv.appendChild(element3)
    }
    
  }
    return (
        <Container>
            <Rect>
                <Icon1StackRow>
                    <Icon1Stack>
                    <Link to="/Menu">
                        <EntypoIcon
                            name="chevron-thin-left"
                            style={{
                                top: 44,
                                left: 19,
                                position: "absolute",
                                color: "rgba(39,47,49,1)",
                                fontSize: 40,
                                height: 44,
                                width: 40
                            }}></EntypoIcon>
                            </Link>
                        
                            <Button>
                                <ButtonOverlay></ButtonOverlay>
                            </Button>
                        
                    </Icon1Stack>
                    <Text>Extrato</Text>
                </Icon1StackRow>
              
            </Rect>
            <Button onClick={()=>extract()}>mostrar extrato</Button>
            <div id = "extract">
            </div>
        </Container>
    );
}

const Container = styled.div `
  display: flex;
  background-color: rgba(234,237,231,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button `
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect = styled.div `
  width: 100%;
  height: 128px;
  background-color: rgba(169,217,65,1);
  flex-direction: column;
  display: flex;
`;

const Button = styled.div `
  top: 0px;
  left: 0px;
  width: 120px;
  height: 128px;
  position: absolute;
  border: none;
  font-size: 30px;
  margin-left: 200px;
  margin-top: 20px;
`;

const Icon1Stack = styled.div `
  width: 120px;
  height: 128px;
  position: relative;
`;

const Text = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 50px;
  margin-left: 800px;
  margin-top: 36px;
`;

const Icon1StackRow = styled.div `
  height: 128px;
  flex-direction: row;
  display: flex;
  margin-right: 130px;
`;

export default Extrato;
