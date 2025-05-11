export interface Education {
  degree: string;
  institution: string;
  years: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  iconPath: string;
}

export interface UserData {
  name: string;
  title: string;
  introduction: string;
  location: string;
  email: string;
  phone: string;
  skills: string[];
  education: Education[];
  achievements: string[];
  experience: Experience[];
  projects: Project[];
  social: {
    linkedin: string;
    github: string;
    twitter: string;
    dribbble: string;
  };
}
