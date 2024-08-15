// Import
import { writeFileSync } from 'fs';

// Report function
const report = (routine: string, index: number, time: number): void => {
  writeFileSync(
    './tests/reports/report.txt',
    `Routine ${routine} - case ${index}: ${time}ms\n`,
    { flag: 'a' }
  );
};

// Export
export default report;
