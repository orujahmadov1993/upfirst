import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Menu from './components/Menu';
import Card from './components/Card';
import Footer from './components/Footer';
import CardList from './components/CardList';
import { Status, Task } from './type';
import { getTasks } from './apiMock';
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
  return (
    <StyledApp>
      <Menu />
      <StyledMainContent>
        <StyledFlexBox justify='space-between'>
          <h1>TASK LIST</h1>
          <StyledSearchInput onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search a task...' />
        </StyledFlexBox>
        <CardList search={search} />
        <Footer />
      </StyledMainContent>
    </StyledApp>
  );
}

export default App;
