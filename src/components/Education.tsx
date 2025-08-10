export const Education = ({
  degree,
  school,
  period,
  details,
}: {
  degree: string;
  school: string;
  period: string;
  details: string;
}) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-[#374151]">{degree}</h3>
          <p className="text-gray-600">{school}</p>
        </div>
        <span className="text-gray-500 text-sm">{period}</span>
      </div>
      <p className="text-gray-600 text-sm">{details}</p>
    </div>
  );
};
