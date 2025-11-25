import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function Login() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      
      // Simulate loading
      setTimeout(() => {
        setLoading(false);
        // Navigate directly to Home without verification
        (navigation as any).replace('Home');
      }, 800);

    } catch (error: any) {
      setLoading(false);
      Alert.alert('Error', 'Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A1B8E" />
      
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          {/* Logo Icon - Hanger with Cloth */}
          <View style={styles.logoIcon}>
            <View style={styles.hanger}>
              <View style={styles.hangerHook} />
              <View style={styles.hangerBar} />
            </View>
            <View style={styles.cloth} />
          </View>
        </View>

        <Text style={styles.appName}>DRAPER</Text>
        <Text style={styles.tagline}>Your Smart Wardrobe Assistant</Text>
      </View>

      {/* Welcome Section */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subtitle}>
          Sign in to access your digital wardrobe and get personalized outfit recommendations
        </Text>

        {/* Google Sign In Button */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator color="#4A1B8E" size="small" />
          ) : (
            <>
              <View style={styles.googleIcon}>
                <Text style={styles.googleIconText}>G</Text>
              </View>
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Terms & Privacy */}
        <Text style={styles.termsText}>
          By continuing, you agree to our{'\n'}
          <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerDot} />
        <View style={[styles.footerDot, styles.footerDotActive]} />
        <View style={styles.footerDot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A1B8E', // Deep purple from logo
  },
  header: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoIcon: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hanger: {
    width: 80,
    height: 40,
    position: 'relative',
  },
  hangerHook: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    alignSelf: 'center',
    marginBottom: -3,
  },
  hangerBar: {
    width: 80,
    height: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },
  cloth: {
    width: 60,
    height: 40,
    backgroundColor: '#C8A8E9', // Light purple from logo
    borderRadius: 8,
    marginTop: -5,
    alignSelf: 'center',
  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 4,
  },
  tagline: {
    fontSize: 14,
    color: '#C8A8E9',
    marginTop: 8,
    fontWeight: '500',
  },
  content: {
    flex: 0.6,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D1654',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B6B6B',
    lineHeight: 22,
    marginBottom: 40,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 24,
  },
  googleIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#4285F4',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  googleIconText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D1654',
  },
  termsText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    lineHeight: 18,
  },
  termsLink: {
    color: '#4A1B8E',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    gap: 8,
  },
  footerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
  },
  footerDotActive: {
    backgroundColor: '#4A1B8E',
    width: 24,
  },
});