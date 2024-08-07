import styled from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import ModalZoom from "./components/ModalZoom"
import Footer from "./components/Footer"

import fotos from "./fotos.json"
import { useState } from "react"

const FundoGradiente = styled.div`
  background: var(--Gradiente-fundo, linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%));
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

    const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
    const [fotoSelecionada, setFotoSelecionada] = useState(null);

    const aoAlternarFavorito = (foto) => {
        if (foto.id === fotoSelecionada?.id) {
            setFotoSelecionada({
                ...fotoSelecionada,
                favorita: !fotoSelecionada.favorita
            })
        }

        setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
            return {
                ...fotoDaGaleria,
                favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
            }
        }))
    }

    // Exibição de Menu
    const [showMenu, setShowMenu] = useState(false);

    // Seleção de categoria
    const [categoriaSelected, setCategoriaSelected] = useState("Todas");

    return (
        <FundoGradiente>
            <EstilosGlobais />
            <AppContainer>
                <Cabecalho setShowMenu={setShowMenu} />
                <MainContainer>
                    <BarraLateral $showMenu={showMenu} setShowMenu={setShowMenu} />
                    <ConteudoGaleria>
                        <Banner
                            texto={'A galeria mais completa de fotos do espaço!'} backgroundImage={'/imagens/banner.png'}
                        />
                        <Galeria
                            aoFotoSelecionada={foto => setFotoSelecionada(foto)}
                            aoAlternarFavorito={aoAlternarFavorito}
                            fotos={fotosDaGaleria}
                            categoriaSelected={categoriaSelected}
                            setCategoriaSelected={setCategoriaSelected}
                        />
                    </ConteudoGaleria>
                </MainContainer>
            </AppContainer>
            <Footer />
            <ModalZoom
                foto={fotoSelecionada}
                aoFechar={() => setFotoSelecionada(null)}
                aoAlternarFavorito={aoAlternarFavorito}
            />
        </FundoGradiente>
    )
}

export default App
