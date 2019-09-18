import React from "react";
import BackgroundSlider from 'react-background-slider';




const Home = () => {
    return (

        <div className="welcome">
            <BackgroundSlider
                images={['https://wallpapercave.com/wp/Eee0Izp.jpg', 'https://wallpaperaccess.com/full/96464.jpg']}
                duration={8}
                transition={2}
            />
            <h1>WELCOME TO MY CAPSTONE!!!</h1>
            <div>
                <hr />
            </div>
            <div className="what">
                <p>Go to the Lords link to arrange your favorite Lord of the Rings characters from favorite to least favorite</p>
                <p></p>
            </div>

        </div>


    )
};

export default Home;