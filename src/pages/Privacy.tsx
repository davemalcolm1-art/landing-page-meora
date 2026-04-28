import { Link } from "react-router-dom";
import Footer from "@/components/rill/Footer";

const Privacy = () => {
  return (
    <>
      <main className="legal-page">
        <div className="legal-container">
          <Link to="/" className="legal-back">← Back to home</Link>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-meta">
            <strong>Effective Date:</strong> [INSERT DATE]<br />
            <strong>Last Updated:</strong> [INSERT DATE]
          </p>

          <section>
            <h2>1. Introduction</h2>
            <p>Your privacy matters to us. This Privacy Policy explains how MEORA ("we," "us," or "our") collects, uses, stores, and discloses your personal information when you access our website at [INSERT DOMAIN] ("Website") or use any of our services.</p>
            <p>We are committed to complying with the <em>Privacy Act 1988</em> (Cth), the Australian Privacy Principles (APPs), and, where applicable, relevant state health privacy legislation. Because our services involve health information, we take particular care in how we handle sensitive data.</p>
            <p>By using our Website or services, you agree to the collection and use of your information as described in this policy. If you do not agree, please do not use our Website.</p>
            <blockquote>
              <strong>Note on our business structure:</strong> MEORA is currently operating as an unregistered business. Upon incorporation, this policy will be updated to reflect our registered entity name and ABN. All obligations under the Privacy Act 1988 (Cth) apply to our operations regardless of registration status.
            </blockquote>
          </section>

          <section>
            <h2>2. Who We Are</h2>
            <p>MEORA is an Australian telehealth platform that connects patients with AHPRA-registered medical practitioners for consultations and clinical oversight. We do not manufacture or supply therapeutic goods directly — we facilitate access to regulated healthcare services.</p>
            <p>For privacy enquiries, please contact us at:</p>
            <p><strong>Privacy Officer</strong><br />MEORA<br />[INSERT ADDRESS UPON INCORPORATION]<br />Email: privacy@[INSERT DOMAIN]</p>
          </section>

          <section>
            <h2>3. What Personal Information We Collect</h2>
            <p>Depending on how you interact with us, we may collect the following categories of personal information:</p>
            <h3>Contact and Identity Information</h3>
            <ul><li>Full name, date of birth, email address, phone number, and postal address</li></ul>
            <h3>Account and Transaction Information</h3>
            <ul><li>Login credentials, billing and payment details, and transaction history</li></ul>
            <h3>Health Information</h3>
            <ul>
              <li>Medical history, current medications, lifestyle factors, and other health details you provide as part of a clinical consultation or intake questionnaire</li>
              <li>Blood test results or pathology reports you share with us or your treating practitioner</li>
            </ul>
            <h3>Technical Information</h3>
            <ul><li>IP address, browser type, device identifiers, pages visited, and session data collected via cookies and analytics tools</li></ul>
            <h3>Communications</h3>
            <ul><li>Records of your correspondence with our team, including support enquiries</li></ul>
            <p>We collect health information only with your explicit consent, or where otherwise permitted under the Privacy Act and applicable state health privacy laws.</p>
          </section>

          <section>
            <h2>4. How We Collect Your Information</h2>
            <p>We collect personal information:</p>
            <ul>
              <li>Directly from you when you create an account, complete an intake form, book a consultation, or contact us</li>
              <li>From AHPRA-registered practitioners involved in your care</li>
              <li>From third-party pathology providers (where you have been referred for testing)</li>
              <li>Automatically via cookies, analytics, and similar technologies when you use our Website</li>
            </ul>
            <p>Where information is collected from a third party, we will take reasonable steps to ensure you are notified of that collection.</p>
          </section>

          <section>
            <h2>5. Why We Collect and Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <h3>Providing Services</h3>
            <ul>
              <li>Processing and managing your consultations and clinical referrals</li>
              <li>Facilitating communication between you and AHPRA-registered practitioners</li>
              <li>Coordinating with licensed compounding pharmacies for prescription fulfilment where directed by your treating practitioner</li>
            </ul>
            <h3>Clinical Safety and Governance</h3>
            <ul>
              <li>Ensuring appropriate clinical oversight and continuity of care</li>
              <li>Maintaining records required under applicable health legislation</li>
            </ul>
            <h3>Account and Billing Management</h3>
            <ul><li>Processing payments, issuing receipts, and managing your account</li></ul>
            <h3>Communications</h3>
            <ul>
              <li>Sending appointment reminders, care updates, and service notifications</li>
              <li>Responding to your enquiries and support requests</li>
              <li>Sending marketing communications where you have opted in (you may opt out at any time)</li>
            </ul>
            <h3>Improvement and Research</h3>
            <ul><li>Analysing de-identified, aggregate data to improve our platform and services</li></ul>
            <h3>Legal Compliance</h3>
            <ul><li>Meeting our obligations under the Privacy Act, TGA regulations, AHPRA guidelines, and any other applicable laws</li></ul>
            <p>We will not use or disclose your personal information for any purpose not listed here without your consent, unless required by law.</p>
          </section>

          <section>
            <h2>6. Health Information — Special Protections</h2>
            <p>Health information is sensitive information under the Privacy Act and is afforded additional protections. We will only collect, use, or disclose your health information:</p>
            <ul>
              <li>With your explicit consent</li>
              <li>Where necessary to provide the healthcare services you have requested</li>
              <li>To lessen or prevent a serious threat to your life, health, or safety</li>
              <li>As required or authorised by law</li>
            </ul>
            <p>Your health information is accessible only to those directly involved in your care (including your treating AHPRA-registered practitioner) and to staff with a direct operational need.</p>
          </section>

          <section>
            <h2>7. Disclosure of Your Information</h2>
            <p>We do not sell your personal information. We may disclose it to:</p>
            <ul>
              <li><strong>AHPRA-registered practitioners</strong> facilitating your consultations</li>
              <li><strong>TGA-licensed compounding pharmacies</strong> for prescription fulfilment, where directed by your treating practitioner</li>
              <li><strong>Pathology and diagnostic providers</strong> where clinical referrals are made</li>
              <li><strong>Cloud and technology service providers</strong> supporting our platform infrastructure</li>
              <li><strong>Payment processors</strong> (such as Stripe) for transaction handling</li>
              <li><strong>Professional advisors</strong> including legal and accounting professionals, under confidentiality obligations</li>
              <li><strong>Regulatory authorities</strong> where required or authorised by law</li>
            </ul>
            <p>Where we disclose personal information to overseas service providers (for example, cloud storage hosted in the United States or Europe), we take reasonable steps to ensure those providers maintain privacy protections consistent with the APPs. You acknowledge that APP 8.1 may not apply to such disclosures, and that you may not be able to seek redress under the Privacy Act if an overseas provider breaches applicable principles.</p>
          </section>

          <section>
            <h2>8. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. These include:</p>
            <ul>
              <li>Encrypted data transmission (TLS/HTTPS)</li>
              <li>Access controls limiting data to authorised personnel only</li>
              <li>Secure cloud infrastructure with Australian data residency where practicable</li>
              <li>Regular security reviews</li>
            </ul>
            <p>No method of data transmission or storage is completely secure. While we take reasonable precautions, we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2>9. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfil the purposes described in this policy, or as required by law. Health records are retained in accordance with applicable state and territory legislation (typically a minimum of seven years for adult records, or until a minor turns 25).</p>
            <p>When personal information is no longer required, we will securely delete or de-identify it.</p>
          </section>

          <section>
            <h2>10. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to understand how visitors use our Website and to improve your experience. You can manage cookie preferences through your browser settings. Disabling cookies may affect some Website functionality.</p>
            <p>We may use analytics tools (such as Google Analytics) that process de-identified usage data. These tools operate under their own privacy policies.</p>
          </section>

          <section>
            <h2>11. Marketing Communications</h2>
            <p>We may send you marketing communications about our services where you have opted in to receive them. You can opt out at any time by:</p>
            <ul>
              <li>Clicking the unsubscribe link in any email we send</li>
              <li>Contacting us at privacy@[INSERT DOMAIN]</li>
            </ul>
            <p>Opting out of marketing does not affect service-related communications necessary for your care or account management.</p>
          </section>

          <section>
            <h2>12. Accessing and Correcting Your Information</h2>
            <p>You have the right to request access to the personal information we hold about you, and to request corrections where that information is inaccurate, out of date, or incomplete.</p>
            <p>To make a request, contact our Privacy Officer at privacy@[INSERT DOMAIN]. We may ask you to verify your identity before processing your request. We will respond within a reasonable timeframe (typically 30 days).</p>
            <p>In limited circumstances, we may decline a request for access or correction, in which case we will provide written reasons.</p>
          </section>

          <section>
            <h2>13. Complaints</h2>
            <p>If you believe we have mishandled your personal information, we encourage you to contact our Privacy Officer in the first instance at privacy@[INSERT DOMAIN].</p>
            <p>We will acknowledge your complaint promptly and aim to resolve it within 30 days.</p>
            <p>If you are not satisfied with our response, you may lodge a complaint with the <strong>Office of the Australian Information Commissioner (OAIC)</strong>:</p>
            <p><strong>Office of the Australian Information Commissioner</strong><br />GPO Box 5218, Sydney NSW 2001<br />Telephone: 1300 363 992<br />Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">https://www.oaic.gov.au</a></p>
          </section>

          <section>
            <h2>14. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Where changes are material, we will notify you via email or a prominent notice on our Website. The effective date at the top of this page will always reflect the most recent version.</p>
            <p>We encourage you to review this policy periodically.</p>
          </section>

          <section>
            <h2>15. Contact Us</h2>
            <p>For any privacy-related questions or requests:</p>
            <p><strong>Privacy Officer</strong><br />MEORA<br />Email: privacy@[INSERT DOMAIN]</p>
          </section>

          <p className="legal-footnote"><em>This Privacy Policy was prepared in accordance with the Privacy Act 1988 (Cth), the Australian Privacy Principles, and relevant AHPRA guidelines applicable to telehealth services.</em></p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;