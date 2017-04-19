module.exports = function () {
  console.log('direct dependency (test-app):', require.resolve('test-app'));
  console.log('transitive dependency (test-module):', require.resolve('test-module'));
  console.log('transitive twice dependency (test-transitive-module):', require.resolve('test-transitive-module'));
  console.log('transitive thrice dependency (test-transitive-twice-module):', require.resolve('test-transitive-twice-module'));
}
