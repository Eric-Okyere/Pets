import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import {EvilIcons} from '@expo/vector-icons'





const Contact = () => {
  return (
    <View>
   <View style={styles.container}>
    
    <Image style={styles.Image} source={require("./Images/dog.jpg")} />

    
<View style={styles.Info}>
  <Text style={[styles.left,styles.title]}>Jack</Text>
  <Text style={styles.left}>Dog</Text>
  <Text style={styles.left}>1 month old</Text>
    <View style={styles.icons}>
      <View style={[styles.left,styles.location]}>
    <EvilIcons name="location" size={24} color="black" />
    <Text style={{color:"#9d99a8"}}>Mumford</Text>
    </View>
    </View>

   
    </View>
   </View>
   <View style={styles.container}>
    
    <Image style={styles.Image} source={require("./Images/cat.jpg")} />

    
<View style={styles.Info}>
  <Text style={[styles.left,styles.title]}>Crytee</Text>
  <Text style={styles.left}>Cat</Text>
  <Text style={styles.left}>2 weeks old</Text>
    <View style={styles.icons}>
      <View style={[styles.left,styles.location]}>
    <EvilIcons name="location" size={24} color="black" />
    <Text style={{color:"#9d99a8"}}>Mumford</Text>
    </View>
    </View>

   
    </View>
   </View>
   <View style={styles.container}>
    
    <Image style={styles.Image} source={require("./Images/Rabbit.jpg")} />

    
<View style={styles.Info}>
  <Text style={[styles.left,styles.title]}>Crytee</Text>
  <Text style={styles.left}>Rabbit</Text>
  <Text style={styles.left}>1 year old</Text>
    <View style={styles.icons}>
      <View style={[styles.left,styles.location]}>
    <EvilIcons name="location" size={24} color="black" />
    <Text style={{color:"#9d99a8"}}>Mumford</Text>
    </View>
    </View>

   
    </View>
   </View>
   </View>
    )
}

export default Contact;

const styles = StyleSheet.create({
   Image:{
    width:170,
    height:210,
    borderRadius:20,
    
   },
   container:{
    flexDirection:"row",
   
    alignItems:"center",
    marginVertical:10
   },
 
  location:{
   
    flexDirection:"row"
  },
  Info:{
    backgroundColor:"#f7faf8",
    padding:20,
    borderRadius:10,
    flex:1,
  },
  title:{
    fontSize:25,
    top:-10,
    color:"#4a2aa1"
  },
  left:{
    top:-5,
    marginVertical:5,
    color:"#9d99a8"
  }
  
 
  });



