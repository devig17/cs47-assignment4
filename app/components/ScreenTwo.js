import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ScreenTwo({ navigation, route }) {
  const params = route.params;
  return (
    <View style={styles.screenTwo}>
      <WebView source={{ uri: params.url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenTwo: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  }
});