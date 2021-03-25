import { useState , useEffect } from 'react';
import gsap from 'gsap'
import React from 'react'


const Button = ({children, ...props}) => {
    const [properties, setProperties] = useState(false)
    const [fontWeight, setFontWeight] = useState(400)
    const [backgroundColor, setBackgroundColor] = useState("#f7f7fa")
    const [color, setColor] = useState("#575757")
    const [border, setBorder] = useState('none')
    const [iconColor, setIconColor] = useState('invert(32%) sepia(0%) saturate(48%) hue-rotate(187deg) brightness(102%) contrast(92%)')
    useEffect(() => {
        if (props.xsmall) {
            setProperties(xsmall)
        }
        if (props.small) {
            setProperties(small)
        }
        if (props.medium) {
            setProperties(medium)
        }
        if (props.large) {
            setProperties(large)
        }
        if (props.bold) {
            setFontWeight(600)
        }
        if (props.outlined) {
            setBackgroundColor('transparent')
            setBorder('solid 1px #575757')
            setColor('#575757')
            if(props.color) {
                setBorder('solid 1px ' + props.color)
                setColor(props.color)
            }
        }

        if(props.color && !props.outlined) {
            setBackgroundColor(props.color)
        }

        if(props.textColor) {
            setColor(props.textColor)
        }

        if(props.theme) {
            if(props.theme === 'light') {
                setBackgroundColor("#f7f7fa")
                setColor('#575757')
                setIconColor('invert(32%) sepia(0%) saturate(48%) hue-rotate(187deg) brightness(102%) contrast(92%)')
                if(props.outlined) {
                    setBackgroundColor('transparent')
                    setBorder('solid 1px #575757')
                }
            }
            if (props.theme === 'dark') {
                setBackgroundColor("#292d33")
                setColor('#e9ebf0')
                setIconColor('invert(91%) sepia(3%) saturate(707%) hue-rotate(196deg) brightness(107%) contrast(88%)')
                if(props.outlined) {
                    setBackgroundColor('transparent')
                    setBorder('solid 1px #e9ebf0')
                    setColor('#e9ebf0')
                }
            }
        }


    }, [])

    const xsmall = {
        height: 24,
        padding: '2px 8px',
        fontSize: 12,
        lineHeight: 20,
        iconWidth : 15
    }

    const small = {
        height: 32,
        padding: '6px 8px',
        fontSize: 14,
        lineHeight: 20,
        iconWidth: 18
    }

    const medium = {
        height: 40,
        padding: '8px 12px',
        fontSize: 14,
        lineHeight: 20,
        iconWidth: 20
    }

    const large = {
        height: 48,
        padding: '13px 16px',
        fontSize: 16,
        lineHeight: 22,
        iconWidth: 20
    }

    const onClick = (event) => {
        console.log(event.target)
        let x = event.pageX - event.target.offsetLeft;
        let y = event.pageY - event.target.offsetTop;
        createRipple(x, y, event)
        gsap.to('.ripple', { duration: 1, width: 500, height: 500, opacity: 0 })
        if (props.onClick) {
            props.onClick()
        }

    }

    const createRipple = (x, y, event) => {
        let rippleElement = document.createElement('span');
        console.log(event.target)
        console.log(x,y)
        rippleElement.classList.add("ripple");
        rippleElement.style.position = 'absolute'
        rippleElement.style.left = x + 'px';
        rippleElement.style.top = y + 'px';
        rippleElement.style.background = '#000'
        if (props.theme === 'dark') {
            rippleElement.style.background = '#FFF'
        }
        if (props.outlined && !props.theme) {
            rippleElement.style.background = color
        }
        rippleElement.style.opacity = 0.5
        rippleElement.style.borderRadius = '50%'
        rippleElement.style.transform = 'translate(-50%, -50%)'
        rippleElement.style.width = '0px'
        rippleElement.style.height = '0px'
        event.target.appendChild(rippleElement);
        setTimeout(function () {
            rippleElement.remove();
        }, 400);
    }

    return (
        <>
            <style jsx>{`
                .button {
                    display:flex;
                    flex-direction: row;
                    align-items: center;
                    position : relative;
                    height: ${properties.height}px;
                    background-color: ${backgroundColor};
                    border: ${border};
                    border-radius: 6px;
                    padding: ${properties.padding};
                    font-weight: ${fontWeight};
                    font-size: ${properties.fontSize}px;
                    line-height: ${properties.lineHeight}px;
                    cursor: pointer;
                    outline: none;
                    color: ${color};
                    overflow:hidden;
                    /* box-shadow:0px 4px 4px #c7c2c2; */
                }
                .button:hover {
                    filter: saturate(150%);
                }
                .contentContainer {
                    display:flex;
                    flex-direction:row;
                    align-items: center;
                }
                 .iconLeft, .iconRight {
                    width: ${properties.iconWidth}px;
                    filter : ${iconColor};
                }
                .iconLeft {
                    margin-right:8px;
                }
                .iconRight {
                    margin-left:8px;
                }

            `}</style>
            <div className='container'>
                <button className="button" onClick={onClick} type={props.submit ? 'submit' : 'button'}>
                    {props.iconLeft ? <img className='iconLeft' src={props.iconSrc}></img> : null}{children}{props.iconRight ? <img className='iconRight' src={props.iconSrc}></img> : null}
                </button>
            </div>
        </>
    )
}


export default Button