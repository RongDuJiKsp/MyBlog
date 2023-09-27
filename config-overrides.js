module.exports = function override(config) {
    config.ignoreWarnings = [/Failed to parse source map/];
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "stream": require.resolve("stream-browserify"),
        // "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        // "os": require.resolve("os-browserify"),
        "url": require.resolve("url"),
        // "constants": require.resolve("constants-browserify"),
        "path": require.resolve("path-browserify"),
        "buffer":require.resolve("buffer")
        // "crypto": require.resolve("crypto-browserify"),
    })
    config.resolve.fallback = fallback;
    const webpack = require("webpack");
    config.plugins.push(
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer']
        }),
        // new webpack.ProvidePlugin({
        //     process: 'process/browser'
        // })
    );
    return config;
}