import Interview from 'components/Graduate/Interview';
import { QnAProps } from 'shared/store/type';

export default function prepare({ GraduatePrepareData }: any) {
  return GraduatePrepareData.map((QnA: QnAProps) => {
    return (
      <Interview key={QnA.id} question={QnA.question} answer={QnA.answer} />
    );
  });
}
