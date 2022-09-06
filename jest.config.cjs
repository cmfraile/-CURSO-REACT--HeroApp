module.exports = {
    moduleNameMapper: {
        "^.+\\.(css|less|scss|sass)$": "babel-jest"
    },
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.ts']
    /*
    Puede servirte esta linea en caso de errores de importaciones de otras librerias externas. Pongo de ejemplo la importación de uuid:
    moduleNameMapper: {"^uuid$": require.resolve("uuid")}
    */
}