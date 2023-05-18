import { useEffect, useState } from "react"

//Components
import PageTitle from "../components/Pages/PageTitle"

//Icons
import CreditCardIcon from "@heroicons/react/24/solid/CreditCardIcon"

//DTO
import { LicenseDTO } from "../model/DTOs/LicenseDTO"
import axiosAPI from "../api/axiosAPI"
import { getToken } from "../services/authService"

const Licensing = () => {
    const [licenseList, setLicenseList] = useState([] as LicenseDTO[])

    useEffect(() => {
        setTimeout(() => {
            fetctLicenceList();
        })
    }, [])

    const fetctLicenceList = async () => {
        await axiosAPI.get("License/GetLicenses",
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
                            licenseList.length == 0 ? 
                                <tr>
                                    <td className="p-2" colSpan={8}>
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
                                            <td className="p-2">{data.statusDescription}</td>
                                            <td className="p-2">{data.createdDate?.toString()}</td>
                                            <td className="p-2">{data.modifiedDate?.toString()}</td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Licensing