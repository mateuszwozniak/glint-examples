module.exports = {
    assetsDir: 'assets',
    outputDir: 'output',
    manifest: 'output/manifest.json',
    packages: [
        {
            name: 'base',
            final: true,
            files: [
                'base.css',
                'base.js'
            ]
        }
    ]
};