import React from 'react';
import { EnrolementProps } from 'shared/store/type';

export default function FiveCard({ name, tip }: EnrolementProps) {
  return (
    <div className="overflow-y-visible w-full sm:w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-6 mx-2 mb-4 last:mb-0">
      <h1 className="dark:text-slate-700 text-base font-medium mb-2">{name}</h1>
      <p className="h-full dark:text-slate-700 whitespace-pre-wrap text-base ">
        {tip}
      </p>
    </div>
  );
}
