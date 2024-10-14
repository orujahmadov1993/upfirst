import * as React from "react";
import { Task } from "../type";
import Card from "./Card";
import { useApi } from "../apiMock";
import styled from "styled-components";

const StyledCardList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    height: 85vh;
    overflow: auto;

    @media only screen and (min-width: 600px) {
        padding: 20px 50px;
    }
`;

const StyledNoResult = styled.div`
    text-align: center;
`;

interface ICardListProps {
    page: number;
    search: string;
    status: string;
}

const CardList = (props: ICardListProps) => {
    const [loading, setLoading] = React.useState(false);
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [error, setError] = React.useState('');

    const { getTasks, removeTask } = useApi();

    const { page, search, status } = props;

    React.useEffect(() => {
        setLoading(true);
        getTasks(search, status, '', page).
            then(data => {
                setLoading(false);
                setTasks(data);
            })
            .catch(() => setError('Failed to load tasks'));
    }, [search, status, page]);

    const handleDelete = (uuid: string) => {
        removeTask(uuid).then(() => {
            setTasks(tasks.filter(task => task.uuid !== uuid));
        });
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!loading && tasks.length === 0) {
        return <StyledNoResult>No task found</StyledNoResult>;
    }


    return (
        <StyledCardList>
            {tasks.map(task => <Card key={task.uuid} task={task} onDelete={handleDelete} />)}
        </StyledCardList>
    );
}

export default CardList;