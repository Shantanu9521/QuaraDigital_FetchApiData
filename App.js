import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(data => setMovies(data.movies))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.releaseYear}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'orange',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    marginTop:30
  },
  title: {
    fontSize: 25,

  },
});
