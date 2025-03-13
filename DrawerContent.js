/**
 * @author Xanders
 * @see https://team.xsamtech.com/xanderssamoth
 */
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Divider, Title } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import FaIcon from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, PADDING, TEXT_SIZE } from './tools/constants';
import homeStyles from './screens/style';
import Marker from './assets/img/marker.svg';

const DrawerList = [
    { icon: 'home-outline', label: 'navigation.home', navigateTo: 'Home', toScreen: null },
    { icon: 'translate', label: 'change_lang', navigateTo: 'Language', toScreen: null },
    { icon: 'phone-outline', label: 'navigation.contact', navigateTo: 'About', toScreen: 'Contact' },
    { icon: 'clock-outline', label: 'navigation.history', navigateTo: 'Home', toScreen: null },
    { icon: 'credit-card-outline', label: 'navigation.payment_method', navigateTo: 'Home', toScreen: null },
    { icon: 'google-maps', label: 'navigation.favorite_places', navigateTo: 'Home', toScreen: null },
    { icon: 'cog-outline', label: 'navigation.settings', navigateTo: 'Home', toScreen: null }
];

const DrawerLayout = ({ icon, label, navigateTo, toScreen }) => {
    // =============== Navigation ===============
    const navigation = useNavigation();
    // =============== Language ===============
    const { t } = useTranslation();

    return (
        <DrawerItem
            label={t(label)}
            icon={({ color, size }) => <Icon name={icon} color={COLORS.black} size={size} />}
            labelStyle={{ color: COLORS.black }}
            style={{ marginLeft: PADDING.p00 }}
            onPress={() => {
                if (toScreen != null) {
                    navigation.navigate(navigateTo, { screen: toScreen });

                } else {
                    navigation.navigate(navigateTo);
                }
            }}
        />
    );
};

const DrawerItems = (props) => {
    return DrawerList.map((el, i) => {
        return (
            <DrawerLayout key={i} icon={el.icon} label={el.label} navigateTo={el.navigateTo} toScreen={el.toScreen} />
        );
    });
};

const DrawerContent = (props) => {
    // =============== Navigation ===============
    const navigation = useNavigation();
    // =============== Language ===============
    const { t } = useTranslation();

    return (
        <View style={{ flex: 1, paddingHorizontal: -12, marginHorizontal: -12 }}>
            <DrawerContentScrollView {...props}>
                <View style={homeStyles.drawerCurrentUser}>
                    <View style={{ marginTop: 5 }}>
                        <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={require('./assets/img/avatar.png')} />
                    </View>
                    <View style={{ marginLeft: PADDING.p01, flexDirection: 'column' }}>
                        <Title style={homeStyles.drawerTitle}>Cynthia Kamba</Title>
                        <Text style={{ color: COLORS.yellow }}>{t('passenger')}</Text>
                    </View>
                </View>
                <View style={homeStyles.drawerSection}>
                    <DrawerItems />
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: PADDING.p10, marginTop: PADDING.p10 }}>
                        <Marker width={30} height={38} />
                        <View style={{ marginLeft: PADDING.p01 }}>
                            <Text style={{ color: COLORS.dark_secondary }}>{t('my_position')}</Text>
                            <Title style={[homeStyles.drawerTitle, { fontSize: TEXT_SIZE.normal, color: COLORS.purple }]}>Silikin Village</Title>
                        </View>
                    </View>
                    <View style={homeStyles.drawerFooter}>
                        <DrawerItem icon={() => <FaIcon name='question-circle' color={COLORS.black} size={18} />} label={t('about_pepoo')} labelStyle={{ marginLeft: PADDING.p00, color: COLORS.black }} style={{ marginLeft: PADDING.p01 }} onPress={() => { navigation.navigate('About') }} />
                        <DrawerItem icon={() => <FaIcon name='power-off' color={COLORS.black} size={18} />} label={t('exit')} labelStyle={{ marginLeft: PADDING.p00, color: COLORS.black }} style={{ marginLeft: PADDING.p01 }} />
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;