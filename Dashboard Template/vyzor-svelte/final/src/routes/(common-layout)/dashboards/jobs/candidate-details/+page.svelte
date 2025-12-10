
<script lang="ts">
    import SpkBadge from "$lib/@spk/uielements/badge/SpkBadge.svelte";
    import SpkTooltips from "$lib/@spk/uielements/Tooltips/SpkTooltips.svelte";

    
    import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
    import { Certifications, PersonalInfoList, Preferences, ProjectsCandidate, Skills, SocialLinks } from "$lib/data/dashboards/jobs/candidatedetailsdata";
    import { Card, CardBody, CardHeader, Col, Image, ListGroup, ListGroupItem, Progress, Row } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>CandidateDetails | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->

<!-- Page Header -->
<Pageheader
    homepage="Candidate Details"
    subTitle="Jobs"
    activepage="Dashboards"
    page="Candidate Details"
/>
<!-- Page Header Close -->

 <!-- Start::row-2 --> 

            <Row>
                <Col xxl={9} xl={8} class="">
                    <Card class="custom-card">
                        <CardBody>
                            <div class="d-flex align-items-center flex-wrap justify-content-between gap-2">
                                <div class="d-flex flex-wrap gap-2 w-75">
                                    <div>
                                        <span class="avatar avatar-xxl">
                                            <Image  src="../../images/faces/13.jpg" class="img-fluid" alt="" />
                                        </span>
                                    </div>
                                    <div class="ms-3 w-75">
                                        <h4 class="fw-medium mb-0 d-flex align-items-center gap-2">
                                            <a  href="#!" class="lh-1">Jhon Doe</a>
                                            <span class="text-success fs-13 lh-1"><i class="ti ti-star-filled me-1 text-warning"></i>4.5</span>
                                        </h4>
                                        <div class="my-1">
                                            <a  href="#!" class="fw-medium"><i class="bi bi-briefcase me-1 align-middle"></i> Software Engineer</a>
                                        </div>
                                        <div class="popular-tags">
                                            <a  href="#!" class="badge rounded-pill bg-info-transparent me-1"><i class="bi bi-moon-stars me-1"></i>Full Time</a>
                                            <a  href="#!" class="badge rounded-pill bg-danger-transparent"><i class="bi bi-clock me-1"></i> Immediate Joinee</a>
                                        </div>
                                        <Row class="row mt-3 gy-2">
                                            <Col xl={6}>
                                                <div><i class="bi bi-geo-alt me-2"></i>Hyderabad, India</div>
                                            </Col>
                                            <Col xl={6}>
                                                <div><i class="bi bi-briefcase me-2"></i>6 Years Experience</div>
                                            </Col>
                                            <Col xl={6}>
                                                <div>
                                                    <i class="bi bi-coin me-2"></i>Package (Yearly) : $80,000 - $100,000
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <i class="bi bi-mortarboard me-2"></i>B.Sc. in Computer Science
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <div class="btn-list">
                                    <a  href="#!" class="btn btn-primary"><i class="bi bi-download me-1"></i> Download CV</a>
                                    <a  href="#!" class="btn btn-icon btn-primary-light btn-wave">
                                        <i class="ri-heart-line fs-13"></i>
                                    </a>
                                    <a  href="#!" class="btn btn-icon btn-primary-light btn-wave">
                                        <i class="ri-share-line"></i>
                                    </a>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card class="custom-card">
                        <CardBody class="p-0">
                            <ListGroup class="list-group-flush">
                                <ListGroupItem>
                                    <h6 class="fw-semibold mb-3">About</h6>
                                    <div>
                                        <p class="text-muted">Hi, I'm John Doe, a passionate Software Engineer with over 8 years of experience in developing full-stack applications. My expertise lies in JavaScript, Node.js, and React, which I’ve used to build scalable web applications and optimize performance across various platforms. I am a problem-solver at heart, and I love tackling complex challenges while ensuring my code is clean and efficient.</p>
                                        <p class="text-muted">I believe in continuous learning and always strive to stay updated with the latest technologies in the industry. I am well-versed in both front-end and back-end development, allowing me to contribute to all phases of software development. I’m also passionate about working in agile environments, collaborating with cross-functional teams to meet project goals and deadlines.</p>
                                        <p class="mb-0 text-muted">When I’m not coding, you’ll find me mentoring junior developers, where I share my knowledge and help others grow in their careers. I’m always looking for new opportunities to push the boundaries of technology and contribute to innovative projects. I thrive in a team-oriented environment and am excited to collaborate with others to create impactful solutions.</p>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h6 class="fw-semibold mb-3">Projects</h6>
                                    <div class="row">
                                        {#each ProjectsCandidate as project}
                                        <Col xl={6} >
                                            <Card class="custom-card">
                                                <CardBody>
                                                    <div class="d-flex align-items-start gap-3 mb-4 flex-wrap">
                                                        <div>
                                                            <span class="avatar avatar-lg avatar-rounded bg-light">
                                                                <Image width={48} height={48} src={project.logoSrc} alt={project.title} />
                                                            </span>
                                                        </div>
                                                        <div class="flex-fill w-50">
                                                            <a  href="#!" class="fw-semibold fs-14 d-block text-truncate project-list-title">
                                                                {project.title}
                                                            </a>
                                                            <span class="d-block text-muted fs-13">{project.description}</span>
                                                        </div>
                                                        <a  href="#!" class="btn btn-primary-light">
                                                            <i class="ti ti-eye me-1 align-middle d-inline-block"></i>View
                                                        </a>
                                                    </div>
                                                    <div class="d-flex align-items-center flex-wrap justify-content-between">
                                                        <div>
                                                            <span class="text-muted fs-11 d-block">Assigned Date :</span>
                                                            <span class="fw-semibold d-block">{project.assignedDate}</span>
                                                        </div>
                                                        <div>
                                                            <span class="text-muted fs-11 d-block">Status :</span>
                                                            <SpkBadge Color="" CustomClass="bg-success-transparent">{project.status}</SpkBadge>
                                                        </div>
                                                        <div class="text-end">
                                                            <span class="text-muted fs-11 d-block">Due Date :</span>
                                                            <span class="fw-semibold d-block">{project.dueDate}</span>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        {/each}
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Row class="gy-3">
                                        <Col xl={6}>
                                            <h6 class="fw-semibold mb-3">
                                                Certifications
                                            </h6>
                                            <ListGroup>
                                                {#each Certifications as cert}
                                                <ListGroupItem class="">
                                                    <div class="d-flex align-items-center gap-3 flex-wrap">
                                                        <div class="fw-medium">{cert.title}</div>
                                                        <div>-</div>
                                                        <div>{cert.issuer}</div>
                                                        <div>-</div>
                                                        <div>{cert.year}</div>
                                                    </div>
                                                </ListGroupItem>
                                                {/each}
                                            </ListGroup>
                                        </Col>
                                        <Col xl={6}>
                                            <h6 class="fw-semibold mb-3">
                                                Job Preferences
                                            </h6>
                                            <ListGroup>
                                                {#each Preferences as pref}
                                                <ListGroupItem>
                                                    <div class="d-flex align-items-center gap-3 flex-wrap">
                                                        <div class="fw-medium">{pref.label}:</div>
                                                        <div>{pref.value}</div>
                                                    </div>
                                                </ListGroupItem>
                                                {/each}
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">
                                Experience Overview
                            </div>
                        </CardHeader>
                        <CardBody class="p-0 candidate-edu-timeline">
                            <div class="p-4 border-bottom">
                                <div class="d-flex align-items-start gap-3">
                                    <div>
                                        <span class="avatar avatar-xl bg-light">
                                            <Image width={64} height={64} src="../../images/company-logos/10.png" alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block fw-medium fs-14 mb-1">Software Engineer (June 2014 - Present)</span>
                                        <div class="d-flex gap-2 mb-3 flex-wrap">
                                            <span class="d-block">Tech Innovations Inc.</span>
                                            <div class="mb-0 fs-13 text-muted"><i class="bi bi-geo-alt me-1 align-middle"></i>New York, USA</div>
                                        </div>
                                        <div class="fw-semibold mb-2">Key Responsibilities :</div>
                                        <ol class="list-group border-0 list-bullets">
                                            <li class="border-0 py-1">Develop and maintain web applications.</li>
                                            <li class="border-0 py-1">Collaborate with cross-functional teams.</li>
                                            <li class="border-0 py-1">Write clean and scalable code using JavaScript, React, and Node.js.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="d-flex align-items-start gap-3">
                                    <div>
                                        <span class="avatar avatar-xl bg-light">
                                            <Image width={64} height={64} src="../../images/company-logos/4.png" alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <div class="fw-medium fs-14 mb-1">Junior Developer (May 2012 - May 2014)</div>
                                        <div class="d-flex gap-2 mb-3 flex-wrap">
                                            <div>CodeLabs Pvt Ltd.</div>
                                            <div class="mb-0 fs-13 text-muted"><i class="bi bi-geo-alt me-1"></i>San Francisco, USA</div>
                                        </div>
                                        <div class="fw-medium mb-2">Key Responsibilities :</div>
                                        <ol class="list-group border-0 list-bullets">
                                            <li class="border-0 py-1">Assisted in designing and developing software solutions.</li>
                                            <li class="border-0 py-1">Wrote unit tests and ensured software stability.</li>
                                            <li class="border-0 py-1">Supported senior developers in various projects.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xxl={3} xl={4}>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">
                                Personal Information
                            </div>
                        </CardHeader>
                        <CardBody>
                            <ul class="list-unstyled candidate-personal-info-list">
                                {#each PersonalInfoList as info}
                                    
                                <li>
                                    <div class="d-flex align-items-start gap-2 justify-content-between">
                                        <span class="d-block text-muted d-inline-flex align-items-center personal-info-type">
                                            <i class={`ti ${info.icon} me-2 align-middle fs-16`}></i>
                                            {info.label}
                                        </span>
                                        <span class="fw-medium d-block text-end">{info.value}</span>
                                    </div>
                                </li>
                                {/each}
                            </ul>
                        </CardBody>
                    </Card>
                    <Card class="custom-card">
                        <CardHeader>
                            <div class="card-title">
                                Skills
                            </div>
                        </CardHeader>
                        <CardBody>
                            <ul class="list-unstyled job-candidate-skills-list">
                                {#each Skills as skill}
                                <li>
                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                        <span class="d-block">{skill.name}</span>
                                        <span class="d-block fw-medium">{skill.progress}%</span>
                                    </div>
                                    <Progress class="progress-xs" color={skill.color} animated striped value={skill.progress} />
                                </li>
                                {/each}
                            </ul>
                        </CardBody>
                    </Card>
                    <Card class="custom-card overflow-hidden">
                        <CardHeader>
                            <div class="card-title">
                                Portfolio
                            </div>
                        </CardHeader>
                        <CardBody class="d-flex flex-wrap gap-2">
                            <div class="btn-list">
                                {#each SocialLinks as link}
                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                <a  href={link.href} id={`candidateProtfilo${link.id}`} class={`btn btn-icon rounded-circle ${link.buttonClass}`} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={link.title}>
                                    <i class={link.iconClass}></i>
                                </a>

                                <SpkTooltips content={link.title} placement="top" targetId={`candidateProtfilo${link.id}`} />

                                {/each}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

             <!-- End::row-2 --> 

    