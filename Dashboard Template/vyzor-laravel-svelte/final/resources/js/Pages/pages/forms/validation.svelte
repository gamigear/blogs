
<script context="module">
    import MainLayout from '@/layouts/MainLayout.svelte';
    export const layout = MainLayout; 
</script>
<script>
    import Pageheader from "@/components/page-header/Pageheader.svelte";
    import ShowCode from "@/components/showcode/ShowCode.svelte";
    import {
        validation1,
        validation2,
        validation3,
        validation4,
        validation5,
    } from "@/shared/data/prism-code/formsprism";
    import SpkButton from "@/shared/@spk/uielements/Button/SpkButton.svelte";
    import { Col, Row } from "@sveltestrap/sveltestrap";

    let firstName = "Mark",
        lastName = "Otto",
        username = "",
        city = "",
        state = "",
        zip = "",
        agreed = false;
    let isValid = false;
    let errors = {};

    const validateForm = () => {
        errors = {};
        if (!firstName) errors.firstName = "First name is required";
        if (!lastName) errors.lastName = "Last name is required";
        if (!username) errors.username = "Please choose a username.";
        if (!city) errors.city = "Please provide a valid city.";
        if (!state) errors.state = "Please select a valid state.";
        if (!zip) errors.zip = "Please provide a valid zip.";
        if (!agreed)
            errors.agreed = "You must agree to the terms and conditions";
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
        isValid = true;
    };

    let firstName1 = "Mark",
        lastName1 = "Otto",
        username1 = "",
        city1 = "",
        state1 = "",
        zip1 = "",
        agreed1 = false;
    let isValid1 = false;
    let errors1 = {};

    const validateForm1 = () => {
        errors1 = {};
        if (!firstName1) errors1.firstName1 = "First name is required";
        if (!lastName1) errors1.lastName1 = "Last name is required";
        if (!username1)
            errors1.username1 = "Please choose a unique and valid username.";
        if (!city1) errors1.city1 = "Please provide a valid city.";
        if (!state1) errors1.state1 = "Please select a valid state.";
        if (!zip1) errors1.zip1 = "Please provide a valid zip.";
        if (!agreed1)
            errors1.agreed1 = "You must agree to the terms and conditions";
        return Object.keys(errors1).length === 0;
    };

    const handleSubmit1 = (e) => {
        e.preventDefault();
        validateForm1();
        isValid1 = true;
    };

    // Supported elements
    let firstName2 = "";
    let isValid2 = false;
</script>

<!-- Page Title -->
<svelte:head>
    <title>Validation | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Validation"
    activepage="Forms"
    page="Validation"
/>
<!-- Page Header Close -->


