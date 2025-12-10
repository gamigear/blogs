/*------ inputs(prism-code for showcode purpose) start ------*/
export const input1 = `
import { Col, Input, Label, Row } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<Row class=" gy-4">
<Col xl={4} lg={6} md={6} sm={12} >
    <p class="mb-2 text-muted">Basic Input:</p>
    <Input type="text" id="input" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-label" class="form-label">Form Input With Label</Label>
    <Input type="text"  id="input-label" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-placeholder" class="form-label">Form Input With Placeholder</Label>
    <Input type="text" class="form-control" id="input-placeholder" placeholder="Placeholder" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-text" class="form-label">Type Text</Label>
    <Input type="text" class="form-control" id="input-text" placeholder="Text" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-number" class="form-label">Type Number</Label>
    <Input type="number" class="form-control" id="input-number" placeholder="Number" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-password" class="form-label">Type Password</Label>
    <Input type="password" class="form-control" id="input-password" placeholder="Password" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-email" class="form-label">Type Email</Label>
    <Input type="email" class="form-control" id="input-email" placeholder="Email@xyz.com" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-tel" class="form-label">Type Tel</Label>
    <Input type="tel" class="form-control" id="input-tel" placeholder="+1100-2031-1233" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-date" class="form-label">Type Date</Label>
    <Input type="date" class="form-control" id="input-date" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-week" class="form-label">Type Week</Label>
    <Input type="week" class="form-control" id="input-week" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-month" class="form-label">Type Month</Label>
    <Input type="month" class="form-control" id="input-month" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-time" class="form-label">Type Time</Label>
    <Input type="time" class="form-control" id="input-time" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-datetime-local" class="form-label">Type datetime-local</Label>
    <Input type="datetime-local" class="form-control" id="input-datetime-local" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-search" class="form-label">Type Search</Label>
    <Input type="search" class="form-control" id="input-search" placeholder="Search" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-submit" class="form-label">Type Submit</Label>
    <SpkButton as="input"  buttontype="submit" customClass="form-control" id="input-submit" value="Submit" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-reset" class="form-label">Type Reset</Label>
    <SpkButton as="input"  buttontype="reset" customClass="form-control" id="input-reset" value="Reset" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-button" class="form-label">Type Button</Label>
    <SpkButton as="input"  buttontype="button" customClass="form-control btn btn-primary" id="input-button"  value="Button" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Row >
        <Col xl={3}>
            <Label for="" class="form-label">Type Color</Label>
            <Input class="form-control form-input-color" type="color" value="#136bd0" />
        </Col>
        <Col xl={5}>
            <div class="form-check">
                <p class="mb-3 px-0 text-muted">Type Checkbox</p>
                <Input class=" ms-2" type="checkbox" value="" checked />
            </div>
        </Col>
        <Col xl={4}>
            <div class="form-check">
                <p class="mb-3 px-0 text-muted">Type Radio</p>
                <Input class=" ms-2" type="radio" checked />
            </div>
        </Col>
    </Row>
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-file" class="form-label">Type File</Label>
    <Input class="form-control" type="file" id="input-file" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="" class="form-label">Type Url</Label>
    <Input class="form-control" type="url"  name="website" placeholder="http://example.com" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-disabled" class="form-label">Type Disabled</Label>
    <Input type="text" id="input-disabled" class="form-control" placeholder="Disabled input" disabled="" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-readonlytext" class="form-label">Input Readonly Text</Label>
    <Input type="text" readonly="" class="form-control-plaintext" id="input-readonlytext" value="email@example.com" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="disabled-readonlytext" class="form-label">Disabled Readonly Input</Label>
    <Input class="form-control" type="text" value="Disabled readonly input" id="disabled-readonlytext" aria-label="Disabled input example" disabled="" readonly="" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="" class="form-label">Type Readonly Input</Label>
    <Input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly="" />
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="text-area" class="form-label">Textarea</Label>
    <Input Type="textarea" class="form-control" id="text-area" rows="1"></Input>
</Col>
<Col xl={4} lg={6} md={6} sm={12}>
    <Label for="input-DataList" class="form-label">Datalist example</Label>
    <Input class="form-control" list="datalistOptions" id="input-DataList" placeholder="Type to search..." />
    <datalist id="datalistOptions">
        <option value="San Francisco">
        </option>
        <option value="New York">
        </option>
        <option value="Seattle">
        </option>
        <option value="Los Angeles">
        </option>
        <option value="Chicago">
        </option>
    </datalist>
</Col>
</Row>`;

export const input2 = `import { Col,  Input, Label} from "@sveltestrap/sveltestrap";

<Row class=" gy-3">
<Col xl={12}>
    <Label for="input-noradius" class="form-label">Input With No Radius</Label>
    <Input type="text" class="form-control rounded-0" id="input-noradius" placeholder="No Radius" />
</Col>
<Col xl={12}>
    <Label for="input-rounded" class="form-label">Input With Radius</Label>
    <Input type="text" class="form-control" id="input-rounded" placeholder="Default Radius" />
</Col>
<Col xl={12}>
    <Label for="input-rounded-pill" class="form-label">Rounded Input</Label>
    <Input type="text" class="form-control rounded-pill" id="input-rounded-pill" placeholder="Rounded" />
</Col>
</Row>`;

export const input3 = `import { Col,  Input, Label} from "@sveltestrap/sveltestrap";
<Row class="gy-3">
                <Col xl={12}>
                    <Label for="input-rounded1" class="form-label">Default</Label>
                    <Input type="text" class="form-control" id="input-rounded1" placeholder="Default" />
                </Col>
                <Col xl={12}>
                    <Label for="input-rounded2" class="form-label">Dotted Input</Label>
                    <Input type="text" class="form-control border-dotted" id="input-rounded2" placeholder="Dotted" />
                </Col>
                <Col xl={12}>
                    <Label for="input-rounded3" class="form-label">Dashed Input</Label>
                    <Input type="text" class="form-control border-dashed" id="input-rounded3" placeholder="Dashed" />
                </Col>
            </Row>`;

export const input4 = `import { Input,} from "@sveltestrap/sveltestrap";

<Input class="form-control form-control-sm mb-3" type="text"
            placeholder=".form-control-sm" aria-label=".form-control-sm example" />
            <Input class="form-control mb-3" type="text" placeholder="Default input"
                aria-label="default input example" />
            <Input class="form-control form-control-lg" type="text"
            placeholder=".form-control-lg" aria-label=".form-control-lg example" />`;

export const input5 = `import {  Form, Input, Label } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
<Form>
                <div class="mb-3">
                    <Label for="exampleInputEmail1" class="form-label">Email
                        address</Label>
                    <Input type="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll
                        never share your email
                        with
                        anyone else.</div>
                </div>
                <div class="mb-3">
                    <Label for="exampleInputPassword1" class="form-label">Password</Label>
                    <Input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <Input type="checkbox" class="" id="exampleCheck1" />
                    <Label class="form-check-label" for="exampleCheck1">Check
                        me out</Label>
                </div>
                <SpkButton   buttontype="submit" color="primary" text="Submit" />
            </Form>`;

export const input6 = `import {  Input, Label} from "@sveltestrap/sveltestrap";
<Label for="inputPassword5" class="form-label">Password</Label>
                    <Input type="password" id="inputPassword5" class="form-control"
                        aria-describedby="passwordHelpBlock" />
                    <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and
                        numbers,
                        and
                        must not contain spaces, special characters, or emoji.
                    </div>`;

