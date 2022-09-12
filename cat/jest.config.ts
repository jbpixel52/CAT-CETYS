export default {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    globals: {
      "ts-jest": {
        tsconfig: "./tsconfig.jest.json",
      },
    },
      moduleNameMapper: {
      "@/(.*)": "<rootDir>/src/$1",
    },
  };