import extClient from '../../../ExtendedClient';
import { Event } from '../../../interfaces/Event';

const { client } = extClient;

export default async (files: Event[]) => {
  // looping the files from events folder
  files.forEach((f) => {
    // setting up the events
    client.on(`${f.id}`, (args: unknown) => {
      f.run(args);
    });
  });
}