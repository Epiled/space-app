import styled from "styled-components"
import Titulo from "../../Titulo"
import fotos from './fotos-populares.json'

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Imagem = styled.img`
    border-radius: 20px;
    margin-bottom: 24px;
    max-width: 212px;
`

const Botao = styled.button`
    background: transparent;
    color: #fff;
    border: 2px solid #C98CF1;
    padding: 14px 20px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    border-radius: 10px;
    width: 100%;
`

const Populares = () => {
    return (
            <section>
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
            </section>
    )
}

export default Populares