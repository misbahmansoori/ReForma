import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    idea: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      text: "Create a furniture piece from old bicycle parts",
      likes: 12,
    },
    { id: 2, text: "Upcycle wooden pallets into modular shelving", likes: 8 },
    { id: 3, text: "Transform vintage suitcases into pet beds", likes: 15 },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      message: "",
      idea: "",
    });
  };

  const handleIdeaSubmit = (e) => {
    e.preventDefault();
    if (formData.idea.trim()) {
      const newIdea = {
        id: Date.now(),
        text: formData.idea,
        likes: 0,
      };
      setIdeas((prev) => [newIdea, ...prev]);
      setFormData((prev) => ({ ...prev, idea: "" }));
    }
  };

  const handleLike = (id) => {
    setIdeas((prev) =>
      prev.map((idea) =>
        idea.id === id ? { ...idea, likes: idea.likes + 1 } : idea
      )
    );
  };

  return (
    <div className="contact-page">
      <main className="contact-container">
        <h1>Get in Touch with ReForma</h1>
        <p className="subtitle">
          Share your thoughts, questions, or upcycling ideas with our community
        </p>

        <div className="contact-sections">
          <section className="contact-form-section">
            <h2>Contact Us</h2>
            {submitted && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </section>

          <section className="idea-sharing-section">
            <h2>Share Your Upcycling Ideas</h2>
            <p>
              Have a creative idea for repurposing materials? Share it with our
              community!
            </p>

            <form onSubmit={handleIdeaSubmit} className="idea-form">
              <div className="form-group">
                <label htmlFor="idea">Your Idea</label>
                <textarea
                  id="idea"
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  placeholder="e.g., 'Turn old doors into a dining table'"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Share Idea
              </button>
            </form>

            <div className="ideas-list">
              <h3>Community Ideas</h3>
              {ideas.length === 0 ? (
                <p>No ideas shared yet. Be the first!</p>
              ) : (
                <ul>
                  {ideas.map((idea) => (
                    <li key={idea.id} className="idea-item">
                      <p className="idea-text">{idea.text}</p>
                      <div className="idea-footer">
                        <button
                          onClick={() => handleLike(idea.id)}
                          className="like-btn"
                          aria-label="Like this idea"
                        >
                          ♥ {idea.likes}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;
