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

const AbroadTab: FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
    window.history.pushState({}, '', `/abroad/${tabId}`);
  };

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
            className={`py-px px-4 flexBox flex-wrap text-xl font-normal ${
              activeTab === tab.id ? 'text-secondaryColor' : ''
            } ${tab.id === '5' ? '' : 'border-r'}`}
            onClick={() => handleTabClick(tab.id)}
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

export default AbroadTab;