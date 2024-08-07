import styled from "styled-components"
import Titulo from "../../Titulo"
import fotos from './fotos-populares.json'

const Secao = styled.section`
    width: 100%;
    margin-top: 32px;

    @media screen and (min-width: 744px) {
        margin-top: 0;
        min-width: 156px;
        max-width: 212px;
    }
`

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 32px;

    @media screen and (min-width: 744px) {
        margin-top: 25px;
    }
`

const Imagem = styled.img`
    border-radius: 20px;
    width: 100%;
    height: 158px;
    object-fit: cover;

    &:last-of-type {
        margin-bottom: 24px;;
    }

    @media screen and (min-width: 744px) {
        max-width: 212px;
    }
`

const Botao = styled.button`
    position: relative;
    background: transparent;
    color: #fff;
    padding: 14px 20px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 10px;
    text-align: center;
    width: 100%;
    z-index: 1;

    &:hover {
        cursor: pointer;
        background: linear-gradient(to right, #C98CF1, #7B78E5);
    }

    &::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
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
        z-index: 0;
    }
`

const Populares = () => {
    return (
            <Secao>
                <Titulo $alinhamento={"center"}>
                    Populares
                </Titulo>
                <ColunaFotos>
                    {fotos.map(foto =>
                        <Imagem src={foto.path} key={foto.id} alt={foto.titulo} />
                    )}
                </ColunaFotos>
                <Botao>
                    Ver mais
                </Botao>
            </Secao>
    )
}

export default Populares