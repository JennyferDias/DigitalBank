import React, {useState} from "react";
import styled, {} from "styled-components";
import {Link} from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import axios, {} from "axios";

function Create() {
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [nome, setNome] = useState("")

    function cadastro() {
        axios
            .post("http://127.0.0.1:8000/api_cliente/", {
                nome: nome,                                   //Cadastrando o cliente da API do Django
                cpf: cpf,
                senha: password
            })
            .then(resp => {
                if (resp.status === 201) {
                    alert("Cadastro feito por sucesso")     //Alerta pra quando der certo
                    window.location.href = "/Login"
                }
            })
    }
    return (
        <Container>
            <Button2StackStackStack>
                <Button2StackStack>
                    <Button2Stack>
                        <Link to="/Home">
                            <Button2>
                                <ButtonOverlay>
                                    <Group3>
                                        <Link to="/Home">
                                            <Button2>
                                                <ButtonOverlay>
                                                    <EntypoIcon
                                                        name="chevron-thin-left"
                                                        style={{
                                                            color: "rgba(169,217,65,1)",
                                                            fontSize: 40,
                                                            height: 44,
                                                            width: 40,
                                                            marginTop: 26,
                                                            marginLeft: 20
                                                        }}></EntypoIcon>
                                                </ButtonOverlay>
                                            </Button2>
                                        </Link>
                                    </Group3>
                                </ButtonOverlay>
                            </Button2>
                        </Link>
                        <Image>
                            <GroupRow>
                                <Group>
                                    <Image1 src={require("../assets/images/mdi_alpha-d-boxDias.png")}></Image1>
                                </Group>
                                <Image2Stack>
                                    <Image2>
                                        <Image3 src={require("../assets/images/VectorDias.png")}></Image3>
                                    </Image2>
                                    <Image4 src={require("../assets/images/mdi_size-sDias.png")}></Image4>
                                </Image2Stack>
                            </GroupRow>
                        </Image>
                    </Button2Stack>
                    <CadastreSeJa>Cadastre-se já!</CadastreSeJa>
                    <Rect>
                        <TextInput
                            placeholder="Digite seu CPF"
                            onChange={(e) => setCpf(e.target.value)}></TextInput>
                    </Rect>
                    <Rect2>
                        <TextInput2
                            placeholder="Digite seu nome"
                            onChange={(e) => setNome(e.target.value)}></TextInput2>
                    </Rect2>
                    <Rect3>
                        <TextInput3
                            placeholder="Digite sua senha"
                            onChange={(e) => setPassword(e.target.value)} type="password"></TextInput3>
                    </Rect3>
                </Button2StackStack>
                <Button onClick={() => cadastro()}>
                    <ButtonOverlay>
                        <Confirmar>Confirmar</Confirmar>
                    </ButtonOverlay>
                </Button>
            </Button2StackStackStack>
        </Container>
    );
}

const Container = styled.div `
  display: flex;
  background-color: rgba(39,47,49,1);
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
const Button2 = styled.div `
  width: 85px;
  height: 85px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Group3 = styled.div `
  width: 85px;
  height: 85px;
  flex-direction: column;
  display: flex;
`;

const Image = styled.div `
  left: -100px;
  width: 1200px;
  height: 1050px;
  position: absolute;
  top: 100px;
  flex-direction: row;
  display: flex;
  background-image: url(${require(
    "../assets/images/cartaoo.png"
)});
  background-size: cover;
`;

const Group = styled.div `
  width: 103px;
  height: 111px;
  flex-direction: column;
  display: flex;
`;

const Image1 = styled.img `
  width: 103px;
  height: 100%;
  object-fit: contain;
`;

const Image2 = styled.div `
  top: 0px;
  left: 0px;
  width: 113px;
  height: 118px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require(
    "../assets/images/mdi_alpha-aDias.png"
)});
  background-size: cover;
`;

const Image3 = styled.img `
  width: 30px;
  height: 100%;
  transform: rotate(2.00deg);
  margin-top: 29px;
  margin-left: 28px;
  object-fit: contain;
`;

const Image4 = styled.img `
  top: 5px;
  left: 27px;
  width: 111px;
  height: 113px;
  position: absolute;
  object-fit: contain;
`;

const Image2Stack = styled.div `
  width: 138px;
  height: 118px;
  position: relative;
`;

const GroupRow = styled.div `
  height: 118px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 671px;
  margin-left: 20px;
  margin-top: 100px;
`;

const Button2Stack = styled.div `
  top: 0px;
  left: 0px;
  width: 1233px;
  height: 1124px;
  position: absolute;
`;

const CadastreSeJa = styled.span `
  font-family: Verdana;
  top: 272px;
  left: 1228px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(169,217,65,1);
  font-size: 40px;
`;

const Rect = styled.div `
  top: 391px;
  left: 1222px;
  width: 320px;
  height: 55px;
  position: absolute;
  background-color: rgba(234,237,231,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const TextInput = styled.input `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  width: 200px;
  height: 40px;
  margin-top: 7px;
  margin-left: 28px;
  border: none;
  background: transparent;
`;

const Rect2 = styled.div `
  top: 507px;
  left: 1222px;
  width: 320px;
  height: 55px;
  position: absolute;
  background-color: rgba(234,237,231,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const TextInput2 = styled.input `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  width: 200px;
  height: 40px;
  margin-top: 8px;
  margin-left: 28px;
  border: none;
  background: transparent;
`;

const Rect3 = styled.div `
  top: 617px;
  left: 1222px;
  width: 320px;
  height: 55px;
  position: absolute;
  background-color: rgba(234,237,231,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const TextInput3 = styled.input `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  width: 200px;
  height: 40px;
  margin-top: 7px;
  margin-left: 28px;
  border: none;
  background: transparent;
`;

const Button2StackStack = styled.div `
  top: 0px;
  left: 0px;
  width: 1542px;
  height: 1124px;
  position: absolute;
`;

const Button = styled.div `
  top: 735px;
  left: 1244px;
  width: 265px;
  height: 55px;
  position: absolute;
  background-color: rgba(169,217,65,1);
  border-radius: 33px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Confirmar = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 25px;
  margin-top: 12px;
  margin-left: 5px;
`;

const Button2StackStackStack = styled.div `
  width: 1542px;
  height: 1124px;
  margin-top: -178px;
  margin-left: 100px;
  position: relative;
`;

export default Create;
