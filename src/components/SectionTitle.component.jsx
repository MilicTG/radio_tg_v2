import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="mt-3 mb-5">
            <h2 className="text-3xl mb-1 text-gray-800">
                {props.title}
            </h2>
            <div className="w-28 h-1 rounded bg-blue-700"/>
        </div>
    )
}

export default SectionTitle