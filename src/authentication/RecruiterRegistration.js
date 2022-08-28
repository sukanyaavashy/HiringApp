import LinearGradient from 'react-native-linear-gradient';
import React,{useId, useState} from 'react';
import { StyleSheet, View, Text,Dimensions,Image,TextInput,Pressable,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


function RecruiterRegistration({navigation}){
  const [fullName, setFullName]=useState("");
  const [companyName, setCompanyName]=useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber]=useState("");

    const RecruiterReg = () =>{
      const RecruiterDetails = {
        fullName,
        companyName,
        email,
        password,
        number

      }


      console.log(RecruiterDetails)
    }
    return(
      <View style={styles.container}>

          <LinearGradient
              colors={["#93fff4","pink"]}
              style={styles.linearGradient}
              >
                <View style={styles.mainHeading}>
                <Text style={styles.registerText}>
                  Register
                </Text>
                <Text style={styles.registerCaption}>
                  Enter Your Details to Register
                  </Text>
                </View>

              <View style={styles.inputFieldSection}>

                  <View style={styles.action}>
                      < Icon style={{padding: 10}} name="person" size={30} color="black" />
                      <TextInput
                      style={styles.inputField}
                      value={fullName}
                      onChangeText={setFullName}
                      placeholder="Full Name"
                      keyboardType='ascii-capable'
                      autoCompleteType='off'
                      />

                  </View>

                  <View style={styles.action}>
                      < Icon style={{padding: 10}} name="person" size={30} color="black" />
                      <TextInput
                      style={styles.inputField}
                      value={companyName}
                      onChangeText={setCompanyName}
                      placeholder="Company Name"
                      keyboardType='ascii-capable'
                      autoCompleteType='off'
                      />
                  </View>

                  <View style={styles.action}>
                      < Icon style={{padding: 10}} name="email" size={30} color="black" />
                      <TextInput
                      style={styles.inputField}
                      value={email}
                      onChangeText={setEmail}
                      placeholder="E-mail"
                      keyboardType='email-address'
                      autoCompleteType='off'
                      />
                  </View>

                  <View style={styles.action}>
                      < Icon style={{padding: 10}} name="lock" size={30} color="black" />
                      <TextInput
                          style={styles.inputField}
                          value={password}
                          onChangeText={setPassword}
                          placeholder="Password"
                          secureTextEntry={true}
                      />
                  </View>

                  <View style={styles.action}>
                      < Icon style={{padding: 10}} name="phone" size={30} color="black" />
                      <TextInput
                      style={styles.inputField}
                      value={number}
                      onChangeText={setNumber}
                      placeholder="Contact Number"
                      keyboardType='ascii-capable'
                      autoCompleteType='off'
                      />
                  </View>

                 <View style={styles.buttonContainer}>
                 <Pressable style={styles.button} onPress={RecruiterReg}>
                 {/* onPress={() =>NewUser(email, password)} */}
                      <Text style={styles.text}>
                          Register
                      </Text>
                  </Pressable>
                 </View>

              </View>
          </LinearGradient>
      </View>
    )

}

const styles = StyleSheet.create({
    container:{
       flex:1,
       flexDirection:'column',
      alignItems:"flex-start",

    },
    mainHeading:{
      // flex:1,
      // flexDirection:'column',
      // alignItems:"flex-start",
      paddingLeft:25,
      paddingBottom:25,
      padding:10


    },
    registerText:{
      fontSize:30,
      paddingBottom:5,
      color:"black",
      fontWeight:"bold"

    },
    registerCaption:{
      fontSize:16,
      color:"black",
      // fontWeight:"500"

    },
    action:{
      flexDirection: 'row',
       marginTop: 10,
      paddingLeft: 15,
      borderBottomWidth: 0.5,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  inputFieldSection:{
    //  flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:'100%'
  },
  inputField:{
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#fff',
    fontSize:18,
    marginTop:2
},
    input: {
        color:"#fff",
        fontSize:15,
        fontWeight:"bold"
      },
    linearGradient: {
        flex:1,
        // justifyContent:"flex-start",
        // alignItems:"center",
    },
    buttonContainer:{
      marginTop:30

    },
    button: {
      marginTop:30,
      // paddingTop:25,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      marginRight:5
    },
})


export default RecruiterRegistration;
