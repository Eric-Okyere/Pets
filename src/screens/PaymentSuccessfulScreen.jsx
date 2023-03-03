import React from 'react'
import { View, Text, Image , StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const PaymentScreen = ({navigation}) => {
  return (
    <View style={Mystyles.container}>
       <View>
        <Text style={{fontSize:25, marginVertical:10}}>PAYMENT SUCCESSFUL</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis
           perspiciatis voluptates distinctio! Harum eius magnam amet molestias! Culpa bland
          itiis mollitia quasi harum sequi voluptatum quam quibusdam odio reprehenderit eius.</Text>
       </View>

       <View>
        <Image style={Mystyles.Image}  source={require("../../Images/Pokupine.jpg")} />
       </View>

    <View>
      <View>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("OnlineShopping")
        }} style={Mystyles.btn}>
          <Text style={{color:"white", fontSize:20}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
      <View>
        <TouchableOpacity>
          
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PaymentScreen;

const Mystyles = StyleSheet.create({
  container:{
padding:20,
justifyContent:"center",
alignItems:"center",

  },
  Image:{
    width:200,
    height:250,
    margin:40
  },
  btn:{
    backgroundColor:"#0ce846",
    width:110,
    height:50,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center"
  }
})