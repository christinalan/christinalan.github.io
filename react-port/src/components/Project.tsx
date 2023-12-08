import './style.css';

// common layout for showing projects

interface projectDataType {
    projectData: {
        stack: string 
        link: string
        description: string 
        logo: string 
        image1: string 
        info1: string 
        image2: string 
        info2: string 

    }
}

const BaseProject = ({projectData}: projectDataType) => {
    return (
        <div className="project-wrapper max-w-sm sm:max-w-md lg:max-w-3xl sm:pr-8">
            <div className="project-header flex justify-around sm:justify-between items-center sm:items-start max-w-sm sm:max-w-3xl text-center gap-1">
                <div className="header-left text-left leading-6">
                    <p className="project-stack text-lg sm:text-sm font-extralight italic">{projectData.stack}</p>
                    <a className="underline text-lg sm:text-sm font-extralight italic" href={projectData.link}>Link</a>
                </div>
    
                <img className="w-20 opacity-80" src={projectData.logo} alt="logo"/>
            </div>
            <h4 className="project-description mt-5 sm:mt-8 font-normal text-lg sm:text-sm leading-8 sm:leading-8">{projectData.description}</h4>
            <div className={`${projectData.image1 ? 'mt-5' : 'mt-0'} more-info flex flex-col sm:flex-row items-center gap-4 text-lg sm:text-sm`}>
                {projectData.image1 ? <img className="max-w-sm rounded-3xl" src={projectData.image1} alt="image of project"/> : ''}
                <p>{projectData.info1}</p>
            </div>
            <div className="more-info flex flex-col sm:flex-row items-center gap-2 text-lg sm:text-sm mt-8">
                {projectData.image2 ? <img className="max-w-sm rounded-3xl" src={projectData.image2} alt="image of project"/> : ''}
                <p>{projectData.info2}</p>
            </div>
        
        </div>
    )
}

export default BaseProject