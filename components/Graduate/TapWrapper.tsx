import { Tab } from '@headlessui/react';
import { CurriProps } from 'shared/store/type';

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
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
