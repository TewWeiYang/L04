import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Boat = ({name, description, icon_name, icon_color, poster}) => {
    return (
        <View>
            <Text></Text>
            <View>
                <Text>
                    <FontAwesome6 name={icon_name}  size={25} color={icon_color} />
                    <Text style={styles.boatTitle}>{name.toUpperCase()}</Text>
                </Text>
            </View>
            <Text>
                {description}
            </Text>
            <Image source={poster}
                   style = {{width: 400, height: 500}}/>
        </View>
    );
};

export default Boat;

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginVertical: 4,
    },
    icon: {
        marginRight: 8,
    },
    boatTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#555555',
        letterSpacing: -0.5,
        textTransform: 'uppercase',
    },
});