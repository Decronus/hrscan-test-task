import "./style.css";
import { API_URL } from "../../utils/constants";
import { getAgeString } from "../../utils/functions/age";

const AccountCard = ({ user }) => {
    return (
        <div className="account-card-wrap">
            <div>
                <div
                    className="account-card-avatar"
                    style={{
                        backgroundImage: user?.photoLink
                            ? `url(${API_URL}${user?.photoLink})`
                            : "url('https://profi.erzrf.ru/upload/activity/speaker/avatar_boy.png')",
                    }}
                />
            </div>
            <div className="account-card-data">
                <p className="account-card-name">{user?.name || user?.email}</p>
                <div className="account-card-age-gender">
                    {user?.birthdate && <p className="account-card-age">{getAgeString(user.birthdate)},</p>}
                    <p className="account-card-gender">{user?.gender}</p>
                </div>
            </div>
        </div>
    );
};

export default AccountCard;
