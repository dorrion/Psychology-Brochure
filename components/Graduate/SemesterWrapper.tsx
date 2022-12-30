import { SemesterType } from 'shared/store/type';

export default function MajorWrapper({ spring, fall }: SemesterType) {
  console.log(fall?.minorChoice);
  return (
    <>
      <div>봄 교선{spring?.minorChoice}</div>
      <div>가을 교선{fall?.minorChoice}</div>
    </>
  );
}
