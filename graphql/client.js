import { GraphQLClient } from 'graphql-request';

const GRAPHCMS_URL = process.env.NEXT_PUBLIC_GRAPHCMS_URL;
const MUTATION_TOKEN = process.env.NEXT_PUBLIC_GRAPHCMS_MUTATION_TOKEN;
const graphcms = new GraphQLClient(GRAPHCMS_URL, {
  headers: {
    authorization: `Bearer ${MUTATION_TOKEN}`,
  },
});
export default graphcms;
