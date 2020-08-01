import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from "react-native";
import YouTubePlayer from "react-native-youtube-sdk";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.youTubePlayer = null;
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <YouTubePlayer
            ref={(ref) => (this.youTubePlayer = ref)}
            videoId="t_aIEOqB8VM"
            autoPlay={true}
            fullscreen={false}
            showFullScreenButton={true}
            showSeekBar={true}
            showPlayPauseButton={true}
            startTime={5}
            style={{ width: "100%", height: 200 }}
            onReady={(e) => console.log("onReady", e.type)}
            onError={(e) => console.log("onError", e.error)}
            onChangeState={(e) => console.log("onChangeState", e.state)}
            onChangeFullscreen={(e) =>
              console.log("onChangeFullscreen", e.isFullscreen)
            }
          />
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.youTubePlayer.loadVideo("QdgRNIAdLi4", 0)}
            >
              <Text style={{ color: "#ffffff" }}>loadVideo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.youTubePlayer.seekTo(10)}
            >
              <Text style={{ color: "#ffffff" }}>SeekTo(10)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.youTubePlayer.play()}
            >
              <Text style={{ color: "#ffffff" }}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.youTubePlayer.pause()}
            >
              <Text style={{ color: "#ffffff" }}>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                const currentTime = await this.youTubePlayer.getCurrentTime();
                ToastAndroid.show(String(currentTime), ToastAndroid.SHORT);
              }}
            >
              <Text style={{ color: "#ffffff" }}>getCurrentTime</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                const duration = await this.youTubePlayer.getVideoDuration();
                ToastAndroid.show(String(duration), ToastAndroid.SHORT);
              }}
            >
              <Text style={{ color: "#ffffff" }}>getVideoDuration</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "red",
    margin: 12,
    padding: 12,
    borderRadius: 4,
  },
});
