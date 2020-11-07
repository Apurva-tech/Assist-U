import styled from 'styled-components'

export const HeaderWrapper  = styled.div`
    .zet {
        background: #1BC2E9;
        height: 72px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }
    .zet div {
        font-size: 1.3rem;
        padding: 0.3em 2em;
        margin: 0.9em 0;
        font-weight: bold;
    }
    .zet div:hover {
        color: white;
        
    }
    .zet div a {
        text-decoration: none;
        color: white;
        transition: 0.3s ease-in-out;
    }
`