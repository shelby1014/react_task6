import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
    return (
        <div className="works">
            <Card
                icon={faBriefcase}
                title="Education"
                body={
                    <div className="works-body">
                        <div className="work">
                            <img
                                src="./mfs.jpeg"
                                alt="School"
                                className="work-image"
                            />
                            <div className="work-title">May Flower School</div>
                            <div className="work-subtitle">
                                I - XII
                            </div>
                            <div className="work-duration">2008 - 2020</div>
                        </div>

                        <div className="work">
                            <img
                                src="./vit.png"
                                alt="vit"
                                className="work-image"
                            />
                            <div className="work-title">Vellore Institute of Technology</div>
                            <div className="work-subtitle">
                                Computer Science and Enginnering
                            </div>
                            <div className="work-duration">2021 - Present</div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Works;
