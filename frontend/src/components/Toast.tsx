import { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
      <div className="bg-stone-700 dark:bg-stone-600 text-white px-6 py-4 rounded-lg shadow-2xl border border-stone-600 dark:border-stone-500 flex items-center gap-3 min-w-[300px]">
        <span className="material-symbols-outlined text-amber-400">info</span>
        <p className="text-sm font-medium flex-1">{message}</p>
        <button 
          onClick={onClose}
          className="text-stone-300 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
      </div>
    </div>
  );
}

