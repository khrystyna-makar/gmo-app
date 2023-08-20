import { Navigate } from "react-router-dom";

const Protected = ({ children }: any) => {
    const isAllowed = localStorage.getItem('isAllowed');
    if (!isAllowed) {
        alert("You must enter all details before accessing the page.")
        return <Navigate to="/" replace />;
    }
    return children;
};
export default Protected;