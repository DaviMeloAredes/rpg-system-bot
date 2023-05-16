import extClient from './ExtendedClient';
import { EventHandler } from './handlers/evHandler/eventHandler';

const evSys = new EventHandler();

evSys.loadEvents();
extClient.loginOn();
