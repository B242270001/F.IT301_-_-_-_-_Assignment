import { useEffect } from "react";
import "./Toast.css";

// Үйлдлийн дараах богино мэдэгдэл (нийтлэг component, TASK-06). duration-ийн дараа өөрөө хаагдана.
export default function Toast({ message, tone = "success", duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  return (
    <div className={`toast is-${tone}`} role="status" data-testid={`toast-${tone}`}>
      {message}
    </div>
  );
}
