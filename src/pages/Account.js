import ProfileCard from "../components/profile-card/ProfileCard";

const Account = ({ user }) => {
    return (
        <div className="account-page">
            <h3>Account</h3>

            <ProfileCard user={user} />
        </div>
    );
};

export default Account;
