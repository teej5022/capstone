import React from 'react';
import { List, arrayMove, } from 'baseui/dnd-list';
// import { styled } from 'baseui';
// import { Provider as StyletronProvider } from 'styletron-react';
// import { Client as Styletron } from "styletron-engine-atomic";
import styled from 'styled-components';
import BackgroundSlider from 'react-background-slider';



const Characters = styled.div`
    color: #bf1919;
    border: 2px solid black;
    font-weight: heavy;
    padding: 40px;
    font-size: 35px;  
    background: #9c63a6;     
`






export default class Lord extends React.Component {
    state = {
        items: [
            'Frodo',
            'Sam',
            'Merry',
            'Pippin',
            'Gandalf',
            'Aragorn',
            'Boromir',
            'Gimli',
            'Legolas'

        ],
    };
    render() {
        return (
            <Characters>
                <List
                    items={this.state.items}
                    onChange={({ oldIndex, newIndex }) =>
                        this.setState(prevState => ({
                            items: arrayMove(prevState.items, oldIndex, newIndex),
                        }))
                    }
                />
                <BackgroundSlider
                    images={['https://wallpapercave.com/wp/Eee0Izp.jpg', 'https://wallpaperaccess.com/full/96464.jpg']}
                    duration={8}
                    transition={2}
                />
            </Characters>


        );
    }
}