import React from "react";
import EditForm from "./../../ui/editForm";
import PropTypes from "prop-types";
const EditPage = ({ user }) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <EditForm oneUserdata={user} />
                </div>
            </div>
        </div>
    );
};
EditPage.propTypes = {
    user: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default EditPage;
