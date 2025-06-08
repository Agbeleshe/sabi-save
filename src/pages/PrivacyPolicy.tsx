import {
  Users,
  Database,
  AlertCircle,
  Lock,
  DatabaseBackupIcon,
} from "lucide-react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mt-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy & Protection Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy matters to us. Learn how SabiSave protects and
              manages your personal data in compliance with the Nigeria Data
              Protection Act (2023).
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
              Privacy and Protection Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At SabiSave, we place a high premium on the privacy of the
              personal data shared by our customers and other users of our
              services. As such, we have developed a Privacy Policy that clearly
              explains our privacy practices with specific reference to the
              method of collecting, processing, sharing and maintaining your
              personal data when you use our app or website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Therefore, in compliance with the Nigeria Data Protection Act
              (2023), our privacy policy reads as below:
            </p>
          </div>

          {/* Consent Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <AlertCircle className="mr-3 text-blue-600" size={28} />
              Consent
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing any of our platforms or services, you give us full
              access to your personal data, or when you visit any of our
              services stations or office for official and non-official
              purposes. However, users under the age of 18 will not be allowed
              to access and or register on some of our platforms such as the
              digital app.
            </p>
          </div>

          {/* Data Collection Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Database className="mr-3 text-green-600" size={28} />
              Use of Data and Data Collection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The lawful basis for requesting for your personal data is for the
              primary purpose of registering a user on our app, accessing our
              website or for any other transaction or contract we intend to
              engage with the user.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hence, we collect your data when you perform the following
              activity or access any of our services on our web, digital
              platforms and contact office:
            </p>

            {/* App Registration */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                App Registration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                In line with our KYC (Know Your Customer) Policy, new users on
                our platform will be required to provide basic personal and
                business data such as mobile phone number, email, address, NIN
                and or BVN to enable us build a profile for you.
              </p>
            </div>

            {/* Transaction Processing */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Transaction Processing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When you deposit funds into your wallet, or access any of our
                agent services, we collect information about the transaction,
                and also save the information for each transaction in a data
                repository.
              </p>
            </div>

            {/* 3rd Party Personal Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                3rd Party Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Transactions on our platform may give us access to the personal
                information of 3rd party users directly linked to the
                transaction. Such information may include the phone number,
                email, account number or other relevant data relevant to the
                transaction.
              </p>
            </div>

            {/* Photo Images */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Photo Images
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our account opening process requires us to collect and store
                your image for transaction and security purposes. We may also
                require your image for other regulatory requirements in line
                with the services we provide.
              </p>
            </div>

            {/* Other Information Sources */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Other Information Sources
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We do not limit our data collection to information directly
                provide through our various platforms, but may rely on other
                informal sources such as registered cooperative groups and
                association, and even the social media if needed.
              </p>
            </div>
          </div>

          {/* Personal Data Storage */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <DatabaseBackupIcon className="mr-3 text-orange-600" size={28} />
              Personal Data Storage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All data is stored in a readable format for the duration that is
              required for our business use. In addition, your data may also be
              stored in line with the legal and regulatory requirements of our
              industry.
            </p>
          </div>

          {/* Personal Data Sharing */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Users className="mr-3 text-blue-600" size={28} />
              Personal Data Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While in custody of your data, we may have a reason to share it
              with others as follows:
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-sm mr-4 mt-1 flex-shrink-0">
                  1
                </span>
                <p className="text-gray-700 leading-relaxed">
                  For internal purposes by SabiSave Technologies Limited, or any
                  subsidiary of the company.
                </p>
              </div>

              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-sm mr-4 mt-1 flex-shrink-0">
                  2
                </span>
                <p className="text-gray-700 leading-relaxed">
                  With other 3rd party companies who are either service
                  providers to us, or whose service we may require to initiate
                  or complete a transaction on any of our platforms.
                </p>
              </div>

              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-sm mr-4 mt-1 flex-shrink-0">
                  3
                </span>
                <p className="text-gray-700 leading-relaxed">
                  Regulatory establishments, other financial institutions and
                  law enforcement agencies for the sole purpose of resolving a
                  problem, investigating a fraudulent activity, for compliance
                  purposes and for addressing/responding to a legal process or
                  issue.
                </p>
              </div>

              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-sm mr-4 mt-1 flex-shrink-0">
                  4
                </span>
                <p className="text-gray-700 leading-relaxed">
                  Credit rating agencies and other related institutions may
                  require your data for reference checks and other users in
                  adherence to the applicable data privacy laws and regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Use of Cookies */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Use of Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that websites store on your computer
              or mobile device to remember information about your visit. These
              files help websites personalize your experience, keep you signed
              in, and remember your preferences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Consequently, our website has been designed with encrypted session
              companies with a finite lifespan that is erased over a predefined
              time frame. In addition, you will have the option of disabling or
              deciding to allow cookies operate when accessing our website.
            </p>
          </div>

          {/* User Rights */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Users className="mr-3 text-green-600" size={28} />
              User Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              As custodians of your personal data, you have the following rights
              under the Nigeria Data Protection Act (2023) below:
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full text-sm mr-4 mt-1 flex-shrink-0">
                  1
                </span>
                <p className="text-gray-700 leading-relaxed">
                  The right of the user request for the type of data we hold,
                  and for any other information in electronic form or hard copy.
                </p>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full text-sm mr-4 mt-1 flex-shrink-0">
                  2
                </span>
                <p className="text-gray-700 leading-relaxed">
                  The right to correct, update or erase your personal
                  information with us in the event of a fraudulent activity,
                  court order or on personal grounds.
                </p>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full text-sm mr-4 mt-1 flex-shrink-0">
                  3
                </span>
                <p className="text-gray-700 leading-relaxed">
                  The right to object the use of your personal data for any
                  promotional activity by use, or for the sharing of your data
                  with any 3rd party so far as it does not contravene any legal
                  proceedings or request for a regulatory or law enforcement
                  agency.
                </p>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full text-sm mr-4 mt-1 flex-shrink-0">
                  4
                </span>
                <p className="text-gray-700 leading-relaxed">
                  You are at liberty to lodge a complaint if you feel that your
                  data rights have been infringed in any way by us to the
                  Nigeria Data Protection Commission (NDPC).
                </p>
              </div>
            </div>
          </div>

          {/* Personal Data Protection */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Lock className="mr-3 text-red-600" size={28} />
              Personal Data Protection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain a comprehensive security architecture equipped to
              protect your personal data online, and within our office premises
              and contact centers. Some of these measures include data
              encryption, fire walls and the use of physical controls such as
              CCTV in our areas of business.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Following from this, your personal data is confidential and we do
              not release it to any third party without your express consent, or
              on legal and or regulatory basis. We have also developed internal
              processes and systems that will enable us effectively communicate
              to the user in the event of a security breach that may compromise
              the safety of their personal data with us.
            </p>
          </div>

          {/* Resolution */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <AlertCircle className="mr-3 text-orange-600" size={28} />
              Resolution
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We intend to resolve issues arising from an unlikely breach or
              compromise of personal data once we are aware of the complaint
              immediately. However, more complex issues may require longer
              resolution within a minimum of 21 working days, but subject to the
              nature of the issue, and with recourse to existing laws that may
              delay or facilitate our ability to resolve the issue.
            </p>
          </div>

          {/* Changes and Update */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Changes and Update
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We periodically update our privacy and protection policy, and as
              such, we will update any changes on our website, and communicate
              same via email, on our website and any other means reachable to
              our users.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              12. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For general enquiries on your personal data, or any related issue,
              we can be reached on:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                Sabi Technologies Limited
              </h3>
              <p className="text-gray-700 mb-1">
                Abattoir Road, Giring- Jos, Plateau State
              </p>
              <p className="text-gray-700">Email: privacy@sabisave.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
