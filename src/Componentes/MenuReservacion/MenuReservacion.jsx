import { useState } from "react";
import './MenuReservacion.css';
import './../../Style/fonts.css';
import './../../Style/fontNumber.css';

const AppointmentPicker = () => {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState("12:00 PM");
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentDate);

  const unavailableDays = [3, 7, 15, 22];
  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
  const services = ["Limpieza", "Masaje", "Depilacion", "Arreglo de cejas"];
  const weekDays = ["D", "L", "M", "M", "J", "V", "S"];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleMonthChange = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + offset);

    if (newDate.getMonth() >= today.getMonth() && newDate.getMonth() <= today.getMonth() + 1) {
      setCurrentDate(newDate);
      setSelectedDay(null);
    }
  };

  const currentMonthName = currentDate.toLocaleString('default', { month: 'long' });

  return (
    <div className="containerMenuReservacion" style={{ background: "white", fontFamily: "Comorant" }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Selecciona el Día</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button style={{ marginLeft: "4vh" }} onClick={() => handleMonthChange(-1)} disabled={currentDate.getMonth() === today.getMonth()}>◀</button>
        <span style={{ marginRight: "4vh", marginLeft: "4vh", fontSize: "2.5vh" }}>{currentMonthName}</span>
        <button style={{ marginRight: "4vh" }} onClick={() => handleMonthChange(1)} disabled={currentDate.getMonth() === today.getMonth() + 1}>▶</button>
      </div>
      <div className="containerCalendario" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", textAlign: "center", marginTop: "10px" }}>
        {weekDays.map((day, index) => (
          <div key={index} style={{ fontWeight: "bold", fontStyle: "italic" }}>{day}</div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
          const isUnavailable = unavailableDays.includes(day) || dateToCheck < today || (currentDate.getMonth() === today.getMonth() && day < today.getDate()) || (currentDate.getMonth() === today.getMonth() + 1 && day > today.getDate());
          return (
            <button
              className="buttonDay"
              key={day}
              style={{
                backgroundColor: isUnavailable ? "#ccc" : day === selectedDay ? "red" : "white",
                color: isUnavailable ? "#666" : "black",
                cursor: isUnavailable ? "not-allowed" : "pointer",
              }}
              onClick={() => !isUnavailable && setSelectedDay(day)}
              disabled={isUnavailable}
            >
              {day}
            </button>
          );
        })}
      </div>
      <h3 style={{ marginTop: "20px", fontStyle: "italic" }}>Selecciona la Hora</h3>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {times.map((time) => (
          <button
            key={time}
            style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ddd", backgroundColor: time === selectedTime ? "#ddd" : "white" }}
            onClick={() => setSelectedTime(time)}
            className="butonTime"
          >
            {time}
          </button>
        ))}
      </div>
      <h3 style={{ marginTop: "20px" }}>Servicios</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
        {services.map((service) => (
          <button
            key={service}
            style={{ padding: "8px", fontFamily: "Comorant", borderRadius: "5px", border: "1px solid", borderColor: selectedServices.includes(service) ? "red" : "#ddd", color: selectedServices.includes(service) ? "red" : "black" }}
            onClick={() => toggleService(service)}
          >
            {service}
          </button>
        ))}
      </div>
      <button className="buttonConfirmarCita" >Confirmar Cita</button>
    </div>
  );
};

export default AppointmentPicker;
