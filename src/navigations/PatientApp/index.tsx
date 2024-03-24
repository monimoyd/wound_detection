import React from 'react';
import {
  HistoryListScreen,
  HistoryReportScreen,
  PatientHomeScreen,
} from '../../screens';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';
import {
  History,
  HistoryActive,
  Home,
  HomeActive,
  Profile,
  ProfileActive,
} from '../../assets/svg';
import {colors} from '../../utils/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PatientProfileScreen} from '../../screens/PatientApp/Profile';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.primary,
        paddingVertical: moderateVerticalScale(10),
        elevation: 10,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            {label === 'Home' ? (
              isFocused ? (
                <HomeActive />
              ) : (
                <Home />
              )
            ) : label === 'History' ? (
              isFocused ? (
                <HistoryActive />
              ) : (
                <History />
              )
            ) : isFocused ? (
              <ProfileActive />
            ) : (
              <Profile />
            )}
            <Text style={{color: isFocused ? colors.secondary : '#787B80'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// ...
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const PatientHistoryTab = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="History List" component={HistoryListScreen} />
    <Stack.Screen name="History Report" component={HistoryReportScreen} />
  </Stack.Navigator>
);

export default function PatientAppNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Patient Home Tab"
        component={PatientHomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="Patient History Tab"
        component={PatientHistoryTab}
        options={{title: 'History'}}
      />
      <Tab.Screen
        name="Patient Profile Tab"
        component={PatientProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
}
