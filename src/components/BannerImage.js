const BannerImage = ({ banner }) => {
  return (
    <div className="imagecontainer">
      <div className="maincontainer">
        <img src={banner.url} className="mainImage" />
        <p className="imagedesc">{banner.tag}</p>
        <b>
          <p className="imageOffer">{banner.offer}</p>
        </b>
        <p className="imageprice">{banner.price}</p>
      </div>

      {/* <a className="banner-img">
            <div className="baseclass"> 
            <img src={banner.url}/>
             <img className="banner-img" src={banner.url} />
            <div id='banner3bold' >{banner.tag}</div>
            <div id='banner3lightgreen'>{banner.offer}</div>
            <div id='banner3lightgrey'>{banner.price}</div> 
        </div>
            
            
            <p>{banner.tag}</p>
            <p>{banner.offer}</p>
            <p>{banner.price}</p>
        </a> */}

      {/* <img className="banner-img" src={banner.url} />
        <div id='banner3bold' >{banner.tag}</div>
        <div id='banner3lightgreen'>{banner.offer}</div>
        <div id='banner3lightgrey'>{banner.price}</div> */}
    </div>
  );
};

export default BannerImage;
