import './style.css';
import BaseProject from './Project'
import maplibs from '../assets/maplibs.png'
import clouds from '../assets/clouds.gif'
import maplibs2 from '../assets/maplibs2.jpg'
import maplibs3 from '../assets/maplibs3.png'
import maplibs4 from '../assets/maplibs4.png'
import maplibs5 from '../assets/maplibs5.png'

const MapLibs = () => {
    const projectData = {
        stack: 'React, Three.JS, GLSL, MongoDB, AWS, Illustrator',
        link: "https://www.maplibsproject.com/",
        description: `In collaboration with Chandra Christmas-Rouse, I built this site to represent the culmination of Chandra's residency
        in Bronzeville, Chicago. From her research and work with elder community residents, we created a website modeled after the classic word game
        Mad Libs. By keeping the design simple and reminiscent of the game, the goal was to create an inviting atmosphere for Bronzeville community members to visit
        and contribute.`,
        logo: maplibs,
        image1: clouds,
        info1: `To suggest the feeling of a living atlas, I incorporated a shader to create moving and interactive clouds in the background.`,
        image2: maplibs2,
        info2: `Bringing in Mad Libs, the site uses the game as a form that users can submit to, adding their images, sounds, and other memories to the collection.`,
    }

    return (
        <div>
            <BaseProject projectData={projectData} />
            <div className="extra-info sm:pr-8">
                <div className="more-info flex flex-col sm:flex-row items-center gap-2 mt-10">
                <p className="more-info-description text-lg sm:text-sm px-6">One of the more valuable outcomes of working on this project was learning how to balance Chandra's vision and community work with the design.
                    Because most of the residents she worked with were not used to working extensively with computers, I aimed for a friendly and familiar look combined with more modern functionality. 
                </p>
                    <div className="flex flex-col gap-3">
                        <img className="project-image-small rounded-lg" src={maplibs3}/>
                        <img className="project-image-small rounded-lg" src={maplibs4}/>
                        <img className="project-image-small rounded-lg" src={maplibs5}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MapLibs;