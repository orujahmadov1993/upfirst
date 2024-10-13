import * as React from "react";
import { Task } from "../type";
import Card from "./Card";
import { StyledFlexBox } from "./styled";
import { getTasks } from "../apiMock";

const CardList = () => {
    const [loading, setLoading] = React.useState(false);
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        setLoading(true);
        getTasks().
            then(data => {
                setLoading(false);
                setTasks(data);
            })
            .catch(() => setError('Failed to load tasks'));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <StyledFlexBox direction="column" gap="20px">
            {tasks.map(task => <Card key={task.uuid} task={task} />)}
        </StyledFlexBox>
    );
}

export default CardList;