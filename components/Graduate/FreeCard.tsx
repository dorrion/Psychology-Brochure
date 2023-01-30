import { EnrolementProps } from 'shared/store/type';

export default function FreeCard({ idx, name, tip }: EnrolementProps) {
  return (
    <div
      className={`col-span-1 h-full p-4 ${idx! % 3 === 2 ? '' : 'border-r'}`}
    >
      <p className="text-xs">{tip}</p>
      <p className="text-xs font-bold mt-1">{name}</p>
    </div>
  );
}
