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

const StyledApp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledMainContent = styled.div`
  flex: 1;
  padding: 30px 60px;
`;

function App() {
  return (
    <StyledApp>
      <Menu />
      <StyledMainContent>
        <h1>TASK LIST</h1>
        <CardList />
        <Footer />
      </StyledMainContent>
    </StyledApp>
  );
}

export default App;
