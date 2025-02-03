const Contactus = () => {
  return (
    <div>
      <div className="form-container">
        <h1>
          <span className="icon">🎧</span> Get In Touch
        </h1>
        <form>
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Input your name" required />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Input your email"
            required
          />

          <label for="interest">What are you interested in?</label>
          <select id="interest" required>
            <option value="Web Development" selected>
              Web Development
            </option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Science">Data Science</option>
            <option value="Other">Other</option>
          </select>

          <label for="message">Message</label>
          <textarea id="message" rows="4" placeholder="Your message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
