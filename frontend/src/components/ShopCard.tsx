interface ShopCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ShopCard({ title, description, imageUrl }: ShopCardProps) {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
      <div 
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col" 
        style={{backgroundImage: `url("${imageUrl}")`}}
      ></div>
      <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
        <div>
          <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">{title}</p>
          <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">{description}</p>
        </div>
        <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30">
          <span className="truncate">View Shop</span>
        </button>
      </div>
    </div>
  );
}

