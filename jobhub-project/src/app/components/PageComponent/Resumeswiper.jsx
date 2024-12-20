import React from 'react';

export default function Resumeswiper() {
  const repeatCount = 300;

  return (
    <>
      <div className="resume-swiper" style={{
        background: 'linear-gradient(to right, white,#25D366)',


      }}>
        <marquee>
          {Array.from({ length: repeatCount }, (_, index) => (
            <span key={index}
              style={{
                marginRight: '25px',
                fontSize: '20px',
              }}>
              <a href='https://resume-creator.jobhub.world/' alt='_blank'> Build Your Dream Resume Now!</a>
            </span>
          ))}
        </marquee>
      </div>
    </>
  );
}
