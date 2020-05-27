const info = {
    about: {
        name: "Chi Chun Hung",
        title: "Full-Stack Developer",
        description: "I am a developer who loves learning latest technologies.",
        sections: [
            {
                title: "",
                description: "",
                image: ""
            }
        ],
        pitches: [
            "I am ready for new challenges, do you have one for me? <br /> Let's get to work!"
        ],
        skills: {
            Backend: ["PHP", "Laravel", "Codeigniter", "Wordpress", "Java", "NodeJS"],
            Frontend: ["HTML5", "CSS3", "JavaScript", {icon: "reactjs", name: "React.js"}, {icon: "vuejs", name: "Vue.js"}, "jQuery", "Bootstrap", "Materialize"],
            Database: ["MySQL", {icon: "mssql", name: "MS SQL Server"}],
            DevTools: ["Sass", "Composer", "NPM", "Webpack", "Git"],
            DevOps: [{icon: "aws", name: "Amazon Web Service"}, "Apache", "Nginx", "IIS", "Docker", "Redis"]
        },
        phoneau: "+61402194639",
        phonetw: "+886961500927",
        phoneauBeautified: "+(61) 402 194 639",
        phonetwBeautified: "+(886) 961 500 927",
        email: "chichunhung.5@gmail.com",
        github: "https://github.com/pardocch",
        linkedin: "https://www.linkedin.com/in/chichun-hung-5b7a08146/",

    },
    experience: 
        [
            {
                company: "Self-employed",
                role: [
                    {
                        name: "Website Freelancer",
                        start: "Aug 2019",
                        end: "Present",
                        type: ""
                    }
                ]
            },
            {
                company: "Kim An Pty Ltd",
                role: [
                    {
                        name: "Warehouse Allocator",
                        start: "Aug 2019",
                        end: "May 2020",
                        type: "Part Time"
                    }
                ]
            },
            {
                company: "Jheng Long Technology CO., Ltd.",
                role: [
                    {
                        name: "Full-Stack Developer",
                        start: "Aug 2017",
                        end: "Jun 2019",
                        type: "Full Time"
                    }
                ]
            },
            {
                company: "Theodore Roosevelt Medora Foundation",
                role: [
                    {
                        name: "Housekeeper ｜ Busser",
                        start: "Jun 2016",
                        end: "Sep 2016",
                        type: "Part Time"
                    }
                ]
            }
        ],
        education: {
            name: "National Formosa University, Taiwan",
            degree: "Bachelor of Computer Science and Information Engineering",
            start: "Sep 2013",
            end: "Jun 2017"
        },
        projects: [
            {
                title: "THAI-RIFFIC",
                description: "",
                url: "http://thai-riffic.com.au",
                avatar: "thairiffic.png",
                images: [],
                skills: ["PHP", "Wordpress", "CSS3", "AWS", "JavaScript"]
            },
            {
                title: "Jheng Long Technology",
                description: "",
                url: "http://service.jlweb.com.tw",
                avatar: "homepage.png",
                images: [],
                skills: ["PHP", "HTML5", "CSS3", "MSSQL", "JavaScript", "jQuery"]
            },
            {
                title: "Essay Correction Platform",
                description: "",
                url: "http://omr.jlweb.com.tw",
                avatar: "omr.png",
                images: [],
                skills: ["PHP", "HTML5", "CSS3", "MSSQL", "JavaScript", "jQuery"]
            },
            {
                title: "Gold Teacher",
                description: "",
                url: "http://gold.jlweb.com.tw",
                avatar: "gold.png",
                images: [],
                skills: ["PHP", "HTML5", "CSS3", "MSSQL", "JavaScript", "jQuery"]
            },
            {
                title: "E-Teaching Platform",
                description: "",
                url: "http://touch.jlweb.com.tw",
                avatar: "touch.png",
                images: [],
                skills: ["PHP", "HTML5", "CSS3", "MSSQL", "jQuery", "fabric.js"]
            },
            {
                title: "TodoList",
                description: "",
                url: "https://github.com/pardocch/todolist",
                avatar: "todolist.png",
                images: [],
                skills: ["React.js", "HTML5", "CSS3", "Webpack"]
            },
            {
                title: "Real-time Chatroom",
                description: "",
                url: "https://github.com/pardocch/chatroom",
                avatar: "chatroom.png",
                images: [],
                skills: ["PHP", "Laravel", "Redis", "React.js", "Webpack"]
            },
            {
                title: "Answered by scan code",
                description: "",
                url: "http://svr1.eclass.com.tw/qrcode",
                avatar: "qrcode.png",
                images: [],
                skills: ["PHP", "HTML5", "CSS3", "MSSQL", "JavaScript", "jQuery"]
            }
        ]
}

info.projects.map((project, index) => {
    if (project.avatar) {
        const projectAvatar = require(`responsive-loader?placeholder=true&name=./assets/images/portfolio/[hash].&sizes[]=400.&sizes[]=600.&sizes[]=800!./assets/images/portfolio/${
            project.avatar
        }`);
        project.avatar = projectAvatar;
        info.projects[index] = project;
    }
});

export default info;