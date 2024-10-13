import styled from "styled-components";

const StyledPagination = styled.div`
    background-color: aliceblue;
    width: max-content;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    && .active {
        background-color: antiquewhite;
    }
}
`;

const StyledPageNumber = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

interface IPaginationProps {
    current: number;
    onChangePage: (page: number) => void;
}

const Pagination = (props: IPaginationProps) => {
    const { current, onChangePage } = props;

    return (
        <StyledPagination>
            <StyledPageNumber disabled={current === 1} onClick={() => onChangePage(current - 1)}>Prev</StyledPageNumber>
            <StyledPageNumber onClick={() => onChangePage(1)} className={current === 1 ? 'active' : ''}>1</StyledPageNumber>
            <StyledPageNumber onClick={() => onChangePage(2)} className={current === 2 ? 'active' : ''}>2</StyledPageNumber>
            <StyledPageNumber onClick={() => onChangePage(3)} className={current === 3 ? 'active' : ''}>3</StyledPageNumber>
            <StyledPageNumber onClick={() => onChangePage(4)} className={current === 4 ? 'active' : ''}>4</StyledPageNumber>
            <StyledPageNumber onClick={() => onChangePage(5)} className={current === 5 ? 'active' : ''}>5</StyledPageNumber>
            <StyledPageNumber onClick={() => onChangePage(6)} className={current === 6 ? 'active' : ''}>6</StyledPageNumber>
            <StyledPageNumber onClick={() => onChangePage(7)} className={current === 7 ? 'active' : ''}>7</StyledPageNumber>
            <StyledPageNumber onClick={() => onChangePage(current + 1)}>Next</StyledPageNumber>
        </StyledPagination>
    );
}

export default Pagination;