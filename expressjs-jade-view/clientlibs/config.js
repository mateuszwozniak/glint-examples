module.exports = {
    assetsDir: 'assets',
    outputDir: 'output',
    manifest: 'output/manifest.json',
    packages: [
        {
            name: 'core-libs',
            final: false,
            files: [
                'core/core.css',
                'core/core.js'
            ]
        },
        {
            name: 'app',
            final: true,
            require: ['core-libs'],
            files: [
                'app/app.css',
                'app/app.js'
            ]
        }
    ]
};