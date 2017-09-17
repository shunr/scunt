import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import { connect } from 'react-redux'
import { changeScreen, getUsername } from '../actions'
import Camera from 'react-native-camera'

class Game extends Component {
    takePicture() {
        const options = {};
        //options.location = ... 
        this.camera.capture({metadata: options})
          .then((data) => console.log(data))
          .catch(err => console.error(err));
      }
    render() {
        return (
            <View style={{flex:1, justifyContent: 'center'}}>
                <Text>
                    SUP {//this.props.hasOwnProperty('user') && this.props.user.hasOwnProperty('username') && this.props.user.username
                    }
                </Text>
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                    </Camera>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeScreen: (newScreen) => {
            dispatch(changeScreen(newScreen))
        },
        getUsername: (uid) => {
            dispatch(getUsername(uid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)