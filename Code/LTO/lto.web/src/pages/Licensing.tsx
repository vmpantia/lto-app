import { useEffect, useState } from "react"

//Components
import PageTitle from "../components/Pages/PageTitle"
import Loader from "../components/Loader"

//Icons
import { CreditCardIcon } from "@heroicons/react/24/solid"

//DTO
import { LicenseDTO } from "../model/DTOs/LicenseDTO"

//API
import axiosAPI from "../api/axiosAPI"

//Services
import { getToken } from "../services/authService"
import { API_URL_GET_LICENSES } from "../model/constant"
import Badge from "../components/Badge"

const Licensing = () => {
    const [licenseList, setLicenseList] = useState([] as LicenseDTO[])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetctLicenceList();
            setIsLoading(false);
        }, 1000)
    }, [])

    const fetctLicenceList = async () => {
        await axiosAPI.get(API_URL_GET_LICENSES,
                            {
                                headers: {
                                    Authorization: `Bearer ${getToken()}`
                                }
                            })
                        .then(res => {
                            if(res.status === 200)
                                setLicenseList(res.data);
                        })
                        .catch(err => console.log(err));
    }

    return (
        <>
            <PageTitle icon={<CreditCardIcon />} 
                        title="Licensing" 
                        description="In this page you can see all the license stored in the system." />      
            <section>
                <table className="w-full text-sm text-center">
                    <thead>
                        <tr className="border-b font-medium">
                            <td className="p-2"><input type="checkbox"></input></td>
                            <td className="p-2">License No.</td>
                            <td className="p-2">Name</td>
                            <td className="p-2">City</td>
                            <td className="p-2">Renew Date</td>
                            <td className="p-2">Expiration Date</td>
                            <td className="p-2">Status</td>
                            <td className="p-2">Created Date</td>
                            <td className="p-2">Modified Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? 
                            <tr>
                                <td className="p-5" colSpan={9}>
                                    <Loader />
                                </td>
                            </tr>
                            :
                            (
                                licenseList.length == 0 ? 
                                    <tr>
                                        <td className="p-5" colSpan={9}>
                                            No records found in the system.
                                        </td>
                                    </tr>
                                :
                                    licenseList.map(data => {
                                        return (
                                            <tr key={data.internalID}>
                                                <td className="p-2"><input type="checkbox"></input></td>
                                                <td className="p-2">{data.licenseCode}</td>
                                                <td className="p-2">{`${data.lastName}, ${data.firstName}`}</td>
                                                <td className="p-2">{data.city}</td>
                                                <td className="p-2">{data.renewDate?.toString()}</td>
                                                <td className="p-2">{data.expirationDate?.toString()}</td>
                                                <td className="p-2">{<Badge description={data.statusDescription} type="status" />}</td>
                                                <td className="p-2">{data.createdDate?.toString()}</td>
                                                <td className="p-2">{data.modifiedDate?.toString()}</td>
                                            </tr>
                                        )
                                    })
                            )
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Licensing