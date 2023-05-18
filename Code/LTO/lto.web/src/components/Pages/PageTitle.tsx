//Component Properties
import { PageTitleProps } from '../../model/Poperties/ComponentProperties'

const PageTitle = ({icon, title, description}:PageTitleProps) => {
  return (
    <div className='inline-flex w-full pb-3 mb-5 border-b'>
        <div className='w-9 mt-1 mr-3'>
            {icon}
        </div>
        <div>
            <p className='text-md font-medium'>{title}</p>
            <p className='text-xs'>{description}</p>
        </div>
    </div>
  )
}

export default PageTitle