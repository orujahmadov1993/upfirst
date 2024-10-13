import * as React from "react";
import { Status, Task } from "../type";
import Card from "./Card";
import { StyledFlexBox } from "./styled";
import { useApi } from "../apiMock";

interface ICardListProps {
    search: string;
    status: string;
}

const CardList = (props: ICardListProps) => {
    const [loading, setLoading] = React.useState(false);
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [error, setError] = React.useState('');

    const { getTasks, removeTask } = useApi();

    const { search, status } = props;

    React.useEffect(() => {
        setLoading(true);
        getTasks(search, status).
            then(data => {
                setLoading(false);
                setTasks(data);
            })
            .catch(() => setError('Failed to load tasks'));
    }, [search, status]);

    const handleDelete = (uuid: string) => {
        removeTask(uuid).then(() => {
            setTasks(tasks.filter(task => task.uuid !== uuid));
        });
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!loading && tasks.length === 0) {
        return <div>No task found</div>;
    } 


    return (
        <StyledFlexBox direction="column" gap="20px">
            {tasks.map(task => <Card key={task.uuid} task={task} onDelete={handleDelete} />)}
        </StyledFlexBox>
    );
}

export default CardList;