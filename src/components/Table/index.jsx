import styles from './style.module.css'

export default function Table({usersData}) {

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(usersData).map((u, index) => (
                        <tr key={index}>
                            <td>{index + 1 }</td>
                            <td>{u.first_name}</td>
                            <td>{u.last_name}</td>
                            <td>{u.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};