import path from 'path';
import { promises as fs } from 'fs';

// data 폴더에 있는 json 다 들고 오기
// 기억하려고 추가해놓음.
export async function getStaticPropsA() {
  const dataDirectory = path.join(process.cwd(), 'data'); // /data 폴더 들어간다
  const filenames = await fs.readdir(dataDirectory); // data 폴더 읽는다

  const survival = filenames.map(async (filename) => {
    // 돌면서 data에 있는 파일 다 가져온다
    const filePath = path.join(dataDirectory, filename);
    const fileContent = await fs.readFile(filePath, 'utf8');

    return {
      filename, // 파일 이름
      content: fileContent, // Json 내용
    };
  });

  return {
    props: {
      survival: await Promise.all(survival),
    },
  };
}

// 데이터 파일 하나만 가져와서 불러오기
export async function getStaticPropsB() {
  // 살아남기 데이터 경로
  const filePath = path.join(process.cwd(), 'data', 'HomeData.json');
  const HomeData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(HomeData);

  return {
    props: {
      HomeData: await Promise.all(objectData),
    },
  };
}
