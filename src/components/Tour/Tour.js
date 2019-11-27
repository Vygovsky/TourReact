import React, {Component} from 'react';
import './Tour.scss'


export default class Tour extends Component {

    state = {
        showInfo: false
    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    };

    render() {
        const {id, name, city, info, img} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img width="100"
                         src={img}
                         alt="city"/>
                    <span className="close-btn" onClick={() => removeTour(id)}>
                    <i className="delete-btn"/> Remove
                </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info {" "}
                        <span onClick={this.handleInfo}>
                            <i className="btn btn-default dropdown-toggle"/>
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        );

    }
};



