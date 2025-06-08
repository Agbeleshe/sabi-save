import {
  Users,
  FileText,
  AlertCircle,
  Lock,
  CreditCard,
  Scale,
  Phone,
} from "lucide-react";

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mt-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the terms and conditions that govern your use of
              SabiSave's platforms and services.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          {/* Introduction Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Terms of Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This contract is between Sabi Technologies and you, and covers all
              the critical aspects of the services we provide on our website,
              SabiSave mobile application and any other material published by
              our company.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Therefore, we expect that you must be at least eighteen (18) years
              of age to access any of our services in line with our privacy and
              protection policy. Furthermore, it is important for each user to
              read and comprehend the terms of services therein, and to also
              note that other terms will be communicated to the user while using
              other platforms and services that we provide.
            </p>
          </div>

          {/* Purpose and Scope */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FileText className="mr-3 text-blue-600" size={28} />
              Purpose and Scope of Reference
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The terms of services essentially state the terms and conditions
              that govern the access and use of our platforms and services. It
              also includes our obligations to you, other risks that you should
              be aware of when using of our services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              In specific terms, our core services allow you to save money in a
              digital wallet, transfer your saved funds to your third-party
              account or any other account, and enables individuals who operate
              as registered agents to carry out user registration, and other
              transaction-based activity such as cash deposit and transfers on
              behalf of the user.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The key areas of concern for us and for you under this are:
            </p>
          </div>

          {/* User Registration */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Users className="mr-3 text-green-600" size={28} />
              User Registration
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To use our mobile application under the trader or agent category,
              you will be required to register by providing us with your basic
              personal information such as full names, mobile number, email,
              means of identity, house address, contact details, guarantor and
              other critical information required for your profile set- up. For
              change to an of your information provided, a notification will be
              required from you to us which may be implemented immediately, or
              may take some time depending on the type of change requested.
            </p>
          </div>

          {/* Know Your Customer (KYC) */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <AlertCircle className="mr-3 text-orange-600" size={28} />
              Know Your Customer (KYC)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By the regulations governing our operations, we are required to
              perform a basic customer due diligence to ensure that the
              information provided by you is accurate and factual. This
              therefore means that we have the legal right to deny you access to
              our services, or close your existing account if upon verification,
              we realize that any of the information provided by you is
              fraudulent.
            </p>
          </div>

          {/* Personal Data Security */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Lock className="mr-3 text-red-600" size={28} />
              Personal Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kindly note that you are solely responsible for ensuring that your
              security and access details such as user name, email and password
              are kept confidential. This suggest that you have agreed to not
              share any sensitive information that will compromise the security
              of your account as Sabi Technologies will not be held liable for
              any loss or damage arising from the sharing of user information.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, if you detect any unauthorized access to your account, we
              highly recommend that you call us immediately to have your account
              temporarily blocked, or you initiate a password reset and change
              of transaction PIN on our platform.
            </p>
          </div>

          {/* Software Use */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <FileText className="mr-3 text-purple-600" size={28} />
              Software Use
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Users of our platform have been granted full rights to use our
              platform and other API kits and tools license to Sabi Technologies
              Limited. However, none of our intellectual property shall be
              altered, published, distributed, sub-licensed or transferred for
              use to any individual or entity without the consent and approval
              of our company.
            </p>
          </div>

          {/* Service Fees, Charges and Errors */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <CreditCard className="mr-3 text-blue-600" size={28} />
              Service Fees, Charges and Errors
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing any of our platforms, you have agreed to pay us any
              fees or charges that may apply to specific transactions. In the
              event of a dispute on a fee arising from a failed or disputed
              transaction, we intend to resolve the issue within 3 working days
              from the notification date. We also intend to provide full refund
              of transaction fees for unsuccessful transactions, or for charges
              debited in error. Other errors from an operational or technical
              standpoint shall be fully investigated within 10 working days and
              if the error has been established as genuine, full refund shall be
              made.
            </p>
          </div>

          {/* Cash Deposit, Transfers and Agent Services */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <CreditCard className="mr-3 text-green-600" size={28} />
              Cash Deposit, Transfers and Agent Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sabi Technologies is not a bank but operates a licensed digital
              wallet in partnership with other third-party banks and financial
              institutions that enables users deposit money into their digital
              wallet via cash deposit or transfer from a third-party account.
              Users are also enabled to make digital withdrawals from their
              wallet via transfer to a bank account. An addition to this, are
              the services provided by our registered agents who after
              verification, are authorized to make cash deposits, transfer and
              withdrawals on behalf of the trader.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Funds in the custody of Sabi Technologies are insured under a
              private insurance company, and the funds kept by customers are not
              used for any other corporate purposes.
            </p>
          </div>

          {/* Dispute Resolution */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Scale className="mr-3 text-orange-600" size={28} />
              Dispute Resolution
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In the event of a dispute arising from the use of any of our
              services between two or more parties, both parties shall be
              encouraged to in their best interest, resolve the issue based on
              the information that we may be required to provide.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If the Parties are unable to settle the dispute within 14 working
              days, the dispute shall be forwarded to a resolution committee
              with legal representatives from all parties and whose bill shall
              be borne independently by the parties involved in the dispute.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Scale className="mr-3 text-red-600" size={28} />
              Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The formation, existence, construction, performance, validity and
              all aspects whatsoever of this Terms of Service or of any term of
              this Agreement will be governed by the Laws of the Federal
              Republic of Nigeria.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Phone className="mr-3 text-blue-600" size={28} />
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For further enquiries, we can be reached on: on your personal
              data, or any related issue, we can be reached on:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                Sabi Technologies Limited
              </h3>
              <p className="text-gray-700 mb-1">
                Abattoir Road, Giring- Jos, Plateau State
              </p>
              <p className="text-gray-700">Email: info@sabisave.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;
