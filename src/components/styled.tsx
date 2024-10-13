import styled from "styled-components";

export const StyledFlexBox = styled.div<{ 
    direction?: 'row' | 'column';
    justify?: string;
    align?: string;
    gap?: string;
}>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    gap: ${props => props.gap || '0px'};
`;