import * as React from 'react';
import './App.css';
import styled from 'styled-components';
import Menu from './components/Menu';
import CardList from './components/CardList';
import { Status } from './type';
import { StyledFlexBox } from './components/styled';
import Pagination from './components/Pagination';

const StyledApp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledMainContent = styled.div`
  flex: 1;
  position: relative;
`;

const StyledHeader = styled.div`
  background-color: yellowgreen;
  color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding: 0 70px;
`;

const StyledSearchInput = styled.input`
  padding: 5px 10px;
`;

const StyledSelect = styled.select`
  padding: 5px;
`;

function App() {
  const [search, setSearch] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [page, setPage] = React.useState(1);

  return (
    <StyledApp>
      <Menu />
      <StyledMainContent>
        <StyledHeader>
          <h1>TASK LIST</h1>
          <StyledFlexBox gap='10px'>
            <StyledSearchInput onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search a task...' />
            <StyledSelect onChange={(e) => setStatus(e.target.value)}>
              <option value={''}>Select Status</option>
              <option value={Status.TODO}>TODO</option>
              <option value={Status.IN_PROGRESS}>IN PROGRESS</option>
              <option value={Status.BLOCKED}>BLOCKED</option>
              <option value={Status.DONE}>DONE</option>
            </StyledSelect>
          </StyledFlexBox>
        </StyledHeader>
        <CardList page={page} search={search} status={status} />
        <Pagination current={page} onChangePage={setPage} />
      </StyledMainContent>
    </StyledApp>
  );
}

export default App;
