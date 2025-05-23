import { Dimensions, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        height: Dimensions.height
    },

    header: {
        backgroundColor: '#48bd77',
        paddingTop: 10,
        paddingBottom: 0,
    },

    topSec: {
        marginTop: 15
    },

    backButton: {
        position: 'absolute',
        top: 15,
        left: 15,
        zIndex: 1,
    },

    profileSection: {
        alignItems: 'center',
        paddingVertical: 20,
    },

    profileImageContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },

    profileEmoji: {
        fontSize: 40,
    },

    profileName: {
        fontSize: 24,
        fontWeight: 'semibold',
        color: '#ffffff',
        marginBottom: 8,
    },

    connectedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 16,
        gap: 8,
    },

    connectedText: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '500',
    },

    tabContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        padding: 4,
    },

    tab: {
        flex: 1,
        alignItems: 'center',
    },

    activeTab: {
        borderBottomColor: "#fff",
        borderBottomWidth: 4,
        marginBottom: -4
    },

    tabText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
    },

    activeTabText: {
        color: '#ffffff',
        fontWeight: '600',
    },

    content: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
    },


    searchIcon: {
        marginRight: 10,
    },


    appsList: {
        flex: 1,
        paddingHorizontal: 20,
    },



    appIcon: {
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },

    appIconText: {
        fontSize: 20,
    },




    applicationsContainer: {
        flex: 1,

    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        marginHorizontal: 20,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#e6e6e6'
    },

    searchInput: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
    },

    flatListContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    appItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        backgroundColor: 'white',
    },

    appInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 15,
    },

    appIconImage: {
        width: 45,
        height: 45,
        borderRadius: 8,
        marginRight: 15,
        backgroundColor: '#f0f0f0',
    },

    appDetails: {
        flex: 1,
    },

    appName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 2,
    },

    appPackage: {
        fontSize: 12,
        color: '#888',
        marginTop: 2,
    },

    separator: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginLeft: 75,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
    },

    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
    },

    emptyText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        lineHeight: 24,
    },

    connectedIcon: {
        backgroundColor: "#48bd77",
        height: 20,
        width: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    noDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
    },

    noDataText: {
        fontSize: 16,
        color: '#888',
        fontWeight: '500',
    },




})
export default styles;