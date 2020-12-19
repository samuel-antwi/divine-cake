import { GraphQLClient } from 'graphql-request';

const GRAPHCMS_URL = process.env.NEXT_PUBLIC_GRAPHCMS_URL;
const grapgcms = new GraphQLClient(GRAPHCMS_URL);

export default grapgcms;
