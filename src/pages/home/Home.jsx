
import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View, Image } from "react-native";
import api from '../../../apiGithub'
import { styles } from "./HomeStyles";

export function Home() {
  const[repositories, setRepositories] = useState([]);
  const _loadingRepositories = async() => {
    try{
      const response = await api.get('/users');
      setRepositories(response.data)
    }catch(error){
      console.error('Error on _loadingRepositories', error)
    }
  }

  useEffect(() => {
     _loadingRepositories();
     }, [])


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Usuários do GitHub</Text>
        <FlatList data={repositories} keyExtractor={item => item.id} renderItem={({item}) => (
          <View style= {styles.line}>
            <Image style= {styles.image} source = {{ uri: item.avatar_url}}/>
            <Text style={styles.lineText}>{item.login}</Text>
      
      </View>
        )}/>
        </View>
    );
  }