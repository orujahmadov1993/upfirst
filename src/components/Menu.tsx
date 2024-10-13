import { useState } from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
    height: 96vh;
    background-color: turquoise;
    color: white;
    padding: 20px 40px;
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
            <h3>Tasks</h3>
            <h3>Dashboard</h3>
            <h3>Metrics</h3>
            <h3>Sprint</h3>
        </StyledMenu>
    );
}

export default Menu;