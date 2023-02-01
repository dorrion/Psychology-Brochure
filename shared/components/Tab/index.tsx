import React, { FC } from 'react';
import { useState } from 'react';
interface Tab {
  id?: string;
  label?: string;
  content?: React.ReactNode;
}

interface Props {
  tabs: Tab[];
}

const Tab: FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <>
      {/* 탭 나열 */}
      <ul className="flexBox flex-shrink-0 border-gray-200">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            // 선택된 탭이면 배경색 바뀌도록
            className={`mb-12 flex flex-wrap items-center text-base justify-center ${
              activeTab === tab.id ? 'text-secondaryColor' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {/* 여기에 배너 바뀌고 */}
            {tab.label}
            <p
              className={`mx-4 w-px h-2.5 bg-shadowColor ${
                tab.id === '5' && 'hidden'
              }`}
            />
          </li>
        ))}
      </ul>
      <div className="p-6">
        {/* 여기에 내용 삽입 */}
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </>
  );
};

export default Tab;
