import styled from "styled-components"

const StyledFooter = styled.footer`
    background: #04244F;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    padding: 25px;
    margin-top: 25px;

    @media screen and (min-width: 744px) {
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`

const Titulo = styled.h3`
    color: #fff;
    font-size: 16px;
    margin: 0;
`

const SocialContainers = styled.div`
    display: flex;
    gap: 40px;
`

const IconeSocial = styled.img`

`

const Footer = () => {
    return (
        <StyledFooter>
            <Titulo>
                Desenvolvido por Alura.
            </Titulo>
            <SocialContainers>
                <IconeSocial src="./imagens/sociais/facebook.svg" />
                <IconeSocial src="./imagens/sociais/twitter.svg" />
                <IconeSocial src="./imagens/sociais/instagram.svg" />
            </SocialContainers>
        </StyledFooter>
    )
}

export default Footer
