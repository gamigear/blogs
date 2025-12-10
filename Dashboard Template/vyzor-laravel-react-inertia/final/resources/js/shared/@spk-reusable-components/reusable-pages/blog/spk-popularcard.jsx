
import { Fragment } from "react"
import { Card } from "react-bootstrap"
import BaseImage from "@/shared/layouts-components/baseimage/baseimage";
import BaseLink from "@/shared/layouts-components/baselink/baselink";


const SpkPopularCard = ({ blog }) => {

    return (
        <Fragment>
            <div className="col-6 col-xl">
                <BaseLink href="#!">
                    <Card className="custom-card overlay-card blog-card text-fixed-white">
                        <BaseImage src={blog.imgSrc} className="card-img" alt="..." />
                        <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                            <div className="card-footer border-top-0 text-center">
                                <h6 className="fw-semibold mb-0 text-fixed-white">{blog.title}</h6>
                            </div>
                        </div>
                    </Card>
                </BaseLink>
            </div>
        </Fragment>
    )
}
export default SpkPopularCard;
