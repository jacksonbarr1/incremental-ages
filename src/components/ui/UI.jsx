import React, { useState, useEffect } from 'react'
import './UI.css'
import ResourcePanel from "../resourcePanel/ResourcePanel.jsx";

const UI = () => {
    const [resources, setResources] = useState([])

    return (
        <div className="ui-container">
            <ResourcePanel resources={resources} />
        </div>
    )
}

export default UI