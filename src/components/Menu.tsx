import { useState } from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
    position: relative;
    height: 100vh;
    background-color: turquoise;
    color: white;
    padding: 0px 20px;
    width: 300px;
`;

const MenuButton = styled.div`
    position: absolute;
    top: 30px;
    left: 15px;
    z-index: 10;
    cursor: pointer;
    color: white;
`;

const StyledCloseButton = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
`;

const Menu = () => {
    const [expanded, setExpanded] = useState(false);

    if (expanded) {
        return (
            <StyledMenu>
                <StyledCloseButton onClick={() => setExpanded(false)}>
                    <span className="material-icons">
                        close
                    </span>
                </StyledCloseButton>
                <h1>Menu</h1>
                <h3>Menu Item 1</h3>
                <h3>Menu Item 2</h3>
                <h3>Menu Item 3</h3>
                <h3>Menu Item 4</h3>
            </StyledMenu>
        );
    }

    return (
        <MenuButton onClick={() => setExpanded(!expanded)}>
            <span className="material-icons">
                menu
            </span>
        </MenuButton>
    );
}

export default Menu;