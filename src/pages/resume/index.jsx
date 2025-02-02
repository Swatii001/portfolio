import React from "react";
import {data} from './utils';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import './style.scss';

const Resume=()=>{
    return(
        <section id="resume" className="resume">
            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text">Experience</h3>
                    <VerticalTimeline
                    layout={'1-coloum'}
                    lineColor="var(--yellow-theme-main-color"
                    >
                        {
                            data.experience.map((item,i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className="timeline__experience__vertical-timeline-element"
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3 className="vertical-timeline-element-title">
                                            {item.title}
                                        </h3>
                                        
                                        <p>
                                            {item.description}
                                        </p>

                                    </div>
                                    
                                </VerticalTimelineElement>

                            ))
                        }

                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">Eduction</h3>
                    <VerticalTimeline
                    layout={'1-coloum'}
                    lineColor="var(--yellow-theme-main-color)"
                    >
                    {
                            data.education.map((item,i)=>(
                                <VerticalTimelineElement
                                key={i}
                                className="timeline__experience__vertical-timeline-element"
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3 className="vertical-timeline-element-title">
                                            {item.title}
                                        </h3>
                                        <h4 className="vertical-timeline-element-subtitle">
                                            {item.subTitle}
                                        </h4>
                                        <p>
                                            {item.description}
                                        </p>

                                    </div>
                                    
                                </VerticalTimelineElement>

                            ))
                        }
                        </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}

export default Resume;