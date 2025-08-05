
import HomeBanner from "../../components/Ngoc/HomeBanner";
import HomeProductList from "../../components/Ngoc/HomeProductList";
import HomeNewsletter from "../../components/Ngoc/HomeNewsletter";
import HomeAbout from "../../components/Ngoc/HomeAboutUs";
import HomeNews from "../../components/Ngoc/HomeNews";

const title = {
    margin: '1rem 4rem ',
};

function Homepage() {
    return (
        <div>
            <div className="Maincontent">
                
                <div>
                    <HomeBanner />
                </div>
                <div>
                    <h4 style={title}>Category</h4>
                    <div><HomeProductList /></div>
                </div>
                <div><h4 style={title}>Best Seller</h4>
                    <div><HomeProductList /></div>
                </div>
                <div className="container my-5">
                    <div className="row gy-4">
                        <div className="col-lg-6 col-md-12">
                            <h4>About Snowell Electric</h4>
                            <div><HomeAbout /></div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h4>Hot news and promotion</h4>
                            <HomeNews />
                        </div>
                    </div>
                </div>

                <div><h4 style={title}>Newsletter</h4>
                    <div><HomeNewsletter /></div>
                </div>

            </div>
        </div>

    );
}
export default Homepage;