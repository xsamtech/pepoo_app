/**
 * @author Xanders
 * @see https://team.xsamtech.com/xanderssamoth
 */
import React from 'react';
import { Linking, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../tools/constants';

const FooterComponent = () => {
  // =============== Language ===============
  const { t } = useTranslation();

  // =============== Get data ===============
  const d = new Date();
  let year = d.getFullYear();

  return (
    <View>
      {/* Copyright */}
      <Text style={{ textAlign: 'center', color: COLORS.dark_secondary }}>{t('copyright', { year })}</Text>
      <Text style={{ textAlign: 'center', color: COLORS.dark_secondary }}>Designed by<Text style={{ color: COLORS.primary }} onPress={() => Linking.openURL('https://xsamtech.com')}> Xsam Technologies</Text></Text>
    </View>
  );
};

export default FooterComponent;