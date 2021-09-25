import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
    width: 100%;
    background: ${colors.blue};
    padding: 15px 0;
    border-radius: 16px;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${colors.white};
`;