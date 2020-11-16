import React, { Component } from 'react';
import Title from "./Title";
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa";

export default class Services extends Component {
    state = {
        services : [{
            icon: <FaCocktail/>,
            title: "free cocktails",
            info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, est neque doloribus, fugit animi deleniti laboriosam blanditiis natus esse quia accusantium nisi quo reprehenderit doloremque tempore! Neque velit facilis deserunt."
        },
        {
            icon: <FaHiking/>,
            title: "Endless Hiking",
            info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, est neque doloribus, fugit animi deleniti laboriosam blanditiis natus esse quia accusantium nisi quo reprehenderit doloremque tempore! Neque velit facilis deserunt."
        },
        {
            icon: <FaShuttleVan/>,
            title: "free Shuttle",
            info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, est neque doloribus, fugit animi deleniti laboriosam blanditiis natus esse quia accusantium nisi quo reprehenderit doloremque tempore! Neque velit facilis deserunt."
        },
        {
            icon: <FaBeer/>,
            title: "Strongest Beer",
            info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, est neque doloribus, fugit animi deleniti laboriosam blanditiis natus esse quia accusantium nisi quo reprehenderit doloremque tempore! Neque velit facilis deserunt."
        }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return(
                             <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
