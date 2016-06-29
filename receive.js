var Util = require('util')
var read = process.stdin.read()
if (read == null) {
  process.stdout.write('pass')
}
else {
  process.stdout.write(Util.inspect(read))
}
