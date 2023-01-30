import React from 'react';
import { EnrolementProps } from 'shared/store/type';

export default function EnrolementCard({ name, tip }: EnrolementProps) {
  return (
    <div className="w-48 bg-white rounded-lg shadow-lg overflow-hidden p-4 mx-3 mb-4 last:mb-0">
      <h1 className="text-xs font-medium">{name}</h1>
      <p className="whitespace-pre-wrap text-xs">{tip}</p>
    </div>
  );
}