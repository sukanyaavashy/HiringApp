import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LongArrow from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';


const RecruiterLogin = ({navigation}) => {

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.text_header}>Login</Text>
        </View>


        <Animatable.View
        animation="fadeInUpBig"
        style={styles.footer}>
        <Text>Email</Text>
        <View style={styles.action}>
        <Icon name='email' size={24}/>
        <TextInput
        placeholder="Your Email"
        placeholderTextColor="#666666"
        // value={email}
        autoCapitalize="none"


        style={styles.inputField}/>



        </View>


        <Text style={{marginTop: 35}}>Password</Text>
        <View style={styles.action}>
        <Icon name='lock' size={20}/>
        <TextInput
        placeholder="Your Password"
        placeholderTextColor="#666666"
        autoCapitalize="none"
        secureTextEntry={true}
        style={styles.inputField}/>
        </View>


        <TouchableOpacity
             onPress={() => navigation.navigate('RecruiterRegistration')}
            >
            <View style={styles.register}>
                <View style={styles.registerText}>
                <Text styles={{color:"blue"}}>Register</Text>
                </View>

            <LongArrow
                name="long-arrow-right"
                color="blue"
                size={20}
              />

            </View>
        </TouchableOpacity>


        <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}

                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                 >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>


            </View>

        </Animatable.View>

    </View>
  )}

export default RecruiterLogin;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#009387'
    },
    header:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer:{
        // flex:2,
        // backgroundColor:"#fff",
        // borderTopLeftRadius: 40,
        // borderTopRightRadius: 40,
        // padding: 20

        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30

    },
    logo:{
        height:100,
        width:100,
        borderRadius:30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    action:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    inputField:{
        flex: 1,
         marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    register:{
        flexDirection: 'row',
        justifyContent: "flex-end",
        margin: 20,
        color:"blue"
        // padding: 10

    },
    registerText:{
        padding: 10,
        color:"blue",
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color:"blue",
        margin:5
    },
})