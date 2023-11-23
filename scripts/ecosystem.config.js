module.exports = {
    apps : [
        {
            name: 'Glowflow Frontend Service',
            cwd: '../src/glowflow-frontend-service',
            script: 'npm run dev',
            instances: 1,
            watch: false,
            env: {
                PORT: 5173
            },
        },
        {
            name: 'Glowflow WS Service',
            cwd: '../src/glowflow-ws-service',
            script: 'node index.js',
            instances: 1,
            watch: true,
            ignore_watch: ['node_modules'],
            env: {
                PORT: 8080
            },
        },
    ]
}