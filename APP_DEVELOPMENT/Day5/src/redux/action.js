const addAppointment = (appointment) => ({
    type: ADD_APPOINTMENT,
    payload: appointment,
  });
  
  const removeAppointment = (appointmentId) => ({
    type: REMOVE_APPOINTMENT,
    payload: appointmentId,
  });