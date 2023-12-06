import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <div className="heading">
        <h1>Tentang Kami</h1>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-content">
            <h2>
              <span className="red-text">Tentang</span>{' '}
              <span className="green-text">Coolkas</span>
            </h2>
            <div className="about-content">
              <p>
                Aplikasi web inovatif yang dirancang untuk memberikan solusi
                yang efektif terhadap masalah umum yang dihadapi oleh banyak
                individu dan keluarga, yaitu{' '}
                <span className="hitam-text">
                  pengelolaan persediaan makanan di rumah
                </span>
                .
              </p>
            </div>
          </div>
          <div className="about-image">
            <img src="images/logo_coolkas.png" alt="Logo Coolkas" />
          </div>
        </section>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <img src="images/Rectangle.png" alt="Rectangle" />
          </div>
          <div className="about-content">
            <h2>
              <span className="red-text">Fokus</span>{' '}
              <span className="green-text">Utama</span>
            </h2>
            <p>
              Berfokus pada{' '}
              <span className="hitam-text">pengurangan pemborosan makanan</span>
              , membantu <span className="hitam-text">perencanaan belanja</span>,
              dan meningkatkan{' '}
              <span className="hitam-text">efisiensi pengelolaan stok pangan</span>
              , CoolKas menyajikan sejumlah fitur yang dapat meningkatkan
              pengalaman pengguna dalam mengelola makanan sehari-hari.
            </p>
          </div>
        </section>

        <div className="wrapper">
          <h2>Team CoolKas</h2>
          <div className="team_coolkas">
            {/* Assuming you have an array of team members */}
            {teamMembers.map((member, index) => (
              <div key={index} className="team_member">
                <div className="member_img">
                  <img src={`images/member_${index + 1}.png`} alt={`Team Member ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;