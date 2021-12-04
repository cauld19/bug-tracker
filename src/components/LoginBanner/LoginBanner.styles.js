import styled from 'styled-components';

export const Wrapper = styled.div`
    height:90vh;
    display: flex;
    justify-content: center;
    align-items: center; 
    
    border: 3px solid green; 
`;

export const Box = styled.div`
    
    align-items: center;
    justify-content: center; 
    height: 60vh;
    width: 30vw;
    border-color: lightgrey;
    border-width: 2px;
    background-color: beige;
    border-radius: 10px;
    border-style: dashed;
    
    h1 {
        font-size: 25px;
        font-weight: 700;
        height: 10%;
        text-align: center;
    }

    

`;

export const Content = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    

    input {
        font-size: medium;
        margin: 8px 0;
        border-radius: 10px;
        width: 40%;
        background: transparent;
        height: 40px;
        border: 2px solid lightgrey;
            
    }
       
`;

export const Text = styled.div`
    font-size: large;
    color: blue;

`;

