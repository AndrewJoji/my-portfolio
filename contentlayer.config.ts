import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Personal = defineDocumentType(() => ({
  name: 'Personal',
  filePathPattern: 'personal.md',
  isSingleton: true,
  fields: {
    givenName: {
      type: 'string',
      description: 'Your first name or given name',
      required: true,
    },
    familyName: {
      type: 'string',
      description: 'Your last name or family name',
      required: true,
    },
    title: {
      type: 'string',
      description: 'Your current job title or a short description of your goal',
      required: true,
    },
    location: {
      type: 'string',
      description:
        'Your general location of residence, not your personal address',
      required: true,
    },
    twitterUsername: {
      type: 'string',
      description: 'Your Twitter username without the "@" symbol',
      required: false,
    },
  },
}));

export const Skill = defineDocumentType(() => ({
  name: 'Skill',
  filePathPattern: 'skills/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'A name for the category of skills',
      required: true,
    },
  },
}));

export const ProfessionalExperience = defineDocumentType(() => ({
  name: 'ProfessionalExperience',
  filePathPattern: 'professionalExperiences/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'Your most recent title at this organization',
      required: true,
    },
    organization: {
      type: 'string',
      description: 'The name of the company or organization you worked with',
      required: true,
    },
    startDate: {
      type: 'string',
      description: 'A descriptor of when you started the position',
      required: true,
    },
    endDate: {
      type: 'string',
      description:
        'If you no longer work with this organization, provide a descriptor of when you ended the position',
      required: false,
    },
  },
}));

export const Achievement = defineDocumentType(() => ({
  name: 'Achievement',
  filePathPattern: 'achievements/*.md',
  fields: {
    achievement: {
      type: 'string',
      description:
        'The name of the degree or certification of your achievement',
      required: true,
    },
    organization: {
      type: 'string',
      description:
        'The name of the school, organization, or program you earned your achievement from',
      required: true,
    },
    completionYear: {
      type: 'number',
      description: 'The year you earned your achievement',
      required: true,
    },
  },
}));
export const LeadershipExperience = defineDocumentType(() => ({
  name: 'LeadershipExperience',
  filePathPattern: 'leadership/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the leadership role',
      required: true,
    },
    organization: {
      type: 'string',
      description: 'The organization where you held the role',
      required: true,
    },
    startDate: {
      type: 'string',
      description: 'When you started the role',
      required: true,
    },
    endDate: {
      type: 'string',
      description: 'When you ended the role (if applicable)',
      required: false,
    }
  },
}));


export const BusinessExperience = defineDocumentType(() => ({
  name: 'BusinessExperience',
  filePathPattern: 'business/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'The title or role in the business',
      required: true,
    },
    organization: {
      type: 'string',
      description: 'The name of the business',
      required: true,
    },
    startDate: {
      type: 'string',
      description: 'When you started the business',
      required: true,
    },
    endDate: {
      type: 'string',
      description: 'When you ended your involvement (if applicable)',
      required: false,
    },
  },
}));


export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    technologies: {
      type: 'list',
      of: { type: 'string' },
      description: 'The technologies used in the project',
      required: true,
    },
    startDate: {
      type: 'string',
      description: 'When the project started',
      required: true,
    },
    endDate: {
      type: 'string',
      description: 'When the project ended (if applicable)',
      required: false,
    },
  },
}));


export const AdditionalInfo = defineDocumentType(() => ({
  name: 'AdditionalInfo',
  filePathPattern: 'additionalInfo.md',
  isSingleton: true,
  fields: {
    title: {
      type: 'string',
      description: 'The name of the additional info section',
      required: true,
    },
  },
}));

export const PrivateField = defineDocumentType(() => ({
  name: 'PrivateField',
  filePathPattern: 'privateFields/*.md',
  fields: {
    label: {
      type: 'string',
      description: 'A label to describe the private field',
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: 'edit-me/content',
  documentTypes: [
    Personal,
    Skill,
    ProfessionalExperience,
    Achievement,
    LeadershipExperience,
    BusinessExperience,
    Project,
    AdditionalInfo,
    PrivateField,
  ],
});
