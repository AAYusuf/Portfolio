import { constants } from "buffer";
import {SiMysql}  from "react-icons/si"
export const characters = [
    "M43.875 24.4375C43.875 31.375 41.5 36.7188 36.75 40.4688C32.0312 44.1875 25.2656 46.0469 16.4531 46.0469H8.39062V73H0.421875V4.46875H18.1875C35.3125 4.46875 43.875 11.125 43.875 24.4375ZM8.39062 39.2031H15.5625C22.625 39.2031 27.7344 38.0625 30.8906 35.7812C34.0469 33.5 35.625 29.8438 35.625 24.8125C35.625 20.2812 34.1406 16.9062 31.1719 14.6875C28.2031 12.4688 23.5781 11.3594 17.2969 11.3594H8.39062V39.2031Z",
    "M92.25 73V39.7656C92.25 35.5781 91.2969 32.4531 89.3906 30.3906C87.4844 28.3281 84.5 27.2969 80.4375 27.2969C75.0312 27.2969 71.0781 28.7656 68.5781 31.7031C66.1094 34.6406 64.875 39.4531 64.875 46.1406V73H57.0938V0.0625H64.875V22.1406C64.875 24.7969 64.75 27 64.5 28.75H64.9688C66.5 26.2812 68.6719 24.3438 71.4844 22.9375C74.3281 21.5 77.5625 20.7812 81.1875 20.7812C87.4688 20.7812 92.1719 22.2812 95.2969 25.2812C98.4531 28.25 100.031 32.9844 100.031 39.4844V73H92.25Z",
    "M160.406 47.2656C160.406 55.6406 158.297 62.1875 154.078 66.9062C149.859 71.5938 144.031 73.9375 136.594 73.9375C132 73.9375 127.922 72.8594 124.359 70.7031C120.797 68.5469 118.047 65.4531 116.109 61.4219C114.172 57.3906 113.203 52.6719 113.203 47.2656C113.203 38.8906 115.297 32.375 119.484 27.7188C123.672 23.0312 129.484 20.6875 136.922 20.6875C144.109 20.6875 149.812 23.0781 154.031 27.8594C158.281 32.6406 160.406 39.1094 160.406 47.2656ZM121.266 47.2656C121.266 53.8281 122.578 58.8281 125.203 62.2656C127.828 65.7031 131.688 67.4219 136.781 67.4219C141.875 67.4219 145.734 65.7188 148.359 62.3125C151.016 58.875 152.344 53.8594 152.344 47.2656C152.344 40.7344 151.016 35.7812 148.359 32.4062C145.734 29 141.844 27.2969 136.688 27.2969C131.594 27.2969 127.75 28.9688 125.156 32.3125C122.562 35.6562 121.266 40.6406 121.266 47.2656Z",
    "M209.25 73V39.7656C209.25 35.5781 208.297 32.4531 206.391 30.3906C204.484 28.3281 201.5 27.2969 197.438 27.2969C192.062 27.2969 188.125 28.75 185.625 31.6562C183.125 34.5625 181.875 39.3594 181.875 46.0469V73H174.094V21.625H180.422L181.688 28.6562H182.062C183.656 26.125 185.891 24.1719 188.766 22.7969C191.641 21.3906 194.844 20.6875 198.375 20.6875C204.562 20.6875 209.219 22.1875 212.344 25.1875C215.469 28.1562 217.031 32.9219 217.031 39.4844V73H209.25Z",
    "M275.109 21.625V26.5469L265.594 27.6719C266.469 28.7656 267.25 30.2031 267.938 31.9844C268.625 33.7344 268.969 35.7188 268.969 37.9375C268.969 42.9688 267.25 46.9844 263.812 49.9844C260.375 52.9844 255.656 54.4844 249.656 54.4844C248.125 54.4844 246.688 54.3594 245.344 54.1094C242.031 55.8594 240.375 58.0625 240.375 60.7188C240.375 62.125 240.953 63.1719 242.109 63.8594C243.266 64.5156 245.25 64.8438 248.062 64.8438H257.156C262.719 64.8438 266.984 66.0156 269.953 68.3594C272.953 70.7031 274.453 74.1094 274.453 78.5781C274.453 84.2656 272.172 88.5938 267.609 91.5625C263.047 94.5625 256.391 96.0625 247.641 96.0625C240.922 96.0625 235.734 94.8125 232.078 92.3125C228.453 89.8125 226.641 86.2812 226.641 81.7188C226.641 78.5938 227.641 75.8906 229.641 73.6094C231.641 71.3281 234.453 69.7812 238.078 68.9688C236.766 68.375 235.656 67.4531 234.75 66.2031C233.875 64.9531 233.438 63.5 233.438 61.8438C233.438 59.9688 233.938 58.3281 234.938 56.9219C235.938 55.5156 237.516 54.1562 239.672 52.8438C237.016 51.75 234.844 49.8906 233.156 47.2656C231.5 44.6406 230.672 41.6406 230.672 38.2656C230.672 32.6406 232.359 28.3125 235.734 25.2812C239.109 22.2188 243.891 20.6875 250.078 20.6875C252.766 20.6875 255.188 21 257.344 21.625H275.109ZM234.141 81.625C234.141 84.4062 235.312 86.5156 237.656 87.9531C240 89.3906 243.359 90.1094 247.734 90.1094C254.266 90.1094 259.094 89.125 262.219 87.1562C265.375 85.2188 266.953 82.5781 266.953 79.2344C266.953 76.4531 266.094 74.5156 264.375 73.4219C262.656 72.3594 259.422 71.8281 254.672 71.8281H245.344C241.812 71.8281 239.062 72.6719 237.094 74.3594C235.125 76.0469 234.141 78.4688 234.141 81.625ZM238.359 38.0781C238.359 41.6719 239.375 44.3906 241.406 46.2344C243.438 48.0781 246.266 49 249.891 49C257.484 49 261.281 45.3125 261.281 37.9375C261.281 30.2188 257.438 26.3594 249.75 26.3594C246.094 26.3594 243.281 27.3438 241.312 29.3125C239.344 31.2812 238.359 34.2031 238.359 38.0781Z",
  ];
  
