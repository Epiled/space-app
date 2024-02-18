import styled from "styled-components";

const Titulo = styled.h2`
    color: #7B78E5;
    font-size: 32px;
    font-weight: 400;
    text-align: ${ props => props.$alinhamento ? props.$alinhamento : 'left' };
`

export default Titulo