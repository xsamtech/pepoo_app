/**
 * @author Xanders
 * @see https://team.xsamtech.com/xanderssamoth
 */
import React, { useRef, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Button, Divider } from 'react-native-paper';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { COLORS, PADDING, TEXT_SIZE } from '../../tools/constants';
import FooterComponent from '../footer';
import TextBrand from '../../assets/img/logo-text.svg';
import homeStyles from '../style';

const HomeScreen = () => {
  // =============== Navigation ===============
  const navigation = useNavigation();
  // =============== Language ===============
  const { t } = useTranslation();
  // =============== Google Maps data ===============
  // Définir une référence pour la carte
  const mapRef = useRef(null);

  // Initialiser la région de la carte et les deltas (valeurs par défaut)
  const [region, setRegion] = useState({
    latitude: -4.3214221,
    longitude: 15.2754746,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008,
  });

  // Fonction de zoom avant
  const zoomIn = () => {
    const newLatitudeDelta = region.latitudeDelta * 0.5;  // Réduire de moitié
    const newLongitudeDelta = region.longitudeDelta * 0.5;  // Réduire de moitié

    // Mettre à jour la région avec les nouvelles valeurs
    const newRegion = {
      ...region,
      latitudeDelta: newLatitudeDelta,
      longitudeDelta: newLongitudeDelta,
    };

    // Appliquer la nouvelle région à la carte
    setRegion(newRegion);
    mapRef.current.animateToRegion(newRegion, 200);  // Animation de la carte
  };

  // Fonction de zoom arrière
  const zoomOut = () => {
    const newLatitudeDelta = region.latitudeDelta * 2;  // Augmenter de moitié
    const newLongitudeDelta = region.longitudeDelta * 2;  // Augmenter de moitié

    // Mettre à jour la région avec les nouvelles valeurs
    const newRegion = {
      ...region,
      latitudeDelta: newLatitudeDelta,
      longitudeDelta: newLongitudeDelta,
    };

    // Appliquer la nouvelle région à la carte
    setRegion(newRegion);
    mapRef.current.animateToRegion(newRegion, 200);  // Animation de la carte
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ padding: PADDING.p05 }} scrollEnabled={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
        {/* Open drawer */}
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name='menu' color={COLORS.black} style={{ fontSize: 28, marginVertical: 7 }} />
        </TouchableOpacity>

        {/* Brand / Title */}
        <View style={homeStyles.authlogo}>
          <TextBrand width={230} height={74} />
        </View>
        <Text style={homeStyles.noteTitle}>{t('welcome_description')}</Text>

        {/* Current position */}
        <Divider style={{ backgroundColor: COLORS.dark_secondary, marginVertical: PADDING.p03 }} />
        <Text style={[homeStyles.noteTitle, { fontWeight: '700', color: COLORS.purple, marginBottom: PADDING.p00 }]}>{t('my_current_position')}</Text>
        <TouchableHighlight style={homeStyles.categoryBadgeSelected}>
          <View style={homeStyles.categoryBadgeTextSelected}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase' }}>Silikin Village</Text>
            <Text style={{ textAlign: 'center' }}>Concession COTEX N° 63, Ave Colonel Mondjiba, Kinshasa</Text>
          </View>
        </TouchableHighlight>

        {/* Map view */}
        <View style={homeStyles.mapContainer}>
          <MapView ref={mapRef} provider={PROVIDER_GOOGLE} initialRegion={region} style={homeStyles.map}>
            <Marker coordinate={{ latitude: -4.3214221, longitude: 15.2754746 }} title="Silikin Village" description="Concession COTEX N° 63, Kinshasa" />
          </MapView>
          <View style={homeStyles.mapButtonsContainer}>
            <TouchableOpacity onPress={zoomIn} style={homeStyles.mapButton}>
              <Icon name='plus' color={COLORS.black} style={[homeStyles.mapButtonText, { fontSize: 19 }]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={zoomOut} style={homeStyles.mapButton}>
              <Icon name='minus' color={COLORS.black} style={[homeStyles.mapButtonText, { fontSize: 19 }]} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Submit */}
        <Button style={[homeStyles.authButton, { backgroundColor: COLORS.purple }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[homeStyles.authButtonText, { color: COLORS.white }]}>{t('give_destination')}</Text>
            <Icon name='arrow-right' color={COLORS.white} style={{ fontSize: TEXT_SIZE.normal, marginLeft: PADDING.p01 }} />
          </View>
        </Button>

        {/* Footer content */}
        <Divider style={{ backgroundColor: COLORS.dark_secondary, marginTop: PADDING.p12, marginBottom: PADDING.p05 }} />
        <FooterComponent />
      </ScrollView>
    </View>
  )
}

export default HomeScreen