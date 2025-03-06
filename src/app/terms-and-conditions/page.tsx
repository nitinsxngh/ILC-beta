import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen mb-64">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <section id="terms-and-conditions">
          <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>

          <p className="mb-4 text-gray-700">
            Welcome to ILC.Limited, operated by Innovative ILC India Pvt Ltd. By accessing or using our platform, you agree to abide by the following terms and conditions. These terms are subject to change at any time, and continued use of the platform indicates acceptance of these changes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Eligibility</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Users must be at least 18 years of age or have parental/guardian consent to access our services.</li>
            <li>By registering, users agree to provide accurate, complete, and updated information.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use of Platform</h2>
          <p className="mb-4 text-gray-700">
            The platform is for educational purposes, offering courses, training, and internship opportunities. Users are prohibited from:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Engaging in unlawful activities.</li>
            <li>Distributing harmful content.</li>
            <li>Infringing on intellectual property rights.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Intellectual Property</h2>
          <p className="mb-4 text-gray-700">
            All content on ilc.limited, including course material, designs, and trademarks, is the intellectual property of ILC and protected under applicable laws. Unauthorized reproduction or distribution of platform content is strictly prohibited.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Code of Conduct</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Users must maintain professionalism and respect when interacting with peers, mentors, or instructors.</li>
            <li>Any form of harassment, abuse, or inappropriate behavior may result in suspension or termination of access.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Disclaimers</h2>
          <p className="mb-4 text-gray-700">
            ILC provides educational resources as-is and does not guarantee specific outcomes. We are not liable for direct, indirect, or incidental damages resulting from the use of our services.
          </p>
        </section>

        <section id="cancellation-and-refund-policy">
          <h1 className="text-3xl font-bold mb-6 mt-10 text-center">Cancellation and Refund Policy</h1>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Courses</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Enrollment in courses is non-transferable.</li>
            <li>Refund requests will be considered on a case-by-case basis at ILCs discretion.</li>
            <li>Refunds, if approved, will be processed within 0-7 days.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Internship Programs</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Fees for internship programs are non-refundable unless specified otherwise.</li>
            <li>If an internship is canceled by ILC, alternative options will be provided, subject to availability</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Cancellations by Users</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Contact support to cancel enrollment before the commencement of the course or internship.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Platform Cancellation Rights</h2>
          <p className="mb-4 text-gray-700">
            ILC reserves the right to cancel courses or programs due to unforeseen circumstances. Participants will be notified and provided alternatives.
          </p>
        </section>

        <section id="shipping-and-delivery-policy">
          <h1 className="text-3xl font-bold mb-6 mt-10 text-center">Shipping and Delivery Policy</h1>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Digital Products</h2>
          <p className="mb-4 text-gray-700">
            Course materials and resources are delivered digitally via the platform or email. Users must ensure access to a stable internet connection.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Physical Products</h2>
          <p className="mb-4 text-gray-700">
            Shipping timelines for physical materials will be communicated during the order process. Delivery times vary based on location. Delivery will be completed within 0-7 days, unless otherwise specified.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Delays</h2>
          <p className="mb-4 text-gray-700">
            Delays due to unforeseen circumstances may occur. Users will be notified of significant delays and provided updates.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Incorrect Delivery Information</h2>
          <p className="mb-4 text-gray-700">
            Users are responsible for providing accurate delivery details. ILC is not liable for delays due to incorrect information.
          </p>

          <p className="mt-6 text-gray-700">
            For inquiries, contact us at <a href="mailto:info@ilc.limited" className="text-blue-600 underline">info@ilc.limited</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;