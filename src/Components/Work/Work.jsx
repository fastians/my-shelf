import { Card } from "../Card/Card";

export const Work = () => {
  return (
    <section className="my-blog" id="work">
      <div className="my-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Work</span>
            <h2 className="my-heading dark:text-white">Recent Work</h2>
          </div>
        </div>
        <div className="row">
          <Card
            title="Subup"
            link="https://subup.io/"
            image="images/subup.png"
            description=" Converted Figma designs into modular UI components with
                    Next.js, TypeScript, and Tailwind CSS. Built a custom
                    notification system, boosting freelancer response times by
                    40%."
            tags={["React Js", "Web Design", "4"]}
          />
          <Card
            title="throughthelens"
            link="https://www.throughthelens.com/"
            image="images/throughthelens.png"
            description="Handled dynamic hero sections with looping animations and
                    trailer switches on hover, ensuring seamless media uploads
                    while maintaining performance."
            tags={["React Js", "Web Design", "4"]}
          />
          <Card
            title="amenify"
            link="https://www.amenify.com/"
            image="images/amenify.png"
            description="SIntegrated backend API and built user, service provider,
                    and admin portals to connect residents with in-home
                    services."
            tags={["React Js", "Web Design", "4"]}
          />
        </div>
        <div className="row">
          <Card
            title="T-h-e-n-u-t"
            link="http://t-h-e-n-u-t.com/"
            image="images/blog-1.jpg"
            description="Worked as Front End Developer. Redesigned the UI and
                    converted it to React Components."
            tags={["React Js", "Web Design", "4"]}
          />
          <Card
            title="Incento"
            link="https://www.incento.kr/"
            image="images/incento.png"
            description=" Built a CRM dashboard with Next.js and Tailwind CSS,
                    optimizing UI efficiency and responsiveness for business
                    needs."
            tags={["React Js", "Web Design", "4"]}
          />
          <Card
            title="mymaker"
            link="http://mymaker.co.kr/"
            image="images/blog-3.jpg"
            description="Built a marketplace for service providers and seekers with
                    an admin panel for service management. Integrated phone
                    authentication via KakaoTalk."
            tags={["React Js", "Inspiration", "4"]}
          />
        </div>
        <div className="row">
          <div
            className="col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="hire">
              <h2>
                I am happy to know you that 300+ projects done sucessfully!
              </h2>

              <a href="#" className="btn-hire ">
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
