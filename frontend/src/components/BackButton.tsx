import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-100 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700/50 transition-all duration-200 border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow group w-fit"
    >
      <span className="material-symbols-outlined text-[20px]">arrow_back</span>
      <span className="text-sm font-semibold">Back</span>
    </button>
  );
}

