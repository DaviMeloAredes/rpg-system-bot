import logger from '../../../utils/logger/logger';
import readFolder from './readFolder';
import watchCommands from './watchCommands';

export default async () => {
  const path = 'src/handlers/cmdHandler/commands/**/**.ts';
    
  // getting the files properties
  await readFolder()
    .then(async (files) => {
      // watching the commands folder
      await watchCommands(files)
        .catch((e) => logger.error(e, 'watchCmds-loadCommands.ts'));
    })
    .catch((e: Error) => logger.error(e, 'loadCommands.ts'));
}