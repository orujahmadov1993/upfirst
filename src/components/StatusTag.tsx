import styled from "styled-components";
import { Status } from "../type";
import { useMemo } from "react";

const StyledStatusTag = styled.div<{ background: string, color: string }>`
    background-color: ${props => props.background};
    color: ${props => props.color};
    padding: 4px 12px;
    border-radius: 5px;
`;

interface IStatusTagProps {
    status: Status;
}

const StatusTag = (props: IStatusTagProps) => {
    const { status } = props;

    const { bg , color } = useMemo(() => {
        switch (status) {
            case Status.DONE: {
                return { bg: 'green', color: 'white' };
            }
            case Status.IN_PROGRESS: {
                return { bg: 'cyan', color: 'black' };
            }
            case Status.TODO: {
                return { bg: 'gray', color: 'white' };
            }

            case Status.BLOCKED: {
                return { bg: 'red', color: 'white' };
            }

            default: {
                return { bg: 'black', color: 'white' };
            }
        }
    }, [status]);

    return (
        <StyledStatusTag background={bg} color={color} >{status.split('_').join(' ')}</StyledStatusTag>
    )
}

export default StatusTag;