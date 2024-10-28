import * as React from 'react';
import {TextInput, View, Text, SafeAreaView} from 'react-native';

const App = () => {
  const [value, setValue] = React.useState('');

  return (
    <SafeAreaView>
      <Text>Broken:</Text>
      <TextInput value={value} onChangeText={setValue} placeholder="input" />
      <Text>Works, but not controlled:</Text>
      <TextInput placeholder="input" />
      <Text>Works, but not single line:</Text>
      <TextInput
        multiline
        value={value}
        onChangeText={setValue}
        placeholder="input"
      />
    </SafeAreaView>
  );
};

export default App;
