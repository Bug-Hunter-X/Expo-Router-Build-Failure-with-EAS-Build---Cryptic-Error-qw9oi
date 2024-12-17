// Check your expo-router configuration in app.json or app.config.js
// Ensure the routes are correctly defined and there are no typos or inconsistencies.
// Also double check that all required packages are installed and linked correctly.
expo install expo-router react-native-web 
// Clean and rebuild the project.
expo prebuild --clean
expo build:ios --release 
//If using Android 
expo build:android --release 