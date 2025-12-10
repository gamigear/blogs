
import MainLayout from "@/Layouts/layout";
import SpkTeamCard from "../../../shared/@spk-reusable-components/reusable-pages/spk-teamcard";
import { TeamMembers } from "../../../shared/data/pages/teamdata";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Head } from "@inertiajs/react";
import React, { Fragment } from "react";
import { Row } from "react-bootstrap";


const Team = () => {

    return (

        <Fragment>

            {/* <!-- Page Header --> */}

            <Head title="Team" />

            <Pageheader title="Pages" currentpage="Team" activepage="Team" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}

            <Row className="row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
                {TeamMembers.map((idx, index) => (
                    <div className="col" key={index}>
                        <SpkTeamCard member={idx} />
                    </div>
                ))}
            </Row>

            {/* <!-- End:: row-1 --> */}

        </Fragment>
    )
};
// Assign layout
Team.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Team;
