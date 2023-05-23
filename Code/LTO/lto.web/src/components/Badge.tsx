import { BadgeProps } from "../model/Poperties/ComponentProperties"

const Badge = ({description, type}:BadgeProps) => {
    let defaultStyle = "text-xs text-white rounded";
    const getStyle = ():any => {

        let value = type.toLowerCase() + "-" + description.toLowerCase();
        switch(value) {
            case "status-enabled":
                return defaultStyle + " bg-green-500";
            case "status-disabled":
                return defaultStyle + " bg-red-500";
            default:
                return defaultStyle;
        }
    }

    return (
        <div className={getStyle()}>
            {description}
        </div>
    )
}

export default Badge