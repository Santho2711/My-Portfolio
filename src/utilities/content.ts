

const experienceYear:string = '2.6'
export interface navLinks{
  title:string
  link:string
  icon?:string
}
export const navLinks: navLinks[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Experience",
    link: "/experience",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Tools",
    link: "/tools",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];


interface profile{
  image:string
  name:string
  description:string
}


export const profile: profile = {
  image:
    "./assets/images/profile.jpg",
  name: "Santhosh Kumar",
  description:
    "React Native & React JS Developer",
};

interface about  {
  title: string;
  description: string;
  experience: string;
  projects: number;
}
export const about: about = {
  title: "About me!",
  description:
    `I am a passionate React Native with ${experienceYear} years of experience in building responsive websites and Mobile Apps. I thrive on continuous learning and professional growth. My goal is to contribute effectively to an innovative team while enhancing my knowledge. I am eager to take on challenges that help me deliver high-quality, impactful solutions.`,
  experience:experienceYear,
  projects:15
};

export type experience = 
  {
    name:string
    designation:string
    from:string
    to:string
    link?:string
  }


export const experience: experience[] = [
  // {
  //   name: "Self Employed",
  //   designation:
  //     "Independent Front-end Developer",
  //   from: "May 2023",
  //   to: "October 2023",
  // },
  {
    name: "Bugtreat Technologies",
    designation:
      "React Native Developer | React JS Developer",
    from: "November 2023",
    to: "April 2026",
    link: "https://www.bugtreat.com/",
  },
];

export interface projectObject{
  name:string
  platform?:string
  link:string
  thumbnail:string
}

interface projects{
  title:string
  list:projectObject[]
}
export const projects: projects = {
  title: "RECENT PROJECTS",
  list: [
    {
      name: "Perfect Pizza Flours",
      platform: "React Native",
      link: "https://play.google.com/store/apps/details?id=com.italieplein.perfectpizzaflours&pcampaignid=web_share",
      thumbnail:
        "./assets/images/projects/ppf.svg",
    },
    {
      name: "SmartGolf",
      platform: "React Native",
      link: "https://play.google.com/store/apps/details?id=com.smartgolf&pcampaignid=web_share",
      thumbnail:
        "./assets/images/projects/smartgolf.webp",
    },
    {
      name: "KNAF",
      platform: "React Native",
      link: "https://play.google.com/store/apps/details?id=com.knafapp.knafappnotification&pcampaignid=web_share",
      thumbnail:
        "./assets/images/projects/knaf.webp",
    },
    {
      name: "Cakinzo",
      platform: "React JS",
      link: "https://www.cakinzo.com/",
      thumbnail:
        "./assets/images/projects/cakinzo.svg",
    },
    {
      name: "South safari",
      platform: "React JS",
      link: "https://www.southsafari.com/",
      thumbnail:
        "./assets/images/projects/southsafari.png",
    },
    {
      name: "Fitsuvai",
      platform: "HTML,CSS,JS,Jquery",
      link: "https://www.fitsuvai.com/",
      thumbnail:
        "./assets/images/projects/fitsuvai.svg",
    },
  ],
};


export const tools:projects = {
  title:'Known Languages',
  list:[
    {
      name:'HTML5',
  // platform:'string',
  link:'string',
  thumbnail:'./assets/images/tools/html.png'
    },
    {
      name:'CSS3',
  // platform:'string',
  link:'string',
  thumbnail:'./assets/images/tools/css.png'
    },
    {
      name:'Java Script',
  // platform:'string',
  link:'string',
  thumbnail:'./assets/images/tools/js.png'
    },
    {
      name:'Bootstrap',
  // platform:'string',
  link:'string',
  thumbnail:'./assets/images/tools/bootstrap.png'
    },
    {
      name:'React Native',
  // platform:'string',
  link:'string',
  thumbnail:'./assets/images/tools/react.png'
    },
    {
      name:'React JS',
  // platform:'string',
  link:'string',
  thumbnail:'./assets/images/tools/react.png'
    },
    {
      name:'Typescript',
  // platform:'string',
  link:'string',
  thumbnail:'./assets/images/tools/typescript.png'
    },
    {
      name:'Redux',
  // platform:'string',
  link:'string',
  thumbnail:'./assets/images/tools/redux.png'
    },
    {
      name:'Next JS',
  // platform:'string',
  link:'string',
  thumbnail:'./assets/images/tools/next.webp'
    },
  //   {
  //     name:'Python',
  // // platform:'string',
  // link:'string',
  // thumbnail:'./assets/images/tools/python.png'
  //   },
    {
      name:'Node JS - Express',
  // platform:'string',
  link:'string',
  thumbnail:'./assets/images/tools/node.png'
    },
    {
      name:'Mongo DB',
  // platform:'string',
  link:'string',
  thumbnail:'./assets/images/tools/mongo.png'
    },
  ]
} 
export const connetThrough = {
  title:'Connect through',
  mail:'santhoshsk27112001@gmail.com',
  linkedin:'https://www.linkedin.com/in/santhosh-k-93a539255',
  github:'https://github.com/Santho2711',
  location:'Madurai'
}

export interface paddingProp {
  padding?:boolean
}