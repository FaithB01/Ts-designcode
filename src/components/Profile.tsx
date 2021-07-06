import React from 'react';

import Githubicon from './Githubicon';

interface Props {
    name: String;
    username: String;
    avatar:string;
    projectCount?:any;
    membership:string; 
    githubUrl:string;
    
  }

const Row :React.FC <Props> = (props) => {
  return (
    <>
      <article className="story quarter">
        <div className="details">
          <div className="profile">
            <img className="photo" src={props.avatar} width="70 " height="70 " alt=" " />
            <div className="name ">

              <div className="name-1 ">{props.name}</div>
              <span>
                <div className="repo">
                  <Githubicon />
                  <div className="dee">{props.username}</div></div>
              </span>

            </div>
          </div>
          <div className="screen-button ">
            <button type="button" className="screen-button " >
              New Project
            </button>
            <button className="screen-button ">Invite team</button>
          </div>
          <div className="badge ">
            <div className="badge1">
              <svg xmlns="http://www.w3.org/2000/svg " width="20 " height="20 " viewBox="0 0 20 20 " fill="currentColor ">
                <path fill-rule="evenodd " d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812
                    2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1
                    1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z " clip-rule="evenodd " />
              </svg>
              <span className="pro">{props.membership} </span>
            </div>
            <div className="badge2">

              <svg xmlns="http://www.w3.org/2000/svg " width="20 " height="20 " viewBox="0 0 20 20 " fill="currentColor ">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z " />
              </svg>
              <span className="pro">{props.projectCount} Projects</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Row;
