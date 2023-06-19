import React, {} from "react";
import styled, {} from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import {Link} from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function Edit() {
    return (
        <Container>
            <RectStackRow>
                <RectStack>
                    <Rect></Rect>
                    <Button2>
                        <ButtonOverlay>
                            <MaterialCommunityIconsIcon
                                name="image-plus"
                                style={{
                                    color: "rgba(39,47,49,1)",
                                    fontSize: 50,
                                    height: 54,
                                    width: 50,
                                    marginTop: 25,
                                    marginLeft: 25
                                }}></MaterialCommunityIconsIcon>
                        </ButtonOverlay>
                    </Button2>
                </RectStack>
                <Rect3Column>
                    <Rect3>
                        <TextInput placeholder="Usuário"></TextInput>
                    </Rect3>
                    <Rect4>
                        <TextInput2 placeholder="Email"></TextInput2>
                    </Rect4>
                    <Rect5>
                        <TextInput3 placeholder="Senha"></TextInput3>
                    </Rect5>
                </Rect3Column>
            </RectStackRow>
            <ButtonRow>
                <Link to="/Menu">
                    <Button>
                        <ButtonOverlay>
                            <EntypoIcon
                                name="chevron-thin-left"
                                style={{
                                    color: "rgba(39,47,49,1)",
                                    fontSize: 40,
                                    height: 44,
                                    width: 40,
                                    marginTop: 27,
                                    marginLeft: 31
                                }}></EntypoIcon>
                        </ButtonOverlay>
                    </Button>
                </Link>
                <EditarInformacoes>Editar informações</EditarInformacoes>
            </ButtonRow>
            <Rect6>
                <Confirmar>Confirmar</Confirmar>
            </Rect6>
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
  left: 0px;
  width: 410px;
  height: 410px;
  position: absolute;
  background-color: rgba(210,249,125,1);
  border-radius: 60px;
  top: 0px;
`;

const Button2 = styled.div `
  top: 327px;
  left: 334px;
  width: 100px;
  height: 100px;
  position: absolute;
  background-color: rgba(169,217,65,1);
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const RectStack = styled.div `
  width: 434px;
  height: 427px;
  position: relative;
`;

const Rect3 = styled.div `
  width: 448px;
  height: 94px;
  background-color: rgba(39,47,49,1);
  border-radius: 17px;
  flex-direction: column;
  display: flex;
`;

const TextInput = styled.input `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: rgba(234,237,231,1);
  font-size: 30px;
  width: 381px;
  height: 36px;
  margin-top: 29px;
  margin-left: 31px;
  border: none;
  background: transparent;
`;

const Rect4 = styled.div `
  width: 448px;
  height: 96px;
  background-color: rgba(39,47,49,1);
  border-radius: 17px;
  flex-direction: column;
  display: flex;
  margin-top: 56px;
`;

const TextInput2 = styled.input `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 30px;
  width: 381px;
  height: 37px;
  margin-top: 30px;
  margin-left: 31px;
  border: none;
  background: transparent;
`;

const Rect5 = styled.div `
  width: 448px;
  height: 100px;
  background-color: rgba(39,47,49,1);
  border-radius: 17px;
  flex-direction: column;
  display: flex;
  margin-top: 56px;
`;

const TextInput3 = styled.input `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 30px;
  width: 381px;
  height: 36px;
  margin-top: 32px;
  margin-left: 31px;
  border: none;
  background: transparent;
`;

const Rect3Column = styled.div `
  width: 448px;
  flex-direction: column;
  display: flex;
  margin-left: 203px;
  margin-bottom: 25px;
`;

const RectStackRow = styled.div `
  height: 427px;
  flex-direction: row;
  display: flex;
  margin-top: 157px;
  margin-left: 102px;
  margin-right: 179px;
`;

const Button = styled.div `
  width: 102px;
  height: 98px;
  background-color: rgba(234,237,231,1);
  flex-direction: column;
  display: flex;
  border: none;
`;

const EditarInformacoes = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 50px;
  margin-left: 623px;
  margin-top: 49px;
`;

const ButtonRow = styled.div `
  height: 109px;
  flex-direction: row;
  display: flex;
  margin-top: -584px;
  margin-right: 170px;
`;

const Rect6 = styled.div `
  width: 324px;
  height: 92px;
  background-color: rgba(169,217,65,1);
  border-radius: 17px;
  flex-direction: column;
  display: flex;
  margin-top: 484px;
  margin-left: 808px;
`;

const Confirmar = styled.span `
  font-family: Verdana;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 30px;
  margin-top: 28px;
  margin-left: 87px;
`;

export default Edit;
