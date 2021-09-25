import React, { useState } from 'react';
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
    Image,
} from 'react-native';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import { Span } from '../../styles/components';
import { Content, Header } from './styles';

function Landing() {
    const [ava_one, setAvaOne] = useState('');
    const [ava_two, setAvaTwo] = useState('');
    const [a_two, setATwo] = useState('');
    const [a_three, setAThree] = useState('');
    const [average, setAverage] = useState(0);
    const [situation, setSituation] = useState(false);
    const [isCalculated, setIsCalculated] = useState(false);

    function checkFields() {
        if (
            parseFloat(ava_one) > 10 || 
            parseFloat(ava_two) > 10 ||
            parseFloat(a_two) > 10 ||
            parseFloat(a_three) > 10) {
                Alert.alert('Insira valores de 0 até 10.');
                return false;

        } else if (!ava_one && !ava_two && !a_two && !a_three) {
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
            const averageValue = (a_one + parseFloat(a_two)) / 2;

            console.log('primeiro console', averageValue);

            if (averageValue < parseFloat(a_three)) {
                const newAverage = (a_one + parseFloat(a_three)) / 2;
                console.log('primeiro if', newAverage);

                if (newAverage > 7) {
                    setSituation(true);
                    setIsCalculated(true);
                    setAverage(Number(newAverage.toFixed(2)));
                } else {
                    setSituation(false);
                    setIsCalculated(true);
                    setAverage(Number(newAverage.toFixed(2)));
                }
            } else {
                console.log('segundo if', averageValue);

                if (averageValue > 7) {
                    setSituation(true);
                    setIsCalculated(true);
                    setAverage(Number(averageValue.toFixed(2)));
                } else {
                    setSituation(false);
                    setIsCalculated(true);
                    setAverage(Number(averageValue.toFixed(2)));
                }
            }

            Keyboard.dismiss();
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
                        <Header>
                            <Image source={logoImg} style={styles.image} />

                            <Text>⚠️ Insira valores de 0 até 10</Text>
                        </Header>
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

    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
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
        color: colors.blue,
        fontSize: 28,
        fontFamily: fonts.bold,
    },
});

export default Landing;