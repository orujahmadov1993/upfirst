import styled from "styled-components";
import { Task } from "../type";
import { StyledFlexBox } from "./styled";
import moment from "moment";
import { useState } from "react";

const StyledCard = styled.div`
    width: 100%;
    position: relative;
    border: 1px solid;
    border-radius: 10px;
    padding: 15px;
`;

const StyledDate = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
`;

const StyledLabel = styled.div`
    font-weight: 500;
    font-size: 16px;
`;

const StyledDescription = styled.div`
    font-size: 14px;
`;

const StyledExpandButton = styled.button`
    text-align: center;
`;

interface ICard {
    task: Task;
}

const Card = (props: ICard) => {
    const [expanded, setExpanded] = useState(false);
    const { task } = props;

    console.log('task date', task.date);

    return (
        <StyledCard>
            <StyledFlexBox justify="space-between">
                <StyledLabel>{task.name}</StyledLabel>
                <div>{task.status}</div>
            </StyledFlexBox>
            <br />
            <StyledDescription>
                Description: {task.description}
            </StyledDescription>
            <StyledDate>{moment(task.date).format("LLL")}</StyledDate>
            {expanded && <div>EXPANDED CONTENT</div>}
            <br />
            <StyledExpandButton onClick={() => setExpanded(!expanded)}>{expanded ? 'Collapse' : 'Expand'}</StyledExpandButton>
        </StyledCard>
    );
}

export default Card;