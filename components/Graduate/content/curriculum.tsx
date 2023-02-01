import React from 'react';
import { CurriProps } from 'shared/store/type';
import TapWrapper from 'components/Graduate/TapWrapper';

const CurricularmPage = ({ CurriData }: any) => {
  return CurriData.map((el: CurriProps) => {
    return (
      <TapWrapper
        key={el.id}
        major={el.major}
        freshmen={el.freshmen}
        junior={el.junior}
        sophomore={el.sophomore}
        senior={el.senior}
      />
    );
  });
};

export default CurricularmPage;
