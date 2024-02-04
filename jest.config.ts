module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Изменено с "node" на "jsdom"
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Для мокирования стилей
  },
};
