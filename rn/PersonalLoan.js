/**
 * Created by Administrator on 2017/3/28.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Image,
    TouchableWithoutFeedback,
    Modal
} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import Picker from './CityPicker/css/Picker'
import cityCode from './CityPicker/ChinaCityCode'

export default class PersonalLoan extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
            text: '',
            city: '请选择地区',
        }
        this.rowIndex0 = 0;
        this.rowIndex1 = 0;
        this.rowIndex2 = 0;
        this.onSelect = this.onSelect.bind(this)
        this.onSetCity = this.onSetCity.bind(this)
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#ffffff'}}>
                <View style={styles.top}>
                    <Image source={require('./img/left_ro.png')} style={{height: 15, width: 8}}/>
                    <Text style={{color: '#020202', fontSize: 18}}>个人借款</Text>
                    <Text/>
                </View>
                <View style={styles.lineTop}/>
                <View style={styles.item}>
                    <Text style={styles.text}>姓 名:</Text>
                    <TextInput style={{flex: 1, fontSize: 14}}
                               returnKeyType="search"
                               placeholder="请输入搜索关键字"
                               placeholderTextColor={'#d6d3d3'}
                               underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.item}>
                    <Text style={styles.text}>姓 别:</Text>
                    <RadioGroup style={{flexDirection: 'row',}}
                                onSelect={(index, value) => this.onSelect(index, value)}
                                color='#fd5818'
                    >
                        <RadioButton value={'男'}
                                     color='#fd5818'>
                            <Text>男</Text>
                        </RadioButton>
                        <RadioButton value={'女'}
                                     color='#fd5818'>
                            <Text>女</Text>
                        </RadioButton>
                    </RadioGroup>
                </View>
                <View style={styles.line}/>
                <View style={styles.item}>
                    <Text style={styles.text}>所在地区:</Text>
                    <TouchableWithoutFeedback onPress={this._rightButtonClick.bind(this)}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={{fontSize: 14, color: '#d6d3d3', flex: 1}}>{this.state.city}</Text>
                            <Image source={require('./img/right_ro.png')} style={{height: 15, width: 8}}/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.line}/>
                <View style={styles.item}>
                    <Text style={styles.text}>身份证号:</Text>
                    <TextInput style={{flex: 1, fontSize: 14}}
                               returnKeyType="search"
                               placeholder="请输入身份证号"
                               placeholderTextColor={'#d6d3d3'}
                               underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.item}>
                    <Text style={styles.text}>借款额度(元):</Text>
                    <TextInput style={{flex: 1, fontSize: 14}}
                               returnKeyType="search"
                               placeholder="请输入借款额度"
                               placeholderTextColor={'#d6d3d3'}
                               underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.item}>
                    <Text style={styles.text}>借款期限(元):</Text>
                    <TextInput style={{flex: 1, fontSize: 14}}
                               returnKeyType="search"
                               placeholder="请输入借款期限"
                               placeholderTextColor={'#d6d3d3'}
                               underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.item}>
                    <Text style={styles.text}>是否抵押:</Text>
                    <RadioGroup style={{flexDirection: 'row',}}
                                onSelect={(index, value) => this.onSelect(index, value)}
                                color='#fd5818'
                    >
                        <RadioButton value={'有抵押'}
                                     color='#fd5818'>
                            <Text>有抵押</Text>
                        </RadioButton>
                        <RadioButton value={'无抵押'}
                                     color='#fd5818'>
                            <Text>无抵押</Text>
                        </RadioButton>
                    </RadioGroup>
                </View>
                <View style={styles.line}/>
                <View style={styles.item}>
                    <Text style={styles.text}>借款用途:</Text>
                    <TextInput style={{flex: 1, fontSize: 14}}
                               returnKeyType="search"
                               placeholder="请输入借款用途"
                               placeholderTextColor={'#d6d3d3'}
                               underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.item}>
                    <Text style={styles.text}>联系电话:</Text>
                    <TextInput style={{flex: 1, fontSize: 14}}
                               returnKeyType="search"
                               placeholder="请输入联系电话"
                               placeholderTextColor={'#d6d3d3'}
                               underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.line}/>
                <View style={styles.item}>
                    <Text style={styles.text}>验证码:</Text>
                    <TextInput style={{flex: 1, fontSize: 14}}
                               returnKeyType="search"
                               placeholder="请输入验证码"
                               placeholderTextColor={'#d6d3d3'}
                               underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.line}/>
                <View style={{
                    flex: 1,
                    height: 50,
                    backgroundColor: '#fd5818',
                    marginTop: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>立即申请</Text>
                </View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.show}
                    onShow={() => {
                    }}
                    onRequestClose={() => {
                    }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        flex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}>
                        <View style={{
                            backgroundColor: '#fff',
                            flexDirection: 'column',
                            alignSelf: 'stretch',
                            justifyContent: 'flex-end',
                        }}
                        >
                            <View style={{
                                height: 50,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingLeft: 15,
                                paddingRight: 15,
                            }}>
                                <TouchableWithoutFeedback onPress={this._setModalVisible.bind(this)}>
                                    <Text style={{
                                        color: '#474747',
                                        fontSize: 12,
                                    }}>取消</Text>
                                </TouchableWithoutFeedback>
                                <Text style={{
                                    color: '#474747',
                                    fontSize: 15,
                                }}>地区选择</Text>
                                <TouchableWithoutFeedback onPress={this.onSetCity.bind(this)}>
                                    <Text style={{
                                        color: '#474747',
                                        fontSize: 12,
                                    }}>确定</Text>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.lineTop}/>
                            <View style={{height: 225, flexDirection: 'row'}}>
                                <View style={{flex: 0.9}}>
                                    <Picker
                                        data={cityCode.CityZoneCode.China.Province}
                                        ref='_Picker0'
                                        name='name'
                                        onRowChange={index => {
                                            this.rowIndex0 = index;
                                            this.rowIndex1 = 0;
                                            this.rowIndex2 = 0;
                                            this.refs._Picker1.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City);
                                            this.refs._Picker2.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City[0].Area)
                                        }}
                                    />
                                </View>
                                <View style={{flex: 1}}>
                                    <Picker
                                        data={cityCode.CityZoneCode.China.Province[0].City}
                                        ref='_Picker1'
                                        name='name'
                                        onRowChange={index => {
                                            this.rowIndex1 = index;
                                            this.rowIndex2 = 0;
                                            this.refs._Picker2.setDataSource(cityCode.CityZoneCode.China.Province[this.rowIndex0].City[this.rowIndex1].Area)
                                        }}
                                    />
                                </View>
                                <View style={{flex: 1}}>
                                    <Picker
                                        data={cityCode.CityZoneCode.China.Province[0].City[0].Area}
                                        ref='_Picker2'
                                        name='name'
                                        onRowChange={index => this.rowIndex2 = index}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        )
            ;
    }

    onSetCity() {
        this.setState({
            city: `${cityCode.CityZoneCode.China.Province[this.rowIndex0].name} ${cityCode.CityZoneCode.China.Province[this.rowIndex0].City[this.rowIndex1].name} ${cityCode.CityZoneCode.China.Province[this.rowIndex0].City[this.rowIndex1].Area[this.rowIndex2].name}`

        })
        this._setModalVisible();
    }

    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }

    _rightButtonClick() {
        //
        console.log('右侧按钮点击了');
        this._setModalVisible();
    }

    // 显示/隐藏 modal
    _setModalVisible() {
        let isShow = this.state.show;
        this.setState({
            show: !isShow,
        });
    }

}

const styles = StyleSheet.create({

    top: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15
    },
    item: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    text: {
        color: '#474747',
        fontSize: 16,
        marginRight: 16
    },
    lineTop: {
        height: 0.5,
        backgroundColor: '#e4e4e4'
    },
    line: {
        height: 0.5,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#e4e4e4'
    }
});