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
      googleKeys: {
        client_id:
          '915666666210-ekebrkgpc79k1pp359is38333ltd24p6.apps.googleusercontent.com',
        client_secret: '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',
      },
      mongoURI:
        'mongodb+srv://server:pass@betabase.sm8furz.mongodb.net/?retryWrites=true&w=majority',
      cookieKey: 'k1k3jh128H@uh3123k%R2j123bnS9d3u91jsad92!ASDF3@',
    };
  }
}
