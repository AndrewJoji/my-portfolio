import { faUsers } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { sortedLeadershipExperiences } from 'src/helpers/utils';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import LeadershipItem from './LeadershipItem';

const Leadership: React.FC = () => {
  return (
    <article className="rounded-xl bg-neutral-3 py-12">
      <div className="container">
        <div className="flex justify-center text-center">
          <SectionHeading
            icon={faUsers}
            level={2}
            text="Leadership & Community Service"
          />
        </div>

        {sortedLeadershipExperiences.map((leadership) => (
          <LeadershipItem key={leadership._id} {...leadership} />
        ))}
      </div>
    </article>
  );
};

export default Leadership;
