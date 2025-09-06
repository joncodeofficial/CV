import React from 'react';
import { useReactToPrint } from 'react-to-print';

type PrintButtonProps = {
  contentRef: React.RefObject<HTMLDivElement>;
};

export const PrintButton = ({ contentRef }: PrintButtonProps) => {
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <button
      onClick={() => reactToPrintFn()}
      className='bg-[#0082E6] brightness-[1.15] hover:brightness-105 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2'
    >
      <img width={18} height={18} src='./pdf.svg' alt='Download CV' />
      Print PDF
    </button>
  );
};
