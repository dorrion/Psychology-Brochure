import Major from 'components/Graduate/Major';
import { MajorProps } from 'shared/store/type';

export default function prepare({ GraduateMajor }: any) {
  return GraduateMajor.map((el: MajorProps) => {
    return <Major key={el.id} major={el.major} explain={el.explain} id={0} />;
  });
}
