import { QnAProps } from 'shared/store/type';
import Interview from 'components/Graduate/Interview';

const AdvicePage = ({ Advice }: any) => {
  return Advice.map((QnA: QnAProps) => {
    return (
      <Interview key={QnA.id} question={QnA.question} answer={QnA.answer} />
    );
  });
};

export default AdvicePage;
