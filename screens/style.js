/**
 * @author Xanders
 * @see https://team.xsamtech.com/xanderssamoth
 */
import { Dimensions, StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
    // Miscellaneous
    view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    headingArea: {
        marginTop: 7,
        marginBottom: 12,
        paddingHorizontal: 10
    },

    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 7
    },

    headingText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 7
    },

    headingImageWrapper: {
        width: 41,
        height: 41,
        marginRight: 10,
        borderRadius: 41 / 2,
        overflow: 'hidden'
    },

    headingImage: {
        width: 41,
        height: 41
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    // Modal
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    modalContent: {
        width: '75%',
        maxHeight: '80%',
    },

    modalHeader: {
        paddingVertical: 15,
    },

    modalTitle: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 0.3,
    },

    modalBodyListItem: {
        marginHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
    },

    modalButton: {
        alignItems: 'center',
        padding: 10,
    },

    modalClose: {
        position: 'absolute',
        top: 1,
        right: 0,
        padding: 10,
    },

    // Card
    cardEmpty: {
        width: '100%',
        padding: '10',
    },

    cardEmptyTitle: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '700',
    },

    cardEmptyText: {
        fontSize: 14,
    },

    cardEmptySettings: {
        flexShrink: 1,
        width: '100%',
        borderRadius: 16,
        marginTop: 7,
        marginBottom: 20,
        elevation: 3
    },

    cardTitleSettings: {
        marginLeft: 20,
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: 0.3,
    },

    cardLabelSettings: {
        fontSize: 16
    },

    cardLabelValueSettings: {
        fontSize: 14
    },

    cardLabelDescriptionSettings: {
        fontSize: 12
    },

    cardButton: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 19,
    },

    paragraph: {
        fontSize: 14,
        fontWeight: '800'
    },

    // Floating button
    floatingButton: {
        alignItems: 'center',
        position: 'absolute',
        right: 30,
        bottom: 40,
        zIndex: 999,
        width: 60,
        height: 60,
        paddingTop: 7,
        borderRadius: 100 / 2
    },

    // Custom header
    headerBanner: {
        flexShrink: 1,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 11.5,
        paddingLeft: 7,
        paddingRight: 10,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // Shadow for Android
        elevation: 5,
        zIndex: 999
    },

    headerAvatar: {
        width: 41,
        height: 41,
        borderRadius: 41 / 2,
        overflow: 'hidden'
    },

    // Authentication
    authlogo: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30
    },

    authTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },

    authTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16
    },

    authText: {
        fontSize: 16,
    },

    authInput: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        marginBottom: 10,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
    },

    authTextarea: {
        height: 70,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        marginBottom: 10,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderRadius: 5
    },

    authButton: {
        paddingVertical: 4,
        paddingHorizontal: 0,
        marginTop: 10,
    },

    authButtonText: {
        fontSize: 16,
        textTransform: 'uppercase',
    },

    // Drawer
    drawerTitle: {
        fontWeight: '800'
    },

    drawerTitleSettings: {
        fontWeight: '500'
    },

    drawerSection: {
        width: 'auto'
    },

    drawerButton: {
        width: 140,
        margin: 'auto'
    },

    // Toggle language
    langView: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    langButton: {
        width: '100%',
        padding: 10,
        textAlign: 'center',
    },

    button: {
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 10
    },

    buttonReverse: {
        marginBottom: 10,
        paddingVertical: 7,
        paddingHorizontal: 10
    },

    buttonText: {
        fontSize: 14,
        textAlign: 'center'
    },

    buttonTextReverse: {
        fontSize: 14,
        textAlign: 'center'
    },

    buttonTextReverse: {
        fontSize: 14,
        textAlign: 'center'
    },

    // Horizontal scrolling badges
    scrollableBadges: {
        marginTop: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
        whiteSpace: 'nowrap',
    },

    scrollableList: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    scrollableListItem: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 7,
        marginRight: 15,
        borderRadius: 20
    },

    listTitleArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
    },

    listTitle: {
        fontWeight: '700',
        textTransform: 'uppercase'
    },

    // Home styles
    homeScrollableListItem: {
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 170,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginRight: 15,
        elevation: 1
    },

    homeTitleOne: {
        fontSize: 16,
        fontWeight: '800',
    },

    homeParagraph: {
        marginTop: 4,
        fontSize: 12
    },

    homeThumbnail: {
        width: 110,
        height: 150,
        borderRadius: 5,
        marginBottom: 4
    },

    // Category filter badge
    categoryBadge: {
        marginRight: 7,
        paddingTop: 3,
        paddingBottom: 4,
        paddingHorizontal: 10,
        borderRadius: 10
    },

    categoryBadgeText: {
        fontSize: 14,
        fontWeight: '800',
    },

    categoryBadgeSelected: {
        marginRight: 7,
        paddingTop: 3,
        paddingBottom: 4,
        paddingHorizontal: 10,
        borderRadius: 10
    },

    categoryBadgeTextSelected: {
        fontSize: 14,
        fontWeight: '800',
    },

    // Search
    searchContainer: {
        paddingTop: 15,
        flexDirection: 'column',
        alignItems: 'center'
    },

    searchInput: {
        flexDirection: 'row'
    },

    searchInputText: {
        width: Dimensions.get('window').width - 100,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        marginVertical: 15,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderEndWidth: 0,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        fontSize: 16
    },

    searchInputSubmit: {
        marginVertical: 15,
        paddingTop: 15,
        paddingHorizontal: 14,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
    },

    searchResult: {
        flexShrink: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width - 30,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        marginBottom: 0,
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    searchResultImage: {
        width: 80,
        height: 100
    },

    searchResultTitle: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: '700',
    },

    searchResultText: {
        marginBottom: 10,
        fontSize: 14
    },

    searchResultLink: {
        marginBottom: 10,
        fontSize: 14
    },

    // Notepad
    noteTitle: {
        marginVertical: 10,
        fontSize: 18,
        textAlign: 'center',
    },

    noteForm: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    noteInput: {
        width: Dimensions.get('window').width - 20,
        borderColor: '#ddd',
        borderWidth: 1,
        borderBottomWidth: 0,
        paddingHorizontal: 14,
        fontSize: 15
    },

    noteSubmit: {
        width: Dimensions.get('window').width - 20,
        paddingVertical: 12,
        paddingHorizontal: 16
    },

    noteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width - 33,
        marginHorizontal: 20,
        paddingVertical: 10,
        // paddingRight: 20,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },

    noteWorkTitle: {
        width: Dimensions.get('window').width - 70,
        marginBottom: 10,
        fontSize: 14,
        fontWeight: '700'
    },

    noteTextContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        padding: 8,
        borderRadius: 4
    },

    noteText: {
        width: Dimensions.get('window').width - 70,
        fontSize: 16
    },

    noteSeeTextButton: {
        width: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        marginTop: 10,
        paddingTop: 3,
        paddingBottom: 4,
        paddingHorizontal: 8,
        borderRadius: 4
    },

    noteSeeText: {
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'center'
    },

    noteEditButton: {
        position: 'absolute',
        right: 0,
        top: 40,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        padding: 8,
        borderRadius: 4
    },

    noteDeleteButton: {
        position: 'absolute',
        right: 3,
        top: 15,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        padding: 8,
        borderRadius: 4
    },

    noteButtonIcon: {
        fontSize: 21,
    },
});

export default homeStyles;