export const input7 = `import { Row,  Input, Label} from "@sveltestrap/sveltestrap";
<Row class=" g-3 align-items-center">
<div class="col-auto">
    <Label for="inputPassword6" class="col-form-label">Password</Label>
</div>
<div class="col-auto">
    <Input type="password" id="inputPassword6" class="form-control"
        aria-describedby="passwordHelpInline" />
</div>
<div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
        Must be 8-20 characters long.
    </span>
</div>
</Row>`;

export const input8 = `import {Form, Input, Label } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<Form>
<fieldset disabled="">
    <legend>Disabled fieldset example</legend>
    <div class="mb-3">
        <Label for="disabledTextInput" class="form-label">Disabled
            input</Label>
        <Input type="text" id="disabledTextInput" class="form-control"
            placeholder="Disabled input" />
    </div>
    <div class="mb-3">
        <Label for="disabledSelect" class="form-label">Disabled select
            menu</Label>
        <select id="disabledSelect" class="form-select">
            <option>Disabled select</option>
        </select>
    </div>
    <div class="mb-3">
        <div class="form-check">
            <input class="form-check-input" type="checkbox"
                id="disabledFieldsetCheck" disabled="">
            <Label class="form-check-label" for="disabledFieldsetCheck">
                Can't check this
            </Label>
        </div>
    </div>
    <SpkButton   buttontype="submit" color="primary" text="Submit" />
</fieldset>
</Form>`;
/*------ inputs(prism-code for showcode purpose) end ------*/

/*------ checks & radios(prism-code for showcode purpose) start ------*/
export const radio1 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="checkbox" id="flexCheckDefault" label=" Default checkbox" />
<Input type="checkbox" id="flexCheckChecked" label=" Checked checkbox" checked />
`;

export const radio2 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="checkbox" disabled label="Disabled checkbox" />
<Input type="checkbox"  disabled  label="Disabled checked checkbox" checked />`;

export const radio3 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="radio" label="Default radio" name="example-radios1" />
            <Input type="radio" checked label="Default checked radio" name="example-radios1" />`;

export const radio4 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="radio" disbled label="Disabled radio" />
<Input type="radio" disabled checked label="Disabled checked radio" />`;

export const radio5 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input  type="checkbox"  label="Default checkbox" />
<Input  type="checkbox"  disabled label="Disabled checkbox" />
<Input type="radio" checked label="Default radio" />
<Input type="radio" disabled label="Disabled radio" />`;

export const radio6 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="switch" label="Default switch checkbox input" />
<Input type="switch" checked label="Checked switch checkbox input" />
<Input type="switch" disabled label="Disabled switch checkbox input" />
<Input type="switch" disabled checked label="Disabled checked switch checkbox input" />`;

export const radio7 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="checkbox" checked label="Default" />
<Input class="form-check-md d-flex align-items-center"
  type="checkbox" checked id="checkebox-md" label="Medium" />
<Input class="form-check-lg d-flex align-items-center"
  type="checkbox" checked id="checkebox-lg" label="Large" />`;

export const radio8 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="radio" label="Default" name="example-radios" />
<Input type="radio" class="form-check-md" id="Radio-md" name="example-radios" label="Medium" />
<Input type="radio" class="form-check-lg" name="example-radios"
  checked id="Radio-lg" label="Large" />`;

export const radio9 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="switch" label="Default" />
<Input type="switch" class="form-check-md form-switch" id="switch-md" label="Medium" />
<Input type="switch" class="form-check-lg form-switch"
  id="switch-lg" label="Large" />`;

export const radio10 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input class="form-check-inline" type="checkbox" label="1" />
<Input class="form-check-inline" type="checkbox" label="2" />
<Input class="form-check-inline" disabled type="checkbox" label="3 (disabled)" />
<Input class="form-check-inline" type="radio" label="1" name='radio1' />
<Input class="form-check-inline" type="radio" label="2" name='radio1' />
<Input class="form-check-inline" disabled type="radio" label="3 (disabled)" />`;

export const radio11 = `import {  Input } from "@sveltestrap/sveltestrap";

<div class="d-flex">
              <Input class="me-4" type="checkbox" />
              <Input  type="radio"  />
            </div>`;

export const radio12 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input reverse  class=" mb-3" type="checkbox" label="Reverse checkbox" />
<Input reverse  class=" mb-3" type="checkbox" disabled label="Disabled reverse checkbox" />
<Input reverse  class=" mb-3" type="switch" label=" Reverse switch checkbox input" />`;

export const radio13 = ` <input type="checkbox" class="btn-check" id="btn-check-outlined" />
<label class="btn btn-outline-primary mb-3" for="btn-check-outlined">Single
  toggle</label><br />

<input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked
/>
<label class="btn btn-outline-secondary mb-3"
  for="btn-check-2-outlined">Checked</label><br />

<input type="radio" class="btn-check" name="options-outlined" id="success-outlined"
  checked />
<label class="btn btn-outline-success m-1" for="success-outlined">Checked success
  radio</label>

<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined"
/>
<label class="btn btn-outline-danger m-1" for="danger-outlined">Danger radio</label>`;

export const radio14 = `import {  Input } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<Input type="radio" class="btn-check" name="options" id="option1" checked />
<SpkButton   buttontype="button" color="primary" customClass="m-1" text="Checked" />
<Input type="radio" class="btn-check" name="options" id="option2" />
<SpkButton   buttontype="button" color="primary" customClass="m-1" text="Radio" />
<Input type="radio" class="btn-check" name="options" id="option3" disabled />
<SpkButton disabled={true}  buttontype="button" color="primary" customClass="m-1" text="Disabled" />
<Input type="radio" class="btn-check" name="options" id="option4" />
<SpkButton   buttontype="button" color="primary" customClass="m-1" text="Radio" />`;

export const radio15 = `import {  Input } from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<Input type="checkbox" class="btn-check" id="btn-check" />
          <SpkButton   buttontype="button" color="primary" customClass="m-1" text="Single toggle" />
          <Input type="checkbox" class="btn-check" id="btn-check-2" checked />
          <SpkButton   buttontype="button" color="primary" customClass="m-1" text="Checked" />
          <Input type="checkbox" class="btn-check" id="btn-check-3" disabled />
          <SpkButton disabled={true}  buttontype="button" color="primary" customClass="m-1" text="Disabled" />`;

export const radio16 =
    `import {  Input } from 
