<script lang="ts" setup>
import * as prism from '@/data/prismCode/forms/float-labels';
definePageMeta({
    middleware: ["auth"],
})
const dataToPass = {
    title: "Forms",
    currentpage: "Floating labels",
    activepage: "Floating labels"
}
</script>

<template>
<Pageheader :propData="dataToPass" />

<!-- Start:: row-1 -->
<div class="row">
    <div class="col-xl-12">
        <ShowcodeCard :code="prism.basicExamples" title="Basic Examples">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="">
                <label for="floatingPassword">Password</label>
            </div>
        </ShowcodeCard>
    </div>
    <div class="col-xl-12">
        <ShowcodeCard :code="prism.readonlyplaintext" title="Readonly plain text">
            <div class="form-floating mb-0">
                <input type="email" readonly class="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="name@example.com">
                <label for="floatingEmptyPlaintextInput">Empty input</label>
            </div>
            <div class="form-floating custom-floating custom-input-lable">
                <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="name@example.com">
                <label for="floatingPlaintextInput">Input with value</label>
            </div>
        </ShowcodeCard>
    </div>
</div>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<div class="row">
    <div class="col-xl-12">
        <ShowcodeCard :code="prism.floatingLabelsWithPreDefinedValues" title="Floating Labels With Pre Defined Values">
            <form class="form-floating my-3 custom-input-lable">
                <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
                <label for="floatingInputValue">Input with value</label>
            </form>
            <form class="form-floatin">
                <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
                <label for="floatingInputInvalid">Invalid input</label>
            </form>
        </ShowcodeCard>
    </div>
    <div class="col-xl-12">
        <ShowcodeCard :code="prism.textareas" title="Textareas">
            <div class="form-floating mb-5">
                <textarea class="form-control" placeholder="" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Description</label>
            </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="" id="floatingTextarea2" rows="1" disabled></textarea>
                <label for="floatingTextarea2">Disabled</label>
            </div>
        </ShowcodeCard>
    </div>
</div>
<!-- End:: row-2 -->

<!-- Start:: row-3 -->
<div class="row">
    <div class="col-xl-12">
        <ShowcodeCard :code="prism.floatingLabelsInSelect" title="Floating Labels In Select" customCardBodyClass="custom-floating-class">
            <div class="form-floating custom-input-lable">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Works with selects</label>
            </div>
        </ShowcodeCard>
    </div>
    <div class="col-xl-12">
        <ShowcodeCard :code="prism.floatingLabelsWithLayouts" title="Floating Labels With Layouts">
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-floating custom-input-lable">
                        <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com">
                        <label for="floatingInputGrid">Email address</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating custom-input-lable">
                        <select class="form-select" id="floatingSelectGrid">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="floatingSelectGrid">Works with selects</label>
                    </div>
                </div>
            </div>
        </ShowcodeCard>
    </div>
</div>
<!-- End:: row-3 -->

<!-- Start:: row-4 -->
<div class="row">
    <div class="col-xl-12 floating-label-colors">
        <ShowcodeCard :code="prism.floatingLabelColors" title="Floating Label Colors">
            <div class="row gy-4">
                <div class="col-xl-4">
                    <div class="form-floating mb-4 floating-primary custom-input-lable-color">
                        <input type="email" class="form-control" id="floatingInputprimary" placeholder="">
                        <label for="floatingInputprimary">primary</label>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="form-floating mb-4 floating-secondary custom-input-lable-color">
                        <input type="email" class="form-control" id="floatingInputsecondary" placeholder="">
                        <label for="floatingInputsecondary">secondary</label>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="form-floating mb-4 floating-warning custom-input-lable-color">
                        <input type="email" class="form-control" id="floatingInputwarning" placeholder="">
                        <label for="floatingInputwarning">warning</label>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="form-floating mb-4 floating-info custom-input-lable-color">
                        <input type="email" class="form-control" id="floatingInputinfo" placeholder="">
                        <label for="floatingInputinfo">info</label>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="form-floating mb-4 floating-success custom-input-lable-color">
                        <input type="email" class="form-control" id="floatingInputsuccess" placeholder="">
                        <label for="floatingInputsuccess">success</label>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="form-floating mb-4 floating-danger custom-input-lable-color">
                        <input type="email" class="form-control" id="floatingInputdanger" placeholder="">
                        <label for="floatingInputdanger">danger</label>
                    </div>
                </div>
            </div>
        </ShowcodeCard>
    </div>
</div>
<!-- Start:: row-4 -->
</template>

<style scoped>
/* Add your styles here */
</style>
