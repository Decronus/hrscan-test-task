import "./style.css";
import { API_URL } from "../../utils/constants";
import { getAgeString } from "../../utils/functions/age";

const UserCard = ({ user }) => {
    return (
        <div className="user-card-wrap">
            <div>
                <div
                    className="user-card-avatar"
                    style={{
                        backgroundImage: user.photoLink
                            ? `url(${API_URL}${user?.photoLink})`
                            : "url('https://profi.erzrf.ru/upload/activity/speaker/avatar_boy.png')",
                    }}
                />
            </div>
            <div className="user-card-data">
                <p className="user-card-name">{user.name || user.email}</p>
                {user?.birthdate && <p className="user-card-age">{getAgeString(user.birthdate)}</p>}
            </div>
        </div>
    );
};

export default UserCard;
