import { NavigationContainer } from '@react-navigation/native/src';

import { AuthRouters } from './auth.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRouters />
    </NavigationContainer>
  );
}
