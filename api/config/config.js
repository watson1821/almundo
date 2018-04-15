var config = {
    production: {
        port: 8888,
    },
    default: {
        port: 8889
    }
}

exports.get = function get(env) {
    return config[env] || config.default;
}