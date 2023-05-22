import AccountCard from "../components/account-card/AccountCard";
import EditAccountForm from "../components/edit-account-form/EditAccountForm";
import EditPasswordForm from "../components/edit-password-form /EditPasswordForm";

const Account = ({ user, setUser }) => {
    return (
        <div className="account-page">
            <h3>Account</h3>

            <div className="account-page-content">
                <AccountCard user={user} />
                <div className="account-page-forms">
                    <EditAccountForm user={user} setUser={setUser} />
                    <EditPasswordForm user={user} setUser={setUser} />
                </div>
            </div>
        </div>
    );
};

export default Account;
