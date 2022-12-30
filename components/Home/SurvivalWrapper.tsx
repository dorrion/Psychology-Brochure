import { SurvivalProps } from 'shared/store/type';

export default function SurvivalWrapper({
  tipId,
  title,
  subtitle,
  category,
}: SurvivalProps) {
  // 클릭 시 post/:tipId로 라우팅 하는 훅 추가하기
  // 응 라우팅 아니야~ 모달창이야~

  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {subtitle}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {title}
        </h2>
        {category && <span className="tag-category">{category}</span>}
      </div>
    </div>
  );
}
