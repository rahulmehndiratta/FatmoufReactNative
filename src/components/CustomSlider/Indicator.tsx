
import React from 'react';
import { View, StyleSheet } from 'react-native';


export interface Props {
    itemCount: any,
    currentIndex: any,
    indicatorStyle: any,
    indicatorContainerStyle: any,
    indicatorActiveColor: any,
    indicatorInActiveColor: any,
    indicatorActiveWidth: any,
}
const Indicator: React.FC<Props> = (props) => {
    const { itemCount, currentIndex, indicatorStyle, indicatorContainerStyle, indicatorActiveColor, indicatorInActiveColor, indicatorActiveWidth } = props
    return (
        <View style={[styles.container, indicatorContainerStyle]}>
            {renderIndicator(
                itemCount,
                currentIndex,
                indicatorStyle,
                indicatorActiveColor,
                indicatorInActiveColor,
                indicatorActiveWidth ?? 6,
            )}
        </View>
    )
}


export default Indicator;



export const renderIndicator = (
    count: any,
    currentIndex: any,
    indicatorStyle: any,
    indicatorActiveColor: any,
    indicatorInActiveColor: any,
    indicatorActiveWidth: any,
) => {
    let indicators = [];
    for (let i = 0; i < count; i++) {
        indicators.push(
            <View
                style={[
                    styles.indicator,
                    indicatorStyle,
                    i === currentIndex
                        ? indicatorActiveColor
                            ? {
                                ...styles.active,
                                ...{
                                    backgroundColor: indicatorActiveColor,
                                    width: indicatorActiveWidth,
                                },
                            }
                            : styles.active
                        : {
                            ...styles.inactive,
                            ...{ backgroundColor: indicatorInActiveColor },
                        },
                ]}
            />,
        );
    }
    return indicators;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    indicator: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 5,
    },
    active: {},
    inactive: {},
});