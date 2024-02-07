import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import React, {useState} from 'react';

import {hp, wp} from '../Constants/Responsive';

import {Colors} from '../Constants/Colors';

import {Icon} from '@rneui/themed';

import {Fonts, FontsSize} from '../Constants/Fonts';

export default function InputComponent(props) {
  const [securePassword, setSecurePassword] = useState(props?.secureTextEntry);

  const [isFocused, setFocused] = useState(false);

  return (
    <View style={{marginVertical: hp(1)}}>
      <Text style={styles.title}>{props?.title}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: isFocused ? Colors.primary : Colors.bg,
          },
          props?.inputContainer,
        ]}>
        <Image
          style={[
            styles.image,
            {tintColor: isFocused ? Colors.primary : Colors.secondry},
          ]}
          source={props?.rightImg}
          resizeMode="contain"
        />

        <TextInput
          {...props}
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor || Colors.grey}
          style={[styles.input, props?.input]}
          secureTextEntry={securePassword}
          value={props?.value}
          onChangeText={props?.onChangeText}
          onFocus={() => {
            props?.onFocus, setFocused(true);
          }}
          onBlur={() => setFocused(false)}
        />
        {props?.secureTextEntry && (
          <TouchableOpacity onPress={() => setSecurePassword(!securePassword)}>
            <Icon
              name={securePassword ? 'eye-off' : 'eye'}
              size={FontsSize.M}
              color={isFocused ? Colors.primary : Colors.secondry}
              type="feather"
            />
          </TouchableOpacity>
        )}
      </View>
      {props?.errorMessage && (
        <Text numberOfLines={1} style={styles.errorMessage}>
          {props?.errorMessage}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: wp(90),
    borderRadius: wp(10),
    borderWidth: wp(0.3),
    backgroundColor: Colors.bg,
    elevation: wp(2),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.5),
  },
  input: {
    flex: 1,
    color: Colors.black,
    marginLeft: wp(0.5),
  },
  title: {
    color: Colors.secondry,
    paddingHorizontal: wp(3),
    fontFamily: Fonts.semiBold,
    fontSize: FontsSize.XS,
  },
  image: {
    width: wp(6),
    height: wp(6),
  },
  errorMessage: {
    color: Colors.primary,
    fontFamily: Fonts.regular,
    fontSize: FontsSize.XXS,
    marginLeft: wp(3),
    width: wp(85),
  },
});
