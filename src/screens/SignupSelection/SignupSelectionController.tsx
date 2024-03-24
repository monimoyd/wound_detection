import React, {useState} from 'react';
import SignupSelectionComponent from './SignupSelectionComponent';

interface Props {
  navigation: any;
}

export default function SignupSelectionController({navigation}: Props) {
  const [selected, setSelected] = useState(0);
  const onContinuePress = () => {
    navigation.navigate('Signup', {
      for: selected === 1 ? 'Doctor' : 'Patient',
    });
  };
  return (
    <SignupSelectionComponent
      selected={selected}
      setSelected={setSelected}
      onContinuePress={onContinuePress}
    />
  );
}
