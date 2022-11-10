import { Pressable, TextStyle, StyleSheet, SafeAreaView, Text, View, Dimensions, Image, PixelRatio, FlatList} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Images, Themes } from "./assets/Themes";
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { blobbuilder } from "caniuse-lite/data/features";
import inputEmailTelUrl from "caniuse-lite/data/features/input-email-tel-url";
import Item from "./app/components/Song"
import { millisToMinutesAndSeconds } from "./utils";
import { Ionicons } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let tracksI = null;
import ScreenOne from './app/components/ScreenOne';
import ScreenTwo from './app/components/ScreenTwo';

const HomeScreen = ({ navigation }) => {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  let contentDisplayed = null;
  const renderTrackItem = ({ item, index }) => (
    <Item
      id={item.id}
      index = {item.track_number}
      title = {item.name}
      artist = {item.artists[0].name}
      album = {item.album.name}
      duration = {millisToMinutesAndSeconds(item.duration_ms)}
      imageUrl = {item.album.images[2].url}
      previewUrl = {item.preview_url}
      externalUrl = {item.external_urls.spotify}
      navigation = {navigation}
    ></Item>
  );
  if (token) {
    contentDisplayed = 
    <View style={styles.tracksPage}>
      <View style={styles.tracksHeader}>
        <Image 
          style = {styles.tracksHeaderImg}
          source = {Images.spotify}
        />
        <Text style = {styles.tracksHeaderText}>
          My Top Tracks
        </Text>
    </View>
      <FlatList
        data={tracks} // the array of data that the FlatList displays
        renderItem={(item) => renderTrackItem(item)} // function that renders each item
        keyExtractor={(item) => item.id} // unique key for each item
      />
    </View>
  } else {
    contentDisplayed = 
    <Pressable onPress={getSpotifyAuth}>
      <View style={styles.welcomeButton}>
      <Image 
        style={styles.welcomeImg}
        source={Images.spotify}
      />
      <Text style={styles.welcomeText}> CONNECT WITH SPOTIFY </Text>
    </View>
    </Pressable>
  }
  return (
  <SafeAreaView style={styles.homeScreen}>
    {contentDisplayed}
  </SafeAreaView>
  ); 
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/*<Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  homeScreen: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  welcomeButton: {
    width: windowWidth * 0.65,
    height: windowHeight * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: Themes.colors.spotify,
    borderRadius: 99999
  },
  welcomeText: {
    color: Themes.colors.white,
    alignItems: 'center',
  },
  welcomeImg: {
    width: windowHeight * 0.05 * 0.70,
    height: windowHeight * 0.05 * 0.70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tracksPage:{
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  tracksHeader: {
    width: windowWidth,
    height: windowHeight * 0.07,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: "center",
    backgroundColor: Themes.colors.background,
  },
  tracksHeaderText: {
    fontSize: PixelRatio.getFontScale() * windowHeight * 0.030,
    color: Themes.colors.white,
    alignItems: 'center',
    justifyContent: "space-around"
  },
  tracksHeaderImg: {
    width: windowHeight * 0.07 * 0.50,
    height: windowHeight * 0.07 * 0.50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  }
});
