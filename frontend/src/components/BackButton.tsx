import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-accent-light dark:text-accent-dark hover:text-primary dark:hover:text-primary transition-colors group"
    >
      <span className="material-symbols-outlined">arrow_back</span>
      <span className="text-sm font-medium">Back</span>
    </button>
  );
}

