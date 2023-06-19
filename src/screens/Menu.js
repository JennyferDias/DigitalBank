import React, {} from "react";
import styled, {} from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import { useEffect } from "react";

function Menu() {
    const [apiData, setApiData] = useState([])
    const [apiData2, setApiData2] = useState([])
    const [saldo, setSaldo] = useState("")
    const [nome, setNome] = useState("")
    const [bid, setBid] = useState("")

    useEffect(()=> {
      axios.get("https://economia.awesomeapi.com.br/last/USD-BRL",).then(resp => {      //Pegando a cotacao do dolar com a apiAwesome
        setBid(parseFloat(resp.data.USDBRL.bid).toFixed(2))
      })
      axios.get("http://127.0.0.1:8000/api_cliente/").then(resp => setApiData2(resp.data))
      for(let i = 0; i < apiData2.length; i++){
        const apiItem = apiData2[i]
        if(localStorage.getItem("cpf") === apiItem.cpf){                //Pegando os cpfs da api, assim pegando o nome do usuario
          setNome(apiItem.nome)
        }
      }
    }

    
    )
    function getSaldo() {
        axios
            .get("http://127.0.0.1:8000/api_cliente/")
            .then(resp => setApiData(resp.data))

        for (let i = 0; i < apiData.length; i++) {          //Pegando o saldo do usuario
            const apiItem = apiData[i]

            if (apiItem.cpf === localStorage.getItem("cpf")) {
                setSaldo(apiItem.saldo)
            }
            
        }
    }
    return (
        <Container>
            <Rect2Row>
                <Rect2>
                    <MaterialCommunityIconsIcon
                        name="bell-ring"
                        style={{
                            color: "rgba(39,47,49,1)",
                            fontSize: 40,
                            height: 43,
                            width: 40,
                            marginTop: 27,
                            marginLeft: 47
                        }}></MaterialCommunityIconsIcon>
                    <Notificacoes>Notificações</Notificacoes>
                    <EntypoIcon
                        name="chat"
                        style={{
                            color: "rgba(39,47,49,1)",
                            fontSize: 40,
                            height: 44,
                            width: 40,
                            marginTop: 22,
                            marginLeft: 47
                        }}></EntypoIcon>
                    <Ajuda>Ajuda</Ajuda>
                    <EntypoIcon
                        name="pie-chart"
                        style={{
                            color: "rgba(39,47,49,1)",
                            fontSize: 40,
                            height: 44,
                            width: 40,
                            marginTop: 42,
                            marginLeft: 47
                        }}></EntypoIcon>
                    <Invest2>Invest.</Invest2>
                    <EntypoIcon
                        name="game-controller"
                        style={{
                            color: "rgba(39,47,49,1)",
                            fontSize: 40,
                            height: 44,
                            width: 40,
                            marginTop: 44,
                            marginLeft: 47
                        }}></EntypoIcon>
                    <GiftCards>GiftCards</GiftCards>
                    <IoniconsIcon
                        name="ios-pin"
                        style={{
                            color: "rgba(39,47,49,1)",
                            fontSize: 40,
                            height: 44,
                            width: 23,
                            marginTop: 36,
                            marginLeft: 56
                        }}></IoniconsIcon>
                    <CaixaElet>Caixa Elet.</CaixaElet>
                    <EntypoIcon
                        name="dots-three-horizontal"
                        style={{
                            color: "rgba(39,47,49,1)",
                            fontSize: 40,
                            height: 44,
                            width: 40,
                            marginTop: 200,
                            marginLeft: 47
                        }}></EntypoIcon>
                </Rect2>
                <GroupColumn>
                    <Group>
                        <Rect>
                            <IconRow>
                                <EntypoIcon
                                    name="magnifying-glass"
                                    style={{
                                        color: "rgba(169,217,65,1)",
                                        fontSize: 40,
                                        width: 40,
                                        height: 44,
                                        marginTop: 20
                                    }}></EntypoIcon>
                                <Icon2Stack>
                                    <FontAwesomeIcon
                                        name="power-off"
                                        style={{
                                            top: 22,
                                            left: 28,
                                            position: "absolute",
                                            color: "rgba(169,217,65,1)",
                                            fontSize: 40,
                                            height: 40,
                                            width: 34
                                        }}></FontAwesomeIcon>
                                    <Link to="/Home">
                                        <Button>
                                            <ButtonOverlay></ButtonOverlay>
                                        </Button>
                                    </Link>
                                </Icon2Stack>
                                <Link to="/Edit">
                                    <Button14>
                                        <ButtonOverlay></ButtonOverlay>
                                    </Button14>
                                </Link>
                            </IconRow>
                        </Rect>
                    </Group>
                    <OlaJennyferDiasColumnRow>
                        <OlaJennyferDiasColumn>
                            <OlaJennyferDias>Olá, {nome}</OlaJennyferDias>
                            <Dolar>Preço do dolar em reais: R${bid}</Dolar>
                            <Rect3>
                                <SaldoAtualRow>
                                    <SaldoAtual>Saldo Atual</SaldoAtual>
                                    <EntypoIcon
                                        name="eye"
                                        style={{
                                            color: "rgba(234,237,231,1)",
                                            fontSize: 40,
                                            height: 44,
                                            width: 40,
                                            marginLeft: 33
                                        }}
                                        onClick=
                                        {() => getSaldo()}></EntypoIcon>
                                </SaldoAtualRow>
                                <R1004087>R${saldo}</R1004087>
                            </Rect3>
                        </OlaJennyferDiasColumn>
                        <Rect4>
                            <Button5Row>
                                <Button5>
                                    <ButtonOverlay>
                                        <Button2>
                                            <ButtonOverlay>
                                                <FontAwesomeIcon
                                                    name="car"
                                                    style={{
                                                        color: "rgba(39,47,49,1)",
                                                        fontSize: 50,
                                                        height: 50,
                                                        width: 57,
                                                        marginTop: 16,
                                                        marginLeft: 21
                                                    }}></FontAwesomeIcon>
                                                <Ipva>IPVA</Ipva>
                                            </ButtonOverlay>
                                        </Button2>
                                    </ButtonOverlay>
                                </Button5>
                                <Button6>
                                    <ButtonOverlay>
                                        <Button3>
                                            <ButtonOverlay>
                                                <EntypoIcon
                                                    name="home"
                                                    style={{
                                                        color: "rgba(39,47,49,1)",
                                                        fontSize: 50,
                                                        height: 54,
                                                        width: 50,
                                                        marginTop: 9,
                                                        marginLeft: 24
                                                    }}></EntypoIcon>
                                                <Iptu>IPTU</Iptu>
                                            </ButtonOverlay>
                                        </Button3>
                                    </ButtonOverlay>
                                </Button6>
                                <Button7>
                                    <ButtonOverlay>
                                        <Rect7>
                                            <MaterialCommunityIconsIcon
                                                name="cellphone"
                                                style={{
                                                    color: "rgba(39,47,49,1)",
                                                    fontSize: 45,
                                                    height: 50,
                                                    width: 45,
                                                    marginTop: 11,
                                                    marginLeft: 28
                                                }}></MaterialCommunityIconsIcon>
                                            <Recarga>Recarga</Recarga>
                                        </Rect7>
                                    </ButtonOverlay>
                                </Button7>
                                <Button8>
                                    <ButtonOverlay>
                                        <Link to="/Transferencia">
                                            <Rect11>
                                                <MaterialCommunityIconsIcon
                                                    name="arrow-expand-horizontal"
                                                    style={{
                                                        color: "rgba(39,47,49,1)",
                                                        fontSize: 60,
                                                        height: 66,
                                                        width: 60,
                                                        marginLeft: 20
                                                    }}></MaterialCommunityIconsIcon>

                                                <Transf>Transf.</Transf>
                                            </Rect11>
                                        </Link>
                                    </ButtonOverlay>
                                </Button8>
                            </Button5Row>
                            <Button9Row>
                                <Button9>
                                    <ButtonOverlay>
                                        <Rect8>
                                            <Group2Stack>
                                                <Group2>
                                                    <MaterialCommunityIconsIcon
                                                        name="cash"
                                                        style={{
                                                            color: "rgba(39,47,49,1)",
                                                            fontSize: 70
                                                        }}></MaterialCommunityIconsIcon>
                                                </Group2>
                                                <Cashback>Cashback</Cashback>
                                            </Group2Stack>
                                        </Rect8>
                                    </ButtonOverlay>
                                </Button9>
                                <Group3>
                                    <Button10>
                                        <ButtonOverlay>
                                            <Icon15Stack>
                                                <MaterialCommunityIconsIcon
                                                    name="pig"
                                                    style={{
                                                        top: 0,
                                                        left: 12,
                                                        position: "absolute",
                                                        color: "rgba(39,47,49,1)",
                                                        fontSize: 60,
                                                        height: 66,
                                                        width: 60
                                                    }}></MaterialCommunityIconsIcon>
                                                <Cofrinho>Cofrinho</Cofrinho>
                                            </Icon15Stack>
                                        </ButtonOverlay>
                                    </Button10>
                                </Group3>
                                <Group4>
                                    <Button11>
                                        <ButtonOverlay>
                                            <FontAwesomeIcon
                                                name="barcode"
                                                style={{
                                                    color: "rgba(39,47,49,1)",
                                                    fontSize: 55,
                                                    height: 55,
                                                    width: 55,
                                                    marginTop: 13,
                                                    marginLeft: 23
                                                }}></FontAwesomeIcon>
                                            <Boletos>Boletos</Boletos>
                                        </ButtonOverlay>
                                    </Button11>
                                </Group4>
                            </Button9Row>
                            <Link to="/Extrato">
                                <Button4>
                                    <ButtonOverlay>
                                        <Extrato>Extrato</Extrato>
                                    </ButtonOverlay>
                                </Button4>
                            </Link>
                            <Button12>
                                <ButtonOverlay>
                                    <Rendimentos>Rendimentos</Rendimentos>
                                </ButtonOverlay>
                            </Button12>
                            <Group5Row>
                                <Group5>
                                    <Image4 src={require("../assets/images/mdi_alpha-d-boxDias.png")}></Image4>
                                </Group5>
                                <Image1Stack>
                                    <Image1>
                                        <Image2 src={require("../assets/images/VectorDias.png")}></Image2>
                                    </Image1>
                                    <Image3 src={require("../assets/images/mdi_alpha-aDias.png")}></Image3>
                                </Image1Stack>
                            </Group5Row>
                        </Rect4>
                    </OlaJennyferDiasColumnRow>
                </GroupColumn>
            </Rect2Row>
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
const Rect2 = styled.div `
  width: 150px;
  height: 969px;
  background-color: rgba(169,217,65,1);
  flex-direction: column;
  display: flex;
`;

const Notificacoes = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
  margin-top: 18px;
  margin-left: 7px;
`;

const Ajuda = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
  margin-top: 26px;
  margin-left: 38px;
`;

const Invest2 = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
  margin-top: 30px;
  margin-left: 32px;
`;

const GiftCards = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
  margin-top: 32px;
  margin-left: 21px;
`;

const CaixaElet = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
  margin-top: 24px;
  margin-left: 13px;
`;

const Group = styled.div `
  width: 1184px;
  height: 84px;
  background-color: #fff;
  flex-direction: column;
  display: flex;
`;

const Rect = styled.div `
  width: 1184px;
  height: 84px;
  background-color: rgba(39,47,49,1);
  border-radius: 20px;
  flex-direction: row;
  display: flex;
`;

const Button = styled.div `
  top: 0px;
  left: 0px;
  width: 90px;
  height: 84px;
  position: absolute;
  border: none;
`;

const Icon2Stack = styled.div `
  width: 90px;
  height: 84px;
  margin-left: 938px;
  position: relative;
`;

const Button14 = styled.div `
  width: 70px;
  height: 70px;
  background-color: rgba(234,237,231,1);
  border-radius: 100px;
  margin-top: 7px;
  border: none;
`;

const IconRow = styled.div `
  height: 84px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 20px;
  margin-left: 26px;
`;

const OlaJennyferDias = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 50px;
`;

const Rect3 = styled.div `
  width: 464px;
  height: 278px;
  background-color: rgba(39,47,49,1);
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  margin-top: 54px;
  margin-left: 14px;
`;

const SaldoAtual = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(169,217,65,1);
  font-size: 30px;
  margin-top: 8px;
`;

const SaldoAtualRow = styled.div `
  height: 44px;
  flex-direction: row;
  display: flex;
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 180px;
`;

const R1004087 = styled.span `
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(210,249,125,1);
  font-size: 50px;
  margin-top: 82px;
  margin-left: 40px;
`;

const OlaJennyferDiasColumn = styled.div `
  width: 478px;
  flex-direction: column;
  display: flex;
  margin-top: 13px;
  margin-bottom: 177px;
`;

const Rect4 = styled.div `
  width: 572px;
  height: 582px;
  background-color: rgba(169,217,65,1);
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  margin-left: 114px;
`;

const Button5 = styled.div `
  width: 100px;
  height: 100px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Button2 = styled.div `
  width: 100px;
  height: 100px;
  background-color: rgba(234,237,231,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Ipva = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
  margin-top: 2px;
  margin-left: 26px;
`;

const Button6 = styled.div `
  width: 100px;
  height: 100px;
  flex-direction: column;
  display: flex;
  margin-left: 36px;
  border: none;
`;

const Button3 = styled.div `
  width: 100px;
  height: 100px;
  background-color: rgba(234,237,231,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Iptu = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
  margin-top: 5px;
  margin-left: 27px;
`;

const Button7 = styled.div `
  width: 100px;
  height: 100px;
  flex-direction: column;
  display: flex;
  margin-left: 36px;
  border: none;
`;

const Rect7 = styled.div `
  width: 100px;
  height: 100px;
  background-color: rgba(234,237,231,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
`;

const Recarga = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
  margin-top: 7px;
  margin-left: 10px;
`;

const Button8 = styled.div `
  width: 100px;
  height: 100px;
  flex-direction: column;
  display: flex;
  margin-left: 39px;
  border: none;
`;

const Rect11 = styled.div `
  width: 100px;
  height: 100px;
  background-color: rgba(234,237,231,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
`;

const Transf = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
  margin-top: 2px;
  margin-left: 17px;
`;

const Button5Row = styled.div `
  height: 100px;
  flex-direction: row;
  display: flex;
  margin-top: 35px;
  margin-left: 26px;
  margin-right: 35px;
`;

const Button9 = styled.div `
  width: 100px;
  height: 100px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Rect8 = styled.div `
  width: 100px;
  height: 100px;
  background-color: rgba(234,237,231,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
`;

const Group2 = styled.div `
  top: 0px;
  left: 11px;
  width: 70px;
  height: 76px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Cashback = styled.span `
  font-family: Verdana;
  top: 68px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
`;

const Group2Stack = styled.div `
  width: 96px;
  height: 92px;
  margin-left: 4px;
  position: relative;
`;

const Group3 = styled.div `
  width: 100px;
  height: 100px;
  flex-direction: column;
  display: flex;
  margin-left: 36px;
`;

const Button10 = styled.div `
  width: 100px;
  height: 100px;
  background-color: rgba(234,237,231,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Cofrinho = styled.span `
  font-family: Verdana;
  top: 60px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
`;

const Icon15Stack = styled.div `
  width: 85px;
  height: 84px;
  margin-top: 8px;
  margin-left: 8px;
  position: relative;
`;

const Group4 = styled.div `
  width: 100px;
  height: 100px;
  flex-direction: column;
  display: flex;
  margin-left: 36px;
`;

const Button11 = styled.div `
  width: 100px;
  height: 100px;
  background-color: rgba(234,237,231,1);
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Boletos = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
  margin-left: 13px;
`;

const Button9Row = styled.div `
  height: 100px;
  flex-direction: row;
  display: flex;
  margin-top: 22px;
  margin-left: 26px;
  margin-right: 174px;
`;

const Button4 = styled.div `
  width: 156px;
  height: 53px;
  background-color: rgba(210,249,125,1);
  border-radius: 17px;
  flex-direction: column;
  display: flex;
  border: none;
  margin-top: 50px;
  margin-left: 25px;
`;

const Extrato = styled.span `
  font-family: Verdana;
  font-style: none;
  font-weight: 400;
  color: rgba(39,47,49,1);
  font-size: 20px;
  margin-top: 14px;
  margin-left: 5px;
`;

const Button12 = styled.div `
  width: 156px;
  height: 53px;
  background-color: rgba(210,249,125,1);
  border-radius: 17px;
  flex-direction: column;
  display: flex;
  margin-top: 17px;
  margin-left: 26px;
  border: none;
`;

const Rendimentos = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  margin-top: 14px;
  margin-left: 13px;
`;

const Group5 = styled.div `
  width: 103px;
  height: 111px;
  flex-direction: column;
  display: flex;
`;

const Image4 = styled.img `
  width: 103px;
  height: 100%;
  object-fit: contain;
`;

const Image1 = styled.div `
  top: 5px;
  left: 26px;
  width: 111px;
  height: 113px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require(
    "../assets/images/mdi_size-sDias.png"
)});
  background-size: cover;
`;

const Image2 = styled.img `
  width: 30px;
  height: 100%;
  transform: rotate(2.00deg);
  margin-top: 25px;
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
`;

const Image1Stack = styled.div `
  width: 137px;
  height: 118px;
  margin-left: 1px;
  position: relative;
`;

const Group5Row = styled.div `
  height: 118px;
  flex-direction: row;
  display: flex;
  margin-top: 10px;
  margin-left: 316px;
  margin-right: 15px;
`;

const OlaJennyferDiasColumnRow = styled.div `
  height: 582px;
  flex-direction: row;
  display: flex;
  margin-top: 31px;
  margin-right: 20px;
`;

const GroupColumn = styled.div `
  width: 1184px;
  flex-direction: column;
  display: flex;
  margin-left: 26px;
  margin-top: 28px;
  margin-bottom: 43px;
`;

const Rect2Row = styled.div `
  height: 768px;
  flex-direction: row;
  display: flex;
  margin-right: 22px;
`;

const Dolar = styled.h1`
color: rgba(39,47,49,1);
margin-bottom: 5px;
`


export default Menu;
