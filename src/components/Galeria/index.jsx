import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";
import tags from "./Tags/tags.json";
import { useEffect, useState } from "react";

const GaleriaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: 744px) {
        flex-wrap: nowrap;
        gap: 20px;
    }
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Fotos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 32px;

    @media screen and (min-width: 744px) {
        margin-top: 25px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

const Menssagem = styled.span`
    display: inline-block;
    color: #fff;
    margin-top: 25px;

    @media screen and (min-width: 744px) {
        font-size: 20px;
    }
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, categoriaSelected, setCategoriaSelected }) => {

    const [filteredFotos, setFilteredFotos] = useState(fotos);

    useEffect(() => {
      if (categoriaSelected === "Todas") {
        setFilteredFotos(fotos);
      } else {
        const newFilteredFotos = fotos.filter(foto => {
          const tag = tags.find(tagCurr => tagCurr.id === foto.tagId);
          return tag && tag.titulo === categoriaSelected;
        });
        setFilteredFotos(newFilteredFotos);
      }
    }, [categoriaSelected, fotos, tags]);

    return (
        <>
            <Tags 
                setCategoriaSelected={setCategoriaSelected}
            />

            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    {filteredFotos.length > 0 ?
                    <Fotos>
                        {fotos.map(foto => {

                            const tag = tags.find(tagCurr => tagCurr.id === foto.tagId);

                            return <Imagem
                                    aoZoomSolicitado={aoFotoSelecionada}
                                    aoAlternarFavorito={aoAlternarFavorito}
                                    foto={foto}
                                    key={foto.id}
                                    tag={tag}
                                    categoriaSelected={categoriaSelected}
                                />
                            }
                        )}
                    </Fotos> 
                    :
                    <Menssagem>
                        Nenhum resultado encontrado!
                    </Menssagem>
                }
                    
                </SecaoFluida>

                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria;