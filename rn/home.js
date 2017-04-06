import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import LoanRule from './LoanRules.js'
import PersonalLoan from './PersonalLoan.js'
class HomeScreen extends Component {
    static navigationOptions = {
        title: '借款',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Image source={require('./img/debet_home.png')}
                   style={styles.backgroundImg}>

                <TouchableOpacity
                    style={styles.homeCommitTouchable}
                    onPress={() =>
                        navigate('PersonalLoan', {name: 'Jane'})
                    }>
                    <Text style={styles.commitTextButton}>个人借款</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.homeCommitTouchableSecond}
                    onPress={() =>
                        navigate('Enterprise_debt_apply', {name: 'Jane'})
                    }>
                    <Text style={styles.commitTextButton}>企业借款</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.homeCommitTouchableThird}
                    onPress={() =>
                        navigate('LoanRules', {name: 'Jane'})
                    }>
                    <Text style={styles.homeCommitTextThird}>快速借款攻略</Text>
                    <Image source={require('./img/go_ro.png')}
                    style={styles.imgRightArrow}/>
                </TouchableOpacity>
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
            <ScrollView style={styles.inputRoot}>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>公司全称:</Text>
                    <TextInput
                        style={styles.inputHint}
                        underlineColorAndroid='transparent'//去掉下划线
                        selectionColor={'#ff0000'}//设置光标颜色
                        placeholderTextColor={'#d6d3d3'}
                        placeholder={'请输入公司名称'}
                    />
                </View>
                <View style={styles.inputDivider}/>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>工商注册号:</Text>
                    <TextInput
                        style={styles.inputHint}
                        underlineColorAndroid='transparent'//去掉下划线
                        selectionColor={'#ff0000'}//设置光标颜色
                        placeholderTextColor={'#d6d3d3'}
                        placeholder={'请输入工商注册号'}
                    />
                </View>
                <View style={styles.inputDivider}/>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>办公地址:</Text>
                    <TextInput
                        style={styles.inputHint}
                        underlineColorAndroid='transparent'//去掉下划线
                        selectionColor={'#ff0000'}//设置光标颜色
                        placeholderTextColor={'#d6d3d3'}
                        placeholder={'请输入实际办公地址'}
                    />
                </View>
                <View style={styles.inputDivider}/>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>借款额度(元):</Text>
                    <TextInput
                        style={styles.inputHint}
                        underlineColorAndroid='transparent'//去掉下划线
                        selectionColor={'#ff0000'}//设置光标颜色
                        placeholderTextColor={'#d6d3d3'}
                        placeholder={'请输入借款额度'}
                    />
                </View>
                <View style={styles.inputDivider}/>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>借款期限(天):</Text>
                    <TextInput
                        style={styles.inputHint}
                        underlineColorAndroid='transparent'//去掉下划线
                        selectionColor={'#ff0000'}//设置光标颜色
                        placeholderTextColor={'#d6d3d3'}
                        placeholder={'请输入借款期限'}
                    />
                </View>
                <View style={styles.inputDivider}/>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>是否抵押:</Text>
                    <TextInput
                        style={styles.inputHint}
                        underlineColorAndroid='transparent'//去掉下划线
                        selectionColor={'#ff0000'}//设置光标颜色
                        placeholderTextColor={'#d6d3d3'}
                        placeholder={'请输入公司名称'}
                    />
                </View>
                <View style={styles.inputDivider}/>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>法人姓名:</Text>
                    <TextInput
                        style={styles.inputHint}
                        underlineColorAndroid='transparent'//去掉下划线
                        selectionColor={'#ff0000'}//设置光标颜色
                        placeholderTextColor={'#d6d3d3'}
                        placeholder={'请输入法人姓名'}
                    />
                </View>
                <View style={styles.inputDivider}/>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>法人身份证号:</Text>
                    <TextInput
                        style={styles.inputHint}
                        underlineColorAndroid='transparent'//去掉下划线
                        selectionColor={'#ff0000'}//设置光标颜色
                        placeholderTextColor={'#d6d3d3'}
                        placeholder={'请输入法人身份证号'}
                    />
                </View>
                <View style={styles.inputDivider}/>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>法人联系电话:</Text>
                    <TextInput
                        style={styles.inputHint}
                        underlineColorAndroid='transparent'//去掉下划线
                        selectionColor={'#ff0000'}//设置光标颜色
                        placeholderTextColor={'#d6d3d3'}
                        placeholder={'请输入法人联系电话'}
                    />
                </View>
                <View style={styles.inputDivider}/>
                <View style={styles.inputItem}>
                    <Text style={styles.inputTitle}>验证码:</Text>
                    <TextInput
                        style={styles.inputHint}
                        underlineColorAndroid='transparent'//去掉下划线
                        selectionColor={'#ff0000'}//设置光标颜色
                        placeholderTextColor={'#d6d3d3'}
                        placeholder={'请输入验证码'}
                    />
                </View>
                <View style={styles.inputDivider}/>
                <TouchableOpacity
                    style={styles.commitTouchable}
                    onPress={()=>{
                        console.log('click');
                    }}
                >
                    <Text
                        style={styles.commitTextButton}>立即申请</Text>
                </TouchableOpacity>
            </ScrollView>


        )
    }
}

const App = StackNavigator({
    Home: {screen: HomeScreen},
    Enterprise_debt_apply: {screen: EnterpriseDebtApplyScreen},
    LoanRule:{screen: LoanRule},
    PersonalLoan:{screen: PersonalLoan},
});

const styles = StyleSheet.create({
    backgroundImg:{
        flex:1,
        width:null,
        alignItems:'center',
    },
    btnEnterpriseDebt:{
        width:100,
        height:50,
        marginLeft:10,
        marginRight:10,
        marginTop:100,
    },

    inputRoot:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:'#ffffff'
    },

    inputItem:{
        flexDirection:'row',
        height:50,
        marginLeft:15,
    },

    inputTitle:{
        flexDirection: 'row',
        width:80,
        alignSelf:'center',
    },

    inputHint:{
        width:265,
        borderColor:'gray',
        borderWidth:0

    },

    inputDivider:{
        height:StyleSheet.hairlineWidth,
        backgroundColor:'#d6d3d3',
        marginLeft:15,
    },

    commitTouchable:{
        height:80,
        backgroundColor: '#fd5818',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    commitTextButton:{
        fontSize:20,
        color:'#ffffff',
    },

    homeCommitTouchable:{
        backgroundColor: '#fd5818',

        borderColor:'#ffffff',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:400,
        width:240,
        height:45,
    },

    homeCommitTouchableSecond:{

        borderColor:'#ffffff',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        width:240,
        height:45,
    },
    homeCommitTouchableThird:{
        marginLeft:70,
        marginRight:70,
        flexDirection:'row',
        alignItems:'center'
    },
    homeCommitTextThird:{
        fontSize:9,
        color:'#ffffff',
    },
    imgRightArrow:{
        height:6,
        width:6,
    }

})

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('testrn', () => App);