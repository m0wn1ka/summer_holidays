import { View,Text,Button ,na} from "react-native"
export default function Home({navigation}){
    return(
<View>
<Text>
home page
</Text>
<Button
      title="Go to profile"
      onPress={() =>
        navigation.navigate('Profile')
      }
    />
</View>


    )
}