import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  children: React.ReactNode;
}
function PageTemplate({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'w-full p-4 md:p-8 rounded border border-gray opacity-[0.98] bg-gradient-to-r from-cyan-500 to-blue-500 h-fit',
        className,
      )}
      style={{
        background:
          'linear-gradient(240deg, rgba(50, 50, 50, 0.90) 0%, rgba(66, 66, 66, 0.70) 100%)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
      }}
    >
      {children}
    </div>
  );
}
export default PageTemplate;
