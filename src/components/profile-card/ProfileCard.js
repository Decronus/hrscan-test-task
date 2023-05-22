import "./style.css";
import { API_URL } from "../../utils/constants";
import { getAgeString } from "../../utils/functions/age";

const ProfileCard = ({ user }) => {
    return (
        <div className="profile-card-wrap">
            <div>
                <div
                    className="profile-card-avatar"
                    style={{
                        backgroundImage: user?.photoLink
                            ? `url(${API_URL}${user?.photoLink})`
                            : "url('https://profi.erzrf.ru/upload/activity/speaker/avatar_boy.png')",
                    }}
                />
            </div>
            <div className="profile-card-data">
                <p className="profile-card-name">{user?.name || user?.email}</p>
                <div className="profile-card-age-gender">
                    {user?.birthdate && <p className="profile-card-age">{getAgeString(user.birthdate)},</p>}
                    <p className="profile-card-gender">{user?.gender}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
