import React from 'react'
import { View, Text, Image , StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const OnlineShoppingScreen = ({navigation}) => {
  return (
    <View style={Mystyles.main}>
    <View style={Mystyles.container}>
       <View>
        <Text style={{fontSize:25, marginVertical:10}}>ONLINE SHOPPING</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis
           perspiciatis voluptates distinctio! Harum eius magnam amet molestias! Culpa bland
          itiis mollitia quasi harum sequi voluptatum quam quibusdam odio reprehenderit eius.</Text>
       </View>

       <View>
        <Image style={Mystyles.Image}  source={require("../../Images/Pokupine.jpg")} />
       </View>

          <View>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("AddToCart", {newTitle:"CART READY"})
        }} style={Mystyles.btn}>
          <Text style={{color:"white", fontSize:20}}>Next</Text>
        </TouchableOpacity>
      </View>
    
      <View>
        <TouchableOpacity>
          
        </TouchableOpacity>
      </View>



    
      </View>
      
     
      
        <TouchableOpacity style={{alignSelf:"flex-end", top:30}} >
          <Text>Skip</Text>
        </TouchableOpacity>
     
   
    </View>
  )
}

export default OnlineShoppingScreen;

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
    marginBottom:15
  },
  
})