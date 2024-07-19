
import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  // Check for missing fields
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please fill the full reservation form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation sent successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other types of errors
    return next(new ErrorHandler(error.message || "An error occurred while creating the reservation.", 500));
  }
};

export default send_reservation;
