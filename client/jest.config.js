module.exports = async () =>  {
  return {
    verbose: true,
    "setupFilesAfterEnv": [
     "<rootDir>/jest.setup.js"
    ]
  }
}