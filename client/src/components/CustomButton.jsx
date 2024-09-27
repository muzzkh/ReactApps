import React from 'react'
import state from '../store'
import {useSnapshot} from 'valtio'

const CustomButton = ({type, title, customStyles, handleClick}) => {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        switch (type) {
            case "filled":
                return {
                    backgroundColor: snap.color,
                    color: "#fff"
                }
            case "outlined":
                return {
                    backgroundColor: "transparent",
                    border: "1px solid #2563EB",
                    color: "#2563EB"
                }
            default:
                return {
                    backgroundColor: "#2563EB",
                    color: "#fff"
                }
        }
    }
  
    return (
    <button
        className={`px-2 py-1.5 flex-11 rounded-md ${customStyles}`}
        style={generateStyle(type)}
        onClick={handleClick}
    >
        {title}

    </button>
  )
}

export default CustomButton