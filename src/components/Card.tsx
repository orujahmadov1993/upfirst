import styled from "styled-components";
import { Task } from "../type";
import { StyledFlexBox } from "./styled";
import moment from "moment";
import { useState } from "react";
import StatusTag from "./StatusTag";

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

const StyledActionButton = styled.button<{ color?: string }>`
    width: 150px;
    background-color: ${props => props.color};
    padding: 5px 25px;
    color: white;
    border-radius: 5px;
    border: 0;
`;

interface ICard {
    task: Task;
}

const Card = (props: ICard) => {
    const [expanded, setExpanded] = useState(false);
    const { task } = props;

    const hiddentContent = (
        <StyledFlexBox gap="10px">
            <StyledActionButton color="red">Delete</StyledActionButton>
            <StyledActionButton color="green">Mark as Done</StyledActionButton>
        </StyledFlexBox>
    );

    return (
        <StyledCard>
            <StyledFlexBox justify="space-between">
                <StyledLabel>{task.name}</StyledLabel>
                <StatusTag status={task.status} />
            </StyledFlexBox>
            <br />
            <StyledDescription>
                Description: {task.description}
            </StyledDescription>
            <StyledDate>{moment(task.date).format("LLL")}</StyledDate>
            {expanded && hiddentContent}
            <br />
            <StyledExpandButton onClick={() => setExpanded(!expanded)}>{expanded ? 'Collapse' : 'Expand'}</StyledExpandButton>
        </StyledCard>
    );
}

export default Card;