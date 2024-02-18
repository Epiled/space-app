import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Fotos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {

    return (
        <>
            <Tags />

            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <Fotos>
                        {fotos.map(foto => <Imagem
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito}
                            foto={foto}
                            key={foto.id} />)}
                    </Fotos>
                </SecaoFluida>

                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria;