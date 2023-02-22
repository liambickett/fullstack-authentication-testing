import { cookieKeysDev, googleKeysDev, mongoURIDev } from './dev.js';
import { cookieKey, googleKeys, mongoURI } from './prod.js';

export function useKeys() {
  if (process.env.NODE_ENV === 'production') {
    return {
      googleKeys: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
      },
      mongoURI: process.env.MONGO_URI,
      cookieKey: process.env.COOKIE_KEY,
    };
  } else {
    return {
      googleKeys: googleKeysDev,
      mongoURI: mongoURIDev,
      cookieKey: cookieKeysDev,
    };
  }
}
