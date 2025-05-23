import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    Switch,
    ActivityIndicator,
} from 'react-native';
import styles from './Style';
import SvgComponent from '../svg';
import { ApiCall } from '../../service/api/apiModalcall';
import { modListingArr } from './Function';
import { ImageName } from '../../enums';
import BackArrow from '../svg/arrowSvg';

const ProfileScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [activeTab, setActiveTab] = useState('Applications');
    const [listArrData, setListArrData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listApiCall();
    }, []);

    useEffect(() => {
        if (searchText.trim() === '') {
            setFilteredData(listArrData);
        } else {
            const filtered = listArrData.filter(item =>
                item.app_name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [searchText, listArrData]);

    // here list api  call
    const listApiCall = async () => {
        try {
            setLoading(true);
            const reqData = { "kid_id": 378 };
            const response = await ApiCall("listApi", reqData);
            if (response.success) {
                let modifyArrData = modListingArr(response.data.app_list);
                setListArrData(modifyArrData);
                setFilteredData(modifyArrData);
            } else {
                console.log("API call failed:", response.message);
            }
        } catch (error) {
            console.error("API call error:", error);
        } finally {
            setLoading(false);
        }
    };

    const toggleApp = async (appId, currentStatus) => {
        const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
        // Update the main data array
        const updatedData = listArrData.map(item => {
            if (item.app_id === appId) {
                return { ...item, status: newStatus };
            }
            return item;
        });
        setListArrData(updatedData);
        const updatedFilteredData = filteredData.map(item => {
            if (item.app_id === appId) {
                return { ...item, status: newStatus };
            }
            return item;
        });
        setFilteredData(updatedFilteredData);
    };

    const renderAppItem = ({ item, index }) => (
        <View style={styles.appItem}>
            <View style={styles.appInfo}>
                <Image
                    source={{ uri: item.app_icon }}
                    style={styles.appIconImage}
                />
                <View style={styles.appDetails}>
                    <Text style={styles.appName} numberOfLines={2}>
                        {item.app_name}
                    </Text>
                    <Text style={styles.appPackage} numberOfLines={1}>
                        {item.app_package_name}
                    </Text>
                </View>
            </View>
            <Switch
                value={item.status === 'Active'}
                onValueChange={() => toggleApp(item.app_id, item.status)}
                trackColor={{ false: '#E0E0E0', true: '#9bdfb6' }}
                thumbColor={item.status === 'Active' ? '#48bd77' : '#f4f3f4'}
                ios_backgroundColor="#E0E0E0"
            />
        </View>
    );

    const renderEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
                {searchText ? 'No apps found matching your search' : 'No apps available'}
            </Text>
        </View>
    );

    const renderTabContent = () => {
        if (activeTab === 'Applications') {
            return (
                <View style={styles.applicationsContainer}>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            value={searchText}
                            onChangeText={setSearchText}
                            placeholderTextColor="#A0A0A0"
                        />
                        <TouchableOpacity onPress={() => setSearchText(searchText)}>
                            <SvgComponent svgName={"search"} width={16} height={16} strokeColor={'#A0A0A0'} />
                        </TouchableOpacity>
                    </View>

                    {loading ? (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large" color="#00B894" />
                            <Text style={styles.loadingText}>Loading apps...</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={filteredData}
                            renderItem={renderAppItem}
                            keyExtractor={(item) => item.app_id.toString()}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.flatListContainer}
                            ListEmptyComponent={renderEmptyComponent}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            refreshing={loading}
                            onRefresh={listApiCall}
                        />
                    )}
                </View>
            );
        } else {
            return (
                <View style={styles.noDataContainer}>
                    <Text style={styles.noDataText}>No data found</Text>
                </View>
            );
        }
    };


    const tabSec = () => {
        return (
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Applications' && styles.activeTab
                    ]}
                    onPress={() => setActiveTab('Applications')}
                >
                    <Text style={styles.tabText}> Applications</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Settings' && styles.activeTab
                    ]}
                    onPress={() => setActiveTab('Settings')}
                >
                    <Text style={styles.tabText}>Settings</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.topSec}>
                    <TouchableOpacity style={styles.backButton}>
                        <SvgComponent svgName={"arrow"} width={20} height={20} fill={"#ffffff"} />
                    </TouchableOpacity>
                    <View style={styles.profileSection}>
                        <View style={styles.profileImageContainer}>
                            <Image source={ImageName.PROFILE_IMG} style={{ height: 70, width: 70, resizeMode: 'cover' }} />
                        </View>
                        <Text style={styles.profileName}>Suvojit</Text>
                        <View style={styles.connectedBadge}>
                            <Text style={styles.connectedText}>Connected</Text>
                            <View style={styles.connectedIcon}>
                                <SvgComponent svgName={"tick"} width={14} height={14} strokeColor={'#fff'} />
                            </View>
                        </View>
                    </View>
                </View>

                {tabSec()}
            </View>
            <View style={styles.content}>
                {renderTabContent()}
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;