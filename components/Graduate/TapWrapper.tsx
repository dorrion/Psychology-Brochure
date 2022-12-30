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
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <h1 className="sm:text-3xl text-2xl title-font font-bold text-gray-900 mt-4 mb-4">
          {major}
        </h1>
        <Tab.Group defaultIndex={0}>
          <Tab.List className="dark:text-slate-400">
            <Tab className="mr-14 text-sm ui-selected:selective">1학년</Tab>
            <Tab className="mr-14 text-sm ui-selected:selective">2학년</Tab>
            <Tab className="mr-14 text-sm ui-selected:selective">3학년</Tab>
            <Tab className="mr-14 text-sm ui-selected:selective">4학년</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <SemesterWrapper
                spring={freshmen?.spring}
                fall={freshmen?.fall}
              />
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
      </section>
      <div></div>
    </>
  );
}
