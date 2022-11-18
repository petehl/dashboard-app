/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$':
            '<rootDir>/node_modules/jest-css-modules',
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
};
