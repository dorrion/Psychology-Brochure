import React from 'react';
import { CurriProps } from 'shared/store/type';
import TapWrapper from 'components/Graduate/TapWrapper';

const CurricularmPage = ({ Curriculum }: any) => {
  return Curriculum.map((el: CurriProps) => {
    return (
      <TapWrapper
        key={el.id}
        major={el.major}
        freshmen={el.freshmen}
        sophomore={el.sophomore}
        junior={el.junior}
        senior={el.senior}
      />
    );
  });
};

export default CurricularmPage;
