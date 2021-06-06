import config from './common/config';
import server from './app';

server.listen(config.PORT, () =>
  console.log(`App is running on http://localhost:${config.PORT}`)
);
