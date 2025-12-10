
import BaseLink from "@/shared/layouts-components/baselink/baselink";
import { link1, link2, link3, link4, link5, link6, link7, link8, link9 } from "../../../../shared/data/prism-code/uielements-prism";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Head } from "@inertiajs/react";
import ShowCode from "../../../../shared/layouts-components/showcode/showcode";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import MainLayout from "@/Layouts/layout";

const LinksInteractions = () => {

    return (

        <Fragment>

            {/* <!-- Page Header --> */}

            <Head title="Ui Elements-Links & Interactions" />

            <Pageheader title="Ui Elements" currentpage="Links & Interactions" activepage="Links & Interactions" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Row>
                <Col xl={6}>
                    <Row>

                        <Col xl={12}>
                            <ShowCode title="TEXT SELECTION" reactCode={link6} customCardHeaderClass="justify-content-between" >
                                <p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
                                <p className="user-select-auto">This paragraph has default select behavior.</p>
                                <p className="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="POINTER EVENTS" reactCode={link5} customCardHeaderClass="justify-content-between">
                                <p><BaseLink className="pe-none text-primary fw-medium text-decoration-underline" tabIndex={-1} aria-disabled="true" href={""}>This link</BaseLink> can not be clicked.</p>
                                <p><BaseLink href="#!" className="pe-auto text-primary fw-medium text-decoration-underline">This link</BaseLink> can be clicked (this is default behavior).</p>
                                <p className="pe-none mb-0"><BaseLink tabIndex={-1} className="text-primary fw-medium text-decoration-underline" aria-disabled="true" href={""}>This link</BaseLink> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <BaseLink href="#!" className="pe-auto">this link</BaseLink> has a <code>pe-auto</code> class and can be clicked.</p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="  LINK OPACITY" reactCode={link8} customCardHeaderClass="justify-content-between">
                                <p><BaseLink className="link-opacity-10" href="#!"  >Link opacity 10</BaseLink></p>
                                <p><BaseLink className="link-opacity-25" href="#!"  >Link opacity 25</BaseLink></p>
                                <p><BaseLink className="link-opacity-50" href="#!"  >Link opacity 50</BaseLink></p>
                                <p><BaseLink className="link-opacity-75" href="#!"  >Link opacity 75</BaseLink></p>
                                <p className="mb-0"><BaseLink className="link-opacity-100" href="#!"  >Link opacity 100</BaseLink></p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="LINK HOVER VARIANT" customCardHeaderClass="justify-content-between" reactCode={link7}>
                                <BaseLink className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-decoration-underline" href="#!"  >
                                    Underline opacity 0
                                </BaseLink>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="LINK UNDERLINE COLORS" reactCode={link9} customCardHeaderClass="justify-content-between" >
                                <p><BaseLink href="#!" className="link-underline-primary text-decoration-underline">Primary underline</BaseLink></p>
                                <p><BaseLink href="#!" className="link-underline-secondary text-decoration-underline">Secondary underline</BaseLink></p>
                                <p><BaseLink href="#!" className="link-underline-success text-decoration-underline">Success underline</BaseLink></p>
                                <p><BaseLink href="#!" className="link-underline-danger text-decoration-underline">Danger underline</BaseLink></p>
                                <p><BaseLink href="#!" className="link-underline-warning text-decoration-underline">Warning underline</BaseLink></p>
                                <p><BaseLink href="#!" className="link-underline-info text-decoration-underline">Info underline</BaseLink></p>
                                <p><BaseLink href="#!" className="link-underline-light text-decoration-underline">Light underline</BaseLink></p>
                                <p className="mb-0"><BaseLink href="#!" className="link-underline-dark text-decoration-underline">Dark underline</BaseLink></p>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="LINK UNDERLINE OFFSET" reactCode={link2} customCardHeaderClass="justify-content-between">
                                <p><BaseLink href="#!" className="text-decoration-underline">Default link</BaseLink></p>
                                <p><BaseLink className="link-offset-1 text-decoration-underline" href="#!"  >Offset 1 link</BaseLink></p>
                                <p><BaseLink className="link-offset-2 text-decoration-underline" href="#!"  >Offset 2 link</BaseLink></p>
                                <p className="mb-0"><BaseLink className="link-offset-3 text-decoration-underline" href="#!"  >Offset 3 link</BaseLink></p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title=" LINK UNDERLINE OPACITY" reactCode={link3} customCardHeaderClass="justify-content-between">
                                <p><BaseLink className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0" href="#!"  >Underline opacity 0</BaseLink></p>
                                <p><BaseLink className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10" href="#!"  >Underline opacity 10</BaseLink></p>
                                <p><BaseLink className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25" href="#!"  >Underline opacity 25</BaseLink></p>
                                <p><BaseLink className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50" href="#!"  >Underline opacity 50</BaseLink></p>
                                <p><BaseLink className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75" href="#!"  >Underline opacity 75</BaseLink></p>
                                <p><BaseLink className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100" href="#!"  >Underline opacity 100</BaseLink></p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="LINK HOVER OPACITY" reactCode={link1} customCardHeaderClass="justify-content-between">
                                <p><BaseLink className="link-opacity-10-hover" href="#!"  >Link hover opacity 10</BaseLink></p>
                                <p><BaseLink className="link-opacity-25-hover" href="#!"  >Link hover opacity 25</BaseLink></p>
                                <p><BaseLink className="link-opacity-50-hover" href="#!"  >Link hover opacity 50</BaseLink></p>
                                <p><BaseLink className="link-opacity-75-hover" href="#!"  >Link hover opacity 75</BaseLink></p>
                                <p className="mb-0"><BaseLink className="link-opacity-100" href="#!"  >Link hover opacity 100</BaseLink></p>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="COLORED LINKS" reactCode={link4} customCardHeaderClass="justify-content-between" customCardBodyClass="custom-color-links">

                                <p><BaseLink href="#!" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Primary link</BaseLink></p>
                                <p><BaseLink href="#!" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Secondary link</BaseLink></p>
                                <p><BaseLink href="#!" className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Success link</BaseLink></p>
                                <p><BaseLink href="#!" className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Danger link</BaseLink></p>
                                <p><BaseLink href="#!" className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Warning link</BaseLink></p>
                                <p><BaseLink href="#!" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Info link</BaseLink></p>
                                <p><BaseLink href="#!" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Light link</BaseLink></p>
                                <p><BaseLink href="#!" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Dark link</BaseLink></p>
                                <p className="mb-0"><BaseLink href="#!" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-decoration-underline ">Emphasis link</BaseLink></p>
                            </ShowCode>
                        </Col>

                    </Row>
                </Col>
            </Row>

            {/* <!--End::row-1 --> */}

        </Fragment>
    )
};
// Assign layout
LinksInteractions.layout = (page) => <MainLayout>{page}</MainLayout>;
export default LinksInteractions;
