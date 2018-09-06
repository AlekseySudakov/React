import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Platform, Button, Alert} from 'react-native';
import Header from './src/components/uikit/header'
const url = '/Users/aleksejsudakov/motivation1/text.json'



export default class App extends React.Component {
    state = {
        title: 'Hello',
        data: [],
    }
    componentDidMount = async () => {
      const response = await fetch(url)
      const data = await response.json()
      this.setState ({data})
    }


  render() {
      console.log('state', this.state)
    return (

        <Header title = {'Поддержи-Ка 2.0'} />
    );
  }
}
