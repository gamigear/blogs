
<script lang="ts">
      import Pageheader from "$lib/components/layout-components/page-header/Pageheader.svelte";
  import ShowCode from "$lib/components/layout-components/showcode/ShowCode.svelte";
  import { pagination2, pagination3 ,pagination1, pagination4, pagination5,pagination6, pagination7, pagination8, pagination9  } from "$lib/components/common/prism-code/uielementsprim";
  import { Col, Pagination, PaginationItem, PaginationLink, Row } from "@sveltestrap/sveltestrap";
</script>

<!-- Page Title -->
<svelte:head>
    <title>Pagination | Vyzor - Svelte Admin & Dashboard Template</title>
</svelte:head>
<!-- Page Title Close -->
<Pageheader homepage="Pagination" activepage="UI Elements" page='Pagination' />
<!-- Start:: row-1 -->
                    <Row>
                        <Col xxl={6} xl={6}>
                            <ShowCode title="Basic Pagination" customCardBodyClass="px-sm-3 px-2" svelteCode={pagination1}>
                                <Pagination class="customPaginationPageBottom">
                                    <PaginationItem disabled>
                                      <PaginationLink on:click={e=>e.preventDefault()} first href="#!" >Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink on:click={e=>e.preventDefault()} href="#!">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem >
                                      <PaginationLink on:click={e=>e.preventDefault()} href="#!">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink on:click={e=>e.preventDefault()} last href="#!" >Next</PaginationLink>
                                    </PaginationItem>
                                  </Pagination>
                            </ShowCode>
                        </Col>
                        <Col xxl={6} xl={6}>
                            <ShowCode title="Pagination With Icons"  svelteCode={pagination2}>
                                <Pagination class="customPaginationPageBottom">
                                    <PaginationItem >
                                      <PaginationLink first href="#!" ><span><i class="bx bx-chevron-left"></i></span></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink href="#!">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem >
                                      <PaginationLink href="#!">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem >
                                        <PaginationLink href="#!">3</PaginationLink>
                                      </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink last href="#!" ><span><i class="bx bx-chevron-right"></i></span></PaginationLink>
                                    </PaginationItem>
                                  </Pagination>
                            </ShowCode>
                        </Col>
                        <Col xxl={12} xl={12}>
                            <ShowCode title="Pagination Sizing"  customCardBodyClass="d-flex flex-wrap justify-content-between gap-2" svelteCode={pagination3}>
                                <Pagination size="sm" class="customPaginationPageBottom">
                                    <PaginationItem active>
                                      <PaginationLink href="#!">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem >
                                      <PaginationLink href="#!">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink last href="#!" >3</PaginationLink>
                                    </PaginationItem>
                                  </Pagination>
                                  <Pagination size="" class="customPaginationPageBottom">
                                    <PaginationItem active>
                                      <PaginationLink href="#!">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem >
                                      <PaginationLink href="#!">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink last href="#!" >3</PaginationLink>
                                    </PaginationItem>
                                  </Pagination>
                                  <Pagination size="lg" class="customPaginationPageBottom">
                                    <PaginationItem active>
                                      <PaginationLink href="#!">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem >
                                      <PaginationLink href="#!">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink last href="#!" >3</PaginationLink>
                                    </PaginationItem>
                                  </Pagination>
                            </ShowCode>
                        </Col>
                    </Row>
                    <!-- End:: row-1 -->

                    <!-- Start:: row-2  -->
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Center & Right Aligned Pagination" customCardBodyClass="overflow-x-scroll"  svelteCode={pagination4}>
                                <Pagination  class="justify-content-center d-flex customPaginationPageBottom">
                                    <PaginationItem disabled >
                                      <PaginationLink first href="#!" >Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink href="#!">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem >
                                      <PaginationLink href="#!">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink last href="#!" >Next</PaginationLink>
                                    </PaginationItem>
                                  </Pagination>
                                  <Pagination  class="justify-content-sm-end d-flex customPaginationPageBottom">
                                    <PaginationItem disabled>
                                      <PaginationLink first href="#!" >Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink href="#!">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem >
                                      <PaginationLink href="#!">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink last href="#!" >Next</PaginationLink>
                                    </PaginationItem>
                                  </Pagination>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Active and disabled states"  customCardBodyClass="d-flex flex-wrap" svelteCode={pagination5}>
                                <Pagination class="customPaginationPageBottom" >
                                    <PaginationItem disabled>
                                      <PaginationLink first href="#!" >Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink href="#!">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                      <PaginationLink href="#!">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink last href="#!" >Next</PaginationLink>
                                    </PaginationItem>
                                  </Pagination>
                                  <Pagination  class="ms-3 customPaginationPageBottom">
                                    <PaginationItem disabled>
                                      <PaginationLink first href="#!" >Previous</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink href="#!">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                      <PaginationLink href="#!">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                      <PaginationLink last href="#!" >Next</PaginationLink>
                                    </PaginationItem>
                                  </Pagination>
                            </ShowCode>
                        </Col>
                    </Row>
                    <!-- End:: row-2  -->

                    <!-- Start:: row-3 -->
                    <Row>
                        <Col xl={12}>
                           <ShowCode title="Pagination Style-1"  svelteCode={pagination6}>
                                <Pagination class="pagination-style-1 customPaginationPageBottom" listClassName="flex-wrap" >
                                    <PaginationItem disabled >
                                        <PaginationLink href="#!">	<i class="ri-arrow-left-s-line align-middle"></i></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem > <PaginationLink href="#!">1</PaginationLink></PaginationItem>
                                    <PaginationItem active> <PaginationLink href="#!">2</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#!"><i class="bi bi-three-dots"></i></PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#!">21</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#!"> <i class="ri-arrow-right-s-line align-middle"></i></PaginationLink></PaginationItem>
                                </Pagination>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Pagination Style-2"  svelteCode={pagination7}>
                                <Pagination class="pagination-style-2 customPaginationPageBottom" listClassName="flex-wrap" >
                                    <PaginationItem disabled >
                                        <PaginationLink href="#!">Prev</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active> <PaginationLink href="#!">1</PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#!">2</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#!"><i class="bi bi-three-dots"></i></PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#!">17</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#!" class="text-primary">Next</PaginationLink></PaginationItem>
                                </Pagination>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                           <ShowCode title="Pagination Style-3"  svelteCode={pagination8}>
                                <Pagination class="pagination-style-3 customPaginationPageBottom" listClassName="flex-wrap" >
                                    <PaginationItem disabled >
                                        <PaginationLink href="#!">Prev</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active> <PaginationLink href="#!">1</PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#!">2</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#!"><i class="bi bi-three-dots"></i></PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#!">16</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#!" class="text-primary">Next</PaginationLink></PaginationItem>
                                </Pagination>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Pagination Style-4"  svelteCode={pagination9}>
                                <Pagination class="pagination-style-4 customPaginationPageBottom" listClassName="flex-wrap" >
                                    <PaginationItem disabled >
                                        <PaginationLink href="#!">Prev</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active> <PaginationLink href="#!">1</PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#!">2</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#!"><i class="bi bi-three-dots"></i></PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#!">16</PaginationLink></PaginationItem>
                                    <PaginationItem > <PaginationLink href="#!">17</PaginationLink></PaginationItem>
                                    <PaginationItem ><PaginationLink href="#!" class="text-primary">Next</PaginationLink></PaginationItem>
                                </Pagination>
                            </ShowCode>
                        </Col>
                    </Row>
                    <!-- End:: row-3 -->
    