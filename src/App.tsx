import * as React from 'react';
import './App.css';
import styled from 'styled-components';
import Menu from './components/Menu';
import Footer from './components/Footer';
import CardList from './components/CardList';
import { Status, Task } from './type';
import { StyledFlexBox } from './components/styled';

const StyledApp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledMainContent = styled.div`
  flex: 1;
  padding: 30px 60px;
`;

const StyledSearchInput = styled.input`
  padding: 5px 10px;
`;

function App() {
  const [search, setSearch] = React.useState('');
  const [status, setStatus] = React.useState('');

  return (
    <StyledApp>
      <Menu />
      <StyledMainContent>
        <StyledFlexBox justify='space-between'>
          <h1>TASK LIST</h1>
          <StyledFlexBox gap='10px'>
            <StyledSearchInput onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search a task...' />
            <select onChange={(e) => setStatus(e.target.value)}>
              <option value={''}>Select Status</option>
              <option value={Status.TODO}>TODO</option>
              <option value={Status.IN_PROGRESS}>IN PROGRESS</option>
              <option value={Status.REMOVED}>REMOVED</option>
              <option value={Status.DONE}>DONE</option>
            </select>
          </StyledFlexBox>
        </StyledFlexBox>
        <CardList search={search} status={status} />
        <Footer />
      </StyledMainContent>
    </StyledApp>
  );
}

export default App;
