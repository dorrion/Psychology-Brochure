import { Tab } from '@headlessui/react';
import { CurriProps } from 'shared/store/type';
import SemesterWrapper from './SemesterWrapper';

export default function TapWrapper({
  major,
  freshmen,
  junior,
  sophomore,
  senior,
}: CurriProps) {
  return (
    <div>
      <h1>{major}</h1>
      <Tab.Group
        defaultIndex={0}
        // onChange={(index) => {
        //   console.log('Changed selected tab to:', index);
        // }}
      >
        <Tab.List>
          <Tab className="mr-14">1학년</Tab>
          <Tab className="mr-14">2학년</Tab>
          <Tab className="mr-14">3학년</Tab>
          <Tab className="mr-14">4학년</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <SemesterWrapper spring={freshmen?.spring} fall={freshmen?.fall} />
          </Tab.Panel>
          <Tab.Panel>
            <SemesterWrapper spring={junior?.spring} fall={junior?.fall} />
          </Tab.Panel>
          <Tab.Panel>
            <SemesterWrapper
              spring={sophomore?.spring}
              fall={sophomore?.fall}
            />
          </Tab.Panel>
          <Tab.Panel>
            <SemesterWrapper spring={senior?.spring} fall={senior?.fall} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
