import styled from "styled-components"
import tags from "./tags.json"


const Titulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 400;
    margin: 0;
`

const TagsFluida = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    margin-top: 56px;
`

const TagsContainer = styled.div`
    display: flex;
    gap: 24px;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFF;
    background: rgba(217, 217, 217, 0.30);
    border-radius: 10px 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
        border-color: #C98CF1;
    };
`



const Tags = () => {
    return (
        <>
            <TagsFluida>
                <Titulo>Busque por Categoria:</Titulo>
                <TagsContainer>
                    {tags.map(tag => <Tag $ativo={true} key={tag.id}>{tag.titulo}</Tag>)}
                </TagsContainer>
            </TagsFluida>
        </>
    )
}

export default Tags