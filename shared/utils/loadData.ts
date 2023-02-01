import path from 'path';
import * as fs from 'fs';
interface ParamsProps {
  subfolder: string;
  file: string;
}

export default async function loadData(params: ParamsProps) {
  const subfolder = params.subfolder;
  const fileName = params.file;
  const filePath = path.join(
    process.cwd(),
    `data/${subfolder}/${fileName}.json`,
  );

  return JSON.parse(await fs.promises.readFile(filePath, 'utf-8'));
}
