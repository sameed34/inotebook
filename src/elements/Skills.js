import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="maincontainer">
        <div className="heading ">
          <h6> Skills</h6>
          <div className="innercontainer">
            <div className="fcont my-2">
              <h2 className="hh">Frontend Technologies</h2>
              <br />
              <div className="innerfcont">
              <p>I have been working on REACT, NEXT,Tailwind, Redux, SASS, Storybooks, HTML5, CSS3, MUI, AntD and 
          some experience in Babylon. I am expert in transforming Figma (or whatever you use) designs into high-performant, elegant looking designs. 
          I have worked on complex UIs and have a command on mobile first designs for better responsiveness.
          </p>
              </div>
            </div>
            <div className="scont my-2">
              <h2 className="hh">Backend Stack</h2>
              <br />
              <div className="innerscont">
              <p>
        I have experience on NodeJS, NestJS, Express, GraphQL and if we talk about ORMs I have worked with Mongoose, TypeORM, Sequelize and Prisma. 
        I have worked on projects requiring low-latency architecture along-with handling sensitive data. 
        I have also developed micro-services in few projects and love them for their efficiency. As a side hustle, I am learning about
        blockchain and Web3 technologies, and have learned the Solidity for making smart contracts.
        </p>
              </div>
            </div>
            <div className="tcont my-2">
              <h2 className="hh">Databases</h2>
              <br />
              <div className="innertcont">
              <p>As you know the Databases are backbone of an application, and I have experience in working with 
          MySQL, PostgreSQL and MongoDB for the major part of my career. I know about the use cases of these
          and I am able to differentiate between the pros and cons. Moreover I have participated in designing the architecture
          and also optimizing the existing ones, through adding or in some cases removing the Indexes, changing the structure 
          because of change in requirements and according to data loads needed and ofc DB Caching. I have also worked on load balancing
          and DB partitioning in regards of making it scalable and highle available.
          </p>
              </div>
            </div>
            <div className="rcont my-2">
              <h2 className="hh">Related Skills</h2>
              <br />
              <div className="innerrcont">
              <p>Apart from all the skills mentioned above, I have worked a little on Devops where required, using Nginx and load balancing. 
          I am also a great Team Player, can work synchronously or asynchronously, whatever is required. I have lead the projects , mentoring juniors and 
          communicating with stake holders. I have also no hesitation in learning new technologies.
          </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
