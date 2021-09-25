import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

function Button({ title, ...rest }: ButtonProps) {
    return(
        <Container 
            activeOpacity={0.8} 
            {...rest}
        >
            <Text>{title}</Text>
        </Container>
    );
}

export default Button;