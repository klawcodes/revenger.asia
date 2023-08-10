import React, {useState, useRef, useEffect} from "react";
import "./project.css"
import kereb from '../media/KEREB 2.webm'
import giv from '../media/rxbxg.webm'
import pega from '../media/collab.webm'
import skrill from '../media/RIOT-x-Skrill.webm'

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
                    <a target="_blank" href="https://www.instagram.com/p/Ct_iDdQyAjd/?img_index=1">Original post on Instagram</a>
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
                    <a target="_blank" href="https://www.instagram.com/p/Cvb8PAWygEV/?img_index=1">Original post on Instagram</a>
                </div>
            </div>
            <div className="vid">
                <video data-setup='{}' autoPlay="true" loop="true" muted="true" playsInline>
                    <source src={skrill} type="video/webm" />
                </video>
                <div className="text">
                    <text>
                        GOOD SPACE
                    </text>
                    <p>animation, lighting, and 3d modeling character from Alfred Pietroni using music from Skrillex ft. Starrah - Good Space</p>
                    <a target="_blank" href="https://www.instagram.com/p/Couv2bOpacQ/">Original post on Instagram</a>
                </div>
            </div>
            <div className="vid">
                <video data-setup='{}' autoPlay="true" loop="true" muted="true" playsInline>
                    <source src={pega} type="video/webm" />
                </video>
                <div className="text">
                    <text>
                        IN THE MIDDLE OF THE NIGHT (PEGASUS)
                    </text>
                    <p>animation, lighting, rigging, and 3d modeling in collaboration with <a target="_blank" href="https://www.instagram.com/sxtnstudio_">@sxtnstudio_</a>, <a target="_blank" href="https://www.instagram.com/_lokiloki___">@_lokiloki___</a>, <a target="_blank" href="https://www.instagram.com/dat.krom.boi">@dat.krom.boi</a></p>
                    <a target="_blank" href="https://www.instagram.com/p/Cut5wK-SbFT/?img_index=1">Original post on Instagram</a>
                </div>
            </div>
            
        </div>
    )
}

export default Project