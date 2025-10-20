import AboutHeroGallery from "../../components/about/AboutHeroGallery"
import AboutInfoSection from "../../components/about/AboutInfoSection"
import AboutSkills from "../../components/about/AboutSkills"
import AboutStory from "../../components/about/AboutStory"
import Layout from "../../hocs/layouts/Layout"


function About (){

    return(
        <Layout>
            <AboutHeroGallery/>
            <AboutStory/>
            <AboutInfoSection/>
            <AboutSkills/>

        </Layout>
    )

}
export default About
