import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Alert 
} from 'react-native';

import landingImg from "../assets/landing.png";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Props {}

interface State {
  avaOne: number;
  avaTwo: number;
  aTwo: number;
  aThree: number;
  average: number;
  situation: boolean;
}

export class Landing extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      avaOne: 0,
      avaTwo: 0,
      aTwo: 0,
      aThree: 0,
      average: 0,
      situation: false,
    };
  }

  averageUva = () => {

    if(!this.state.avaOne
       || !this.state.avaTwo 
       || !this.state.aTwo 
       || !this.state.aThree
      ) return Alert.alert("Parece que você não preencheu um dos campos.");

    const aOne = (this.state.avaOne + this.state.avaTwo) / 2;
    // const averageValue = (aOne*0.4) + (this.state.aTwo*0.6);
    const newATwo = this.state.aTwo * 0.6;

    if(newATwo < this.state.aThree) {
      const averageValue = (aOne * 0.4) + this.state.aThree;

      this.setState({
        average: averageValue,
        situation: averageValue >=7 ? true : false,
      });
    }else{
      const averageValue = (aOne*0.4) + (this.state.aTwo*0.6);
      this.setState({
        average: averageValue,
        situation: averageValue >=7 ? true : false,
      });
    }

    
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={landingImg} style={styles.img} />
                </View>

                <View style={styles.body}>
                    <TextInput 
                      style={styles.input} 
                      placeholder="Nota AVA 1" 
                      keyboardType="numeric" 
                      onChangeText={ 
                        avaOne => this.setState({ 
                          avaOne: parseFloat(avaOne) 
                        })} 
                    />

                    <TextInput 
                      style={styles.input} 
                      placeholder="Nota AVA 2" 
                      keyboardType="numeric" 
                      onChangeText={ 
                        avaTwo => this.setState({ 
                          avaTwo: parseFloat(avaTwo) 
                        })}
                    />

                    <TextInput 
                      style={styles.input} 
                      placeholder="Nota A2" 
                      keyboardType="numeric" 
                      onChangeText={ 
                          aTwo => this.setState({ 
                            aTwo: parseFloat(aTwo) 
                          })}
                    />

                    <TextInput 
                      style={styles.input} 
                      placeholder="Nota A3" 
                      keyboardType="numeric" 
                      onChangeText={ 
                        aTwo => this.setState({ 
                          aTwo: parseFloat(aTwo) 
                        })} 
                    />
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.btn} onPress={ this.averageUva } >
                        <Text style={styles.btnText}>Calcular</Text>
                    </TouchableOpacity>

                        {
                          this.state.situation ? (

                            <View style={styles.result}>
                              <Text style={styles.average}>
                                Sua média é 
                                <Text style={styles.activeGood}>
                                  {this.state.average}
                                </Text>
                              </Text>
                              <Text style={styles.averageText}>APROVADO</Text>
                            </View>

                          ):(
                            <View style={styles.result}>
                              <Text style={styles.average}>
                                Sua média é 
                                <Text style={styles.activeBad}>
                                  {this.state.average}
                                </Text>
                              </Text>
                              <Text style={styles.averageText}>REPROVADO</Text>
                            </View>
                          )
                        }
                </View>
            </View>
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  header: {
    display: "flex",
  },

  img: {
    width: 184,
    height: 65,
  },

  body: {
      display: "flex",
  },

  input: {
    width: 190,
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 2,
    fontFamily: fonts.regular,
    padding: 5,
  },

  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    width: 190,
    height: 55,
    borderRadius: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    marginBottom: 30,
  },

  btnText: {
      color: colors.white,
      fontFamily: fonts.regular,
  },

  result: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  },

  average: {
      fontSize: 12,
      color: colors.black,
      fontFamily: fonts.regular
  },

  averageText: {
    fontSize: 30,
    color: colors.blue,
    fontFamily: fonts.bold
  },

  activeGood: {
    color: colors.blue,

  },

  activeBad: {
    color: colors.error,
  },



});
