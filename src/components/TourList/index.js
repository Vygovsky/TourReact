import React, {Component} from 'react';
import './TourList.scss';
import Tour from "../Tour/Tour";
import {tourData} from '../tourData';

export default class TourList extends Component {
    state = {
        tours: tourData
    };

    removeTour = (id) => {
        const {tours} = this.state;
        const sortTour = tours.filter(tour => tour.id !== id)
        this.setState({
            tours: sortTour
        })
    };


    render() {
        const {tours} = this.state;
        return (
            <section className="tourList">
                {tours.map(item => (
                    <Tour key={item.id} tour={item} removeTour={this.removeTour}/>
                ))}
            </section>
        );

    }
}
;



