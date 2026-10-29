import { Link } from "react-router-dom";
import "./PageState.css";

// Хуудас бүрийн нийтлэг төлөв (нийтлэг component, TASK-06).
// type нь data-testid-г тодорхойлно: state-loading, state-empty, state-error, state-not-found, state-forbidden
const DEFAULT_MESSAGES = {
  loading: "Ачаалж байна…",
  empty: "Мэдээлэл алга байна.",
  error: "Алдаа гарлаа.",
  "not-found": "Олдсонгүй.",
  forbidden: "Энэ хуудсыг үзэх эрхгүй.",
};

const ROLES = { loading: "status", error: "alert" };

export default function PageState({ type, message = DEFAULT_MESSAGES[type], actionLabel, onAction, actionTo }) {
  return (
    <div className="page-state" data-testid={`state-${type}`} role={ROLES[type]}>
      <p>{message}</p>
      {actionLabel && actionTo && (
        <Link to={actionTo} className="page-state-action">{actionLabel}</Link>
      )}
      {actionLabel && onAction && (
        <button type="button" className="page-state-action" onClick={onAction}>{actionLabel}</button>
      )}
    </div>
  );
}