<!-- Start:: row-1 -->
<Row>
    <Col xl={12}>
        <ShowCode title="Custom Validation" svelteCode={validation1}>
            <form
                class={`row g-3 needs-validation ${isValid ? "was-validated" : ""} `}
                on:submit={handleSubmit}
                noValidate
            >
                <div class="col-md-4">
                    <label for="firstName" class="form-label">First name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        bind:value={firstName}
                        required
                    />
                    {#if errors.firstName}
                        <div class="invalid-feedback">{errors.firstName}</div>
                    {:else if firstName && !errors.firstName}
                        <div class="valid-feedback">Looks good!</div>
                    {/if}
                </div>

                <div class="col-md-4">
                    <label for="lastName" class="form-label">Last name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        bind:value={lastName}
                        required
                    />
                    {#if errors.lastName}
                        <div class="invalid-feedback">{errors.lastName}</div>
                    {:else if lastName && !errors.lastName}
                        <div class="valid-feedback">Looks good!</div>
                    {/if}
                </div>

                <div class="col-md-4">
                    <label for="username" class="form-label">Username</label>
                    <div class="input-group flex-wrap has-validation">
                        <span class="input-group-text" id="inputGroupPrepend"
                            >@</span
                        >
                        <input
                            type="text"
                            class="form-control w-auto"
                            id="username"
                            bind:value={username}
                            required
                        />
                        {#if errors.username}
                            <div class="invalid-feedback">
                                {errors.username}
                            </div>
                        {:else if username && !errors.username}
                            <div class="valid-feedback">Looks good!</div>
                        {/if}
                    </div>
                </div>

                <div class="col-md-6">
                    <label for="city" class="form-label">City</label>
                    <input
                        type="text"
                        class="form-control"
                        id="city"
                        bind:value={city}
                        required
                    />
                    {#if errors.city}
                        <div class="invalid-feedback">{errors.city}</div>
                    {:else if city && !errors.city}
                        <div class="valid-feedback">Looks good!</div>
                    {/if}
                </div>

                <div class="col-md-3">
                    <label for="state" class="form-label">State</label>
                    <select
                        class="form-select"
                        id="state"
                        bind:value={state}
                        required
                    >
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                    </select>
                    {#if errors.state}
                        <div class="invalid-feedback">{errors.state}</div>
                    {:else if state && !errors.state}
                        <div class="valid-feedback">Looks good!</div>
                    {/if}
                </div>

                <div class="col-md-3">
                    <label for="zip" class="form-label">Zip</label>
                    <input
                        type="text"
                        class="form-control"
                        id="zip"
                        bind:value={zip}
                        required
                    />
                    {#if errors.zip}
                        <div class="invalid-feedback">{errors.zip}</div>
                    {:else if zip && !errors.zip}
                        <div class="valid-feedback">Looks good!</div>
                    {/if}
                </div>

                <div class="col-12">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value={agreed}
                            id="invalidCheck"
                            bind:checked={agreed}
                            required
                        />
                        <label class="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        {#if errors.agreed}
                            <div class="invalid-feedback">{errors.agreed}</div>
                        {/if}
                    </div>
                </div>

                <div class="col-12">
                    <button
                        class="btn btn-primary"
                        type="submit"
                        on:click={handleSubmit}>Submit form</button
                    >
                </div>
            </form>
        </ShowCode>
    </Col>
    <Col xl={12}>
        <ShowCode title="Browser Default Validation" svelteCode={validation2}>
            <form class="row g-3">
                <div class="col-md-4">
                    <label for="validationDefault01" class="form-label"
                        >First name</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="validationDefault01"
                        value="Mark"
                        required
                    />
                </div>
                <div class="col-md-4">
                    <label for="validationDefault02" class="form-label"
                        >Last name</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="validationDefault02"
                        value="Otto"
                        required
                    />
                </div>
                <div class="col-md-4">
                    <label for="validationDefaultUsername" class="form-label"
                        >Username</label
                    >
                    <div class="input-group">
                        <span class="input-group-text" id="inputGroupPrepend2"
                            >@</span
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefaultUsername"
                            aria-describedby="inputGroupPrepend2"
                            required
                        />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault03" class="form-label"
                        >City</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="validationDefault03"
                        required
                    />
                </div>
                <div class="col-md-3">
                    <label for="validationDefault04" class="form-label"
                        >State</label
                    >
                    <select
                        class="form-select"
                        id="validationDefault04"
                        required
                    >
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="validationDefault05" class="form-label"
                        >Zip</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="validationDefault05"
                        required
                    />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="invalidCheck2"
                            required
                        />
                        <label class="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit"
                        >Submit form</button
                    >
                </div>
            </form>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-1 -->

<!-- Start:: row-2 -->
<Row>
    <Col xl={12}>
        <Row>
            <Col xl={12}>
                <ShowCode
                    title=" Server side Validation"
                    svelteCode={validation3}
                >
                    <form class="row g-3">
                        <div class="col-md-4">
                            <label for="validationServer01" class="form-label"
                                >First name</label
                            >
                            <input
                                type="text"
                                class="form-control is-valid"
                                id="validationServer01"
                                value="Mark"
                                required
                            />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="col-md-4">
                            <label for="validationServer02" class="form-label"
                                >Last name</label
                            >
                            <input
                                type="text"
                                class="form-control is-valid"
                                id="validationServer02"
                                value="Otto"
                                required
                            />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="col-md-4 custom-form-valid">
                            <label
                                for="validationServerUsername"
                                class="form-label">Username</label
                            >
                            <div
                                class="input-group has-validation valid-from-user"
                            >
                                <span
                                    class="input-group-text"
                                    id="inputGroupPrepend3">@</span
                                >
                                <input
                                    type="text"
                                    class="form-control is-invalid"
                                    id="validationServerUsername"
                                    aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                    required
                                />
                            </div>
                            <div
                                    id="validationServerUsernameFeedback"
                                    class="invalid-feedback"
                                >
                                    Please choose a username.
                                </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validationServer03" class="form-label"
                                >City</label
                            >
                            <input
                                type="text"
                                class="form-control is-invalid"
                                id="validationServer03"
                                aria-describedby="validationServer03Feedback"
                                required
                            />
                            <div
                                id="validationServer03Feedback"
                                class="invalid-feedback"
                            >
                                Please provide a valid city.
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label for="validationServer04" class="form-label"
                                >State</label
                            >
                            <select
                                class="form-select is-invalid"
                                id="validationServer04"
                                aria-describedby="validationServer04Feedback"
                                required
                            >
                                <option selected disabled value=""
                                    >Choose...</option
                                >
                                <option>...</option>
                            </select>
                            <div
                                id="validationServer04Feedback"
                                class="invalid-feedback"
                            >
                                Please select a valid state.
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label for="validationServer05" class="form-label"
                                >Zip</label
                            >
                            <input
                                type="text"
                                class="form-control is-invalid"
                                id="validationServer05"
                                aria-describedby="validationServer05Feedback"
                                required
                            />
                            <div
                                id="validationServer05Feedback"
                                class="invalid-feedback"
                            >
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input
                                    class="form-check-input is-invalid"
                                    type="checkbox"
                                    value=""
                                    id="invalidCheck3"
                                    aria-describedby="invalidCheck3Feedback"
                                    required
                                />
                                <label
                                    class="form-check-label"
                                    for="invalidCheck3"
                                >
                                    Agree to terms and conditions
                                </label>
                                <div
                                    id="invalidCheck3Feedback"
                                    class="invalid-feedback"
                                >
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <SpkButton
                                color="primary"
                                buttontype="submit"
                                text="Submit form"
                            />
                        </div>
                    </form>
                </ShowCode>
            </Col>
            <Col xl={12}>
                <ShowCode title=" Tooltips" svelteCode={validation4}>
                    <form
                        class={`row g-3 needs-validation ${isValid1 ? "was-validated" : ""} `}
                        on:submit={handleSubmit1}
                        noValidate
                    >
                        <div class="col-md-4 position-relative">
                            <label for="validationTooltip01" class="form-label"
                                >First name</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="validationTooltip01"
                                bind:value={firstName1}
                                required
                            />
                            {#if errors.firstName}
                                <div class="invalid-feedback">
                                    {errors1.firstName1}
                                </div>
                            {:else if firstName1 && !errors1.firstName1}
                                <div class="valid-tooltip">Looks good!</div>
                            {/if}
                        </div>
                        <div class="col-md-4 position-relative">
                            <label for="validationTooltip02" class="form-label"
                                >Last name</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="validationTooltip02"
                                bind:value={lastName1}
                                required
                            />
                            {#if errors1.lastName1}
                                <div class="invalid-feedback">
                                    {errors1.lastName1}
                                </div>
                            {:else if lastName && !errors.lastName}
                                <div class="valid-tooltip">Looks good!</div>
                            {/if}
                        </div>
                        <div class="col-md-4 position-relative">
                            <label
                                for="validationTooltipUsername"
                                class="form-label">Username</label
                            >
                            <div class="input-group has-validation">
                                <span
                                    class="input-group-text"
                                    id="validationTooltipUsernamePrepend"
                                    >@</span
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationTooltipUsername"
                                    aria-describedby="validationTooltipUsernamePrepend"
                                    bind:value={username1}
                                    required
                                />
                                {#if errors1.username1}
                                    <div class="invalid-tooltip">
                                        {errors1.username1}
                                    </div>
                                {:else if username1 && !errors1.username1}
                                    <div class="valid-tooltip">Looks good!</div>
                                {/if}
                            </div>
                        </div>
                        <div class="col-md-6 position-relative">
                            <label for="validationTooltip03" class="form-label"
                                >City</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="validationTooltip03"
                                bind:value={city1}
                                required
                            />
                            {#if errors1.city1}
                                <div class="invalid-tooltip">
                                    {errors1.city1}
                                </div>
                            {:else if city1 && !errors1.city1}
                                <div class="valid-feedback">Looks good!</div>
                            {/if}
                        </div>
                        <div class="col-md-3 position-relative">
                            <label for="validationTooltip04" class="form-label"
                                >State</label
                            >
                            <select
                                class="form-select"
                                id="validationTooltip04"
                                bind:value={state1}
                                required
                            >
                                <option selected disabled value=""
                                    >Choose...</option
                                >
                                <option>...</option>
                            </select>
                            {#if errors1.state1}
                                <div class="invalid-tooltip">
                                    {errors1.state1}
                                </div>
                            {:else if state1 && !errors1.state1}
                                <div class="valid-feedback">Looks good!</div>
                            {/if}
                        </div>
                        <div class="col-md-3 position-relative">
                            <label for="validationTooltip05" class="form-label"
                                >Zip</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="validationTooltip05"
                                bind:value={zip1}
                                required
                            />
                            {#if errors1.zip1}
                                <div class="invalid-tooltip">
                                    {errors1.zip1}
                                </div>
                            {:else if zip1 && !errors1.zip1}
                                <div class="valid-feedback">Looks good!</div>
                            {/if}
                        </div>
                        <div class="col-12">
                            <button
                                class="btn btn-primary"
                                type="submit"
                                on:click={handleSubmit1}>Submit form</button
                            >
                        </div>
                    </form>
                </ShowCode>
            </Col>
        </Row>
    </Col>
    <Col xl={12}>
        <ShowCode title="Supported elements" svelteCode={validation5}>
            <form class="was-validated" novalidate>
                <div class="mb-3">
                    <label for="validationTextarea" class="form-label"
                        >Textarea</label
                    >
                    <textarea
                        class="form-control is-invalid"
                        id="validationTextarea"
                        placeholder="Required example textarea"
                        required
                        bind:value={firstName2}
                    ></textarea>
                    {#if firstName2 === ""}
                        <div class="invalid-feedback">
                            Please enter a message in the textarea.
                        </div>
                    {/if}
                </div>

                <div class="form-check mb-3">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        id="validationFormCheck1"
                        required
                    />
                    <label class="form-check-label" for="validationFormCheck1"
                        >Check this checkbox</label
                    >
                    <div class="invalid-feedback">
                        Example invalid feedback text
                    </div>
                </div>

                <div class="form-check">
                    <input
                        type="radio"
                        class="form-check-input"
                        id="validationFormCheck2"
                        name="radio-stacked"
                        required
                    />
                    <label class="form-check-label" for="validationFormCheck2"
                        >Toggle this radio</label
                    >
                </div>
                <div class="form-check mb-3">
                    <input
                        type="radio"
                        class="form-check-input"
                        id="validationFormCheck3"
                        name="radio-stacked"
                        required
                    />
                    <label class="form-check-label" for="validationFormCheck3"
                        >Or toggle this other radio</label
                    >
                    <div class="invalid-feedback">
                        More example invalid feedback text
                    </div>
                </div>

                <div class="mb-3">
                    <select
                        class="form-select"
                        required
                        aria-label="select example"
                    >
                        <option value="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div class="invalid-feedback">
                        Example invalid select feedback
                    </div>
                </div>

                <div class="mb-3">
                    <input
                        type="file"
                        class="form-control"
                        aria-label="file example"
                        required
                    />
                    <div class="invalid-feedback">
                        Example invalid form file feedback
                    </div>
                </div>

                <div class="mb-3">
                    <SpkButton
                        color="primary"
                        buttontype="submit"
                        text="Submit form"
                        disabled
                    />
                </div>
            </form>
        </ShowCode>
    </Col>
</Row>
<!-- End:: row-2 -->
