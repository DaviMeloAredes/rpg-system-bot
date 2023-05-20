import readFolder from './utils/readFolder';
import loadEvents from './utils/loadEvents';
import logger from '../../utils/logger/logger';

export class EventHandler {
  public async loadEvents () {
    const path = 'src/handlers/evHandler/events/**/**.ts';
    
    await readFolder(path)
      .then(async (files) => {
        await loadEvents(files);
      })
      .catch((e: Error) => {
        switch (e.message) {
          case 'undefined_props':
            logger.error(e, 'eventHandler');
            break;
        }
      });
  }
}