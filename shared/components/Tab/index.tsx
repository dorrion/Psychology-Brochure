import React, { FC } from 'react';
import { useState } from 'react';

interface Tab {
  id?: string;
  label?: string;
  banner?: React.ReactNode;
  content?: React.ReactNode;
}

interface Props {
  tabs: Tab[];
}

const Tab: FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      {/* 배너 */}
      {tabs.find((tab) => tab.id === activeTab)?.banner}
      {/* 탭 나열 */}
      <ul className="flexBox flex-wrap flex-shrink-0 border-gray-200">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            // 선택된 탭이면 배경색 바뀌도록
            className={`p-4 flex flex-wrap items-center text-base justify-center  ${
              activeTab === tab.id ? 'text-secondaryColor' : ''
            } ${tab.id === '5' ? '' : 'border-r'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {/* 탭 라벨 */}
            {tab.label}
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
