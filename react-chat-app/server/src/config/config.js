export const env = {
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    URI: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommercedb',
    PORT: process.env.PORT || 4000,
}