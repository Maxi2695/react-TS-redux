const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@application': resolvePath('./src/application/'),
            '@types': resolvePath('./src/types'),
            '@utils': resolvePath('./src/utils'),
            '@domain': resolvePath('./src/domain'),


        }
    },
}
