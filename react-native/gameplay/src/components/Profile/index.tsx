import { View, Text } from 'react-native';
import { styles } from './styles';

import { Avatar } from '../Avatar';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage='https://github.com/washhh.png'/>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>
          <Text style={styles.username}>Washh</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
