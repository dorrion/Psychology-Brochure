import Life from 'components/Graduate/Life';
import { QnAProps } from 'shared/store/type';

export default function life({ GraduateLife }: any) {
  return GraduateLife.map((el: QnAProps) => (
    <Life key={el.id} question={el.question} answer={el.answer} />
  ));
}
