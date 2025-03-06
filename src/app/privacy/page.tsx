import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen mb-64">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-4 text-gray-700">
          At our website, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our services, including newsletters, inquiries, course purchases, and webinar registrations.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
        <p className="mb-4 text-gray-700">We may collect the following types of information from you:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details provided during inquiries, course purchases, or webinar registrations.</li>
          <li><strong>Payment Information:</strong> Billing address and payment details (e.g., credit card or bank information) for course purchases.</li>
          <li><strong>Communication Data:</strong> Messages or inquiries submitted through our contact forms or email.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website, including IP addresses, browser type, and interaction with our content.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4 text-gray-700">The information we collect is used for the following purposes:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>To respond to your inquiries and provide customer support.</li>
          <li>To process and manage course purchases and webinar registrations.</li>
          <li>To send newsletters, promotional materials, and updates about our services.</li>
          <li>To improve our website and user experience through analytics and feedback.</li>
          <li>To comply with legal obligations and prevent fraud or misuse of our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. How We Protect Your Information</h2>
        <p className="mb-4 text-gray-700">
          We implement a variety of security measures to ensure the safety of your personal information. This includes encryption of sensitive data, secure servers, and regular monitoring for vulnerabilities.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Sharing Your Information</h2>
        <p className="mb-4 text-gray-700">
          We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third parties who assist us in operating our website, conducting business, or providing services to you, provided they agree to keep this information confidential.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Your Rights</h2>
        <p className="mb-4 text-gray-700">
          You have the right to access, update, or delete your personal information. To make such requests, please contact us at <a href="mailto:info@ilc.limited" className="text-blue-600 underline">info@ilc.limited</a>. We will respond to your request promptly.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Cookies</h2>
        <p className="mb-4 text-gray-700">
          Our website may use cookies to enhance your experience. Cookies are small files that your browser stores on your device. You can choose to disable cookies through your browser settings, but some features of the website may not function properly as a result.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">7. Third-Party Links</h2>
        <p className="mb-4 text-gray-700">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">8. Changes to This Privacy Policy</h2>
        <p className="mb-4 text-gray-700">
          We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and the updated date will be indicated at the top of the policy. Continued use of our website constitutes your acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">9. Contact Us</h2>
        <p className="mb-4 text-gray-700">
          If you have any questions or concerns about this Privacy Policy, please contact us:
        </p>
        <div className="mb-4 text-gray-700">
          <p><strong>Head Office:</strong> Sector 56, Gurgaon, Haryana</p>
          <p><strong>Phone:</strong> +91-7303031659</p>
          <p><strong>Email:</strong> <a href="mailto:info@ilc.limited" className="text-blue-600 underline">info@ilc.limited</a></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;