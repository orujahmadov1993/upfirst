import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Menu from './components/Menu';
import Card from './components/Card';
import Footer from './components/Footer';
import CardList from './components/CardList';
import { Status } from './type';

const StyledApp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledMainContent = styled.div`
  flex: 1;
  padding: 30px 60px;
`;

function App() {

  const date = new Date();

  const mockDataList = [
    {
      id: 1,
      status: Status.TODO,
      name: 'Learn Kubernetes',
      description: 'Take online Kubernetes courses',
      date: date.toString(),
      creator: 'Oruj',

    },
    {
      id: 2,
      status: Status.IN_PROGRESS,
      name: 'Learn NodeJS',
      description: 'Take online NodejS courses',
      date: date.toString(),
      creator: 'Oruj',

    },
    {
      id: 3,
      status: Status.TODO,
      name: 'Learn Kubernetes',
      description: 'Take online Kubernetes courses',
      date: date.toString(),
      creator: 'Oruj',

    },
    {
      id: 4,
      status: Status.TODO,
      name: 'Learn Kubernetes',
      description: 'Take online Kubernetes courses',
      date: date.toString(),
      creator: 'Oruj',
    }
  ]
  return (
    <StyledApp>
      <Menu />
      <StyledMainContent>
        <CardList data={mockDataList} />
        <Footer />
      </StyledMainContent>
    </StyledApp>
  );
}

export default App;