"@sveltestrap/sveltestrap";
import { Checkdata } from 
"$lib/data/forms/
checks&radiosdata.js";
{#each Checkdata as idx (idx.id)}
<div class="form-check 
{idx.checkclass}">
<input id={idx.id} class="form-check-input 
form-checked-{idx.checkcolor}" type="checkbox" checked />
<label for={idx.lablefor}>{idx.text}</label>
</div>
{/each}`;
export const dataradio16 =
    `export const Checkdata = [
{ id: "1", checkclass: "mb-2", 
 checkcolor: "primary", text:"Primary"
  ,lablefor:"primaryChecked" },
{ id: "2", checkclass: "mb-2", 
 checkcolor: "secondary", text:"Secondary"
 ,lablefor:"secondaryChecked" },
{ id: "3", checkclass: "mb-2", 
 checkcolor: "warning", text:"Warning"
  ,lablefor:"warningChecked"},
{ id: "4", checkclass: "mb-2", 
 checkcolor: "info", text: "Info"
  ,lablefor:"infoChecked"},
{ id: "5", checkclass: "mb-2", 
 checkcolor: "success", text: "Success" 
 ,lablefor:"successChecked"},
{ id: "6", checkclass: "mb-2", 
 checkcolor: "danger", text: "Danger"
  ,lablefor:"dangerChecked"},
{ id: "7", checkclass: "mb-0", 
 checkcolor: "dark", text: "Dark",
 lablefor:"darkChecked"}
];`;
export const radio17 = 
`import {  Input } 
from "@sveltestrap
/sveltestrap";
import { Checkdata } 
from "$lib/data/forms/
checks&radiosdata.js";

{#each Checkdata as idx 
(idx.id)}
<div class={"form-check 
{idx.checkclass}"} >
<input id={idx.id} 
class={"form-check-input 
form-checked-outline 
form-checked-{idx.checkcolor}"}
  type="checkbox" checked />
<label for={idx.lablefor}>
{idx.text}</label>
  </div>
{/each}`;

export const radio18 = 
`import {  Input } from
 "@sveltestrap/sveltestrap";
import { Checkdata } from 
"$lib/data/forms
/checks&radiosdata.js";

{#each Checkdata as idx 
(idx.id)}
<div class="form-check 
{idx.checkclass}">
<input id={idx.id} 
class="form-check-input 
form-checked-{idx.checkcolor}" 
type="radio" checked />
<label for={idx.lablefor}>
{idx.text}</label>
</div>
{/each}`;

export const radio19 = 
`import {  Input } from 
"@sveltestrap/sveltestrap";
import { Checkdata } from
 "$lib/data/forms/
 checks&radiosdata.js";

{#each Checkdata as idx 
(idx.id)}
<div class={"form-check 
{idx.checkclass}"} >
<input id={idx.id} 
class={"form-check-input 
form-checked-outline
 form-checked-{idx.checkcolor}"}
  type="radio" checked />
<label for={idx.lablefor}>
{idx.text}</label>
  </div>
{/each}`;

export const radio20 = 
`import {  Input } 
from "@sveltestrap
/sveltestrap";
import { Checkdata } 
from "$lib/data/
forms/checks&radiosdata.js";

{#each Checkdata 
as idx (idx.id)}
<div class="form-check 
form-switch {idx.checkclass}">
<input id={idx.id}
 class="form-check-input 
 form-checked-{idx.checkcolor}" 
 type="checkbox" role="switch" 
 checked />
<label for={idx.lablefor}>
{idx.text}</label>
</div>
            {/each}`;

export const radio21 = `import { Row,Col} from "react-bootstrap";
//
let primary1 = "on";
let secondary1 = "on";
let warning1 = "on";
let info1 = "on";
let success1 = "on";
let danger1 = "on";
let light1 = "on";
let dark1 = "on";

<Row class=" gy-1">
<Col xl={4}>
  <div class="toggle {primary1}" on:click={() => primary1 = toggle(primary1)}>
    <span></span>
  </div>
</Col>
<Col xl={4}>
  <div class="toggle mb-3 toggle-secondary {secondary1}" on:click={() => secondary1 = toggle(secondary1)}>
    <span></span>
  </div>
</Col>
<Col xl={4}>
  <div class="toggle mb-3 toggle-warning {warning1}" on:click={() => warning1 = toggle(warning1)}>
    <span></span>
  </div>
</Col>
<Col xl={4}>
  <div class="toggle mb-3 toggle-info {info1}" on:click={() => info1 = toggle(info1)}>
    <span></span>
  </div>
</Col>
<Col xl={4}>
  <div class="toggle mb-3 toggle-success {success1}" on:click={() => success1 = toggle(success1)}>
    <span></span>
  </div>
</Col>
<Col xl={4}>
  <div class="toggle mb-3 toggle-danger {danger1}" on:click={() => danger1 = toggle(danger1)}>
    <span></span>
  </div>
</Col>
<Col xl={4}>
  <div class="toggle mb-3 toggle-light {light1}" on:click={() => light1 = toggle(light1)}>
    <span></span>
  </div>
</Col>
<Col xl={4}>
  <div class="toggle ms-sm-2 toggle-dark {dark1}" on:click={() => dark1 = toggle(dark1)}>
    <span></span>
  </div>
</Col>
</Row>`;

export const radio22 = `import {  Row,Col } from "@sveltestrap/sveltestrap";

<Row class="gy-1">
<Col xl={4}>
    <div class="custom-toggle-switch d-flex align-items-center mb-4">
        <input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" checked>
        <Label for="toggleswitchPrimary" class="label-primary"></Label><span class="ms-3">Primary</span>
    </div>
</Col>
<Col xl={4}>
    <div class="custom-toggle-switch d-flex align-items-center mb-4">
        <input id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" checked>
        <Label for="toggleswitchSecondary" class="label-secondary"></Label><span class="ms-3">Secondary</span>
    </div>
</Col>
<Col xl={4}>
    <div class="custom-toggle-switch d-flex align-items-center mb-4">
        <input id="toggleswitchWarning" name="toggleswitch001" type="checkbox" checked>
        <Label for="toggleswitchWarning" class="label-warning"></Label><span class="ms-3">Warning</span>
    </div>
</Col>
<Col xl={4}>
    <div class="custom-toggle-switch d-flex align-items-center mb-4">
        <input id="toggleswitchInfo" name="toggleswitch001" type="checkbox" checked>
        <Label for="toggleswitchInfo" class="label-info"></Label><span class="ms-3">Info</span>
    </div>
</Col>
<Col xl={4}>
    <div class="custom-toggle-switch d-flex align-items-center mb-4">
        <input id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" checked>
        <Label for="toggleswitchSuccess" class="label-success"></Label><span class="ms-3">Success</span>
    </div>
</Col>
<Col xl={4}>
    <div class="custom-toggle-switch d-flex align-items-center mb-4">
        <input id="toggleswitchDanger" name="toggleswitch001" type="checkbox" checked>
        <Label for="toggleswitchDanger" class="label-danger"></Label><span class="ms-3">Danger</span>
    </div>
</Col>
<Col xl={4}>
    <div class="custom-toggle-switch d-flex align-items-center mb-4">
        <input id="toggleswitchLight" name="toggleswitch001" type="checkbox" checked>
        <Label for="toggleswitchLight" class="label-light"></Label><span class="ms-3">Light</span>
    </div>
</Col>
<Col xl={4}>
    <div class="custom-toggle-switch d-flex align-items-center mb-4">
        <input id="toggleswitchDark" name="toggleswitch001" type="checkbox" checked>
        <Label for="toggleswitchDark" class="label-dark"></Label><span class="ms-3">Dark</span>
    </div>
</Col>
</Row>`;

export const radio23 = `import {  Form } from "react-bootstrap";
import { Checkdata1 } from "../../../../../../shared/data/forms/formelements/checks&radios";

{Checkdata1.map((idx) => (
    <div className={"form-check $#{idx.class1}"} key={Math.random()}>
        <input id={idx.id} className={"form-check-input form-checked-outline form-checked-$#{idx.class2}"}
            type="radio" defaultChecked />
        <label className=''>{idx.text}</label>
    </div>
))}`;

export const radio24 = `
<div class="d-flex align-items-center flex-wrap mb-4">
<div class><p class="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div class="custom-toggle-switch toggle-sm ms-2">
    <input id="size-sm" name="toggleswitchsize" type="checkbox" checked>
    <Label for="size-sm" class="label-primary"></Label>
</div>
</div>
<div class="d-flex align-items-center flex-wrap mb-4">
<div class><p class="text-muted m-0">Default toggle switch</p></div>
<div class="custom-toggle-switch ms-2">
    <input id="size-default" name="toggleswitchsize" type="checkbox" checked>
    <Label for="size-default" class="label-secondary mb-1"></Label>
</div>
</div>
<div class="d-sm-flex d-block align-items-center flex-wrap">
<div class="mb-sm-0 mb-2"><p class="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div class="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
    <input id="size-lg" name="toggleswitchsize" type="checkbox" checked>
    <Label for="size-lg" class="label-success mb-2"></Label>
</div>
</div>`;
/*------ checks & radios(prism-code for showcode purpose) end ------*/

/*------ inputgroup(prism-code for showcode purpose) start ------*/
export const inputgroup1 = `import { InputGroup, InputGroupText, Input,Label} from "@sveltestrap/sveltestrap";
<InputGroup class="mb-3">
                                    <InputGroupText id="basic-addon1">@</InputGroupText>
                                    <Input type="text" class="form-control" placeholder="Username"
                                        aria-label="Username" aria-describedby="basic-addon1" />
                                </InputGroup>
                                <InputGroup class="mb-3">
                                    <Input type="text" class="form-control" placeholder="Recipient's username"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <InputGroupText id="basic-addon2">@example.com</InputGroupText>
                                </InputGroup>
                                <Label for="basic-url" class="form-label">Your vanity URL</Label>
                                <InputGroup class="mb-3">
                                    <InputGroupText class=""
                                        id="basic-addon3">https://example.com/users/</InputGroupText>
                                    <Input type="text" class="form-control" id="basic-url"
                                        aria-describedby="basic-addon3" />
                                </InputGroup>
                                <InputGroup class="mb-3">
                                    <InputGroupText class="">$</InputGroupText>
                                    <Input type="text" class="form-control"
                                        aria-label="Amount (to the nearest dollar)" />
                                    <InputGroupText>.00</InputGroupText>
                                </InputGroup>
                                <InputGroup class="mb-3">
                                    <Input type="text" class="form-control" placeholder="Username"
                                        aria-label="Username" />
                                    <InputGroupText class="">@</InputGroupText>
                                    <Input type="text" class="form-control" placeholder="Server"
                                        aria-label="Server" />
                                </InputGroup>
                                <InputGroup class="">
                                    <InputGroupText class="">With textarea</InputGroupText>
                                    <Input type="textarea" class="form-control" aria-label="With textarea" />
                                </InputGroup>`;

export const inputgroup2 = `import { InputGroup, InputGroupText, Input} from "@sveltestrap/sveltestrap";

<InputGroup class="flex-nowrap">
                                <InputGroupText  id="addon-wrapping">@</InputGroupText>
                                <Input type="text"  placeholder="Username"
                                  aria-label="Username" aria-describedby="addon-wrapping" />
                              </InputGroup>`;

export const inputgroup3 = `import { InputGroup, InputGroupText, Input} from "@sveltestrap/sveltestrap";

<InputGroup class="input-group-sm mb-3">
<InputGroupText class="" id="inputGroup-sizing-sm">Small</InputGroupText>
<Input type="text" class="form-control"
  aria-label="Sizing example input"
  aria-describedby="inputGroup-sizing-sm" />
</InputGroup>
<InputGroup class="mb-3">
<InputGroupText class=""
  id="inputGroup-sizing-default">Default</InputGroupText>
<Input type="text" class="form-control"
  aria-label="Sizing example input"
  aria-describedby="inputGroup-sizing-default" />
</InputGroup>
<InputGroup class="input-group-lg">
<InputGroupText class="" id="inputGroup-sizing-lg">Large</InputGroupText>
<Input type="text" class="form-control"
  aria-label="Sizing example input"
  aria-describedby="inputGroup-sizing-lg" />
</InputGroup>`;

export const inputgroup4 = `import { InputGroup, InputGroupText, Input} from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<InputGroup class="mb-3">
                                          <SpkButton color='primary' buttontype="button" id="button-addon1"  text="Button"/>
                                          <Input type="text"  placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                        </InputGroup>
                                        <InputGroup class="mb-3">
                                          <Input type="text"  placeholder="Recipient's username"
                                            aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <SpkButton color='primary' buttontype="button" id="button-addon1"  text="Button"/>
                                        </InputGroup>
                                        <InputGroup class="mb-3">
                                            <SpkButton color='primary' buttontype="button" id="button-addon1"  text="Button"/>
                                            <SpkButton color='primary' buttontype="button" id="button-addon1"  text="Button"/>
                                          <Input type="text"  placeholder=""
                                            aria-label="Example text with two button addons" />
                                        </InputGroup>
                                        <InputGroup>
                                          <Input type="text"  placeholder="Recipient's username"
                                            aria-label="Recipient's username with two button addons" />
                                          <SpkButton color='primary' buttontype="button" id="button-addon1"  text="Button"/>
                                          <SpkButton color='primary' buttontype="button" id="button-addon1"  text="Button"/>
                                        </InputGroup>`;

export const inputgroup5 = `import { InputGroup, InputGroupText, Input,Label} from "@sveltestrap/sveltestrap";
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { Dropdownoption } from "$lib/data/uielements/dropdowndata.js";

<InputGroup class="mb-3">
                                            <SpkDropdown Color="primary" Caret={true} parent={"Dropdown"} option={Dropdownoption}/> 
                                          <Input type="text" class="form-control"
                                            aria-label="Text input with dropdown button" />
                                        </InputGroup>
                                        <InputGroup class="mb-3">
                                          <Input type="text" class="form-control"
                                            aria-label="Text input with dropdown button" />
                                            <SpkDropdown Color="outline-primary" Caret={true} parent={"Dropdown"} option={Dropdownoption}/> 
                                        </InputGroup>
                                        <InputGroup class="flex-nowrap">
                                            <SpkDropdown Color="primary-transparent" Caret={true} parent={"Dropdown"} option={Dropdownoption}/> 
                                          <Input type="text" class=""
                                            aria-label="Text input with 2 dropdown buttons" />
                                            <SpkDropdown Color="primary-transparent" Caret={true} parent={"Dropdown"} option={Dropdownoption}/> 
                                        </InputGroup>`;

export const inputgroup6 = `  import { InputGroup, InputGroupText, Input,Label} from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";

<InputGroup class="mb-3">
<InputGroupText class="input-group-text" for="inputGroupFile01">Upload</InputGroupText>
<Input type="file" class="form-control" id="inputGroupFile01" />
</InputGroup>
<InputGroup class="mb-3">
<Input type="file" class="form-control" id="inputGroupFile02" />
<InputGroupText class="input-group-text" for="inputGroupFile02">Upload</InputGroupText>
</InputGroup>

<InputGroup class="mb-3">
  <SpkButton color='primary' buttontype="button" id="inputGroupFileAddon03"  text="Button"/>
<Input type="file" class="form-control" id="inputGroupFile03"
  aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
</InputGroup>
<InputGroup>
<Input type="file" class="form-control" id="inputGroupFile04"
  aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
  <SpkButton color='primary' buttontype="button" id="inputGroupFileAddon04"  text="Button"/>
</InputGroup>`;

export const inputgroup7 = `  import { InputGroup, InputGroupText, Input} from "@sveltestrap/sveltestrap";

<InputGroup>
                                            <InputGroupText >First and last name</InputGroupText>
                                            <Input type="text" aria-label="First name"   />
                                            <Input type="text" aria-label="Last name"  />
                                          </InputGroup>`;

export const inputgroup8 = `import { InputGroup, InputGroupText, Input} from "@sveltestrap/sveltestrap";

<InputGroup class="mb-3">
                                          <InputGroupText >
                                            <Input class=" mt-0" type="checkbox"
                                              aria-label="Checkbox for following text input" />
                                          </InputGroupText>
                                          <Input type="text" 
                                            aria-label="Text input with checkbox" />
                                        </InputGroup>
                                        <InputGroup>
                                          <InputGroupText >
                                            <Input class="mt-0" type="radio" value=""
                                            aria-label="checkbox button for following text input" />
                                          </InputGroupText>
                                          <Input type="text" 
                                            aria-label="Text input with radio button" />
                                        </InputGroup>`;

export const inputgroup9 = `import {InputGroup, InputGroupText, Input} from "@sveltestrap/sveltestrap";

<InputGroup class="mb-3">
<InputGroupText >
  <Input class="mt-0" type="checkbox" value=""
    aria-label="Checkbox for following text input" />
</InputGroupText>
<Input type="text" 
  aria-label="Text input with checkbox" />
</InputGroup>
<InputGroup>
<InputGroupText >
  <Input class="mt-0" type="radio" value=""
    aria-label="Radio button for following text input" />
</InputGroupText>
<Input type="text" 
  aria-label="Text input with radio button" />
</InputGroup>`;

export const inputgroup10 = `  import { InputGroup, InputGroupText, Input,Label} from "@sveltestrap/sveltestrap";
import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
import SpkDropdown from "$lib/@spk/uielements/Dropdown/SpkDropdown.svelte";
import { Dropdownoption } from "$lib/data/uielements/dropdowndata.js";

<InputGroup class="mb-3">
<SpkButton color='primary' buttontype="button" text="Action"/>
<SpkDropdown Color="outline-primary" Caret={true} parent="" option={Dropdownoption}/> 
<Input type="text" class=""
aria-label="Text input with segmented dropdown button" />
</InputGroup>
<InputGroup>
<Input type="text" class=""
aria-label="Text input with segmented dropdown button" />
<SpkButton color='primary' buttontype="button" text="Action"/>
<SpkDropdown Color="outline-primary" Caret={true} parent="" option={Dropdownoption}/> 
</InputGroup>`;

export const inputgroup11 = `  import {InputGroup, InputGroupText, Input,} from "@sveltestrap/sveltestrap";

<InputGroup class="mb-3">
<label class="input-group-text" for="inputGroupSelect01">Options</label>
<Input type="select" class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
  <option>Choose...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Input>
</InputGroup>
<InputGroup class="mb-3">
<Input type="select" class="form-select" id="inputGroupSelect02">
  <option >Choose...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Input>
<label class="input-group-text" for="inputGroupSelect02">Options</label>
</InputGroup>
<InputGroup class="mb-3">
  <SpkButton color='primary' buttontype="button" text="Button"/>
<Input type="select" class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
  <option>Choose...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Input>
</InputGroup>
<InputGroup>
<Input type="select" class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
  <option>Choose...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Input>
<SpkButton color='primary' buttontype="button" text="Button"/>
</InputGroup>`;
/*------ inputgroup(prism-code for showcode purpose) end ------*/


/*------ formselect(prism-code for showcode purpose) start ------*/
export const formselect1 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="select" aria-label="Default select example">
<option>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Input>`;

export const formselect2 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="select" aria-label="Default select example" disabled={true}>
<option>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Input>`;

export const formselect3 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="select" class="form-select rounded-pill" aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Input>`;

export const formselect4 = `
<select class="form-select" multiple aria-label="multiple select example">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>`;

export const formselect5 = `<select class="form-select" size="4" aria-label="size 3 select example">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
<option value="4">Four</option>
<option value="5">Five</option>
</select>`;

export const formselect6 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="select" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Input>
            <Input type="select" class="form-select mb-3" aria-label="Default select">
                <option selected>Open this select menu
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Input>
            <Input type="select" class="form-select form-select-lg"
                aria-label=".form-select-lg example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Input>`;
/*------ formselect(prism-code for showcode purpose) end ------*/

/*------ rangeslider(prism-code for showcode purpose) start ------*/
export const rangeslider1 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="range" id="customRange1" />`;

export const rangeslider2 = ` import {  Input } from "@sveltestrap/sveltestrap";

<Input type="range" id="disabledRange" disabled />`;

export const rangeslider3 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="range" min={0} max={100} step={10}  class="form-range" placeholder="range placeholder" id="customRange2" />`;

export const rangeslider4 = `import {  Input } from "@sveltestrap/sveltestrap";

<Input type="range" min={0} max={100} step={0.5}  class="form-range" placeholder="range placeholder" id="customRange3" />
`;
/*------ rangeslider(prism-code for showcode purpose) end ------*/

/*------ fileuploads(prism-code for showcode purpose) start ------*/
export const fileupload1 = `  import { FormGroup ,Label ,Input} from "@sveltestrap/sveltestrap";

<FormGroup  controlId="formFile" className="mb-3">
<Label>Default file input example</Label>
<Input type="file" />
</FormGroup >
<FormGroup  controlId="formFileMultiple" className="mb-3">
<Label>Multiple files input example</Label>
<Input type="file" multiple />
</FormGroup >
<FormGroup  controlId="formFileDisabled" className="mb-3">
<Label>Disabled file input example</Label>
<Input type="file" disabled />
</FormGroup >
<FormGroup  controlId="formFileSm" className="mb-3">
<Label>Small file input example</Label>
<Input type="file" bsSize="sm" />
</FormGroup >
<FormGroup  controlId="formFileLg" className="mb-3">
<Label>Large file input example</Label>
<Input type="file" bsSize="lg" />
</FormGroup >`;
/*------ fileuploads(prism-code for showcode purpose) end ------*/

/*------ colorpicker(prism-code for showcode purpose) start ------*/
export const colorpicker1 = `import {  Input } from "@sveltestrap/sveltestrap";

 <Form.Label htmlFor="exampleColorInput">
Color picker</Form.Label>
<Form.Control type="color" 
id="exampleColorInput"  
defaultValue="#136ad0" 
title="Choose your color"
/>`;
/*------ colorpicker(prism-code for showcode purpose) end ------*/

/*------ floating lables(prism-code for showcode purpose) start ------*/
export const floating1 = `  import {  FormGroup, Input } from "@sveltestrap/sveltestrap";


<FormGroup floating label="Email address">
                <Input type="email" id="floatingInput" placeholder="name@example.com" />
              </FormGroup>
              <FormGroup floating label="Password">
                <Input type="password" id="floatingPassword" placeholder="Password" />
              </FormGroup>`;

export const floating2 = ` <div class="form-floating mb-3">
<input type="email" readonly class="form-control-plaintext"
    id="floatingEmptyPlaintextInput" placeholder="name@example.com">
<label for="floatingEmptyPlaintextInput">Empty input</label>
</div>
<div class="form-floating">
<input type="email" readonly class="form-control-plaintext"
    id="floatingPlaintextInput" placeholder="name@example.com"
    value="name@example.com">
<label for="floatingPlaintextInput">Input with value</label>
</div>`;

export const floating3 = `<form class="form-floating my-3">
<input type="email" class="form-control" id="floatingInputValue"
    placeholder="name@example.com" value="test@example.com">
<label for="floatingInputValue">Input with value</label>
</form>
<form class="form-floatin">
<input type="email" class="form-control is-invalid"
    id="floatingInputInvalid" placeholder="name@example.com"
    value="test@example.com">
<label for="floatingInputInvalid">Invalid input</label>
</form>`;

export const floating4 = ` <div class="form-floating mb-4">
<textarea class="form-control" placeholder="Leave a comment here"
    id="floatingTextarea"></textarea>
<label for="floatingTextarea">Description</label>
</div>
<div class="form-floating">
<textarea class="form-control" placeholder="Leave a comment here"
    id="floatingTextarea2" rows="1" disabled=""></textarea>
<label for="floatingTextarea2">Disabled</label>
</div>`;

export const floating5 = `<div class="form-floating">
<select class="form-select" id="floatingSelect"
    aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
<label for="floatingSelect">Works with selects</label>
</div>`;

export const floating6 = `  <div class="row g-2">
<div class="col-md">
    <div class="form-floating">
        <input type="email" class="form-control" id="floatingInputGrid"
            placeholder="name@example.com" value="mdo@example.com">
        <label for="floatingInputGrid">Email address</label>
    </div>
</div>
<div class="col-md">
    <div class="form-floating">
        <select class="form-select" id="floatingSelectGrid">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <label for="floatingSelectGrid">Works with selects</label>
    </div>
</div>
</div>`;

export const floating7 = ` <Row class=" gy-4">
<Col xl={4}>
    <div class="form-floating mb-4 floating-primary">
        <input type="email" class="form-control" id="floatingInputprimary" placeholder="name@example.com">
        <label for="floatingInputprimary">primary</label>
    </div>
</Col>
<Col xl={4}>
    <div class="form-floating mb-4 floating-secondary">
        <input type="email" class="form-control" id="floatingInputsecondary" placeholder="name@example.com">
        <label for="floatingInputsecondary">secondary</label>
    </div>
</Col>
<Col xl={4}>
    <div class="form-floating mb-4 floating-warning">
        <input type="email" class="form-control" id="floatingInputwarning" placeholder="name@example.com">
        <label for="floatingInputwarning">warning</label>
    </div>
</Col>
<Col xl={4}>
    <div class="form-floating mb-4 floating-info">
        <input type="email" class="form-control" id="floatingInputinfo" placeholder="name@example.com">
        <label for="floatingInputinfo">info</label>
    </div>
</Col>
<Col xl={4}>
    <div class="form-floating mb-4 floating-success">
        <input type="email" class="form-control" id="floatingInputsuccess" placeholder="name@example.com">
        <label for="floatingInputsuccess">success</label>
    </div>
</Col>
<Col xl={4}>
    <div class="form-floating mb-4 floating-danger">
        <input type="email" class="form-control" id="floatingInputdanger" placeholder="name@example.com">
        <label for="floatingInputdanger">danger</label>
    </div>
</Col>
</Row>`;
/*------ floating lables(prism-code for showcode purpose) end ------*/


/*------ form layouts(prism-code for showcode purpose) start ------*/
export const layout1 = `
<div class="mb-3">
<label for="form-text" class="form-label fs-14 text-dark">Enter name</label>
<input type="text" class="form-control" id="form-text" placeholder="full name">
</div>
<div class="mb-3">
<label for="form-password" class="form-label fs-14 text-dark">Enter
    Password</label>
<input type="password" class="form-control" id="form-password" placeholder="password">
</div>
<div class="form-check mb-3">
<input class="form-check-input" type="checkbox" value="" id="invalidCheck"
    required>
<label class="form-check-label" for="invalidCheck">
    Accept Policy
</label>
</div>
<button class="btn btn-primary" type="submit">Submit</button>
`;

export const layout2 = `
<form>
<div class="row mb-3">
    <label for="inputEmail3"
        class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3">
    </div>
</div>
<div class="row mb-3">
    <label for="inputPassword3"
        class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3">
    </div>
</div>
<fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Qualified</legend>
    <div class="col-sm-10">
        <div class="form-check">
            <input class="form-check-input" type="radio"
                name="gridRadios" id="gridRadios1" value="option1"
                checked>
            <label class="form-check-label" for="gridRadios1">
                Prelims
            </label>
        </div>
        <div class="form-check disabled">
            <input class="form-check-input" type="radio"
                name="gridRadios" id="gridRadios2" value="option3"
                disabled>
            <label class="form-check-label" for="gridRadios2">
                Mains
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox"
                id="gridCheck1">
            <label class="form-check-label" for="gridCheck1">
                Certified
            </label>
        </div>
    </div>
</fieldset>
<button type="submit" class="btn btn-primary">Sign in</button>
</form>`;

export const layout3 = `<div class="mb-3">
<label for="form-text1" class="form-label fs-14 text-dark">Enter name</label>
<div class="input-group">
    <div class="input-group-text"><i class="ri-user-line"></i></div>
    <input type="text" class="form-control" id="form-text1" placeholder="">
</div>
</div>
<div class="mb-3">
<label for="form-password1" class="form-label fs-14 text-dark">Enter
    Password</label>
<div class="input-group">
    <div class="input-group-text"><i class="ri-lock-line"></i></div>
    <input type="password" class="form-control" id="form-password1" placeholder="">
</div>
</div>
<div class="form-check mb-3">
<input class="form-check-input" type="checkbox" value="" id="invalidCheck1"
    required="">
<label class="form-check-label" for="invalidCheck1">
    Accept Policy
</label>
</div>
<button class="btn btn-primary" type="submit">Submit</button>
`;

export const layout4 = `  <form>
<div class="row mb-3">
    <label for="inputEmail1"
        class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
        <div class="input-group">
            <input type="email" class="form-control" id="inputEmail1">
            <div class="input-group-text">
                <i class="ri-mail-line"></i>
            </div>
        </div>
    </div>
</div>
<div class="row mb-3">
    <label for="inputPassword1"
        class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
        <div class="input-group">
            <input type="password" class="form-control" id="inputPassword1">
            <div class="input-group-text">
                <i class="ri-lock-line"></i>
            </div>
        </div>
    </div>
</div>
<fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Qualified</legend>
    <div class="col-sm-10">
        <div class="form-check">
            <input class="form-check-input" type="radio"
                name="gridRadios" id="gridRadios4" value="option1"
                checked>
            <label class="form-check-label" for="gridRadios4">
                Prelims
            </label>
        </div>
        <div class="form-check disabled">
            <input class="form-check-input" type="radio"
                name="gridRadios" id="gridRadios3" value="option3"
                disabled>
            <label class="form-check-label" for="gridRadios3">
                Mains
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox"
                id="gridCheck2">
            <label class="form-check-label" for="gridCheck2">
                Certified
            </label>
        </div>
    </div>
</fieldset>
<button type="submit" class="btn btn-primary">Sign in</button>
</form>`;

export const layout5 = ` <form class="row row-cols-lg-auto g-3 align-items-center">
<div class="col-12">
    <label class="visually-hidden"
        for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
        <div class="input-group-text">@</div>
        <input type="text" class="form-control"
            id="inlineFormInputGroupUsername" placeholder="Username">
    </div>
</div>
<div class="col-12">
    <label class="visually-hidden"
        for="inlineFormSelectPref">Preference</label>
    <select class="form-select" id="inlineFormSelectPref">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</div>
<div class="col-12">
    <div class="form-check">
        <input class="form-check-input" type="checkbox"
            id="inlineFormCheck">
        <label class="form-check-label" for="inlineFormCheck">
            Remember me
        </label>
    </div>
</div>

<div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
</div>
</form>`;

export const layout6 = ` <div class="row g-3">
<div class="col-sm-7">
    <input type="text" class="form-control" placeholder="City"
        aria-label="City">
</div>
<div class="col-sm">
    <input type="text" class="form-control" placeholder="State"
        aria-label="State">
</div>
<div class="col-sm">
    <input type="text" class="form-control" placeholder="Zip"
        aria-label="Zip">
</div>
</div>`;

export const layout7 = `<div class="mb-3">
<label for="formGroupExampleInput" class="form-label">Example label</label>
<input type="text" class="form-control" id="formGroupExampleInput"
    placeholder="Example input placeholder">
</div>
<div class="mb-1">
<label for="formGroupExampleInput2" class="form-label">Another label</label>
<input type="text" class="form-control" id="formGroupExampleInput2"
    placeholder="Another input placeholder">
</div>`;

export const layout8 = ` <div class="row mb-3">
<label for="colFormLabelSm"
    class="col-sm-2 col-form-label col-form-label-sm">Email</label>
<div class="col-sm-10">
    <input type="email" class="form-control form-control-sm"
        id="colFormLabelSm" placeholder="col-form-label-sm">
</div>
</div>
<div class="row mb-3">
<label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
<div class="col-sm-10">
    <input type="email" class="form-control" id="colFormLabel"
        placeholder="col-form-label">
</div>
</div>
<div class="row">
<label for="colFormLabelLg"
    class="col-sm-2 col-form-label col-form-label-lg">Email</label>
<div class="col-sm-10">
    <input type="email" class="form-control form-control-lg"
        id="colFormLabelLg" placeholder="col-form-label-lg">
</div>
</div>`;

export const layout9 = `<form class="row gy-2 gx-3 align-items-center mb-4">
<div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Name</label>
    <input type="text" class="form-control" id="autoSizingInput"
        placeholder="Jane Doe">
</div>
<div class="col-auto">
    <label class="visually-hidden"
        for="autoSizingInputGroup">Username</label>
    <div class="input-group">
        <div class="input-group-text">@</div>
        <input type="text" class="form-control"
            id="autoSizingInputGroup" placeholder="Username">
    </div>
</div>
<div class="col-auto">
    <label class="visually-hidden"
        for="autoSizingSelect">Preference</label>
    <select class="form-select" id="autoSizingSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</div>
<div class="col-auto">
    <div class="form-check">
        <input class="form-check-input" type="checkbox"
            id="autoSizingCheck">
        <label class="form-check-label" for="autoSizingCheck">
            Remember me
        </label>
    </div>
</div>
<div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
</div>
</form>
<span class="fw-semibold mb-1 text-muted">You can then remix that once again with size-specific column
classes.</span>
<form class="row gx-3 gy-2 align-items-center mt-0">
<div class="col-sm-3">
    <label class="visually-hidden"
        for="specificSizeInputName">Name</label>
    <input type="text" class="form-control" id="specificSizeInputName"
        placeholder="Jane Doe">
</div>
<div class="col-sm-3">
    <label class="visually-hidden"
        for="specificSizeInputGroupUsername">Username</label>
    <div class="input-group">
        <div class="input-group-text">@</div>
        <input type="text" class="form-control"
            id="specificSizeInputGroupUsername" placeholder="Username">
    </div>
</div>
<div class="col-sm-3">
    <label class="visually-hidden"
        for="specificSizeSelect">Preference</label>
    <select class="form-select" id="specificSizeSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</div>
<div class="col-auto">
    <div class="form-check">
        <input class="form-check-input" type="checkbox"
            id="autoSizingCheck2">
        <label class="form-check-label" for="autoSizingCheck2">
            Remember me
        </label>
    </div>
</div>
<div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
</div>
</form>`;

export const layout10 = ` <div class="row">
<div class="col-md-6 mb-3">
    <Label class="form-label">First Name</Label>
    <input type="text" class="form-control" placeholder="First name"
        aria-label="First name">
</div>
<div class="col-md-6 mb-3">
    <Label class="form-label">Last Name</Label>
    <input type="text" class="form-control" placeholder="Last name"
        aria-label="Last name">
</div>
<div class="col-md-6 mb-3">
    <Label class="form-label">Address</Label>
    <div class="row">
        <div class="col-xl-12 mb-3">
            <input type="text" class="form-control" placeholder="Street"
            aria-label="Street">
        </div>
        <div class="col-xl-12 mb-3">
            <input type="text" class="form-control" placeholder="Landmark"
            aria-label="Landmark">
        </div>
        <div class="col-xxl-6 col-xl-12 mb-3">
            <input type="text" class="form-control" placeholder="City"
            aria-label="City">
        </div>
        <div class="col-xxl-6 col-xl-12 mb-3">
            <select id="inputState1" class="form-select">
                <option selected>State</option>
                <option>...</option>
            </select>
        </div>
        <div class="col-xxl-6 col-xl-12 mb-3">
            <input type="text" class="form-control" placeholder="Postal/Zip code"
            aria-label="Postal/Zip code">
        </div>
        <div class="col-xxl-6 col-xl-12 mb-3">
            <select id="inputCountry" class="form-select">
                <option selected>Country</option>
                <option>...</option>
            </select>
        </div>
    </div>
</div>
<div class="col-md-6 mb-3">
    <div class="row">
        <div class="col-xl-12 mb-3">
            <Label class="form-label">Email</Label>
            <input type="email" class="form-control" placeholder="Email"
            aria-label="email">
        </div>
        <div class="col-xl-12 mb-3">
            <Label class="form-label">D.O.B</Label>
            <input type="date" class="form-control"
            aria-label="dateofbirth">
        </div>
        <div class="col-xl-12 mb-3">
            <div class="row">
                <Label class="form-label mb-1">Maritial Status</Label>
                <div class="col-xl-6">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                           Married
                        </label>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Single
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-12">

        </div>
    </div>
</div>
<div class="col-md-6 mb-3">
    <Label class="form-label">Contact Number</Label>
    <input type="number" class="form-control" placeholder="Phone number"
        aria-label="Phone number">
</div>
<div class="col-md-6 mb-3">
    <Label class="form-label">Alternative Contact</Label>
    <input type="number" class="form-control" placeholder="Phone number"
        aria-label="Phone number">
</div>
<div class="col-md-12">
    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
            Check me out
        </label>
    </div>
</div>
<div class="col-md-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
</div>
</div>`;

export const layout11 = `<form class="row g-3 mt-0">
<div class="col-md-6">
    <Label class="form-label">First Name</Label>
    <input type="text" class="form-control" placeholder="First name"
        aria-label="First name">
</div>
<div class="col-md-6">
    <Label class="form-label">Last Name</Label>
    <input type="text" class="form-control" placeholder="Last name"
        aria-label="Last name">
</div>
<div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Email id">
</div>
<div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
</div>
<div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress"
        placeholder="1234 Main St">
</div>
<div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2"
        placeholder="Apartment, studio, or floor">
</div>
<div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
</div>
<div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select form-select-lg">
        <option selected>Choose...</option>
        <option>...</option>
    </select>
</div>
<div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
</div>
<div class="col-12">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck3">
        <label class="form-check-label" for="gridCheck3">
            Check me out
        </label>
    </div>
</div>
<div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
</div>
</form>`;

/*------ form layouts(prism-code for showcode purpose) end ------*/

/*------ validation(prism-code for showcode purpose) start ------*/
export const validation1 = ` <form class="row g-3 needs-validation" novalidate>
<div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark"
        required>
    <div class="valid-feedback">
        Looks good!
    </div>
</div>
<div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto"
        required>
    <div class="valid-feedback">
        Looks good!
    </div>
</div>
<div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
        <span class="input-group-text" id="inputGroupPrepend">@</span>
        <input type="text" class="form-control" id="validationCustomUsername"
            aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
            Please choose a username.
        </div>
    </div>
</div>
<div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
        Please provide a valid city.
    </div>
</div>
<div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
    </select>
    <div class="invalid-feedback">
        Please select a valid state.
    </div>
</div>
<div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required>
    <div class="invalid-feedback">
        Please provide a valid zip.
    </div>
</div>
<div class="col-12">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value=""
            id="invalidCheck" required>
        <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
        </label>
        <div class="invalid-feedback">
            You must agree before submitting.
        </div>
    </div>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`;

export const validation2 = ` <form class="row g-3">
<div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01"
        value="Mark" required>
</div>
<div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02"
        value="Otto" required>
</div>
<div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
        <span class="input-group-text" id="inputGroupPrepend2">@</span>
        <input type="text" class="form-control" id="validationDefaultUsername"
            aria-describedby="inputGroupPrepend2" required>
    </div>
</div>
<div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required>
</div>
<div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
    </select>
</div>
<div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required>
</div>
<div class="col-12">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value=""
            id="invalidCheck2" required>
        <label class="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
        </label>
    </div>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`;

export const validation3 = `<form class="row g-3">
<div class="col-md-4">
    <label for="validationServer01" class="form-label">First
        name</label>
    <input type="text" class="form-control is-valid"
        id="validationServer01" value="Mark" required>
    <div class="valid-feedback">
        Looks good!
    </div>
</div>
<div class="col-md-4">
    <label for="validationServer02" class="form-label">Last
        name</label>
    <input type="text" class="form-control is-valid"
        id="validationServer02" value="Otto" required>
    <div class="valid-feedback">
        Looks good!
    </div>
</div>
<div class="col-md-4">
    <label for="validationServerUsername"
        class="form-label">Username</label>
    <div class="input-group has-validation">
        <span class="input-group-text" id="inputGroupPrepend3">@</span>
        <input type="text" class="form-control is-invalid"
            id="validationServerUsername"
            aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
            required>
        <div id="validationServerUsernameFeedback"
            class="invalid-feedback">
            Please choose a username.
        </div>
    </div>
</div>
<div class="col-md-6">
    <label for="validationServer03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid"
        id="validationServer03"
        aria-describedby="validationServer03Feedback" required>
    <div id="validationServer03Feedback" class="invalid-feedback">
        Please provide a valid city.
    </div>
</div>
<div class="col-md-3">
    <label for="validationServer04" class="form-label">State</label>
    <select class="form-select is-invalid" id="validationServer04"
        aria-describedby="validationServer04Feedback" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
        Please select a valid state.
    </div>
</div>
<div class="col-md-3">
    <label for="validationServer05" class="form-label">Zip</label>
    <input type="text" class="form-control is-invalid"
        id="validationServer05"
        aria-describedby="validationServer05Feedback" required>
    <div id="validationServer05Feedback" class="invalid-feedback">
        Please provide a valid zip.
    </div>
</div>
<div class="col-12">
    <div class="form-check">
        <input class="form-check-input is-invalid" type="checkbox"
            value="" id="invalidCheck3"
            aria-describedby="invalidCheck3Feedback" required>
        <label class="form-check-label" for="invalidCheck3">
            Agree to terms and conditions
        </label>
        <div id="invalidCheck3Feedback" class="invalid-feedback">
            You must agree before submitting.
        </div>
    </div>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit
        form</button>
</div>
</form>`;

export const validation4 = ` <form class="row g-3 needs-validation" novalidate>
<div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">First
        name</label>
    <input type="text" class="form-control" id="validationTooltip01"
        value="Mark" required>
    <div class="valid-tooltip">
        Looks good!
    </div>
</div>
<div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Last
        name</label>
    <input type="text" class="form-control" id="validationTooltip02"
        value="Otto" required>
    <div class="valid-tooltip">
        Looks good!
    </div>
</div>
<div class="col-md-4 position-relative">
    <label for="validationTooltipUsername"
        class="form-label">Username</label>
    <div class="input-group has-validation">
        <span class="input-group-text"
            id="validationTooltipUsernamePrepend">@</span>
        <input type="text" class="form-control"
            id="validationTooltipUsername"
            aria-describedby="validationTooltipUsernamePrepend"
            required>
        <div class="invalid-tooltip">
            Please choose a unique and valid username.
        </div>
    </div>
</div>
<div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationTooltip03"
        required>
    <div class="invalid-tooltip">
        Please provide a valid city.
    </div>
</div>
<div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">State</label>
    <select class="form-select" id="validationTooltip04" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
    </select>
    <div class="invalid-tooltip">
        Please select a valid state.
    </div>
</div>
<div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationTooltip05"
        required>
    <div class="invalid-tooltip">
        Please provide a valid zip.
    </div>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit
        form</button>
</div>
</form>`;

export const validation5 = `<form class="was-validated">
<div class="mb-3">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control is-invalid" id="validationTextarea"
        placeholder="Required example textarea" required=""></textarea>
    <div class="invalid-feedback">
        Please enter a message in the textarea.
    </div>
</div>

<div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1"
        required="">
    <label class="form-check-label" for="validationFormCheck1">Check this
        checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
</div>

<div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2"
        name="radio-stacked" required="">
    <label class="form-check-label" for="validationFormCheck2">Toggle this
        radio</label>
</div>
<div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3"
        name="radio-stacked" required="">
    <label class="form-check-label" for="validationFormCheck3">Or toggle
        this
        other radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
</div>

<div class="mb-3">
    <select class="form-select" required="" aria-label="select example">
        <option value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
</div>

<div class="mb-3">
    <input type="file" class="form-control" aria-label="file example"
        required="">
    <div class="invalid-feedback">Example invalid form file feedback</div>
</div>

<div class="mb-3">
    <button class="btn btn-primary" type="submit" disabled="">Submit
        form</button>
</div>
</form>`;
/*------ validation(prism-code for showcode purpose) end ------*/