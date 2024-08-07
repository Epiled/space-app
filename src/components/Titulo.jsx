import styled from "styled-components";

const Titulo = styled.h2`
    color: #7B78E5;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    
    @media screen and (min-width: 744px) {
        text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
        font-size: 28px;
    }

    @media screen and (min-width: 1440px) {
        font-size: 32px;
    }
`

export default Titulo