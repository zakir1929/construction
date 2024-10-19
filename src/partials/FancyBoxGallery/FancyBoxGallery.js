import {React, useEffect} from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const images = [
    {
        id: 1,
        src: "img/projects/project-6.jpg",
        title: "Image 1",
        description: "This is image 1"
    },
    {
        id: 2,
        src: "img/projects/project-5.jpg",
        title: "Image 2",
        description: "This is image 2"
    },
    {
        id: 3,
        src: "img/projects/project-4.jpg",
        title: "Image 3",
        description: "This is image 3"
    },
    {
        id: 4,
        src: "img/projects/project-4.jpg",
        title: "Image 3",
        description: "This is image 3"
    },
];

const FancyBoxGallery = () => {

useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    // Cleanup function to unbind Fancybox when the component unmounts
    return () => {
      Fancybox.destroy();
    };

}, []);

  return (

       <div
          className="row portfolio-list sort-destination"
          data-sort-id="portfolio"
        >
        {images.map((imageObj) => (
          <div className="col-md-6 col-lg-3  m-0 p-0 websites" key={imageObj.id}>
            <div className="portfolio-item m-0">
              <a 
                href={imageObj.src}
                data-fancybox="gallery"
                data-caption={`${imageObj.title}: ${imageObj.description}`}
              >
                <span className="thumb-info thumb-info-centered-info thumb-info-no-borders border-radius-0 m-0">
                  <span className="thumb-info-wrapper border-radius-0">
                    <img
                      src={imageObj.src}
                      className="img-fluid border-radius-0"
                      alt=""
                    />
                    <span className="thumb-info-action">
                      <span className="thumb-info-action-icon bg-dark opacity-8">
                        <i className="fas fa-plus" />
                      </span>
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        ))}

    </div>
  );
};


export default FancyBoxGallery;
