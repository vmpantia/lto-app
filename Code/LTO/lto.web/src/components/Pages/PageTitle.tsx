//Component Properties
import { PageTitleProps } from '../../model/Poperties/ComponentProperties'

const PageTitle = ({icon, title, description}:PageTitleProps) => {
  return (
    <div>
        {icon}
        <div>
            {title}
            {description}
        </div>
    </div>
  )
}

export default PageTitle