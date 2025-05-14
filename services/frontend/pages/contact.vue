<script setup lang="ts">
/**
 * Contact page that enables users to send messages using the appropriate API endpoint
 */

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

const setLocaleTitle = () => useHead({ title: `${t('common.contact')} - ${t('common.jezzLucena')}` });
watch(locale, setLocaleTitle);
setLocaleTitle();

const handleSubmit = async () => {
  status.value = undefined;
  result.value = t("contact.pleaseWait");
  
  try {
    const response = await $fetch(
      `${import.meta.env.VITE_BACKEND_URL}/contact`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: form.value,
      }
    );

    if (response) {
      status.value = "success";
      result.value = t("contact.thankYou");
    } else {
      result.value = t("contact.generalError");
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
    status.value = "error";
    result.value = t("contact.generalError");
  }
}
</script>

<template>
  <div class="content relative bg-white">
    <div class="anchor absolute -top-[60px]" id="content"></div>
    <div class="relative w-[100%] max-w-[768px] mx-auto py-[30px] px-[20px] md:px-[30px] lg:px-[50px]">
      <Heading>
        <span>{{ $t("common.contact") }}</span>
      </Heading>

      <form method="POST" @submit.prevent="handleSubmit">
        <div class="flex gap-2">
          <div class="field grow">
            <label class="required" for="firstName">{{ $t("contact.firstName") }}</label>
            <input type="text" name="firstName" id="firstName" v-model="form.firstName" required/>
          </div>
          <div class="field grow">
            <label for="lastName">{{ $t("contact.lastName") }}</label>
            <input type="text" name="lastName" id="lastName" v-model="form.lastName"/>
          </div>
        </div>
        <div class="field">
          <label class="required" for="email">{{ $t("contact.email") }}</label>
          <input type="email" name="email" id="email" v-model="form.email" required/>
        </div>
        <div class="field">
          <label for="phone">{{ $t("contact.phone") }}</label>
          <input type="tel" name="phone" id="phone" v-model="form.phone"/>
        </div>
        <div class="field">
          <label for="subject">{{ $t("contact.subject") }}</label>
          <input type="text" name="subject" id="subject" v-model="form.subject"/>
        </div>
        <div class="field">
          <label class="required" for="message">{{ $t("contact.message") }}</label>
          <textarea name="message" id="message" rows="4" v-model="form.message" required/>
        </div>
        <div class="flex">
          <div class="legend grow">
            <div class="required">{{ $t("contact.required") }}</div>
          </div>
          <div class="buttonArea grow">
            <Button>
              <input type="submit" :value="$t('contact.send')"/>
            </Button>
          </div>
        </div>
        <div v-if="result" class="flex result" :class="{ success: status === 'success', error: status === 'error'}">
          {{  result }}
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: var(--safe-area-inset-top);

  .anchor {
    margin-top: -var(--safe-area-inset-top);
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
      animation: 10s successToBlack normal forwards;
    }

    &.error {
      animation: 10s errorToBlack normal forwards;
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