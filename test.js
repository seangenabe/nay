var tap = require('tap')
var ChildProcess = require('child_process')

tap.ok(require('./') === undefined, 'export')

tap.test('cli', function(t) {
  ChildProcess.exec(
    "cat receive.js | node cli | node receive.js",
    function(err, stdout, stderr) {
      t.ok(err == null)
      t.ok(stdout === 'pass')
      t.end()
    }
  )
})
