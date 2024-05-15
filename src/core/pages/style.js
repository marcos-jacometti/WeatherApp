import styled from "styled-components";

export const Container = styled.div`
    background-color: #5c54ed;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 2rem;
    color: #fff;
    border-radius: 1rem;
    max-width: 600px;
`;

/* Form's styles */

export const Form = styled.div`
    h3 {
        margin-bottom: 1rem;
    }
`;

export const InputContainer = styled.div`
    display: flex;

    input {
        padding: 0.8rem;
        flex: 1;
        border-radius: 4px;
        font-size: 20px;
    }

    button {
        padding: 0.8rem;
        min-width: 50px;
        margin-left: 8px;
        background-color: #8dd0f5;
        color: #fff;
        border: none;
        cursor: pointer;
        border-radius: 4px;
    }
`;

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1vh;
    height: 20vh;
    justify-content: space-around;

    h4 {
        text-transform: capitalize;
    }
  
    div {
        display: flex;
        align-items: center;
    }
`;