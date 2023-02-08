import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { useState } from 'react';

interface Tab {
  id?: number;
  label?: string;
  banner?: React.ReactNode;
  content?: React.ReactNode;
}

interface Props {
  tabs: Tab[];
}

const GraduateTab: FC<Props> = ({ tabs }) => {
  const router = useRouter();
  const { category } = router.query;
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // 다른 사람이 카테고리 입력했을 때 해당하는 페이지를 보여주도록
  useEffect(() => {
    if (category) {
      setActiveTab(+category);
    }
  }, [category]);

  const handleTabClick = (category: any) => {
    setActiveTab(category);
    router.push({
      pathname: '/graduate',
      query: { category },
    });
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
            } ${tab.id === 6 ? '' : 'border-r'}`}
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

export default GraduateTab;
