import * as React from 'react';

import {
	StyleSheet,
	Text,
	View,
	Animated,
	FlatList,
	Dimensions,
	StatusBar,
	CameraRoll,
	PermissionsAndroid,
	Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const dividerWidth = 3;
const speed = 0.25;

const FlatList_ = Animated.createAnimatedComponent(FlatList);

const screens = [
	['#f46b45', '#eea849'],
	['#CCCCB2', '#757519'],
	['#2c3e50', '#3498db']
];

const images = [
	'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-12.jpg',
	'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-01.jpg',
	'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-02.jpg',
	'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-11.jpg',
	'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-10.jpg',
	'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-17.jpg',
	'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-24.jpg',
	'https://datarecovery.wondershare.com/uploads/cool-android-wallpaper-15.jpg'
];

export default class App extends React.Component<{}, { photos: Array<any> }> {
	scrollX = new Animated.Value(0);

	constructor(props: {}) {
		super(props);
		// this.getPhotos(100);

		this.state = {
			photos: []
		};
	}

	async getPermission() {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
				{
					title: 'External Storage Permission',
					message:
						'Need access to your storage. Only read permissions required.'
				}
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('granted');
			} else {
				console.log('denied');
			}
		} catch (err) {
			console.warn(err);
		}
	}

	getPhotos(num: number) {
		this.getPermission();

		CameraRoll.getPhotos({ first: num })
			.then(res => {
				this.setState({ photos: res.edges });
			})
			.catch(err => {
				console.warn(err);
			});
	}

	renderScreen(item: any, i: number) {
		const parallax = Math.abs(width * speed - width - dividerWidth);
		const totalWidth = width + dividerWidth;

		return (
			<View
				style={{
					flex: 1,
					zIndex: -i,
					flexDirection: 'row',
					overflow: 'hidden'
				}}
			>
				<Animated.View
					key={i}
					style={{
						backgroundColor: 'black',
						transform: [
							{
								translateX: this.scrollX.interpolate({
									inputRange: [
										(i - 1) * totalWidth,
										i * totalWidth,
										(i + 1) * totalWidth
									],
									outputRange: [0, 0, parallax],
									extrapolate: 'clamp'
								})
							}
						]
					}}
				>
					{true ? (
						<Image
							source={{ uri: item }}
							style={{ width, height }}
							resizeMode="cover"
						/>
					) : (
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							colors={item}
							style={{
								width: width,
								height: height,
								borderRightColor: 'black',
								borderStyle: 'solid',

								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Text>Screen {i}</Text>
						</LinearGradient>
					)}
				</Animated.View>
				<View
					style={{
						width: dividerWidth,
						height,
						backgroundColor: 'black'
					}}
				/>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container} pointerEvents="box-none">
				<StatusBar hidden />
				<FlatList_
					horizontal
					pagingEnabled
					scrollEventThrottle={1}
					showsHorizontalScrollIndicator={false}
					style={{ width: width + dividerWidth, height: height }}
					onScroll={Animated.event(
						[
							{
								nativeEvent: {
									contentOffset: { x: this.scrollX }
								}
							}
						],
						{ useNativeDriver: true }
					)}
					data={images}
					renderItem={({ item, index }) =>
						this.renderScreen(item, index)
					}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	}
});
