import React from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Newsletter from '../components/Newsletter';
import DownloadCTA from '../components/DownloadCTA';

function About() {
  const ageGroups = [
    {
      name: 'Gen Z',
      age: '16-24 years',
      description: 'Tech-savvy young adults who prefer digital solutions for financial management.'
    },
    {
      name: 'Millennials',
      age: '25-39 years',
      description: 'Working professionals seeking convenient and secure financial tools for daily transactions.'
    },
    {
      name: 'Gen X',
      age: '40-65 years',
      description: 'Established traders who want to transition from traditional to digital financial methods.'
    }
  ];

  return (
    <>
      <Section className="pt-32">
        <SectionTitle
          title="About SabiSave"
          subtitle="Creating innovative financial solutions for traders across Nigeria"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="mb-6 text-lg">
              We engage in creating cutting-edge technology solutions that solve emerging and perennial problems in the financial services sector. We comprise a team of innovative and experienced individuals making positive impact in financial consulting, software design and IT product development.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p>
                  To become the leading financial technology solution provider for traders in Africa, creating financial inclusion and empowerment through our innovative products.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p>
                  To provide secure, accessible and user-friendly financial solutions that meet the unique needs of traders, while fostering economic growth and financial stability.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://images.pexels.com/photos/3823487/pexels-photo-3823487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="SabiSave Team"
              className="rounded-lg shadow-xl max-w-full h-auto"
              width={500}
              height={375}
            />
          </div>
        </div>
        
        <SectionTitle
          title="Our Target Audience"
          subtitle="SabiSave caters to various demographics in the trading ecosystem"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {ageGroups.map((group, index) => (
            <div key={index} className="bg-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-primary">{group.name}</h3>
              <p className="text-sm font-medium mb-4">{group.age}</p>
              <p>{group.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Income Bracket</h3>
          <p className="text-lg">Our solution primarily serves traders with a daily income of:</p>
          <p className="text-2xl font-bold text-primary mt-2">₦1,000 – ₦10,000</p>
        </div>
      </Section>
      
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-lg mb-8">
            At SabiSave, we are committed to providing financial solutions that are secure, accessible, and tailored to meet the unique needs of traders. Our team works tirelessly to ensure that our platform remains at the forefront of financial technology innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-dark/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Security</h3>
              <p>State-of-the-art security measures to protect user data and transactions</p>
            </div>
            <div className="bg-dark/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p>User-friendly interface designed for traders of all technological backgrounds</p>
            </div>
            <div className="bg-dark/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>Continuous improvement and feature development based on user feedback</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Newsletter />
      <DownloadCTA />
    </>
  );
}

export default About;