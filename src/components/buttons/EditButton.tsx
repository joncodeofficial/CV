import { useState } from 'react';
import { Pencil, Check } from 'lucide-react';

export const EditButton = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing((prev) => {
      document.designMode = prev ? 'off' : 'on';
      return !prev;
    });
  };

  return (
    <div className='relative inline-block'>
      <button
        onClick={toggleEdit}
        className={`
        w-max bg-[#0082E6] brightness-[1.15] hover:brightness-105 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2
        `}
      >
        {isEditing ? (
          <Check data-testid='check-icon' className='w-5 h-5' />
        ) : (
          <Pencil data-testid='pencil-icon' className='w-5 h-5' />
        )}
      </button>
    </div>
  );
};
