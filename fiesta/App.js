import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FiestaNavigator from '../tq-anz-navigation';
import HomeScreen from './src/containers/HomeScreen';
import ComponentsScreen from './src/containers/ComponentsScreen';

export const App = FiestaNavigator({
  Home: { screen: HomeScreen },
  Components: { screen: ComponentsScreen }
});
