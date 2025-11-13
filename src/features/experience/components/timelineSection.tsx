import { ReactNode } from "react";
import TimelineItem from "./timelineItem";

interface TimelineData {
  title: string;
  institution: string;
  dateRange: string;
  description: string;
}

interface TimelineSectionProps {
  title: string;
  items: TimelineData[];
  icon: ReactNode;
}

const TimelineSection = ({ title, items, icon }: TimelineSectionProps) => {
  return (
    <span className='flex flex-col gap-4'>
      <h3 className='text-3xl gradient-title text-left'>{title}</h3>
      <div className="relative layout-before flex flex-col gap-4 bg-gradient-before">
        {items.map((item, key) => (
          <TimelineItem
            key={key}
            title={item.title}
            institution={item.institution}
            dateRange={item.dateRange}
            description={item.description}
            icon={icon}
          />
        ))}
      </div>
    </span>
  );
};

export default TimelineSection;