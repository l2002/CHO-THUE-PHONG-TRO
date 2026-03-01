const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  // process.env.DB_NAME,
  // process.env.DB_USERNAME,
  // process.env.DB_PASSWORD,
  process.env.DATABASE_URL,
  {
    // host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    protocol: process.env.DB_DIALECT,
    logging: false,

    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Neon connected");
  } catch (error) {
    console.error("❌ DB error:", error);
    process.exit(1);
  }
};

export default connectDB;
