import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../../assets/rick.jpeg')}
				/>
			</View>

			<View style={styles.detailsContainer}>
				<View style={styles.details}>
					<Text style={styles.detailLabel}>School</Text>
					<Text style={styles.detailContent}>Codetrain</Text>
				</View>

				<View style={styles.details}>
					<Text style={styles.detailLabel}>School</Text>
					<Text style={styles.detailContent}>Codetrain</Text>
				</View>

				<View style={styles.details}>
					<Text style={styles.detailLabel}>School</Text>
					<Text style={styles.detailContent}>Codetrain</Text>
				</View>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Update Profile</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 25,
		marginHorizontal: 30,
	},
	imageContainer: {
		flex: 0.3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 100,
	},
	detailsContainer: {
		flex: 0.6,
	},
	buttonContainer: {
		flex: 0.1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: '100%',
		height: 50,
		backgroundColor: 'blue',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
	},
	line: {
		width: '100%',
		height: 2,
		backgroundColor: 'red',
	},
	details: {
		marginVertical: 5,
	},
	detailLabel: {
		color: '#bbb',
		fontSize: 17,
		marginBottom: 4,
	},
	detailContent: {
		fontSize: 22,
	},
});

export default ProfileScreen;
