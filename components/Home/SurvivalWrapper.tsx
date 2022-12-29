import { SurvivalProps } from '../../shared/types';

export default function SurvivalWrapper({
  tipId,
  title,
  subtitle,
  category,
  tag,
}: SurvivalProps) {
  const TagList = tag?.map((el, idx) => (
    <span key={idx} className="tag">
      {el}
    </span>
  ));
  return (
    <>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            {subtitle}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            {title}
          </h2>
          {category && <span className="tag-category">{category}</span>}
          {TagList}
        </div>
      </div>
    </>
  );
}
