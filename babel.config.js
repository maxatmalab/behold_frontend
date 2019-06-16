module.exports = {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
    env: {
        production: {
            plugins: ['react-native-paper/babel'],
        },
    },
    retainLines: true,
};
