import { VideoWrapper } from "./style";

export const Videos = () => {
  return (
    <div>
      <VideoWrapper>
        <div className='video-container'>
          {/* <iframe
            className='video'
            src='https://www.youtube.com/embed/SC8kqAiZ8eE'
            frameBorder='0px'
            allow='autoplay; encrypted-media'
            allowfullscreeen
            title='video'
          /> */}
          <h1>Teaching autistic student MATHS</h1>
          <iframe
            title='videoa1'
            src='https://www.youtube.com/embed/YzcMBQNCjt4'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture'
            allowfullscreen></iframe>
          <iframe
            className='video'
            title='videoa2'
            src='https://www.youtube.com/embed/dNvD1jz4xEA'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture'
            allowfullscreen></iframe>
          <iframe
            className='video'
            title='videoa3'
            src='https://www.youtube.com/embed/lnBiPtpOdYs'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture'
            allowfullscreen></iframe>
          <iframe
            className='video'
            title='videoa4'
            src='https://www.youtube.com/embed/kwqsmML-oi8'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture'
            allowfullscreen></iframe>
          <h1>Teaching autistic student Communication</h1>
          <iframe
            className='video'
            title='videob1'
            src='https://www.youtube.com/embed/r29iOjnbbgA'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture'
            allowfullscreen></iframe>
          <iframe
            className='video'
            title='videob1'
            src='https://www.youtube.com/embed/RO6dc7QSQb4'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture'
            allowfullscreen></iframe>
          <iframe
            className='video'
            title='videob3'
            src='https://www.youtube.com/embed/cnWQWa7U29s'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture'
            allowfullscreen></iframe>
          <iframe
            className='video'
            title='videob4'
            src='https://www.youtube.com/embed/BPo1H1eMU9k'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </div>
      </VideoWrapper>
    </div>
  );
};
