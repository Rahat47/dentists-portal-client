import React, { useState } from "react";
import AppointmentForm from "../appointmentForm/AppointmentForm";

const BookingCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-info">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button
                        onClick={openModal}
                        className="btn btn-primary text-uppercase"
                    >
                        Book Appointment
                    </button>
                    <AppointmentForm
                        date={date}
                        booking={booking}
                        closeModal={closeModal}
                        modalIsOpen={modalIsOpen}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
