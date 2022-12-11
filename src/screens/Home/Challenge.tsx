import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationComponentProps } from 'react-native-navigation'
import MySafeArea from '@components/MySafeArea'
import { Navigator } from '@Navigator'
import { screenName } from '@screenName'
import CompetitiveItems from '@components/CompetitiveItems'

export interface Props extends NavigationComponentProps {
    propsData: any
}

const Challenge: React.FC<Props> = (props) => {
    const { propsData } = props
    return (
        <MySafeArea
            componentId={props.componentId}
            title={propsData?.title ?? ''}
            rightIcon={require('@images/setting-white.png')}
            rightIconPress={()=>Navigator.setPush(props.componentId, screenName.Setting)}
        >
            <FlatList
                data={[0, 1, 2]}
                renderItem={({ item, index }) => (
                    <CompetitiveItems
                        componentId={props.componentId}
                        item={item}
                        index={index}
                    />
                )}
            />
        </MySafeArea>
    )
}

export default Challenge

const styles = StyleSheet.create({})