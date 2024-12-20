import Client from 'shopify-buy';
import { ENV } from './env';

const client = Client.buildClient({
  domain: ENV.SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: ENV.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  apiVersion: '2023-01'
});

export default client; 