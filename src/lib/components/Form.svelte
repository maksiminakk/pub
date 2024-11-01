<script>
  import { onMount } from "svelte";
  import InputField from "./formItems/InputField.svelte";
  import SelectField from "./formItems/SelectField.svelte";
  import { writable } from "svelte/store";
  import Button from "./Button.svelte";
  import Datepicker from "./formItems/Datepicker.svelte";

  let timeOptions = [];
  let selectedTime = "";
  let name = "";
  let phone = "";
  let phoneError = "";
  let errors = writable({});
  let selectedDate = null;

  let guestCount = "";

  // Опции для количества гостей от 1 до 10
  const guestOptions = Array.from({ length: 10 }, (_, i) => ({
    value: `${i + 1}`,
    label: `${i + 1} ${i + 1 === 1 ? "guest" : "guests"}`,
  }));

  // Параметры для генерации временных опций
  const step = 30;
  const endTime = new Date();
  endTime.setHours(22, 0, 0, 0);

  // Генерация временных опций
  function generateTimeOptions() {
    const options = [];
    const now = new Date();

    now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15);
    now.setSeconds(0);
    now.setMilliseconds(0);

    let currentTime = new Date(now);
    while (currentTime <= endTime) {
      const hours = String(currentTime.getHours()).padStart(2, "0");
      const minutes = String(currentTime.getMinutes()).padStart(2, "0");
      options.push({
        value: `${hours}:${minutes}`,
        label: `${hours}:${minutes}`,
      });
      currentTime = new Date(currentTime.getTime() + step * 60 * 1000);
    }

    return options;
  }

  onMount(() => {
    timeOptions = generateTimeOptions();
    if (timeOptions.length > 0) {
      selectedTime = timeOptions[0].value;
    }
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = {};

    if (!name) validationErrors.name = "Введите имя";
    if (phoneError || !phone)
      validationErrors.phone = "Введите корректный номер телефона";
    if (!guestCount) validationErrors.guestCount = "Укажите количество гостей";
    if (!selectedDate) validationErrors.selectedDate = "Выберите дату";

    if (Object.keys(validationErrors).length > 0) {
      errors.set(validationErrors);
      return;
    }

    errors.set({});

    const reservationData = {
      name,
      phone,
      selectedTime,
      selectedDate: selectedDate.toLocaleDateString('ru-RU'),
      guestCount,
    };

    console.log(reservationData);
    
    // Отправка данных на сервер
    try {
      const response = await fetch("/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });
      if (!response.ok) {
        throw new Error("Ошибка отправки формы. Попробуйте еще раз.");
      }
      alert("Бронирование успешно отправлено!");
    } catch (error) {
      console.error("Ошибка отправки формы:", error);
      alert("Ошибка отправки формы.");
    }
  }
</script>

<form class="form" on:submit={handleSubmit}>
  <div class="form__content">
    <div class="form__item">
      <InputField bind:value={name} placeholder="Name" error={$errors.name} />
    </div>
    <div class="form__item">
      <InputField placeholder="Phone" bind:value={phone} mask="+{420} 000 000 000" />
    </div>
    <div class="form__item">
      <SelectField
        bind:selected={selectedTime}
        options={timeOptions}
        placeholder="Time"
      />
    </div>
    <div class="form__item">
      <Datepicker bind:selectedDate={selectedDate} />
    </div>
    <div class="form__item">
      <SelectField
        bind:selected={guestCount}
        options={guestOptions}
        placeholder="Number of seats"
      />
    </div>
    <Button size="large" variant="primary" type="submit">Button</Button>
  </div>
</form>

<style lang="scss">
  .form {
    &__content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 28px;
      @media (max-width: 768px) {
        margin: 0;
      }
    }
  }
  :global(.input) {
    border-radius: 8px;
    border: 1px solid $secondary;
    padding: 10px 16px;
    transition: all 0.4s ease 0s;
    color: $secondary;
    width: 100%;
    font-size: 16px;
    line-height: 150%;
    background-color: $primary;
    &::placeholder {
      color: #b1b1b1;
    }
    &:focus {
      border: 1px solid $accent;
    }
    &.error {
      border: 1px solid #ff4d4d;
    }
    &[disabled] {
      border: 1px solid #d9d9d9;
      color: #d9d9d9;
    }
  }
</style>
