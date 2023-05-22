import "./style.css";
import { API_URL } from "../../utils/constants";

const UserCard = ({ user }) => {
    const calculateAge = (date) => {
        const today = new Date();
        const birthDate = new Date(date);

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        console.log("age", date);
        return age;
    };

    const getAgeString = (date) => {
        const age = calculateAge(date);
        const lastDigit = age % 10;
        const lastTwoDigits = age % 100;

        if (age === 0) {
            return "меньше года";
        }

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return `${age} лет`;
        } else if (lastDigit === 1) {
            return `${age} год`;
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return `${age} года`;
        } else {
            return `${age} лет`;
        }
    };

    return (
        <div className="user-card-wrap">
            <div>
                <div
                    className="user-card-avatar"
                    style={{
                        backgroundImage: user.photoLink
                            ? `url(${API_URL}${user.photoLink})`
                            : "url('https://profi.erzrf.ru/upload/activity/speaker/avatar_boy.png')",
                    }}
                />
            </div>
            <div className="user-card-data">
                <p className="user-card-name">{user.name || user.email}</p>
                {user.birthdate && <p className="user-card-age">{getAgeString(user.birthdate)}</p>}
            </div>
        </div>
    );
};

export default UserCard;
