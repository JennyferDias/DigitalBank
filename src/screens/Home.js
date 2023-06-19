import React, {} from "react";
import styled, {} from "styled-components";
import {Link} from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function Home() {
    return (
        <Container>
            <ImageStackStack>
                <ImageStack>
                    <Image>
                        <Group2Row>
                            <Group2>
                                <GroupRow>
                                    <Group>
                                        <Group3>
                                            <Group4>
                                                <Image3 src={require("../assets/images/mdi_alpha-d-boxDias.png")}></Image3>
                                            </Group4>
                                        </Group3>
                                    </Group>
                                    <Image2Stack>
                                        <Image2 src={require("../assets/images/mdi_size-sDias.png")}></Image2>
                                        <Image4>
                                            <Image5 src={require("../assets/images/VectorDias.png")}></Image5>
                                        </Image4>
                                    </Image2Stack>
                                </GroupRow>
                            </Group2>
                        </Group2Row>
                    </Image>
                    <Rect1>
                        <LoremIpsum5Stack>
                            <LoremIpsum5>
                                Faça cada dia {"\n"}valer a pena {"\n"}com nossas {"\n"}soluções financeiras {"\n"}inovadoras!
                            </LoremIpsum5>
                            <LoremIpsum></LoremIpsum>
                        </LoremIpsum5Stack>

                        {/* TeladeLogin - Form */}

                        <Rect4>
                            <TextInput placeholder="Digite seu CPF"></TextInput>
                        </Rect4>
                        <Link to="/Login">
                            <Button>
                                <ButtonOverlay>
                                    <Group6>
                                        <Group8>
                                            <ButtonOverlay>
                                                <Group7>
                                                    <Confirmar>Confirmar</Confirmar>
                                                </Group7>
                                            </ButtonOverlay>
                                        </Group8>
                                    </Group6>
                                </ButtonOverlay>
                            </Button>
                        </Link>
                    </Rect1>
                    <Rect>
                        <PaginaInicialRow>
                            <PaginaInicial>Página inicial</PaginaInicial>
                            <SobreNos>Sobre nós</SobreNos>
                            <ParaVoce>Para você</ParaVoce>
                            <Contato>Contato</Contato>
                            <CadastrarSeStack>
                                <CadastrarSe>Cadastrar-se</CadastrarSe>
                                <Link to="/Create">
                                    <Button2>
                                        <ButtonOverlay></ButtonOverlay>
                                    </Button2>
                                </Link>
                            </CadastrarSeStack>
                        </PaginaInicialRow>
                    </Rect>
                </ImageStack>
                <Image14 src={require("../assets/images/BankSite-removebg-preview.png")}>
                </Image14>
                <Rect11Stack>
                    <Image15 src={require("../assets/images/Bank_Site-removebg-preview.png")}></Image15>
                </Rect11Stack>

                {/* Footer */}

                <Rect13>
                    <LoremIpsum8Row>
                        <LoremIpsum8>
                            Site feito para um projeto de aprendizado, {"\n"}nada daqui contém direitos autoriais da desenvolvedora.
                        </LoremIpsum8>
                        <LoremIpsum7>Nos siga nas redes sociais!</LoremIpsum7>
                        <EntypoIcon
                            name="twitter"
                            style={{
                                color: "rgba(230,230,230,1)",
                                fontSize: 45,
                                height: 49,
                                width: 45,
                                marginLeft: 182
                            }}></EntypoIcon>
                        <FeatherIcon
                            name="instagram"
                            style={{
                                color: "rgba(230,230,230,1)",
                                fontSize: 40,
                                height: 41,
                                width: 40,
                                marginLeft: 27,
                                marginTop: 8
                            }}></FeatherIcon>
                        <EntypoIcon
                            name="youtube"
                            style={{
                                color: "rgba(230,230,230,1)",
                                fontSize: 40,
                                height: 44,
                                width: 40,
                                marginLeft: 30,
                                marginTop: 8
                            }}></EntypoIcon>
                    </LoremIpsum8Row>
                </Rect13>
            </ImageStackStack>
        </Container>
    );
}

//StyleDaHome

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
const Image = styled.div `
  width: 2079px;
  height: 931px;
  position: absolute;
  left: 470px;
  top: 120px;
  background-color: rgba(234,237,231,1);
  flex-direction: row;
  display: flex;
  background-image: url(${require(
    "../assets/images/Cartão.png"
)});
  background-size: cover;
`;

const Group2 = styled.div `
  width: 212px;
  height: 108px;
  flex-direction: row;
  display: flex;
`;

const Group = styled.div `
  width: 103px;
  height: 111px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Group3 = styled.div `
  width: 103px;
  height: 111px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Group4 = styled.div `
  width: 103px;
  height: 111px;
  flex-direction: column;
  display: flex;
`;

const Image3 = styled.img `
  width: 103px;
  height: 100%;
  object-fit: contain;
`;

const Image2 = styled.img `
  top: 5px;
  left: 27px;
  width: 111px;
  height: 113px;
  position: absolute;
  object-fit: contain;
`;

