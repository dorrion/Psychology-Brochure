import React, { useState } from 'react';

const Guide = () => {
  interface Tab {
    id?: string;
    label?: string;
    content?: React.ReactNode;
  }

  interface Props {
    tabs: Tab[];
  }

  const Tabs: React.FC<Props> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
      <>
        {/* 탭 나열 */}
        <ul className="flexBox  flex-col sm:flex-row border-gray-200">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              // 선택된 탭이면 배경색 바뀌도록
              className={`m-1 sm:m-4 w-56 h-12 p-4 flexBox text-base text-center cursor-pointer rounded-2xl border ${
                activeTab === tab.id ? 'bg-shadowColor' : ''
              }`}
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

  return (
    <>
      <Tabs
        tabs={[
          {
            id: '0',
            label: '서울대학교 모집요강',
            content: (
              <>
                <h1 className="text-xl mb-2.5">일반대학원, 교육대학원</h1>
                <embed
                  className="w-full  h-[768px]"
                  src="/pdf/서울대(일,교).pdf"
                  type="application/pdf"
                />
              </>
            ),
          },
          {
            id: '1',
            label: '고려대학교 모집요강',
            content: (
              <>
                <h1 className="text-xl mb-2.5">일반대학원, 교육대학원</h1>
                <embed
                  className="w-full  h-[768px]"
                  src="/pdf/고려대(일,교).pdf"
                  type="application/pdf"
                />
              </>
            ),
          },
          {
            id: '2',
            label: '연세대학교 모집요강',
            content: (
              <>
                <h1 className="text-xl mb-2.5">일반대학원</h1>
                <embed
                  className="w-full  h-[768px] mb-12"
                  src="/pdf/연세대(일).pdf"
                  type="application/pdf"
                />
                <h1 className="text-xl mb-2.5">교육대학원</h1>
                <embed
                  className="w-full  h-[768px]"
                  src="/pdf/연세대(교).pdf"
                  type="application/pdf"
                />
              </>
            ),
          },
          {
            id: '3',
            label: '아주대학교 모집요강',
            content: (
              <>
                <h1 className="text-xl mb-2.5">일반대학원</h1>
                <embed
                  className="w-full  h-[768px] mb-12"
                  src="/pdf/아주대(일).pdf"
                  type="application/pdf"
                />
                <h1 className="text-xl mb-2.5">교육대학원</h1>
                <embed
                  className="w-full  h-[768px]"
                  src="/pdf/아주대(교).pdf"
                  type="application/pdf"
                />
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default Guide;
