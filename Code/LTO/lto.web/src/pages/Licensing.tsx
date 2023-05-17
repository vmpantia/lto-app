//Components
import CreditCardIcon from "@heroicons/react/24/solid/CreditCardIcon"
import PageTitle from "../components/Pages/PageTitle"

const Licensing = () => {
    return (
        <PageTitle icon={<CreditCardIcon />} 
                    title="Licensing" 
                    description="In this page you can see all the license stored in the system." />
    )
}

export default Licensing