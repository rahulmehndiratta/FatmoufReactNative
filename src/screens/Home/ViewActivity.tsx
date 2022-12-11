import React from 'react';
import MySafeArea from '@components/MySafeArea';
import {NavigationComponentProps} from 'react-native-navigation';
import {Text, View} from 'react-native';
import ClickableImage from '@components/ClickableImage';
import {Navigator} from '@Navigator';
import {screenName} from '@screenName';

interface Props extends NavigationComponentProps {}

const ViewActivity: React.FC<Props> = props => {
  return (
    <MySafeArea
      componentId={props.componentId}
      title="Activity"
      rightIcon={require('@images/setting-white.png')}
      rightIconPress={() => {
        Navigator.setPush(props.componentId, screenName.Setting);
      }}
      prevScreenName="Back">
      <ClickableImage
        onPress={() =>
          Navigator.setPush(props.componentId, screenName.AddActivity, {
            backTitle: 'Activity',
          })
        }
        resizeMode={'contain'}
        containerStyle={{position: 'absolute', bottom: 10, right: 10}}
        style={{height: 50, width: 50}}
        source={require('@images/add-purple.png')}
      />
    </MySafeArea>
  );
};
export default ViewActivity;
