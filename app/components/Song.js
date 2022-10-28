import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
  } from 'react-native';
  import { Images, Themes } from "../../assets/Themes";
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const trackHeight = windowHeight * 0.08;
  const trackWidth = windowWidth;


  export default function Item({ id, index, title, artist, album, duration, imageUrl }) {
    return (
      <View style={styles.item}>
          <View style={styles.index}>
              <Text style={styles.index_text}>
                {index}
              </Text>
          </View>
          <View style={styles.trackImgBox}>
              <Image 
                style = {styles.trackImg}
                source = {{uri: imageUrl}} />
          </View>
          <View style={styles.trackDetails}>
            <Text style = {styles.trackName} numberOfLines={1}>
                {title}
            </Text>
            <Text style = {styles.trackArtist} numberOfLines={1}>
                {artist}
            </Text>
          </View>
          <View style={styles.trackAlbum}>
              <Text style={styles.trackAlbumName} numberOfLines={1}>
                  {album}
              </Text>
          </View>
          <View style={styles.trackDuration}>
              <Text style={styles.trackDurationText}>
                {duration}
              </Text>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    item: {
        backgroundColor: Themes.colors.background,
        width: trackWidth,
        height: trackHeight,
        alignContent: 'flex-start',
        flexDirection: 'row',
        padding: 4,
    },
    index: {
        width: trackWidth * 0.125,
        height: trackHeight,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    index_text: {
        fontSize: 20,
        color: Themes.colors.gray,
    },
    trackImgBox: {
        width: trackWidth * 0.20,
        height: trackHeight,
        justifyContent: 'flex-start',
      },
    trackImg: {
        width: trackWidth * 0.15,
        height: trackWidth * 0.15,
        margin: 0.05,
        justifyContent: 'center',
        alignItems: 'center',
      },
    trackDetails: {
        width: trackWidth * 0.30,
        height: trackHeight,
        flexDirection: 'column',
    },
    trackName: {
        fontSize: 18,
        color: Themes.colors.white,
        padding: 4,
        justifyContent: 'center',
    },
    trackArtist:{
        fontSize: 12,
        color: Themes.colors.gray,
        padding: 4,
        justifyContent: 'center',
    },
    trackAlbum: {
        width: trackWidth * 0.25,
        height: trackHeight,
    },
    trackAlbumName: {
        justifyContent: 'center',
        fontSize: 18,
        color: Themes.colors.white,
        padding:4
    },
    trackDuration: {
        width: trackWidth * 0.125,
        height: trackHeight,
    },
    trackDurationText: {
        fontSize: 20,
        color: Themes.colors.gray,
        justifyContent: 'flex-start'
    }
  });