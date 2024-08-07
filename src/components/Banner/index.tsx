import React from "react"
import styled from "styled-components"

const FigureEstilizada = styled.figure<{ $backgroundImage: string }>`
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-size: cover;
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 140px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;

    @media screen and (min-width: 744px) {
        margin-left: calc(212px + 58px);
        min-height: 276px;
    }

    @media screen  and (min-width: 1440px) {
        margin-left: 0;
        min-height: 328px;
    }
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 24px;
    color: #FFF;
    max-width: 300px;
    padding: 40px 24px;
    margin: 0;

    @media screen and (min-width: 744px) {
        font-size: 32px;
    }

    @media screen and (min-width: 1440px) {
        font-size: 40px;
        padding: 90px 60px;
    }
`

const Banner = ({ texto, backgroundImage }) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado>
                {texto}
            </TituloEstilizado>
        </FigureEstilizada>
    )
}

export default Banner