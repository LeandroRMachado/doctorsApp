import React from 'react';
import { Container, List } from './styles';

import { Doctor } from '../../components/Doctor';

const DATA = [
  {id: '1', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
  {id: '2', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
  {id: '3', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
  {id: '4', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
  {id: '5', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
  {id: '6', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
  {id: '7', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
  {id: '8', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
  {id: '9', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
  {id: '10', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
  {id: '11', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
  {id: '12', avatar: "https://github.com/LeandroRMachado.png", name: 'Leandro', speciality: 'Cardiologista'},
]

export function Home() {
  return (
    <Container>
      <List 
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Doctor type={'primary'} data={item} /> }
        numColumns={2}
      />   
    </Container>
  )
}