const awsconfig = {
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    clientId: '4i1culcmuvnnfe8eenr74ejuns', // e.g. us-east-1:xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1', // e.g. us-east-1
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_zVmNFbCK9', // e.g. us-east-1_xxxxxx
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: 'YOUR_USER_POOL_WEB_CLIENT_ID', // e.g. xxxxxxxx
  },
};

export default awsconfig;
