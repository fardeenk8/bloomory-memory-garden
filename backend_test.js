import axios from 'axios';
import assert from 'assert';

// Base URL for API requests
const API_URL = 'http://localhost:8001/api';

// Test data
const testUsers = {
  basic: {
    email: 'basic.user@example.com',
    password: 'Password123',
    firstName: 'Basic',
    lastName: 'User',
    userType: 'basic'
  },
  personal: {
    email: 'personal.user@example.com',
    password: 'Password123',
    firstName: 'Personal',
    lastName: 'User',
    userType: 'personal'
  },
  partner: {
    email: 'partner.user@example.com',
    password: 'Password123',
    firstName: 'Partner',
    lastName: 'User',
    userType: 'partner',
    companyName: 'Partner Company',
    businessType: 'studio',
    phone: '+1234567890'
  }
};

// Store tokens for authenticated requests
const tokens = {};

// Helper function to log test results
function logResult(testName, success, details = '') {
  console.log(`${success ? '✅' : '❌'} ${testName} ${details ? ': ' + details : ''}`);
}

// Helper function for making API requests
async function apiRequest(method, endpoint, data = null, token = null) {
  try {
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios({
      method,
      url: `${API_URL}${endpoint}`,
      data,
      headers
    });

    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      status: error.response?.status,
      data: error.response?.data,
      error: error.message
    };
  }
}

// Test health check endpoint
async function testHealthCheck() {
  try {
    const response = await apiRequest('get', '/health');
    assert(response.success, 'Health check failed');
    assert(response.data.status === 'success', 'Health check status is not success');
    logResult('Health Check', true);
    return true;
  } catch (error) {
    logResult('Health Check', false, error.message);
    return false;
  }
}

// Test user registration
async function testUserRegistration(userType) {
  try {
    const userData = testUsers[userType];
    const response = await apiRequest('post', '/auth/register', userData);
    
    assert(response.success, `${userType} user registration failed: ${JSON.stringify(response.data)}`);
    assert(response.data.success, `${userType} user registration response indicates failure`);
    assert(response.data.data.user.email === userData.email, 'Email in response does not match');
    assert(response.data.data.user.userType === userData.userType, 'User type in response does not match');
    assert(response.data.data.token, 'Token not provided in response');
    
    // Store token for later use
    tokens[userType] = response.data.data.token;
    
    // Check for email preview URL
    if (response.data.data.emailPreview) {
      console.log(`📧 ${userType} user welcome email preview: ${response.data.data.emailPreview}`);
    }
    
    logResult(`${userType} User Registration`, true);
    return true;
  } catch (error) {
    logResult(`${userType} User Registration`, false, error.message);
    return false;
  }
}

// Test user login
async function testUserLogin(userType) {
  try {
    const userData = testUsers[userType];
    const response = await apiRequest('post', '/auth/login', {
      email: userData.email,
      password: userData.password
    });
    
    assert(response.success, `${userType} user login failed: ${JSON.stringify(response.data)}`);
    assert(response.data.success, `${userType} user login response indicates failure`);
    assert(response.data.data.user.email === userData.email, 'Email in response does not match');
    assert(response.data.data.token, 'Token not provided in response');
    
    // Update token
    tokens[userType] = response.data.data.token;
    
    logResult(`${userType} User Login`, true);
    return true;
  } catch (error) {
    logResult(`${userType} User Login`, false, error.message);
    return false;
  }
}

// Test get current user (protected route)
async function testGetCurrentUser(userType) {
  try {
    const token = tokens[userType];
    assert(token, `No token available for ${userType} user`);
    
    const response = await apiRequest('get', '/auth/me', null, token);
    
    assert(response.success, `Get current user failed for ${userType}: ${JSON.stringify(response.data)}`);
    assert(response.data.success, `Get current user response indicates failure for ${userType}`);
    assert(response.data.data.user.email === testUsers[userType].email, 'Email in response does not match');
    
    logResult(`Get Current User (${userType})`, true);
    return true;
  } catch (error) {
    logResult(`Get Current User (${userType})`, false, error.message);
    return false;
  }
}

// Test newsletter subscription
async function testNewsletterSubscribe() {
  try {
    const email = 'newsletter.test@example.com';
    const response = await apiRequest('post', '/newsletter/subscribe', {
      email,
      source: 'homepage'
    });
    
    assert(response.success, `Newsletter subscription failed: ${JSON.stringify(response.data)}`);
    assert(response.data.success, 'Newsletter subscription response indicates failure');
    
    // Check for email preview URL
    if (response.data.data.emailPreview) {
      console.log(`📧 Newsletter confirmation email preview: ${response.data.data.emailPreview}`);
    }
    
    logResult('Newsletter Subscription', true);
    return true;
  } catch (error) {
    logResult('Newsletter Subscription', false, error.message);
    return false;
  }
}

// Test newsletter unsubscribe
async function testNewsletterUnsubscribe() {
  try {
    const email = 'newsletter.test@example.com';
    const response = await apiRequest('post', '/newsletter/unsubscribe', { email });
    
    assert(response.success, `Newsletter unsubscription failed: ${JSON.stringify(response.data)}`);
    assert(response.data.success, 'Newsletter unsubscription response indicates failure');
    
    logResult('Newsletter Unsubscription', true);
    return true;
  } catch (error) {
    logResult('Newsletter Unsubscription', false, error.message);
    return false;
  }
}

// Test contact form submission
async function testContactFormSubmission() {
  try {
    const contactData = {
      fullName: 'Test Contact',
      email: 'contact.test@example.com',
      type: 'general',
      subject: 'Test Contact Form',
      message: 'This is a test message for the contact form submission. Please ignore.'
    };
    
    const response = await apiRequest('post', '/contact/submit', contactData);
    
    assert(response.success, `Contact form submission failed: ${JSON.stringify(response.data)}`);
    assert(response.data.success, 'Contact form submission response indicates failure');
    
    // Check for email preview URLs
    if (response.data.data.emailPreviews) {
      if (response.data.data.emailPreviews.userConfirmation) {
        console.log(`📧 Contact confirmation email preview: ${response.data.data.emailPreviews.userConfirmation}`);
      }
      if (response.data.data.emailPreviews.adminNotification) {
        console.log(`📧 Admin notification email preview: ${response.data.data.emailPreviews.adminNotification}`);
      }
    }
    
    logResult('Contact Form Submission', true);
    return true;
  } catch (error) {
    logResult('Contact Form Submission', false, error.message);
    return false;
  }
}

// Run all tests
async function runTests() {
  console.log('🧪 Starting BloomoryAI Backend API Tests...\n');
  
  // Health check
  await testHealthCheck();
  
  console.log('\n📝 User Registration & Authentication Tests:');
  // Test user registration for different user types
  await testUserRegistration('basic');
  await testUserRegistration('personal');
  await testUserRegistration('partner');
  
  // Test user login
  await testUserLogin('basic');
  await testUserLogin('personal');
  await testUserLogin('partner');
  
  // Test protected routes
  await testGetCurrentUser('basic');
  await testGetCurrentUser('personal');
  await testGetCurrentUser('partner');
  
  console.log('\n📧 Newsletter Tests:');
  // Test newsletter subscription and unsubscription
  await testNewsletterSubscribe();
  await testNewsletterUnsubscribe();
  
  console.log('\n📞 Contact Form Tests:');
  // Test contact form submission
  await testContactFormSubmission();
  
  console.log('\n🏁 All tests completed!');
}

// Run the tests
runTests();
