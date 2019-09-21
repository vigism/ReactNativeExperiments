import React from 'react';
import {View, Text} from 'react-native'

class TestComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Text>
                    {this.props.test}
                </Text>
            </View>
        )
    }
}

export default TestComponent;
