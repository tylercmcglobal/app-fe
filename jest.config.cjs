module.exports = {
    root: ["test"],
    preset: 'ts-jest',
    setupFilesAfterEnv: ['./jest.setup.ts'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    collectCoverageFrom: [
      "**/src/pages/**/*.(t|j)sx",
      "!**/node_modules/**",
      "!**/test/**"
    ],
    collectCoverage: true,
    coverageDirectory: "../coverage",
  };
  