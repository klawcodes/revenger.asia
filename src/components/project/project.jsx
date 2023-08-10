import React, {useState, useRef, useEffect} from "react";
import "./project.css"
import kereb from '../media/KEREB 2.webm'
import giv from '../media/rxbxg.webm'
import skrill from '../media/RIOT x Skrill.mp4'

const Project = () => {
    return (
        <div id="ppr">
            
            <div className="vid">
                <video data-setup='{}' autoPlay="true" loop="true" muted="true" playsInline>
                    <source src={kereb} type="video/webm" />
                </video>
                <div className="text">
                    <text>
                        *WORLD TRANSMUTATION*
                    </text>
                    <p>3D modeling, animation, lighting, and rendering using SVDDEN DEATH's song "KEREBEROT"</p>
                    <a href="">Original post on Instagram</a>
                </div>
            </div>
            <div className="vid">
                <video data-setup='{}' autoPlay="true" loop="true" muted="true" playsInline>
                    <source src={giv} type="video/webm" />
                </video>
                <div className="text">
                    <text>
                        GIVENCHY SS23
                    </text>
                    <p>3D modeling, animation, lighting, and graphic motion design for Givenchy SS23 (fake project)</p>
                    <a href="">Original post on Instagram</a>
                </div>
            </div>
            <div className="vid">
                <video data-setup='{}' autoPlay="true" loop="true" muted="true" playsInline>
                    <source src={skrill} type="video/mp4" />
                </video>
                <div className="text">
                    <text>
                        GOOD SPACE
                    </text>
                    <p>animation, lighting, and 3d modeling character from Alfred Pietroni using music from Skrillex ft. Starrah - Good Space</p>
                    <a href="">Original post on Instagram</a>
                </div>
            </div>
            
        </div>
    )
}

export default Project