import { Command } from '../../../interfaces/Command';
import fg from 'fast-glob';

export default async (path: string): Promise<Command[]> => {
  // getting files directories from events folder
  const files = await fg(path);
  // array of file's properties 
  const propsArr: Command[] = [];

  for (let i = 0; i < files.length; i++) {
    let file = files[i];

    // file properties (id, run, etc.)
    const props = await import(`../../../../${file}`);

    if (!props) throw new Error('undefined_props');

    propsArr.push(props);
  }

  return propsArr;
}