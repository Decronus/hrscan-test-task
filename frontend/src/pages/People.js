import "./style.css";
import { useEffect, useState } from "react";
import Queries from "../services/queries.service";
import UserCard from "../components/user-card/UserCard";

const People = ({ user }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Queries.getAllUsers().then((res) => {
            console.log(res.data);
            setUsers(res.data);
        });
    }, []);

    return (
        <div className="people-page">
            <h3>People</h3>

            <div className="people-page-users-wrap">
                {users
                    ?.filter((el) => el.email !== user?.email)
                    .map((el) => {
                        return <UserCard key={el._id} user={el} />;
                    })}
            </div>
        </div>
    );
};

export default People;
