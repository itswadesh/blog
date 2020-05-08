// process.env.api_url comes from rollup.config.js line 30,31
const server_ip = 'http://139.59.42.129:3330'
const www_ip = 'https://www.2lessons.info'
const sitemap_url = 'http://misiki.s3-website-eu-west-1.amazonaws.com/images'
const api_url =
  process.env.NODE_ENV === 'production'
    ? server_ip
    : process.env.api_url || server_ip
const host =
  process.env.NODE_ENV === 'production' ? www_ip : process.env.api_url || www_ip
const CDN = 'https://ik.imagekit.io/3wzatecz51w3i/litekart'
export const typingTimeout = 0 // After this delay the search api will be fired
const currency = { symbol: '$', code: 'USD' }
const tokenExpiry = 60 * 60 * 24 * 365 // Login validity in seconds
const ANALYTICS_TRACKING_ID = 'UA-49421899-10'
const sorts = [
  { name: 'Relevance', val: null },
  { name: 'Whats New', val: '-published_at' },
  { name: 'Price low to high', val: 'price_cents' },
  { name: 'Price high to low', val: '-price_cents' },
]
export {
  sorts,
  CDN,
  currency,
  tokenExpiry,
  api_url,
  sitemap_url,
  host,
  ANALYTICS_TRACKING_ID,
}
