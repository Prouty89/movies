const server = require('./server')
//or import { server } from './server'

const port = 8000;
server.listen(port, () => console.log(`\n API on port ${port} \n`));