export const aayusuf = [
  "M247 91.875C247 89.9167 247.604 88.2708 248.812 86.9375C250.062 85.5625 251.854 84.875 254.188 84.875C256.521 84.875 258.292 85.5625 259.5 86.9375C260.75 88.2708 261.375 89.9167 261.375 91.875C261.375 93.7917 260.75 95.4167 259.5 96.75C258.292 98.0833 256.521 98.75 254.188 98.75C251.854 98.75 250.062 98.0833 248.812 96.75C247.604 95.4167 247 93.7917 247 91.875Z" ,
  "M639.062 98H627.5V23.25C627.5 18.375 628.375 14.2708 630.125 10.9375C631.917 7.5625 634.479 5.02083 637.812 3.3125C641.146 1.5625 645.104 0.6875 649.688 0.6875C651.021 0.6875 652.354 0.770833 653.688 0.9375C655.062 1.10417 656.396 1.35417 657.688 1.6875L657.062 11.125C656.188 10.9167 655.188 10.7708 654.062 10.6875C652.979 10.6042 651.896 10.5625 650.812 10.5625C648.354 10.5625 646.229 11.0625 644.438 12.0625C642.688 13.0208 641.354 14.4375 640.438 16.3125C639.521 18.1875 639.062 20.5 639.062 23.25V98ZM653.438 30.375V39.25H616.812V30.375H653.438Z",
  "M581.188 82.375V30.375H592.812V98H581.75L581.188 82.375ZM583.375 68.125L588.188 68C588.188 72.5 587.708 76.6667 586.75 80.5C585.833 84.2917 584.333 87.5833 582.25 90.375C580.167 93.1667 577.438 95.3542 574.062 96.9375C570.688 98.4792 566.583 99.25 561.75 99.25C558.458 99.25 555.438 98.7708 552.688 97.8125C549.979 96.8542 547.646 95.375 545.688 93.375C543.729 91.375 542.208 88.7708 541.125 85.5625C540.083 82.3542 539.562 78.5 539.562 74V30.375H551.125V74.125C551.125 77.1667 551.458 79.6875 552.125 81.6875C552.833 83.6458 553.771 85.2083 554.938 86.375C556.146 87.5 557.479 88.2917 558.938 88.75C560.438 89.2083 561.979 89.4375 563.562 89.4375C568.479 89.4375 572.375 88.5 575.25 86.625C578.125 84.7083 580.188 82.1458 581.438 78.9375C582.729 75.6875 583.375 72.0833 583.375 68.125Z",
  "M501.188 80.0625C501.188 78.3958 500.812 76.8542 500.062 75.4375C499.354 73.9792 497.875 72.6667 495.625 71.5C493.417 70.2917 490.083 69.25 485.625 68.375C481.875 67.5833 478.479 66.6458 475.438 65.5625C472.438 64.4792 469.875 63.1667 467.75 61.625C465.667 60.0833 464.062 58.2708 462.938 56.1875C461.812 54.1042 461.25 51.6667 461.25 48.875C461.25 46.2083 461.833 43.6875 463 41.3125C464.208 38.9375 465.896 36.8333 468.062 35C470.271 33.1667 472.917 31.7292 476 30.6875C479.083 29.6458 482.521 29.125 486.312 29.125C491.729 29.125 496.354 30.0833 500.188 32C504.021 33.9167 506.958 36.4792 509 39.6875C511.042 42.8542 512.062 46.375 512.062 50.25H500.5C500.5 48.375 499.938 46.5625 498.812 44.8125C497.729 43.0208 496.125 41.5417 494 40.375C491.917 39.2083 489.354 38.625 486.312 38.625C483.104 38.625 480.5 39.125 478.5 40.125C476.542 41.0833 475.104 42.3125 474.188 43.8125C473.312 45.3125 472.875 46.8958 472.875 48.5625C472.875 49.8125 473.083 50.9375 473.5 51.9375C473.958 52.8958 474.75 53.7917 475.875 54.625C477 55.4167 478.583 56.1667 480.625 56.875C482.667 57.5833 485.271 58.2917 488.438 59C493.979 60.25 498.542 61.75 502.125 63.5C505.708 65.25 508.375 67.3958 510.125 69.9375C511.875 72.4792 512.75 75.5625 512.75 79.1875C512.75 82.1458 512.125 84.8542 510.875 87.3125C509.667 89.7708 507.896 91.8958 505.562 93.6875C503.271 95.4375 500.521 96.8125 497.312 97.8125C494.146 98.7708 490.583 99.25 486.625 99.25C480.667 99.25 475.625 98.1875 471.5 96.0625C467.375 93.9375 464.25 91.1875 462.125 87.8125C460 84.4375 458.938 80.875 458.938 77.125H470.562C470.729 80.2917 471.646 82.8125 473.312 84.6875C474.979 86.5208 477.021 87.8333 479.438 88.625C481.854 89.375 484.25 89.75 486.625 89.75C489.792 89.75 492.438 89.3333 494.562 88.5C496.729 87.6667 498.375 86.5208 499.5 85.0625C500.625 83.6042 501.188 81.9375 501.188 80.0625Z", 
  "M421.188 82.375V30.375H432.812V98H421.75L421.188 82.375ZM423.375 68.125L428.188 68C428.188 72.5 427.708 76.6667 426.75 80.5C425.833 84.2917 424.333 87.5833 422.25 90.375C420.167 93.1667 417.438 95.3542 414.062 96.9375C410.688 98.4792 406.583 99.25 401.75 99.25C398.458 99.25 395.438 98.7708 392.688 97.8125C389.979 96.8542 387.646 95.375 385.688 93.375C383.729 91.375 382.208 88.7708 381.125 85.5625C380.083 82.3542 379.562 78.5 379.562 74V30.375H391.125V74.125C391.125 77.1667 391.458 79.6875 392.125 81.6875C392.833 83.6458 393.771 85.2083 394.938 86.375C396.146 87.5 397.479 88.2917 398.938 88.75C400.438 89.2083 401.979 89.4375 403.562 89.4375C408.479 89.4375 412.375 88.5 415.25 86.625C418.125 84.7083 420.188 82.1458 421.438 78.9375C422.729 75.6875 423.375 72.0833 423.375 68.125Z",
  "M297.75 7L321.375 52.6875L345.062 7H358.75L327.375 64V98H315.312V64L283.938 7H297.75Z",
  "M187.25 15.0625L157.125 98H144.812L179.5 7H187.438L187.25 15.0625ZM212.5 98L182.312 15.0625L182.125 7H190.062L224.875 98H212.5ZM210.938 64.3125V74.1875H159.812V64.3125H210.938Z",
  "M107 91.875C107 89.9167 107.604 88.2708 108.812 86.9375C110.062 85.5625 111.854 84.875 114.188 84.875C116.521 84.875 118.292 85.5625 119.5 86.9375C120.75 88.2708 121.375 89.9167 121.375 91.875C121.375 93.7917 120.75 95.4167 119.5 96.75C118.292 98.0833 116.521 98.75 114.188 98.75C111.854 98.75 110.062 98.0833 108.812 96.75C107.604 95.4167 107 93.7917 107 91.875Z",
  "M43.25 15.0625L13.125 98H0.8125L35.5 7H43.4375L43.25 15.0625ZM68.5 98L38.3125 15.0625L38.125 7H46.0625L80.875 98H68.5ZM66.9375 64.3125V74.1875H15.8125V64.3125H66.9375Z" 
];



  export const canvasImages = [
    "html",
    "javascript",
    "css",
    "react",
    "typescript",
    "vue",
    "svelte",
    "nodejs",
    "tailwindcss",
    "sass",
    "next",
    "firebase",
    "vscode",
    "git",
    "vite",
    "webpack",
  ].map(
    (icon) =>
      `https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${icon}.svg&w=50&h=50`
  );
  
  export const skills = [
    {
      image:"html",
      title:"HTML",
    },
    {
      image:"css",
      title:"CSS",
    },
    {
      image:"javascript",
      title:"JavaScript",
    },
    {
      image:"react",
      title:"React",
       
    },
    {
      image:"laravel",
      title:"Laravel",
       
    },
    {
      image:"next",
      title:"NextJs",
    },
    {
      image:"firebase",
      title:"firebase",
       
    },
    {
      image:"git",
      title:"Git",
       
    },
    {
      image:"docker",
      title:"Docker",
       
    },
    {
      image:"figma",
      title:"Figma",
       
    },
    {
      image:"drawio",
      title:"Drawio",
       
    },
    
    
    {
      image:"graphql",
      title:"Graphql",
       
    },
    {
      image:"java",
      title:"Java",
       
    },
    
    
  ]

  export const projects =[
    {
      id:"1",
      title:"WeShare",
      description: "A platform for sharing Subscriptions",
      demo: "https://fireverse.pages.dev/",
      github:"https://github.com/napthedev/fireverse.git",
      technologies:[
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/firebase.svg",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
        "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg"
      ],
      image: {
      url: "./weShare.png"
    }
  },
  {
    id: "2",
    title: "Grid POS",
    description: "A point of sale system with inventory management",
    demo: "https://cmtio.vercel.app/demo",
    github: "https://github.com/napthedev/cmtio",
    technologies: [
      "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/laravel.svg",
      "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/database.svg",
      "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg",
      "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg",
    ],
    image: {
      url: "./gridpos.png"
    }
  },
  {
    id: "3",
    title: "FaceIT",
    description: "A facial regonition application",
    demo: "https://aayusuf.github.io/robofriends/",
    github: "https://github.com/AAYusuf/robofriends",
    technologies: [
      "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/nodejs.svg",
      "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
      "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/database.svg",
      "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/json.svg",
    ],
    image: {
      url: "./faceit.png"
    }
  },
  {
    id: "4",
    title: "Robofriends",
    description: "A PWA application",
    demo: "https://aayusuf.github.io/robofriends/",
    github: "https://github.com/AAYusuf/robofriends",
    technologies: [
      "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
      "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg",
    ],
    image: {
      url: "./robofriends.png"
    }
  }

  ]

  export const smallProjects = [
    {
      id: "cl41bb6ga4i6v0c0zc4nud16j",
      title: "Instagram Clone",
      description: "A React video player library with YouTube-like UI",
      link: "https://react-tuby.vercel.app/",
      icon: {
        url: "https://media.graphassets.com/resize=height:40/AVIK9iB0RWi1vdWa3aFX"
      }
    },
    {
      id: "cl41bd91j4h2j0b14h717fxus",
      title: "HKS",
      description: "A movie website built with TMDB and 2embed",
      link: "https://e-cinema.vercel.app/",
      icon: {
        url: "https://media.graphassets.com/resize=height:40/NVLrClLvSIa2D3SfZnoR"
      }
    }
  ]

  export const socialLinks = [
    {
      title: "Github",
      icon: "/github.png",
      link: "https://github.com/AAYusuf",
    },
    {
      title: "LinkedIn",
      icon: "/linkedin.png",
      link: "https://www.linkedin.com/in/adamu-abdulkadir/",
    },
    {
      title: "Figma",
      icon: "/figma.png",
      link: "https://www.figma.com/@AAYusuf",
    },
  ];

  export const webistes = [
    {
      title: "Megacraft",
      image: "./megacraft.png",
      link: ""
    },
    {
      title: "Goldfast",
      image: "./goldfast.png",
      link: ""
    },
    {
      title: "Myriads",
      image: "./myriads.png",
      link: ""
    },
    {
      title: "Megacraft",
      image: "./megacraft.png",
      link: ""
    }

  ]