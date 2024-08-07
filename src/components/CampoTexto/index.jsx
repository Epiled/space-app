import styled from "styled-components"
import search from "./search.png";

const ContainerEstilizado = styled.div`
    position: relative;
    align-self: center;
    display: inline-block;
    border-radius: 10px;
    width: 100%;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px; /* Mesmo raio de borda */
        padding: 2px; /* Largura da borda */
        background: linear-gradient(to right, #C98CF1, #7B78E5);
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }

    @media screen and (min-width: 744px) {
        max-width: 428px;
    }

    @media screen and (min-width: 744px) {
        max-width: 602px;
    }
`

const CampoTextoEstilizado = styled.input`
    position: relative;
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 0;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    z-index: 1;
    width: 100%;

    &::placeholder {
        color: #D9D9D9;
    }
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
    z-index: 1;
`

const CampoTexto = () => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?" />
            <IconeLupa src={search} alt="Ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto