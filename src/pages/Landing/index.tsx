import React, { useState, useEffect } from 'react';
import { 
    Keyboard,
    KeyboardAvoidingView, 
    Platform, 
    SafeAreaView,
    TouchableWithoutFeedback,
    View,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';

import { validator } from '../../utils/validator'
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Span } from '../../styles/components';
import { Content } from './styles';

function Landing() {
    const [ava_one, setAvaOne] = useState('');
    const [ava_two, setAvaTwo] = useState('');
    const [a_two, setATwo] = useState('');
    const [a_three, setAThree] = useState('');
    const [isOk, setIsOk] = useState(false);
    const [average, setAverage] = useState(0);
    const [situation, setSituation] = useState(false); //situation true passou
    const [isCalculated, setIsCalculated] = useState(false);

    function checkFields() {
        if (!ava_one && !ava_two && !a_two && !a_three) {
            Alert.alert('Nenhum campo foi preenchido.');
            return false;

        } else if (!ava_one && !ava_two) {
            Alert.alert('Os campos que compõem a A1 não foram preenchidos.');
            return false;
        
        } else if (!ava_one && !a_two) {
            Alert.alert('Os campos da AVA 1 e A2 não foram preenchidos.');

        
        } else if (!ava_one && !a_three) {
            Alert.alert('Os campos da AVA 1 e A3 não foram preenchidos.');
            return false;

        } else if (!ava_two && !a_two) {
            Alert.alert('Os campos da AVA 2 e A2 não foram preenchidos.');
            return false;
        
        } else if (!ava_two && !a_three) {
            Alert.alert('Os campos da AVA 2 e A3 não foram preenchidos.');

            return false;
            
        } else if (!ava_one) {
            Alert.alert('O campo da AVA 1 deve ser preenchido.');
            return false;

        } else if (!ava_two) {
            Alert.alert('O campo da AVA 2 deve ser preenchido.');
            return false;

        } else if (!a_two) {
            Alert.alert('O campo da A2 deve ser preenchido.');
            return false;

        } else if (!a_three) {
            Alert.alert('O campo da A3 deve ser preenchido.');
            return false;

        } else {
            return true;
        }
    }

    function handleCalculateAverage() {
        setIsCalculated(false);
        const checkSuccessful = checkFields();
        setIsCalculated(!checkSuccessful);

        if (checkSuccessful) {
            const a_one = (parseFloat(ava_one) + parseFloat(ava_two)) / 2;
            const newATwo = parseFloat(a_two) * 0.6;
            const averageValue = (a_one + newATwo) / 2

            if (averageValue < parseFloat(a_three)) {
                const newAverage = (a_one * 0.4) + a_three;

                if (parseFloat(newAverage) > 7) {
                    setSituation(true);
                    setIsCalculated(true);
                    setAverage(parseFloat(newAverage));
                } else {
                    setSituation(false);
                    setIsCalculated(true);
                    setAverage(parseFloat(newAverage));
                }
            } else {
                const newAverage = (a_one * 0.4) + newATwo;

                if (newAverage > 7) {
                    setSituation(true);
                    setIsCalculated(true);
                    setAverage(newAverage);
                } else {
                    setSituation(false);
                    setIsCalculated(true);
                    setAverage(newAverage);
                }
            }
        }
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Content>
                        <View style={styles.div}>
                            <Input 
                                title="AVA 1" 
                                placeholder="sua nota" 
                                value={ava_one}
                                onChangeText={setAvaOne}
                            />

                            <Input 
                                title="AVA 2"
                                placeholder="sua nota" 
                                value={ava_two}
                                onChangeText={setAvaTwo}    
                            />
                        </View>

                        <View style={styles.div}>
                            <Input 
                                title="A2"
                                placeholder="sua nota" 
                                value={a_two}
                                onChangeText={setATwo}    
                            />

                            <Input 
                                title="A3"
                                placeholder="sua nota" 
                                value={a_three}
                                onChangeText={setAThree}    
                            />
                        </View>

                        <Button title="Calcular" onPress={handleCalculateAverage} />

                        {isCalculated === true ? (
                            <View style={styles.result}>
                                <Text style={styles.average}>
                                    Sua média é{' '}
                                    <Span>{average}</Span>
                                </Text>
                                <Text style={styles.status}>
                                    {!situation ? 'REPROVADO' : 'APROVADO'}
                                </Text>
                            </View>
                        ) : <View />}
                    </Content>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 31,
    },

    div: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
    },

    result: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },

    average: {

    },

    status: {
        color: '#004D7B',
        fontSize: 28,
        fontWeight: 'bold',
    },
});

export default Landing;