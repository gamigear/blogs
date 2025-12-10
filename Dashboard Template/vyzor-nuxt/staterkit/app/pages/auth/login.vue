<script lang="ts" setup>
import { definePageMeta } from '#imports';
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';

import 'vue3-toastify/dist/index.css';

definePageMeta({
  layout: 'custom',
  middleware: ["auth"],
})

const { authenticateUser } = useAuthStore();
const router = useRouter();

const user = ref({
  username: 'spruko@gmail.com',
  password: 'spruko1234',
});

const errors = ref({
  username: '',
  password: ''
});

const validateForm = (): boolean => {
  let valid = true;
  errors.value.username = '';
  errors.value.password = '';

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!user.value.username || !emailPattern.test(user.value.username)) {
    errors.value.username = 'Please enter a valid email';
    valid = false;
  }

  if (!user.value.password || user.value.password.length < 6) {
    errors.value.password = 'Password must be at least 6 characters';
    valid = false;
  }

  return valid;
};

const login = async () => {
  if (!validateForm()) return;

  const data = await authenticateUser(user.value);
  if (data.authenticated) {
    router.push('/');
    toast.success("Logged in successfully", {
      theme: 'auto',
      icon: true,
      hideProgressBar: true,
      autoClose: true,
      position: 'top-right',
    });
  } else {
    toast.error("Invalid credentials", {
      theme: 'auto',
      icon: true,
      hideProgressBar: true,
      autoClose: true,
      position: 'top-right',
    });
  }
};

const setBodyClass = (action: string) => {
  if (action === "add") {
    document.body.classList.add("authentication-background");
  } else {
    document.body.classList.remove("authentication-background");
  }
};

onMounted(() => {
  if (localStorage.getItem("visited") === "true") {
    setBodyClass("add");
  } else {
    setBodyClass("add");
    localStorage.setItem("visited", "true");
  }

  router.beforeEach(() => {
    setBodyClass("remove");
  });

  const handleBeforeUnload = () => {
    setBodyClass("remove");
    localStorage.removeItem("visited");
  };

  window.addEventListener("beforeunload", handleBeforeUnload, { passive: true });

  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
    setBodyClass("remove");
  };
});
</script>

<template>
<ParticlesJs />
<div class="container">
    <div class="row justify-content-center align-items-center authentication authentication-basic h-100">
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-8 col-12">
            <div class="card custom-card border-0 my-4">
                <div class="card-body p-5">
                    <div class="mb-4">
                        <NuxtLink to="/dashboards/sales">
                            <img src="/images/brand-logos/toggle-logo.png" alt="logo" class="desktop-dark" />
                        </NuxtLink>
                    </div>
                    <div>
                        <h4 class="mb-1 fw-semibold">Hi, Welcome back!</h4>
                        <p class="mb-4 text-muted fw-normal">Please enter your credentials</p>
                    </div>
                    <div class="row gy-3">
                        <div class="col-xl-12">
                            <label for="signin-email" class="form-label text-default">Email</label>
                            <input type="text" class="form-control" id="signin-email" v-model="user.username" placeholder="Enter Email" />
                            <small v-if="errors.username" class="text-danger">{{ errors.username }}</small>
                        </div>
                        <div class="col-xl-12 mb-2">
                            <label for="signin-password" class="form-label text-default d-block">Password</label>
                            <div class="position-relative">
                                <input type="password" class="form-control" id="signin-password" v-model="user.password" placeholder="Enter Password" />
                            </div>
                            <small v-if="errors.password" class="text-danger">{{ errors.password }}</small>

                            <div class="mt-3">
                                <div class="form-check custom-login">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked />
                                    <label class="form-check-label" for="defaultCheck1"> Remember me </label>
                                    <NuxtLink to="#!" class="float-end link-danger fw-medium fs-12">Forget password ?</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-grid mt-2">
                        <NuxtLink to="/" class="btn btn-primary" @click.prevent="login">Sign In</NuxtLink>
                    </div>
                    <div class="text-center my-3 authentication-barrier">
                        <span class="op-4 fs-13">OR</span>
                    </div>
                    <div class="d-grid mb-3">
                        <button class="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill mb-3">
                            <span class="avatar avatar-xs">
                                <img src="/images/media/apps/google.png" alt="" />
                            </span>
                            <span class="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Google</span>
                        </button>
                        <button class="btn btn-white btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                            <span class="avatar avatar-xs flex-shrink-0">
                                <img src="/images/media/apps/facebook.png" alt="" />
                            </span>
                            <span class="lh-1 ms-2 fs-13 text-default fw-medium">Signup with Facebook</span>
                        </button>
                    </div>
                    <div class="text-center mt-3 fw-medium">
                        Don’t have an account?
                        <NuxtLink to="#!" class="text-primary">Register Here</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
