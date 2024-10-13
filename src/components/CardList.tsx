import { Task } from "../type";
import Card from "./Card";
import { StyledFlexBox } from "./styled";

interface ICardList {
    data: Task[];
}

const CardList = (props: ICardList) => {
    const { data } = props;
    return (
        <StyledFlexBox direction="column" gap="20px">
            {data.map(task => <Card key={task.id} task={task} />)}
        </StyledFlexBox>
    );
}

export default CardList;