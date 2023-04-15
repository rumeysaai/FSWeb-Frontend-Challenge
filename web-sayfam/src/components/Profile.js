import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/action";
import H2 from "../atoms/H2";
import H3 from "../atoms/H3";
import H4 from "../atoms/H4";

const Profile = () => {
    const profile = useSelector((store) => store.profile)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, [])
    
    return (
        <>
            <div className="profile-container mx-auto text-left max-w-screen-xl">
                <H2>Profile</H2>
                <div className="profile-content flex justify-between mt-4 mb-12">
                    <div className="profile-items">
                        <div className="profile-header">
                            <H3>Profile</H3>
                        </div>
                        <div className="profile-item flex flex-col">
                            <div className="p-item flex justify-start birthday">
                                <H4>Birthday</H4>
                                <p className="dark:text-gray-200 text-xl text-black-500 justify-self-start w-3/5 my-1">{profile.birthday}</p>
                            </div>
                            <div className="p-item flex justify-start city">
                                <H4>City</H4>
                                <p className="dark:text-gray-200 text-xl text-black-500 justify-self-start w-3/5 my-1">{profile.city}</p>
                            </div>
                            <div className="p-item flex justify-start education">
                                <H4>Education</H4>
                                <p className="dark:text-gray-200 text-xl text-black-500 justify-self-start w-3/5 my-1">{profile.education}</p>
                            </div>
                            <div className="p-item flex justify-start preference">
                                <H4>Preference</H4>
                                <p className="dark:text-gray-200 text-xl text-black-500 justify-self-start w-3/5 my-1">{profile.preference}</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-about">
                        <H3>About Me</H3>
                        <p className="dark:text-gray-200 text-xl text-neutral-500">{profile.about1}</p>
                        <p className="dark:text-gray-200 text-xl text-neutral-500 mt-4">{profile.about2}</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        </>
    )
}
export default Profile;