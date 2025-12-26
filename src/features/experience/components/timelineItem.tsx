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
      <span className='hidden sm:flex items-center justify-center p-[2] rounded-full gradient z-1'>
        <span className='timeline-icon'>
          {icon}
        </span>
      </span>
      <article className='flex flex-col my-container my-container-hover transitions gap-2 hover:translate-y-[-5px]'>
        <span className='flex flex-col justify-between items-left lg:flex-row'>
          <span className='flex flex-col gap-1'>
            <h4 className='gradient subheading-section text-left'>{title}</h4>
            <p className='info-text'>{institution}</p>
            <span className="opacity-50 lg:hidden detail-text">{dateRange}</span>
          </span>
          <span className='hidden gap-2 items-center opacity-50 justify-end lg:flex'>
            <LuCalendar className='size-icon' />
            <span className='detail-text'>{dateRange}</span>
          </span>
        </span>
        <p className='detail-text col-span-2'>{description}</p>
      </article>
    </span>
  );
};

export default TimelineItem;