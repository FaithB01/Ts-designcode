import React from 'react';
import Project from './Project';



function ProjectList() {
  const projects = [
    {
      title: 'Workcation',
      repo: 'debbielewis/workcation',
      repoUrl: 'https://example.com/debbielewis/workcation',
      tech: 'Laravel',
      lastDeploy: '3h ago',
      location: 'United States',
      starred: true,
      active: true,
    },
    {
      title: 'EasyWire',
      repo: 'debbielewis/easywire',
      repoUrl: 'https://example.com/debbielewis/easywire',
      tech: 'NextJS',
      lastDeploy: '6h ago',
      location: 'United States',
      starred: true,
      active: true,
    },
    {
      title: 'Workflow',
      repo: 'debbielewis/workflow',
      repoUrl: 'https://example.com/debbielewis/workflow',
      tech: 'Laravel',
      lastDeploy: '4d ago',
      location: 'United States',
      starred: true,
      active: true,
    },
    {
      title: 'KiteTail',
      repo: 'debbielewis/kitetail',
      repoUrl: 'https://example.com/debbielewis/kitetail',
      tech: 'Laravel',
      lastDeploy: '4d ago',
      location: 'United States',
      starred: false,
      active: false,
    },
    {
      title: 'Talk Slides',
      repo: 'debbielewis/talk-slides',
      repoUrl: 'https://example.com/debbielewis/talk-slides',
      tech: 'Laravel',
      lastDeploy: '3h ago',
      location: 'United States',
      starred: true,
      active: true,
    },
    {
      title: 'Personal Website',
      repo: 'debbielewis/personal-website',
      repoUrl: 'https://example.com/debbielewis/personal-website',
      tech: 'NextJS',
      lastDeploy: '6h ago',
      location: 'United States',
      starred: false,
      active: true,
    },
    {
      title: 'Digest',
      repo: 'debbielewis/digest',
      repoUrl: 'https://example.com/debbielewis/digest',
      tech: 'Laravel',
      lastDeploy: '3h ago',
      location: 'United States',
      starred: false,
      active: false,
    },
  ]

  const projectList = projects.map(project => (<Project project={project} />))
  return (
    <>
      <article className="story half ">
        <div className="overview ">
          <div className="projects ">
            <h2 className="hed ">Projects</h2>
            <span>
              <button id="sort-menu "  className="buttons " >

                <svg className="corn" xmlns="http://www.w3.org/2000/svg " width="30 " height="20 ">
                  <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z " />
                </svg>
                <div className="sm">Sort</div>

                <svg className="corn" xmlns="http://www.w3.org/2000/svg " width="30 " height="20 ">
                  <path fill-rule="evenodd " d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z " clip-rule="evenodd " />
                </svg>
              </button>
            </span>
          </div>
          {projectList}
        </div>
      </article>
    </>
  );
}



export default ProjectList;
