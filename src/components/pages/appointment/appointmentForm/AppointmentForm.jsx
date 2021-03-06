import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { createAppointment } from "../../../../API";

const AppointmentForm = ({ modalIsOpen, closeModal, booking, date }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async data => {
        const formData = {
            ...data,
            service: booking.subject,
            serviceDate: new Date(date).toDateString(),
        };

        try {
            const appointment = await createAppointment(formData);
            console.log(appointment.data);
            closeModal();
            alert(`Appointment booked for ${appointment.data.patientName}`);
        } catch (error) {
            console.log(error);
        }
    };

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };
    Modal.setAppElement("#root");

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-info text-center pb-2">
                    {booking.subject}
                </h2>
                <p className="text-secondary text-center">
                    <small>ON {date.toDateString()}</small>
                </p>
                <form
                    autoComplete="off"
                    className="p-5"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            ref={register({ required: true })}
                            name="patientName"
                            placeholder="Your Name"
                            className="form-control"
                        />
                        {errors.name && (
                            <span className="text-danger">
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            ref={register({ required: true })}
                            name="phone"
                            placeholder="Phone Number"
                            className="form-control"
                        />
                        {errors.phone && (
                            <span className="text-danger">
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            ref={register({ required: true })}
                            name="email"
                            placeholder="Email"
                            className="form-control"
                        />
                        {errors.email && (
                            <span className="text-danger">
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className="input-group mb-3 row">
                        <div className="col-4">
                            <select
                                className="form-control"
                                name="gender"
                                ref={register({ required: true })}
                            >
                                <option disabled={true} value="Not set">
                                    Select Gender
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && (
                                <span className="text-danger">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="col-4">
                            <input
                                ref={register({ required: true })}
                                className="form-control"
                                name="age"
                                placeholder="Your Age"
                                type="number"
                            />
                            {errors.age && (
                                <span className="text-danger">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="col-4">
                            <input
                                ref={register({ required: true })}
                                className="form-control"
                                name="weight"
                                placeholder="Weight"
                                type="number"
                            />
                            {errors.weight && (
                                <span className="text-danger">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="input-group text-right">
                        <button type="submit" className="btn btn-primary">
                            Confirm
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;
