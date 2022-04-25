import React from 'react';
import {
   Avatar,
   Container, 
   Name, 
   Speciality, 
   DoctorProps
  } from './styles';

  export type DoctorDataProps = {
    name: string;
    avatar: string;
    speciality: string;
    id: string;
  }
  type Props = DoctorProps & {
    data: DoctorDataProps
  }


export function Doctor({ type, data, ...rest }: Props) {
  return (
    <Container type={type}>
      <Avatar
        source={{ uri: data.avatar}}
      />

      <Name>
        {data.name}
      </Name>

      <Speciality>
        {data.speciality}
      </Speciality>
    </Container>
  )
}