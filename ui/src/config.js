const config = {
  apiUrl:
    process.env.NODE_ENV == "dev"
      ? "http://localhost:8080"
      : "https://pk-simplescheduler.herokuapp.com"
};

export default config;
