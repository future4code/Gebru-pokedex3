import styled from "styled-components";

export const CardContainer = styled.div`
  background: #6fda94d4;
  border-radius: 5% 10%;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 75%);
  height: 35vh;
  width: 250px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-evenly;
  align-items: center;
  grid-template-rows: 55% 15%;
`

export const CardFoto = styled.div`
  display: flex;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.3);
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: -30px;
  margin-top: 10px;
  color: #000;
`

export const Button = styled.button`
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #2be56c;
  }
`

export const HeaderContainer = styled.header`
  height: 8vh;
  background: #87e0a6;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  position: relative;
`