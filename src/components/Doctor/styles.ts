import styled, { css } from "styled-components/native";


export type DoctorProps = {
  type: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6 
})<DoctorProps>`
  width: 45%;
  margin: 7px;

  padding: 22px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.INFO};

  align-items: center;
  justify-content: center;

  ${({ type, theme }) => type === 'primary' && css`
    border: 2px solid ${theme.COLORS.TEXT_SECONDARY};
  `}
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

export const Name = styled.Text`
  margin-top: 7px;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY}
`;

export const Speciality = styled.Text`
font-size: 14px;
color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY}
`;