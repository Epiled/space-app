import React from "react"
import styled from "styled-components"

const ItemListaEstilizado = styled.li<{ $ativo : boolean }>`
    display: flex;
    align-items: center;
    gap: 22px;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    cursor: pointer;

    &:last-of-type {
        margin-bottom: 0;
    }
`

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo = false}) => {
    return <ItemListaEstilizado $ativo={ativo}>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemListaEstilizado>
}

export default ItemNavegacao