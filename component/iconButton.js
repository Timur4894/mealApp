import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ onPress, isFavorite }) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        isPressed && styles.pressed,
      ]}
    >
      <Ionicons name="star" size={24} color={isFavorite ? 'yellow' : 'white'} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  pressed: {
    transform: [{ scale: 1.3 }],
  },
});

export default IconButton;
