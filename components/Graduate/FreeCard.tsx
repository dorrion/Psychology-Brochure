import { EnrolementProps } from 'shared/store/type';

export default function FreeCard({ idx, name, tip }: EnrolementProps) {
  return (
    <div
      className={`col-span-1 h-full p-4 ${idx! % 3 === 2 ? '' : 'sm:border-r'}`}
    >
      <p className="text-base font-light">{tip}</p>
      <p className="text-base font-bold mt-1">{name}</p>
    </div>
  );
}
