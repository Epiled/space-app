import React from "react"
import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const Lateral = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(#041833, #04244F, #154580);
    padding: 40px 24px;
    z-index: 1;
    display: ${(props) => (props.$show ? 'block' : 'none')};

    @media screen and (min-width: 744px) {
        display: block;
        padding: 0;
        top: initial;
        left: initial;
        background: transparent;
    }
    
    @media screen and (min-width: 1440px) {
        position: static;
    }
`

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const CloseButtun = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    padding: 0;
    border: 0;
    cursor: pointer;

    @media screen and (min-width: 744px) {
        display: none;
    }
`

const IconeClose = styled.img`
    height: auto;
`

const BarraLateral = ({ $showMenu, setShowMenu }) => {

    return (
        <Lateral $show={$showMenu}>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo="/icones/home-ativo.png"
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/mais-vistas-ativo.png"
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/mais-curtidas-ativo.png"
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/novas-ativo.png"
                        iconeInativo="/icones/novas-inativo.png"
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/surpreenda-me-ativo.png"
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
            <CloseButtun onClick={() => setShowMenu(prev => !prev)}>
                <IconeClose src="/icones/fechar.png" alt="Botão fechar menu" />
            </CloseButtun>
        </Lateral>
    )
}

export default BarraLateral