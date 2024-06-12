module.exports = {
    "transform": {
      "^.+\\.(ts|tsx|js|jsx|mjs)$": [
        "babel-jest" 
      ]
    },
    transformIgnorePatterns: ['/node_modules/(?!(@ag-grid-community|@ag-grid-enterprise)/)']
   }