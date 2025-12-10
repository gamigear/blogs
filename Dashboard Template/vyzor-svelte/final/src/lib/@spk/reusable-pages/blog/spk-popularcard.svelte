<script lang="ts">
    import { Card, Image } from "@sveltestrap/sveltestrap";

    interface Types {
        imgSrc?: string;
        title?: string;
    }

    export let blog: Types = {};
</script>

<div class="col-6 col-xl">
    <a href="#!">
        <Card class="custom-card overlay-card blog-card text-fixed-white">
            <Image src={blog.imgSrc} class="card-img" alt="..." />
            <div
                class="card-img-overlay d-flex flex-column p-0 over-content-bottom"
            >
                <div class="card-footer border-top-0 text-center">
                    <h6 class="fw-semibold mb-0 text-fixed-white">
                        {blog.title}
                    </h6>
                </div>
            </div>
        </Card>
    </a>
</div>
