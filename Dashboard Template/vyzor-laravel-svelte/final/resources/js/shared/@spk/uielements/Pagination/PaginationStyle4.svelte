<script>
    import { Pagination, PaginationItem, PaginationLink,  } from "@sveltestrap/sveltestrap";
</script>
<Pagination class="pagination-style-4" listClass="flex-wrap">
  <PaginationItem disabled>
    <PaginationLink href="#!">Prev</PaginationLink>
  </PaginationItem>
  <PaginationItem active>
    <PaginationLink href="#!">1</PaginationLink></PaginationItem
  >
  <PaginationItem>
    <PaginationLink href="#!">2</PaginationLink></PaginationItem
  >
  <PaginationItem
    ><PaginationLink href="#!" class="text-primary"
      >Next</PaginationLink
    ></PaginationItem
  >
</Pagination>