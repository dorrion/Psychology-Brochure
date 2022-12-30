import Image from 'next/image';
import { MemberProps } from 'shared/store/type';

export default function MemberWrapper({
  memberId,
  profileImg,
  name,
  role,
}: MemberProps) {
  return (
    <>
      <div className="flex flex-wrap -m-4">
        <div className="h-full flex flex-col items-center text-center">
          <div className="bg-soil w-48 h-48  rounded-full">
            <Image
              src={profileImg!}
              className="flex-shrink-0 rounded-lg w-full h-full object-cover object-center mb-4"
              alt="team"
              width={200}
              height={200}
            />
          </div>
          <div className="w-full my-4">
            <h2 className="title-font font-medium text-xl text-gray-900 dark:text-slate-100">
              {name}
            </h2>

            {role?.map((el, idx) => (
              <h3
                key={idx}
                className="text-gray-500 dark:text-slate-400 font-light mb-2"
              >
                {el}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
