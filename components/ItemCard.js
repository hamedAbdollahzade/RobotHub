"use client";

import {useState} from "react";
import {getIcon} from "./icons";

export default function ItemCard({item, index}) {
    const [pressed, setPressed] = useState(false);
    const isTel = item.url.startsWith("tel:");
    const isExternal = /^https?:\/\//.test(item.url);

    return (
        <a
            href={item.url}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`card${pressed ? " is-pressed" : ""}`}
            style={{"--stagger": index}}
            onPointerDown={() => setPressed(true)}
            onPointerUp={() => setPressed(false)}
            onPointerLeave={() => setPressed(false)}
            onPointerCancel={() => setPressed(false)}
        >
      <span className="card-icon" aria-hidden="true">
        {getIcon(item.icon)}
      </span>
            <span className="card-text">
        <span className="card-title">{item.title}</span>
                {item.description ? (
                    <span className="card-desc">{item.description}</span>
                ) : null}
      </span>
        </a>
    );
}
