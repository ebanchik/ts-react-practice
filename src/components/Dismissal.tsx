import { useState } from "react";

export const Dismissal = () => {
  const [showAlert, setShowalert] = useState(true);

  const handleClose = () => {
    setShowalert(false);
  };

  if (!showAlert) {
    return null;
  }

  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="btn-close"
        onClick={handleClose}
        aria-label="Close"
      ></button>
    </div>
  );
};
