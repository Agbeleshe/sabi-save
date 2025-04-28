import React from 'react';
import Button from './Button';

function DownloadCTA() {
  return (
    <section id="download" className="py-16 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-light">
            Ready to Start Saving?
          </h2>
          <p className="text-lg mb-8 text-light/80 max-w-2xl mx-auto">
            Download the SabiSave app today and experience seamless savings and access to micro-credit facilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="#app-store" className="bg-light text-dark hover:bg-light/90">
              Download on App Store
            </Button>
            <Button href="#play-store" className="bg-primary text-dark hover:bg-primary/90">
              Download on Play Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadCTA;