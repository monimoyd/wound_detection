import React, {useRef, useState} from 'react';
import OnBoardingComponent from './OnBoardingComponent';

interface Props {
  navigation: any;
}

export default function OnBoardingController({navigation}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<any>();
  const onViewableItemsChanged = ({viewableItems}: any) => {
    setTimeout(() => {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index:
          viewableItems![0].index === 2
            ? 0
            : (viewableItems![0]?.index ?? 0) + 1,
      });
      setCurrentIndex(
        viewableItems![0].index === 2 ? 0 : (viewableItems![0]?.index ?? 0) + 1,
      );
    }, 2000);
    // Your code here.
  };
  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);

  const onGetStartedPress = () => {
    navigation.navigate('Login');
  };

  return (
    <OnBoardingComponent
      flatListRef={flatListRef}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs}
      currentIndex={currentIndex}
      onGetStartedPress={onGetStartedPress}
    />
  );
}
