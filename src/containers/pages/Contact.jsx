import ContactSection from "../../components/contact/ContactSection";
import DeveloperContactSection from "../../components/developer/DeveloperContactSection";
import Layout from "../../hocs/layouts/Layout";

function Contact(){
    return (
        <Layout>
            {/* <ContactSection/> */}
            <DeveloperContactSection/>
        </Layout>
    )
}

export default Contact