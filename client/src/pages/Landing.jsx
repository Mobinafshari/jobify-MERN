import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from 'react-router-dom'
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            obcaecati quos, eveniet incidunt possimus excepturi exercitationem
            omnis quod dolores quaerat molestias sequi sit reiciendis
            dignissimos nemo, ad nulla deleniti ratione iste! Consequatur
            tempora accusantium nam ab delectus neque unde cupiditate.
          </p>
          <Link to='/register' className="btn register-link">Register</Link>
          <Link to='/login' className="btn ">Login/Demo User</Link>
        </div>
        <img src={main} className="img main-img"/>
      </div>
    </Wrapper>
  );
};

export default Landing;
