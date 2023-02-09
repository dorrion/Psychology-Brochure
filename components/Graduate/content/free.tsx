import React from 'react';
import { EnrolementProps } from 'shared/store/type';
import FreeCard from 'components/Graduate/FreeCard';

const FreePage = ({ Free }: any) => {
  const FreeList = Free.map((el: EnrolementProps, idx: number) => {
    return <FreeCard key={idx} idx={idx} name={el.name} tip={el.tip} />;
  });

  return (
    <div className="grid gird-cols-1 sm:grid-cols-3 gap-4">{FreeList}</div>
  );
};

export default FreePage;
