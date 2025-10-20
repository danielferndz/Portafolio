import Layout from "../../hocs/layouts/Layout"
import Footer from "../../components/navigations/Footer";
import Navigation from "../../components/navigations/Navigation";
import Header from "../../components/home/Header";
import HomeSignatureAnimation from "../../components/home/HomeSignatureAnimation";
import HomeStats from "../../components/home/HomeStats";
import HomeBarra from "../../components/home/HomeBarra";
import HomeAboutSection from "../../components/home/HomeAboutSection";
import HomeServiceBlocks from "../../components/home/HomeServiceBlocks";
import HomeBook from "../../components/home/HomeBook";


function Home(){
    return(
        <Layout>
            {/* <HomeBarra/> */}
            <Header/>
            <HomeAboutSection/>
            <HomeServiceBlocks/>
            <HomeSignatureAnimation/>
            <HomeStats/>
            <HomeBook/>
        </Layout>
    )
}
export default Home
