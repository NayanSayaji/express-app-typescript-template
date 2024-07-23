import { validateENV } from './app/utils/validate-env';

import { startServer } from './app/app'

validateENV();

startServer();