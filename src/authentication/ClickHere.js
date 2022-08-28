import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View , Pressable, Image} from 'react-native'
import React from 'react'

const ClickHere = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={["#93fff4","blue"]}
          style={styles.linearGradient}
        >
        <Pressable
        onPress={()=> navigation.navigate("UserLoginForm")}
        style={styles.userLogin}>
        <Image
        style={{width:100,height:100}}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31nE20J4BYLYO_ath5pq3rYMiSppspBsU6-ihFiSrcgWW_luTGzFrfBZE8blynkE5RM8&usqp=CAU",
        }}
      />
            <Text style={{fontSize:30,color:"black"}}>User</Text>
        </Pressable>
        <Pressable
        onPress={()=> navigation.navigate("RecruiterLogin")}
        style={styles.recruiterLogin}>
        <Image
        style={{width:100,height:100,backgroundColor:"pink"}}
        source={{
          uri: "https://thumbs.dreamstime.com/b/human-resource-vector-icon-recruit-illustration-symbol-sign-logo-business-client-people-group-stars-web-sites-mobile-156544852.jpg",
        }}
      />
        <Text style={{fontSize:30,color:"black"}}>Recruiter</Text>

        </Pressable>


        </LinearGradient>
    </View>
  )
}

export default ClickHere

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"orange"
    },
    linearGradient:{
      borderRadius:10

    },
    userLogin:{
        borderWidth:1,
        borderColor:"black",
        borderRadius:10,
        margin:10,
        padding:10,
        width:220,
        height:180,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    recruiterLogin:{
        borderWidth:1,
        borderColor:"black",
        borderRadius:10,
        margin:10,
        padding:10,
        width:220,
        height:180,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"

    }

})