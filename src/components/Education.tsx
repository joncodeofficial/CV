type EducationProps = {
  degree: string;
  school: string;
  duration: string;
  details: string;
};

export const Education = ({ degree, school, duration, details }: EducationProps) => {
  return (
    <div className='space-y-1'>
      <div className='flex justify-between items-start'>
        <div>
          <h3 className='font-bold text-[#374151]'>{degree}</h3>
          <p className='text-gray-600'>{school}</p>
        </div>
        <span className='text-gray-500 text-sm'>{duration}</span>
      </div>
      <p className='text-gray-600 text-sm'>{details}</p>
    </div>
  );
};
