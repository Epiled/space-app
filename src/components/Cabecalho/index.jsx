import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 25px 0 32px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
    width: 100%;

    @media screen and (min-width: 744px) {
        padding: 45px 0 48px 0;
        gap: 58px;
        flex-wrap: nowrap;
        width: initial;
    }

    @media screen and (min-width: 1440px) {
        padding: 60px 0 67px 0;
    }
`

const Logo = styled.img`
    height: 48px;

    @media screen and (min-width: 744px) {
        max-width: 212px;
        height: auto;
    }
`

const HeaderButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media screen and (min-width: 744px) {
        width: auto;
    }
`

const BotaoMenu = styled.button`
    width: 32px;
    height: 32px;
    background: none;
    padding: 0;
    border: 0;
    cursor: pointer;

    @media screen and (min-width: 744px) {
        display: none;
    }
`

const IconeMenu = styled.img`
    height: auto;
`

const Cabecalho = ({setShowMenu}) => {
    return (
        <HeaderEstilizado>
            <HeaderButtons>
                <BotaoMenu onClick={() => setShowMenu(prev => !prev)}>
                    <IconeMenu src="/icones/menu.png" alt="Botão abrir menu" />
                </BotaoMenu>
                <Logo src="/imagens/logo.png" alt="Space App" />
            </HeaderButtons>
            <CampoTexto />
        </HeaderEstilizado>
    )
}

export default Cabecalho