import './About.css';
import profile from '../images/passport_img.jpg';
function About(){
    return(
        <div className="about-container">
      <section className="intro">
        <h1>About Us</h1>
        <p>Welcome to E-commerce Website . Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga sed cupiditate itaque excepturi tempora distinctio ipsa illo doloremque rerum repellat adipisci quam inventore ducimus suscipit, quod, modi qui. Ab veritatis molestiae fugiat! Eaque facilis nihil deleniti dolorum, sint doloremque.</p>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>Founded in 2024 by Kalpesh Patil, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ut tempora commodi dignissimos repudiandae beatae omnis modi nam consectetur tempore. Excepturi tenetur accusamus, consequatur inventore suscipit deleniti eos placeat minus distinctio cupiditate numquam ea ullam, quisquam nihil similique officia aut reprehenderit assumenda odit! Iste iusto soluta ratione consequuntur consectetur praesentium.</p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dignissimos illum ullam, quam ipsum quidem molestiae numquam est deleniti aliquid voluptates quae quis voluptatum veniam ab totam autem tenetur sunt temporibus harum? Culpa placeat itaque eius inventore blanditiis porro ratione qui soluta aliquid iste officia obcaecati a quas facilis alias asperiores voluptas explicabo, animi deleniti est! Dolorum cumque delectus corrupti ipsa, quis excepturi sit dolorem corporis doloremque ipsam! Error ea voluptatibus porro atque odio cumque illum perspiciatis. Consectetur, necessitatibus. Minima?   .</p>
      </section>

      <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <p>kalpesh Patil, a passionate web developer fluent in HTML, CSS, and JavaScript. With a solid grasp of Bootstrap and React</p>
        <div className="team-members">
          <div className="team-member">
            <img src={profile}  />
            <h3>Kalpesh Patil</h3>
            <p>Frontend Devloper</p>
          </div>
          {/* <!-- Repeat for other team members --> */}
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions or comments, please don't hesitate to contact us at E-mail:-patilkalpesh5282@gmail.com</p>
      </section>
    </div>
    );
}
export default About;