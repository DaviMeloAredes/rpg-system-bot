import { Command } from '../../../interfaces/Command';
import fg from 'fast-glob';

export default async (): Promise<Command[]> => {
  // getting files directories from events folder
  const files = await fg('src/handlers/cmdHandler/commands/**/**.ts');
  // array of file's properties 
  const propsArr: Command[] = [];

  for (let i = 0; i < files.length; i++) {
    let file = files[i];

    // file properties (id, run, etc.)
    const props = await import(`../../../../${file}`);

    // if any of the properties is undefined
    if (!props) throw new Error('undefined_props');

    propsArr.push(props);
  }

  return propsArr;
}