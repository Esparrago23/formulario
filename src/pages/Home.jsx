import SectionLogin from "../components/organisms/SectionLogin";
import SectionDatos from "../components/organisms/SectionDatos";
import './Home.css'
function Home() {
    return ( 
        <div id="login_home">
            <SectionLogin></SectionLogin>
            <SectionDatos></SectionDatos>
        </div>
     );
}

export default Home;