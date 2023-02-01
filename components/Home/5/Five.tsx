import React from 'react';
import { EnrolementProps } from 'shared/store/type';

export default function FiveCard({ name, tip }: EnrolementProps) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white rounded-lg shadow-lg overflow-hidden p-4 mx-2 mb-4 last:mb-0">
      <h1 className="dark:text-slate-700 text-xs font-medium mb-2">{name}</h1>
      <p className="dark:text-slate-700 whitespace-pre-wrap text-xs">{tip}</p>
    </div>
  );
}
