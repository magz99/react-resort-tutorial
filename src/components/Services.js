import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus vulputate mi, vel eleifend quam consequat sed. Etiam id orci blandit, malesuada urna id, lacinia eros.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus vulputate mi, vel eleifend quam consequat sed. Etiam id orci blandit, malesuada urna id, lacinia eros.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus vulputate mi, vel eleifend quam consequat sed. Etiam id orci blandit, malesuada urna id, lacinia eros.'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus vulputate mi, vel eleifend quam consequat sed. Etiam id orci blandit, malesuada urna id, lacinia eros.'
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
