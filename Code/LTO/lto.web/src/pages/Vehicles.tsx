//Components
import PageTitle from "../components/Pages/PageTitle"
import TruckIcon from "@heroicons/react/24/solid/TruckIcon"

const Vehicles = () => {
    return (
        <PageTitle icon={<TruckIcon />} 
                    title="Vechicles" 
                    description="In this page you can see all the vechicles stored in the system." />
    )
}

export default Vehicles