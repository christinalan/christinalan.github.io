import BaseProject from './Project'
import birbs_logo from '../assets/birbs_logo.png'
import birbs2 from '../assets/birbs2.png'

const Birbs = () => {
    const projectData = {
        stack: "React, React Router, Tailwind, Firebase",
        link: "https://fir-practice-4f291.web.app/",
        description: ` As an active and passionate birder, I’m a fan of Merlin Bird ID, an application created by Cornell Lab.
        However, finding it difficult to quickly search for recently-spotted birds in any region of the world,
        both on their website and mobile application, I combined Cornell's and Wikipedia's API to create a mini library. It's simple way to
        discover new birds anywhere in the world, along with an image and fact from Wikipedia.`,
        logo: birbs_logo,
        image1: ``,
        info1: ``,
        image2: '',
        info2: ``,

    }

    return (
        <div>
            <BaseProject projectData={projectData} />
            <div className="more-info flex flex-col sm:flex-row items-center mt-0">
                <img className="max-w-sm sm:max-w-xl rounded-3xl" src={birbs2} alt="image of project"/>
            </div>
        </div>
    )
}

export default Birbs;