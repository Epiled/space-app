import styled from 'styled-components'
import BotaoIcone from '../../BotaoIcone'

const Figure = styled.figure`
    display: none;
    flex-direction: column;
    flex: 1;
    border-radius: 20px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .15);
    position: relative;
    width: 100%;
    max-width: 448px;
    ${(props) => (props.$expandida ? 'none' : '336px')};
    margin: 0;

    @media screen and (min-width: 744px) {
        max-width: 100%;
    }
    
    @media screen and (min-width: 1440px) {
        width: ${(props) => (props.$expandida ? '90%' : '448px')};
        flex: none;
    }

    &[data-active="true"] {
        display: flex;
    }

    figcaption {
        background: #04244F;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 18px 15px 18px 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

            h3 {
                font-family: 'GandhiSansBold';
                font-size: 16px;
                font-weight: 700;
            }

            h4 {
                flex-grow: 1;
                font-size: 14px;
                font-weight: 400;
            }
            h3,
            h4 {
                margin: 0;
            }
    }

    @media (min-width: 1440px) {
        figcaption {
            h3 {
                font-size: 20px;
            }

            h4 {
                font-size: 16px;
            }
        }
    }
`

const Image = styled.img`
    max-height: ${(props) => (props.$expandida ? '220px' : '180px')};
    object-fit: cover;
    border-radius: 20px 20px 0 0;

    @media screen and (min-width: 1440px) {
        max-height: ${(props) => (props.$expandida ? '661px' : '256px')};
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Principal = styled.main`
`

const Tag = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(217, 217, 217, .4);
    box-sizing: border-box;
    border-radius: 10px;
    color: #fff;
    font-size: 14px;
    padding: 10px;
    min-width: 67px;
    text-align: center;

    @media screen and (min-width: 1440px) {
        display: none;
    }
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito, tag, categoriaSelected }) => {

    const iconeFavorio = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png';

    const checkActive = (curr) => {
        const result = categoriaSelected === "Todas" || categoriaSelected === curr;
        return result;
    };

    return (
        <>
            <Figure $expandida={expandida} id={`foto-${foto.id}`} data-categoria={tag.titulo} data-active={checkActive(tag.titulo)}>
                <Tag>{tag.titulo}</Tag>
                <Image src={foto.path} alt={foto.alt} $expandida={expandida} />
                <figcaption>
                    <Principal>
                        <h3>{foto.titulo}</h3>
                        <h4>{foto.fonte}</h4>
                    </Principal>
                    <Rodape>
                        <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                            <img src={iconeFavorio} alt="Icone de favorito" />
                        </BotaoIcone>
                        {!expandida && <BotaoIcone
                            aria-hidden={expandida}
                            onClick={() => aoZoomSolicitado(foto)}>
                            <img src="/icones/expandir.png" alt="Icone de expandir" />
                        </BotaoIcone>}
                    </Rodape>
                </figcaption>
            </Figure>
        </>
    )
}

export default Imagem