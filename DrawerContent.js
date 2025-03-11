/**
 * @author Xanders
 * @see https://team.xsamtech.com/xanderssamoth
 */
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Title } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import homeStyles from './screens/style';
import { COLORS, PADDING } from './tools/constants';

const DrawerList = [
    { icon: 'home-outline', label: 'navigation.home', navigateTo: 'Home', toScreen: null },
    { icon: 'translate', label: 'change_lang', navigateTo: 'Language', toScreen: null },
    { icon: 'phone-outline', label: 'help', navigateTo: 'About', toScreen: 'Contact' },
    { icon: 'clock-outline', label: 'navigation.history', navigateTo: 'Home', toScreen: null },
    { icon: 'credit-card-outline', label: 'navigation.payment_method', navigateTo: 'Home', toScreen: null },
    { icon: 'google-maps-outline', label: 'navigation.favorite_places', navigateTo: 'Home', toScreen: null },
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
            <DrawerLayout key={i}
                icon={el.icon}
                label={el.label}
                navigateTo={el.navigateTo}
                toScreen={el.toScreen} />
        );
    });
};

const DrawerContent = (props) => {
    // =============== Language ===============
    const { t } = useTranslation();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={homeStyles.drawerContent}>
                    <View style={homeStyles.drawerUserInfoSection}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: PADDING.p00, marginBottom: PADDING.p01, marginLeft: PADDING.p07 }}>
                            <View style={{ marginTop: 5 }}>
                                <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={require('./assets/img/avatar.png')} />
                            </View>
                            <View style={{ marginLeft: PADDING.p01, flexDirection: 'column' }}>
                                <Title style={homeStyles.drawerTitle}>Cynthia Kamba</Title>
                                <Text>{t('passenger')}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={homeStyles.drawerSection}>
                        <View style={{ marginLeft: PADDING.p01, marginBottom: PADDING.p03 }}>
                            <Text style={{ fontSize: 11 }}>{t('my_position')}</Text>
                            <Title style={homeStyles.drawerTitle}>Silikin Village</Title>
                        </View>
                        <DrawerItems />
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;