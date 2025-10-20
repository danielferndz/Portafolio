import DeveloperAboutSection from "../../components/developer/DeveloperAboutSection"
import DeveloperContactSection from "../../components/developer/DeveloperContactSection"
import DeveloperHeroSection from "../../components/developer/DeveloperHeroSection"
import DeveloperProjectSection from "../../components/developer/DeveloperProjectSection"
import DeveloperSkillSection from "../../components/developer/DeveloperSkillSection"
import DeveloperTestimonialSection from "../../components/developer/DeveloperTestimonialSection"
import Layout from "../../hocs/layouts/Layout"


function Developer (){

    return(
        <div className="dark bg-fondoDev text-white min-h-screen">

            <Layout>
                <DeveloperHeroSection/>
                <DeveloperAboutSection/>
                <DeveloperSkillSection/>
                <DeveloperProjectSection/>
                <DeveloperTestimonialSection/>
                <DeveloperContactSection/>

            </Layout>

        </div>
        
    )   

}
export default Developer
