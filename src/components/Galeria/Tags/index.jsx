import styled from "styled-components"
import tags from "./tags.json"
import { useState } from "react"

const Titulo = styled.h3`
    color: #D9D9D9;
    font-size: 20px;
    font-weight: 400;
    margin: 0;

    @media screen and (min-width: 744px) {
        font-size: 24px;
    }
`

const TagsFluida = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 32px 0;
    align-items: center;
    
    @media screen and (min-width: 744px) {
        flex-direction: row;
        margin: 48px 0 42px 0;
        gap: 16px;
    }

    @media screen and (min-width: 1440px) {
        margin: 56px 0 39px 0;
        gap: 67px;
    }
`

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 4px;
    
    @media screen and (min-width: 744px) {
        gap: 16px;
        width: initial;
    }

    @media screen and (min-width: 1440px) {
        gap: 24px;
    }
`

const Tag = styled.button`
    position: relative;
    color: #FFF;
    background: rgba(217, 217, 217, 0.30);
    border-radius: 10px;
    box-sizing: border-box;
    border: 2px solid transparent;
    cursor: pointer;
    font-size: 16px;
    padding: 4px;
    transition: background-color 0.3s ease;

    &:hover, &[data-active="true"] {
        &::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: 10px; /* Mesmo raio de borda */
            padding: 2px; /* Largura da borda */
            background: linear-gradient(to right, #C98CF1, #7B78E5);
            -webkit-mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
            mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
        }
    };

    @media screen and (min-width: 744px) {
        font-size: 24px;
        padding: 8px 4px;
    }

    @media screen and (min-width: 744px) {
        padding: 8px;
    }
`

const Tags = ({setCategoriaSelected}) => {

    const [activeIndex, setActiveIndex] = useState(4);

    return (
        <>
            <TagsFluida>
                <Titulo>Busque por tags:</Titulo>
                <TagsContainer>
                    {tags.map((tag, index) => {
                            return <Tag
                                $ativo={activeIndex === index}
                                data-active={activeIndex === index}
                                key={tag.id}
                                onClick={() => {
                                    setCategoriaSelected(tag.titulo);
                                    setActiveIndex(index);
                                 }}
                            >
                                {tag.titulo}
                            </Tag>
                        }
                    )}
                </TagsContainer>
            </TagsFluida>
        </>
    )
}

export default Tags