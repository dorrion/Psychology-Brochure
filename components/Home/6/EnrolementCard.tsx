import React from 'react';
import { EnrolementProps } from 'shared/store/type';

export default function EnrolementCard({ name, tip }: EnrolementProps) {
  return (
    <div className="w-48 bg-white rounded-lg shadow-lg overflow-hidden p-4 mb-4 last:mb-0">
      <h1 className="text-xs font-medium mb-2">{name}</h1>
      <p className="whitespace-pre-wrap text-xs">{tip}</p>
    </div>
  );
}
