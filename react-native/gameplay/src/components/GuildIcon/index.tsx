import { Image } from 'react-native';


import { styles } from './styles';

export function GuildIcon() {
  const uri =
    'https://www.freepnglogos.com/uploads/discord-logo-png/discord-icon-all-the-cool-kids-are-moving-discord-podfeet-podcasts-0.png';
  return <Image source={{ uri }} style={styles.image} resizeMode='cover' />;
}
