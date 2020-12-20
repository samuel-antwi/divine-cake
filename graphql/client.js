import { GraphQLClient } from 'graphql-request';

const GRAPHCMS_URL = process.env.NEXT_PUBLIC_GRAPHCMS_URL;

const graphcms = new GraphQLClient(GRAPHCMS_URL);
// 'https://api-eu-central-1.graphcms.com/v2/ckiujxuve6q5f01yyc48z5z38/master'

export default graphcms;
