import AccountCard from "../components/account-card/AccountCard";
import EditAccountForm from "../components/edit-account-form/EditAccountForm";

const Account = ({ user, setUser }) => {
    return (
        <div className="account-page">
            <h3>Account</h3>

            <div className="account-page-content">
                <AccountCard user={user} />
                <EditAccountForm user={user} setUser={setUser} />
            </div>
        </div>
    );
};

export default Account;
