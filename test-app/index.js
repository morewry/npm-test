module.exports = function () {
  console.log('test-app');
  console.log('direct dependency (test-module):', require.resolve('test-module'));
  console.log('transitive dependency (test-transitive-module):', require.resolve('test-transitive-module'));
  console.log('transitive twice dependency (test-transitive-twice-module):', require.resolve('test-transitive-twice-module'));
}
