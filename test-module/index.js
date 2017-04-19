module.exports = function () {
  console.log('test-module');
  console.log('direct dependency (test-transitive-module):', require.resolve('test-transitive-module'));
  console.log('transitive dependency (test-transitive-twice-module):', require.resolve('test-transitive-twice-module'));
}
