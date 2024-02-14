import { ReactComponent as CheckSVG} from "./check.svg"
import { ReactComponent as DeleteSVG} from "./delete.svg"

const iconTypes = {
    "check": (color) => 
        <CheckSVG className="Icon-svg" fill={color}/>
    ,
    "delete": (color) => 
        <DeleteSVG className="Icon-svg" fill={color}/>
    ,
}

export function TodoIcon ({type, color, onClick}) {
    return (
        <span 
        className={`Icon Icon-${type}`}
        onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}