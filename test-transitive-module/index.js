module.exports = function () {
  console.log('test-transitive-module');
  console.log('direct dependency (test-transitive-twice-module):', require.resolve('test-transitive-twice-module'));
}
