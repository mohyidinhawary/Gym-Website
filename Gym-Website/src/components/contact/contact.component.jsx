export function Contact() {
  return (
    <div id="contact">
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Type Your E-Mail" required />
        <textarea placeholder="Write Here......" name="message"></textarea>
        <input type="submit" value="send" />
      </form>
    </div>
  );
}
