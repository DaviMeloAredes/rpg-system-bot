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
  // looping the log's string array
  fs.writeFile(
    `src/logs/log-${dateInfo.day}-${dateInfo.month}-${dateInfo.year}.txt`,
    logs.join('\n'), // (printing the log line and then jumping to the next line)
    (err) => {
      if (err) {
        return err;
      }
    }
  );
}

class Logger {
  private logs: string[];

  constructor () {
    this.logs = [];
  }

  // normal log method, file specification is optional
  public log (msg: string, file?: string) {
    const logMsg = `[LOGGER] - ${date} | ${msg} | ${file || 'N/A'}`;

    // printing the log in the console
    console.log(logMsg);

    // pushing the log to the array
    this.logs.push(logMsg);
    
    // writing the log in the file
    writeLogFile(this.logs);
  }

  // error log method
  public error (e: Error, file: string) {
    const logMsg = `[LOGGER] - ${date} | ${e.stack} | ${file}`;

    console.log(logMsg);

    this.logs.push(logMsg);

    writeLogFile(this.logs);
  }
}

export default new Logger();