import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
        <Image source={require('./img/welcome_android.png')}
               style={styles.backgroundImg}>
            <Button

                title="企业借款"
                onPress={() =>
                    navigate('Enterprise_debt_apply', {name: 'Jane'})
                }
            />
        </Image>

    );
    }
}

class EnterpriseDebtApplyScreen extends React.Component {
    static navigationOptions = {
        title: '企业借款',
    };
    render(){
        return(
            <View style={styles.inputRoot}>
                <View style={styles.inputItem}>
                <Text style={styles.inputTitle}>公司全称:</Text>
                <TextInput
                    style={styles.inputHint}
                    placeholderTextColor={'gray'}
                    placeholder={'请输入公司名称'}
                />
                </View>
                <Text>工商注册号:</Text>
                <TextInput
                    placeholder={'请输入工商注册号'}
                />
            </View>
        )
    }
}

const App = StackNavigator({
    Home: {screen: HomeScreen},
    Enterprise_debt_apply: {screen: EnterpriseDebtApplyScreen},
});

const styles = StyleSheet.create({
    backgroundImg:{
        flex:1,
        width:null,

    },
    btnEnterpriseDebt:{
        width:100,
        height:50,
        marginLeft:10,
        marginRight:10,
        marginTop:100,
    },

    inputRoot:{
        flexDirection: 'column',

    },

    inputItem:{
        flexDirection:'row',
        height:75,
    },

    inputTitle:{
        flexDirection: 'row',
    },

    inputHint:{

        borderColor:'gray',
        borderWidth:1

    }
})

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('testrn', () => App);