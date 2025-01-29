export const Card = ({ title, link, image, description, tags }) => {
  return (
    <div
      className="col-md-4 col-sm-6 animate-box"
      data-animate-effect="fadeInLeft"
    >
      <div className="blog-entry dark:bg-black dark:text-white">
        <a href={link} className="blog-img h-[17rem]">
          <img
            src={image}
            className="img-responsive h-full object-cover"
            alt={title}
          />
        </a>
        <div className="desc">
          <div className="uppercase mb-[20px] text-[12px] font-normal">
            {tags.map((tag, index) => (
              <small
                key={index}
                className="dark:text-white font-medium text-[#b1abad] mr-[10px]" // margin-right applied here
              >
                {tag} {index < tags.length - 1 && <>|</>}
              </small>
            ))}
          </div>
          <h3>
            <a href={link} className="dark:!text-white">
              {title}
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
