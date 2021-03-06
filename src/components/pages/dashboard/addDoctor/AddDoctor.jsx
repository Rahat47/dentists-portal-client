import React, { useState } from "react";
import { addADcotor } from "../../../../API";
import Sidebar from "../sidebar/Sidebar";

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };
    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", info.name);
        formData.append("email", info.email);

        async function uploadDoctorFiles(doctorData) {
            try {
                const data = await addADcotor(doctorData);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        uploadDoctorFiles(formData);
    };
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div
                className="col-md-10 p-4 pr-5"
                style={{
                    position: "absolute",
                    right: 0,
                    backgroundColor: "#F4FDFB",
                }}
            >
                <h5 className="text-info">Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">
                            Email address
                        </label>
                        <input
                            onBlur={handleBlur}
                            type="email"
                            className="form-control "
                            name="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input
                            onBlur={handleBlur}
                            type="text"
                            className="form-control "
                            name="name"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputPassword1">
                            Upload a image
                        </label>
                        <input
                            onChange={handleFileChange}
                            type="file"
                            className="form-control "
                            name="file"
                            id="exampleInputPassword1"
                            placeholder="Picture"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;
