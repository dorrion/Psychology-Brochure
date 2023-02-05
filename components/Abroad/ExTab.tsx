import { useState } from 'react';

interface Tab {
  id?: string;
  label?: string;
  content?: React.ReactNode;
}

interface Props {
  tabs: Tab[];
}

const ExTabs: React.FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      {/* 탭 나열 */}
      <ul className="flexBox flex-shrink-0 ">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            // 선택된 탭이면 배경색 바뀌도록
            className={`m-4 w-1/2 h-12 p-4 flexBox border-secondaryColor text-xl font-medium text-center cursor-pointer rounded-2xl border
            hover:bg-secondaryColor hover:text-slate-50
            ${activeTab === tab.id ? 'bg-secondaryColor text-slate-50' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="p-6">
        {/* 현재 선택된 탭의 content 삽입 */}
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </>
  );
};

export default ExTabs;
