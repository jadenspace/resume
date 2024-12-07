import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Typescript',
      level: 3,
    },
    {
      title: 'Javascript',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 3,
    },
    {
      title: 'PHP',
      level: 1,
    },
    {
      title: 'Python',
      level: 1,
    },
  ],
};

const frameworkDevelopment: ISkill.Skill = {
  category: 'Fameworks',
  items: [
    {
      title: 'Next.js',
      level: 3,
    },
    {
      title: 'React.js',
      level: 3,
    },
    {
      title: 'Vue.js',
      level: 2,
    },
    {
      title: 'TailwindCSS',
      level: 3,
    },
    {
      title: 'SCSS',
      level: 3,
    },
    {
      title: 'CodeIgniter',
      level: 1,
    },
    {
      title: 'Django',
      level: 1,
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Jetbrains IDEs',
    },
    {
      title: 'Cursor AI Editor',
    },
    {
      title: 'Chat GPT',
    },
    {
      title: 'Claude AI',
    },
    {
      title: 'Github Copilot',
    },
    {
      title: 'Github',
    },
    {
      title: 'Git',
    },
    {
      title: 'Bitbucket',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Notion',
    },
    {
      title: 'Slack',
    },
    {
      title: 'Figma',
    },
    {
      title: 'AWS Console',
    },
    {
      title: 'AEM',
    },
    {
      title: 'Postman',
    },
  ],
};


const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    frameworkDevelopment,
    tools
  ],
  tooltip: '1: 문법 이해\n2: 실무 경험\n3: 실무 능숙',
};

export default skill;
