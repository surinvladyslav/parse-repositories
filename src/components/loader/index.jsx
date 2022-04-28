import React from "react";

import './index.scss';

export default function Loader() {
    return (
        <>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </>
    )
}