const Image4 = styled.div `
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

const Image5 = styled.img `
  width: 30px;
  height: 100%;
  transform: rotate(2.00deg);
  margin-top: 5px;
  margin-left: 28px;
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
  margin-right: -29px;
`;

const Group2Row = styled.div `
  height: 108px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 378px;
  margin-left: 255px;
`;

const Rect1 = styled.div `
  top: 0px;
  left: 2312px;
  width: 333px;
  height: 1084px;
  position: absolute;
  background-color: rgba(39,47,49,1);
  flex-direction: column;
  display: flex;
`;

const LoremIpsum5 = styled.span `
  font-family: Verdana;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(234,237,231,1);
  font-size: 30px;
  text-align: center;
`;

const LoremIpsum = styled.span `
  font-family: Verdana;
  top: 96px;
  left: 32px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 30px;
`;

const LoremIpsum5Stack = styled.div `
  width: 312px;
  height: 180px;
  margin-top: 204px;
  margin-left: 10px;
  position: relative;
`;

//TelaDeLogin

const Rect4 = styled.div `
  width: 258px;
  height: 50px;
  border-radius: 27px;
  background-color: rgba(230, 230, 230,1);
  flex-direction: column;
  display: flex;
  margin-top: 114px;
  margin-left: 37px;
`;

const TextInput = styled.input `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 202px;
  height: 50px;
  font-size: 20px;
  margin-left: 37px;
  border: none;
  background: transparent;
`;

const Button = styled.div `
  width: 180px;
  height: 47px;
  background-color: rgba(169,217,65,1);
  border-radius: 27px;
  flex-direction: column;
  display: flex;
  border: none;
  margin-top: 15px;
  margin-left: 65px;
`;

const Group6 = styled.div `
  width: 180px;
  height: 47px;
  flex-direction: column;
  display: flex;
`;

const Group8 = styled.div `
  width: 180px;
  height: 47px;
  flex-direction: column;
  display: flex;
`;

const Group7 = styled.div `
  width: 100px;
  height: 24px;
  flex-direction: column;
  display: flex;
  margin-top: 13px;
  margin-left: 36px;
`;

const Confirmar = styled.span `
  font-family: Verdana;
  font-style: none;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  margin-top: -7px;
  margin-left: -10px;
`;

const Rect = styled.div `
  top: 0px;
  left: 725px;
  width: 1920px;
  height: 86px;
  position: absolute;
  background-color: rgba(39,47,49,1);
  flex-direction: row;
  display: flex;
`;

const PaginaInicial = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(234,237,231,1);
  font-size: 25px;
  margin-top: -5px;
`;

const SobreNos = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(230,230,230,1);
  font-size: 25px;
  margin-left: 169px;
  margin-top: -5px;
`;

const ParaVoce = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(234,237,231,1);
  font-size: 25px;
  margin-left: 203px;
  margin-top: -5px;
`;

const Contato = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(230,230,230,1);
  font-size: 25px;
  margin-left: 221px;
  margin-top: 9px;
`;

const CadastrarSe = styled.span `
  font-family: Verdana;
  top: 0px;
  left: 18px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(169,217,65,1);
  font-size: 40px;
`;

const Button2 = styled.div `
  top: 0px;
  left: 0px;
  width: 294px;
  height: 67px;
  position: absolute;
  border-radius: 17px;
  border: none;
`;

const CadastrarSeStack = styled.div `
  width: 294px;
  height: 67px;
  margin-left: 465px;
  position: relative;
`;

const PaginaInicialRow = styled.div `
  height: 67px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 20px;
  margin-left: 40px;
  margin-top: 19px;
`;

const Image14 = styled.img `
  top: 926px;
  left: 0px;
  width: 2718px;
  height: 1286px;
  position: absolute;
  object-fit: contain;
`;

const ImageStack = styled.div `
  top: 0px;
  left: 0px;
  width: 2718px;
  height: 2212px;
  position: absolute;
`;

const Image15 = styled.img `
  top: 956px;
  left: 0px;
  width: 1920px;
  height: 1071px;
  position: absolute;
  object-fit: contain;
`;

const Rect11Stack = styled.div `
  top: 1084px;
  left: 714px;
  width: 1931px;
  height: 2027px;
  position: absolute;
`;

//FooterStyle

const Rect13 = styled.div `
  top: 3067px;
  left: 725px;
  width: 1920px;
  height: 139px;
  position: absolute;
  background-color: rgba(39,47,49,1);
  flex-direction: row;
  display: flex;
`;

const LoremIpsum8 = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(230,230,230,1);
  font-size: 20px;
  text-align: left;
`;

const LoremIpsum7 = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(230,230,230,1);
  font-size: 25px;
  margin-left: 507px;
  margin-top: 5px;
`;

const LoremIpsum8Row = styled.div `
  height: 52px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 77px;
  margin-left: 64px;
  margin-top: 44px;
`;

const ImageStackStack = styled.div `
  width: 2718px;
  height: 3206px;
  margin-left: -725px;
  position: relative;
`;

export default Home;
