import * as sapper from '@sapper/app'
import { googleAnalytics } from './actions/ga.js'
import { ANALYTICS_TRACKING_ID } from './config.js'
sapper.start({
  target: document.querySelector('#sapper'),
})

if (ANALYTICS_TRACKING_ID) googleAnalytics(ANALYTICS_TRACKING_ID)
