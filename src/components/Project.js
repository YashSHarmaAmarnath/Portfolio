import React from 'react'
import projects from '../project.json'


export const Project = () => {
    // let projects = 

    return (
        <div className='projects'>

            {projects.map((item, index) => (
                <div className="project" >
                    <h2>{item.name}</h2>
                    {/* <li key={index}> */}
                    {/* <h1>{item.name}</h1> */}
                    <div className="imgcontainner">
                        <img src={item.image_url} alt={item.name} />
                    </div>
                    <div className="projectInfoContainer">
                        {/* <h3>{item.name}</h3> */}
                        <p>{item.desc}</p>
                    </div>
                    {/* </li> */}
                </div>
            ))}
        </div>
    )
}
