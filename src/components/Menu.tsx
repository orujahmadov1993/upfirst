import { useState } from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
    height: 90vh;
    background-color: grey;
    padding: 50px;
`;

const Menu = () => {
    const [expanded, setExpanded] = useState(false);

    if (expanded) {
        return (
            <StyledMenu>
                <h1>Menu</h1>
                <h3>Menu Item 1</h3>
                <h3>Menu Item 2</h3>
                <h3>Menu Item 3</h3>
                <h3>Menu Item 4</h3>
            </StyledMenu>
        );
    }

    return (
        <StyledMenu>
            <h1>Menu</h1>
            <h3>M1</h3>
            <h3>M2</h3>
            <h3>M3</h3>
            <h3>M4</h3>
        </StyledMenu>
    );
}

export default Menu;