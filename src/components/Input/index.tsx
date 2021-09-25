import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, InputText } from './styles';

interface InputProps extends TextInputProps {
    title: string;
}

function Input({ title, ...rest }: InputProps) {
    return(
        <Container>
            <Label>
                {title}
            </Label>

            <InputText {...rest} keyboardType="numeric" />
        </Container>
    );
}

export default Input;