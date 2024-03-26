export default {
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "\\.(css|sass)$": "identity-obj-proxy",
        // "^.+\\.css$": "jest-transform-stub", // Use a transform stub for CSS files
        // "testEnvironment": "jsdom"
    },
};

