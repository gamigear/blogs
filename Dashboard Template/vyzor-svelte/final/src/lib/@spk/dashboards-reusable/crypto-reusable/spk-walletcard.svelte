<script lang="ts">
  import SpkButton from "$lib/@spk/uielements/Button/SpkButton.svelte";
  import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Image,
  } from "@sveltestrap/sveltestrap";

  interface Wallet {
    title?: string;
    imgSrc?: string;
    available?: string;
    value?: string;
    price?: string;
  }

  export let wallet: Wallet = {};
</script>

<Card class="custom-card">
  <CardHeader>
    <div class="card-title">{wallet.title}</div>
  </CardHeader>
  <CardBody>
    <div class="d-flex align-items-center justify-content-between gap-2">
      <div class="d-flex align-items-center gap-2">
        <div class="lh-1">
          <span class="avatar avatar-rounded position-relative">
            <Image src={wallet.imgSrc} alt={wallet.title} />
          </span>
        </div>
        <div>
          <span class="d-block text-muted fs-12 fw-normal"
            >{wallet.available}</span
          >
          <span class="fw-medium">{wallet.value}</span>
        </div>
      </div>
      <div>
        <span class="fw-medium">{wallet.price}</span>
        <span class="d-block text-muted fs-12 fw-normal">In USD</span>
      </div>
    </div>
  </CardBody>
  <CardFooter>
    <div class="btn-list text-center">
      <SpkButton color="primary" customClass="btn btn-w-lg btn-wave">
        Deposit
      </SpkButton>
      <SpkButton color="danger" customClass="btn btn-w-lg btn-wave">
        Withdraw
      </SpkButton>
    </div>
  </CardFooter>
</Card>
