import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
`;

export const Label = styled.Text`
    font-size: 12px;
    color: ${colors.gray};
    margin-bottom: 10px;
    padding-right: 100px;
`;

export const InputText = styled.TextInput`
    width: 100%;
    padding: 10px 16px;
    border: 1px solid ${colors.borders};
    
`;