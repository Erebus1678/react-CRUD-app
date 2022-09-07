import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
    return (
        <div className="app-info">
            <h1>Accounting for employees in the:<br></br>[Your company name could be here 😁]</h1>
            <h2>Total employees: {employees}</h2>
            <h2>Number of awarded: {increased}</h2>
        </div >
    )
}

export default AppInfo;
