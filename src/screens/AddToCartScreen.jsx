import React from 'react'
import { View, Text, Image , StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 

const AddToCardScreen = ({route,navigation}) => {
const {newTitle}=route.params
  return (
    <View style={Mystyles.main}>
    <View style={Mystyles.container}>
      
       <View>
        <Text style={{fontSize:25, marginVertical:10}}>{newTitle}</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis
           perspiciatis voluptates distinctio! Harum eius magnam amet molestias! Culpa bland
          itiis mollitia quasi harum sequi voluptatum quam quibusdam odio reprehenderit eius.</Text>
       </View>

      
       <View style={{justifyContent:"center"}}>
        <Image style={Mystyles.Image}  source={require("../../Images/Pokupine.jpg")} />
       </View>



       <View style={{alignSelf:"center"}}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("PaymentSuccessful")
        }} style={Mystyles.btn}>
          <Text style={{color:"white", fontSize:20}}>Next</Text>
        </TouchableOpacity>
      </View>


      
    </View>


<View style={Mystyles.butcont}>
      <View>
       
        <TouchableOpacity onPress={()=>{
          navigation.navigate("OnlineShopping")
        }}  style={{flexDirection:"row", alignItems:"center"}}>
           <AntDesign name="left" size={20} color="black" />
          <Text>Prevoius</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
      </View>


     </View>
  )
}

export default AddToCardScreen;

const Mystyles = StyleSheet.create({

main:{
  padding:20,
},

  container:{

alignItems:"center"


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
    alignItems:"center",
    marginBottom:25
  }, 
  butcont:{
    flexDirection:"row",
    justifyContent:"space-between",
    
  },
 
})