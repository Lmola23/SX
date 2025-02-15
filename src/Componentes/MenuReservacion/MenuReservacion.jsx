import { useState } from "react";
import './MenuReservacion.css';
import './../../Style/fonts.css';
import './../../Style/fontNumber.css';
const AppointmentPicker = () => {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [selectedTime, setSelectedTime] = useState("12:00 PM");
  const [selectedServices, setSelectedServices] = useState([]);
  const [monthOffset, setMonthOffset] = useState(0);

  const getDaysInMonth = (monthOffset) => {
    const date = new Date();
    date.setMonth(date.getMonth() + monthOffset + 1, 0);
    return date.getDate();
  };

  const daysInMonth = getDaysInMonth(monthOffset);
  const unavailableDays = [3, 7, 15, 22];
  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
  const services = ["Limpieza", "Masaje", "Depilacion", "Arreglo de cejas"];
  const weekDays = ["D", "L", "M", "M", "J", "V", "S"];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  return (
    <div className="containerMenuReservacion" style={{ width: "95%", margin: "auto", height: "auto", background: "white", fontFamily: "Comorant" }}>

      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Selecciona el Día</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => setMonthOffset((prev) => Math.max(prev - 1, 0))}>◀</button>
        <span>{new Date().toLocaleString('default', { month: 'long' })}</span>
        <button onClick={() => setMonthOffset((prev) => (prev < 1 ? prev + 1 : prev))}>▶</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", textAlign: "center", marginTop: "10px" }}>
        {weekDays.map((day, index) => (
          <div key={index} style={{ fontWeight: "bold" }}>{day}</div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <button
            className="buttonDay"
            key={day}
            style={{

              backgroundColor: unavailableDays.includes(day) ? "#ccc" : day === selectedDay ? "red" : "white",
              color: unavailableDays.includes(day) ? "#666" : "black",
              cursor: unavailableDays.includes(day) ? "not-allowed" : "pointer",

            }}
            onClick={() => !unavailableDays.includes(day) && setSelectedDay(day)}
            disabled={unavailableDays.includes(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <h3 style={{ marginTop: "20px" }}>Selecciona la Hora</h3>
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
            style={{ padding: "8px", borderRadius: "5px", border: "1px solid", borderColor: selectedServices.includes(service) ? "red" : "#ddd", color: selectedServices.includes(service) ? "red" : "black" }}
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

