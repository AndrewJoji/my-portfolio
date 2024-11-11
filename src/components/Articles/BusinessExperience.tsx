import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { sortedBusinessExperiences } from 'src/helpers/utils';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import BusinessExperienceItem from './BusinessExperienceItem';

const BusinessExperience: React.FC = () => {
  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading icon={faBriefcase} level={2} text="Business Experience" />
        </div>

        {sortedBusinessExperiences.map((experience) => (
          <BusinessExperienceItem key={experience._id} {...experience} />
        ))}
      </div>
    </article>
  );
};

export default BusinessExperience;
