import { useTheme } from 'next-themes';
import { Sun, Lunar } from 'components/icon';

export default function DarkmodeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="inline-flex items-center 
        border-0 py-1 px-3 rounded text-base mt-4 md:mt-0
        focus:outline-none
        bg-gray-100
        hover:bg-gray-50
        hover:text-orange-500
        dark:bg-slate-600
        dark:text-slate-400
        dark:hover:text-yellow-300
        "
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <Lunar /> : <Sun />}
      </button>
    </>
  );
}
