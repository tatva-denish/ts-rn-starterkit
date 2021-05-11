import React from "react"
import { View, Image, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "@components"
import { color } from "@theme"
import {
  FULL,
  CONTAINER,
  TITLE_WRAPPER,
  TITLE,
  ALMOST,
  BOWSER,
  FOOTER,
  FOOTER_CONTENT,
  CONTINUE,
  CONTINUE_TEXT,
  HEADER,
  HEADER_TITLE
} from './welcome-screen-style'

const bowserLogo = require("./tatvasoft.png")



export const WelcomeScreen = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = () => {
    navigation.navigate("welcome")
  }

  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Image source={bowserLogo} style={BOWSER} />
        <Text style={TITLE_WRAPPER}>
          <Text style={TITLE} text="Your new app, " />
          <Text style={ALMOST} text="almost" />
          <Text style={TITLE} text="!" />
        </Text>
        <Text style={TITLE} preset="header" tx="welcomeScreen.readyForLaunch" />
      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            testID="next-screen-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            tx="welcomeScreen.continue"
            onPress={nextScreen}
          />
        </View>
        <Header headerTx="welcomeScreen.poweredBy" style={HEADER} titleStyle={HEADER_TITLE} />
      </SafeAreaView>
    </View>
  )
})
