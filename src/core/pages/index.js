import React from "react";
import { Container, Form, InputContainer, ResultContainer } from "./style";
import script from "../assets/services/script";
import { btn } from "../assets/services/script";
import { FaSearch } from "react-icons/fa";

export default function Main(){
    return(
        <Container>
            <Form>
                <h3>Check the weather from any city around the world</h3>
                <InputContainer>
                    <input type="text" placeholder="Type the city name" id="city-input" />
                    <button id="search-btn" onClick={btn}><FaSearch /></button>
                </InputContainer>
            </Form>
            <ResultContainer id="result">
                {/* JS code will be here */}
            </ResultContainer>
        </Container>
    );
}