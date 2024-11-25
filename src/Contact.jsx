import React from "react";

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const email = "asanbemusic@gmail.com"; // Your email address
    const subject = "Contact Form Submission";
    const body = `Hi, I'm reaching out regarding...`;

    // Redirect to Gmail compose
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, "_blank"); // Open in a new tab
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Contact Us</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
            required
          />
          <textarea
            placeholder="Your Message"
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.button}>
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#007BFF", // Blue background
    height: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  formContainer: {
    backgroundColor: "#fff", // White background for the form
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    resize: "none",
    height: "100px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    marginTop:"130px",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default ContactPage;
