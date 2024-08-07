import styled from "styled-components"
import Imagem from "../Galeria/Imagem"
import BotaoIcone from "../BotaoIcone"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
`

const DialogEstilizado = styled.dialog`
    position: fixed;
    top: 50%;
    background: transparent;
    padding: 0 25px;
    border: 0;
    width: auto;
    display: flex;
    justify-content: center;
    z-index: 4;
    transform: translateY(-50%);
    max-width: 1156px;
    form {
        position: absolute;
        top: 20px;
        right: 40px;
        button {
            margin: 0;
            padding: 0;
        }
    }

    @media screen and (min-width: 1440px) {
        padding: 0;
        form {
            right: 80px;
        }
    }
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogEstilizado
                    open={!!foto}
                    onClose={aoFechar}>
                        <Imagem aoAlternarFavorito={aoAlternarFavorito} foto={foto} expandida={true} />
                        <form method="dialog">
                            <BotaoIcone formMethod="dialog">
                                <img src="/icones/fechar.png" alt="Icone de fechar" />
                            </BotaoIcone>
                        </form>
                </DialogEstilizado>
            </>}
        </>
    )
}

export default ModalZoom