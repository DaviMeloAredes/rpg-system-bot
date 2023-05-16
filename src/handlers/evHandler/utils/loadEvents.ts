import extClient from '../../../ExtendedClient';
import { Event } from '../../../interfaces/Event';

const { client } = extClient;

export default async (files: Event[]) => {
  files.forEach((f) => {
    extClient.client.on(`${f.id}`, (args: unknown) => {
      f.run(args);
    });
  });
}