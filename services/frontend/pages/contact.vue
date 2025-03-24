<script setup lang="ts">
const { t, locale } = useI18n();
const result = ref("");
const status = ref<'success' | 'error'>();
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  source: import.meta.env.VITE_SOURCE
});

useHead({
  title: `${t('common.contact')} - ${t('common.jezzLucena')}`
});

const handleSubmit = async () => {
  status.value = undefined;
  result.value = "Please wait...";
  try {
    const response = await $fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: form.value,
    });

    result.value = response.message;

    if (response.status === 200) {
      status.value = "success";
    } else {
      console.log(response); // Log for debugging, can be removed
      status.value = "error";
    }

    // Reset form after submission
    form.value.firstName = "";
    form.value.lastName = "";
    form.value.email = "";
    form.value.phone = "";
    form.value.subject = "";
    form.value.message = "";
  } catch (error) {
    console.log(error); // Log for debugging, can be removed
    status.value = "error";
    result.value = "Something went wrong. Please try again.";
  }
}

watch(locale, () => {
  useHead({
    title: `${t('common.contact')} - ${t('common.jezzLucena')}`
  });
});
</script>

<template>
  <div class="content relative bg-white">
    <div class="anchor absolute -top-[50px]" id="content"></div>
    <div class="relative w-[100%] max-w-[768px] mx-auto py-[30px] px-[20px] md:px-[30px] lg:px-[50px]">
      <Heading>
        <span>{{ $t("common.contact") }}</span>
      </Heading>

      <form method="POST" @submit.prevent="handleSubmit">
        <div class="flex gap-2">
          <div class="field grow">
            <label class="required" for="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" v-model="form.firstName" required/>
          </div>
          <div class="field grow">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" v-model="form.lastName"/>
          </div>
        </div>
        <div class="field">
          <label class="required" for="email">Email</label>
          <input type="email" name="email" id="email" v-model="form.email" required/>
        </div>
        <div class="field">
          <label for="phone">Phone</label>
          <input type="tel" name="phone" id="phone" v-model="form.phone"/>
        </div>
        <div class="field">
          <label for="subject">Subject</label>
          <input type="text" name="subject" id="subject" v-model="form.subject"/>
        </div>
        <div class="field">
          <label class="required" for="message">Message</label>
          <textarea name="message" id="message" rows="4" v-model="form.message" required/>
        </div>
        <div class="flex">
          <div class="legend grow">
            <div class="required">Required field</div>
          </div>
          <div class="buttonArea grow">
            <Button>
              <input type="submit"></input>
            </Button>
          </div>
        </div>
        <div v-if="result" class="flex result" :class="{ success: status === 'success', error: status === 'error'}">
          {{  result }}
        </div>
      </form>

      <embed
        class="relative w-[100%]"
        height="940"
        src="https://rznlvjsm.formester.com/f/2_rn9_199YR-"
      />
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: env(safe-area-inset-top);

  .anchor {
    margin-top: -env(safe-area-inset-top);
  }

  .field {
    margin-top: 20px;

    label {
      display: block;
      font-size: 18px;
      margin-bottom: 5px;

      &.required::after {
        content: ' *';
        color: red;
      }
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      font-size: 22px;
      line-height: 26px;
      border: 2px solid black;
      transition: 0.6s background-color ease, 0.2s box-shadow ease, 0.2s transform ease;

      &:hover, &.hovered, &:active, &:focus {
        box-shadow: 7px 7px 0 -1px rgba(0, 0, 0, 1);
        transform: translate(-3px, -3px);
      }
    }
  }

  .result {
    margin: 10px 0;
    &.success {
      animation: 3s successToBlack normal forwards;
    }

    &.error {
      animation: 3s errorToBlack normal forwards;
    }
  }

  .legend {
    .required::before {
      content: '* ';
      color: red;
    }
  }

  .buttonArea {
    text-align: right;

    .button {
      margin-right: 0;
    }
  }
}

@keyframes successToBlack {
  from {
    color: green;
  }
  to {
    color: black;
  }
}

@keyframes errorToBlack {
  from {
    color: red;
  }
  to {
    color: black;
  }
}
</style>