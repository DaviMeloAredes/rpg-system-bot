import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const date = new Date();
const dateInfo = {
  fullD: date.getDate(),
  year: date.getFullYear(),
  month: date.getUTCMonth(),
  day: date.getUTCDate()
}

function writeLogFile (logs: string[]) {
  logs.forEach((l) => {
    fs.writeFileSync(
      `src/logs/log-${dateInfo.day}-${dateInfo.month}-${dateInfo.year}.txt`,
      `${l}\n`
    );
  });
}

class Logger {
  private logs: string[];

  constructor () {
    this.logs = [];
  }

  // normal log method, file specification is optional
  public log (msg: string, file?: string) {
    const logMsg = `[LOGGER] - ${date} | ${msg} | ${file || 'N/A'}`;

    console.log(logMsg);

    this.logs.push(logMsg);
    
    writeLogFile(this.logs);
  }

  // error log method
  public error (e: Error) {
    const logMsg = `[LOGGER] - ${date} | ${e.stack}`;

    console.log(logMsg);

    this.logs.push(logMsg);

    writeLogFile(this.logs);
  }
}

export default new Logger();