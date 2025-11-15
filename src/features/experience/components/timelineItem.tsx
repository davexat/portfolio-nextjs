import { LuCalendar } from "react-icons/lu";
import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  institution: string;
  dateRange: string;
  description: string;
  icon: ReactNode;
}

const TimelineItem = ({ title, institution, dateRange, description, icon }: TimelineItemProps) => {
  return (
    <span className='flex items-start gap-3'>
      <span className='flex items-center justify-center p-[2] rounded-full bg-gradient z-1'>
        <span className='block p-4 rounded-full bg-button'>
          {icon}
        </span>
      </span>
      <article className='flex flex-col size-button border rounded-md border-button bg-button transitions gap-2 border-button-hover hover:translate-y-[-5px]'>
        <span className='flex flex-col justify-between items-left lg:flex-row'>
          <span className=''>
            <h4 className='text-2xl gradient-title'>{title}</h4>
            <p className='text-lg'>{institution}</p>
            <span className="opacity-50 lg:hidden">{dateRange}</span>
          </span>
          <span className='hidden gap-2 items-center opacity-50 justify-end lg:flex'>
            <LuCalendar className='size-icon' />
            <span className=''>{dateRange}</span>
          </span>
        </span>
        <p className='text-md col-span-2'>{description}</p>
      </article>
    </span>
  );
};

export default TimelineItem;