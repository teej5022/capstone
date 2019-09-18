import React from "react";
import BackgroundSlider from 'react-background-slider';

const About = () => {
    return (
        <div className="about-wrapper">
            <BackgroundSlider
                images={['https://wallpapercave.com/wp/Eee0Izp.jpg', 'https://wallpaperaccess.com/full/96464.jpg']}
                duration={8}
                transition={2}
            />
            <div className="about-img">
                <img src="https://www.calvinandhobbes.com/wp-content/uploads/2016/09/character-calvin.jpg" alt="profile" />

            </div>
            <div className="about-me">
                <p>My name is TJ Schultz. I'm a Junior Software Developer out of Omaha, NE.</p>
                <hr />
                <p>I attended school at Bottega based out of Lehi, Utah.</p>
                <hr />
                <p>With my certification, I plan on kicking ass and chew bubble gum. But I'm all out of bubble gum.</p>
            </div>



        </div>
    )
};

export default About;