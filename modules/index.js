import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const dummyData = [{
    id: 1,
    title: 'Item 1',
    description: 'This is item 1'
  }, {
    id: 2,
    title: 'Item 2',
    description: 'This is item 2'
  }, {
    id: 3,
    title: 'Item 3',
    description: 'This is item 3'
  } // Add more dummy data here
  ];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        {dummyData.map(item => <View key={item.id} style={styles.card}>
            <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  description: {
    fontSize: 16,
    marginTop: 10
  }
});
export default ScreenComponent;