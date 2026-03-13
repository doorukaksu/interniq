export default function Privacy() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
      <h1>Privacy Policy</h1>

      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Who We Are</h2>
      <p>
        InternIQ is a platform being developed to help students optimise
        internship applications using AI tools and career insights.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you join the InternIQ waitlist we collect your email address.
        This information is used only to provide updates about the InternIQ
        platform and early access opportunities.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To notify you about the InternIQ launch</li>
        <li>To provide product updates</li>
        <li>To invite early testers to the platform</li>
      </ul>

      <h2>Data Storage</h2>
      <p>
        Email addresses submitted through the waitlist form are processed
        through Formspree and stored securely for communication related
        to InternIQ.
      </p>

      <h2>Your Rights</h2>
      <p>
        If you are located in the UK or EU, you have rights under applicable
        data protection laws including the right to request access,
        correction, or deletion of your personal data.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about this privacy policy, you can contact us
        at: contact@interniq.co.uk
      </p>
    </main>
  );
}