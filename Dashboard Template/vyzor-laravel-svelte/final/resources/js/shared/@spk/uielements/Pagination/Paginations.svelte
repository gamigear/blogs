<script>
    import { Pagination, PaginationItem, PaginationLink,  } from "@sveltestrap/sveltestrap";
    export let listClassName="float-end" //defalyt
    export let firstText="Previous " 

    const handlePaginationClick = (event) => {
    event.preventDefault(); // Prevent scrolling to the top
    // Handle page change logic here
  };

</script>
<Pagination {listClassName}>
    <PaginationItem disabled>
      <PaginationLink  href="#!" on:click={handlePaginationClick} >{firstText}</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#!" on:click={handlePaginationClick} >1</PaginationLink>
    </PaginationItem>
    <PaginationItem active>
      <PaginationLink href="#!" on:click={handlePaginationClick} >2</PaginationLink>
    </PaginationItem>
    <PaginationItem >
        <PaginationLink href="#!" on:click={handlePaginationClick} >3</PaginationLink>
      </PaginationItem>
    <PaginationItem>
      <PaginationLink last href="#!" on:click={handlePaginationClick} >Next</PaginationLink>
    </PaginationItem>
  </Pagination>
