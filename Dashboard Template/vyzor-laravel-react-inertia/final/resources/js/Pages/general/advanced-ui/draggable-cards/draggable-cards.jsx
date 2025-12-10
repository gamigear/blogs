
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Head } from "@inertiajs/react";
import React, { Fragment } from "react";
import Draggabledata from "../../../../shared/data/general/adavanec-ui/draggabledata";
import MainLayout from "@/Layouts/layout";

const DraggableCards = () => {
    return (
        <Fragment>

            <Head title={"Draggable Cards"} />

            <Pageheader title="Advanced Ui" currentpage="Draggable Cards" activepage="Draggable Cards" />

            <Draggabledata />

        </Fragment>
    )
};
// Assign layout
DraggableCards.layout = (page) => <MainLayout>{page}</MainLayout>;
export default DraggableCards;
