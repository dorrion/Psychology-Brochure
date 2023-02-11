import Image from 'next/image';
import { MemberProps } from 'shared/store/type';

export default function MemberWrapper({
  memberId,
  profileImg,
  name,
  role,
}: MemberProps) {
  return (
    <div className=" h-full flex flex-row sm:flex-col items-center text-center">
      <div className="bg-soil w-48 flexBox rounded-full">
        <Image
          src={profileImg!}
          className="flex-shrink-0 rounded-lg w-full object-cover object-center"
          alt="team"
          width={200}
          height={200}
        />
      </div>
      <div className="w-full my-4">
        <h2 className="mb-3 font-medium text-2xl text-gray-900 dark:text-slate-100">
          {name}
        </h2>

        {role?.map((el, idx) => (
          <h3
            key={idx}
            className="text-xl font-light text-gray-500 dark:text-slate-400 mb-2"
          >
            {el}
          </h3>
        ))}
      </div>
    </div>
  );
}
