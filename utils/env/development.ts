export default {
    port: process.env.PORT || 3000,
    dbUrl: process.env.MONGO_URL || "mongodb://localhost:27017/scout-management-app",
}