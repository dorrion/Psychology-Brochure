import { RightCircle } from 'components/icon';

interface Props {
  link: string;
  description: string;
}

const Banner: React.FC<Props> = ({ link, description }) => (
  <a
    className="flexBox p-4 bg-secondaryColor rounded-lg shadow hover:shadow-md transition duration-150"
    href={link}
  >
    <div className="flexBox text-base font-medium text-center text-slate-100 dark:text-gray-900">
      {description} <RightCircle />
    </div>
  </a>
);

export default Banner;
