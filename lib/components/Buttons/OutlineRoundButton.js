import React from 'react'
const OutlineRoundButton = (props) => {
    return (
        <>
            <style jsx>{`
                button {
                    padding: 9px 19px;
                    text-align: left;
                    background-color: transparent;
                    border-radius: 100px;
                    border: 2px ${props.color} solid;
                    font-weight: 600;
                    font-size: 17px;
                    color: ${props.color};
                    margin: 6px 0px 30px 0px;
                    cursor: pointer;
                    outline: none;
                }
            `}</style>
            <button onClick = {props.onClick}>{props.textContent}</button>
        </>
    )
}

export default OutlineRoundButton