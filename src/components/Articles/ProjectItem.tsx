import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';
import { Project } from '@content';

const ProjectItem: React.FC<Project> = ({
  body,
  title,
  startDate,
  endDate,
  technologies,
}) => {
  return (
    <article className="border-t-2 border-neutral-6 py-6 first-of-type:border-none last-of-type:pb-0">
      <Heading className="text-balance" level={3}>
        <span className="rounded-md bg-neutral-12 px-2 text-neutral-1">
          {title}
        </span>
      </Heading>

      <div className="mt-1 font-medium tracking-wide">
        <FontAwesomeIcon className="mr-2" icon={faCalendar} />
        {startDate}–{!endDate ? 'Current' : endDate}
      </div>

      {technologies && (
        <div className="mt-2">
          <strong>Technologies: </strong>
          {technologies.join(', ')}
        </div>
      )}

      <Prose html={body.html} />
    </article>
  );
};

export default ProjectItem;
