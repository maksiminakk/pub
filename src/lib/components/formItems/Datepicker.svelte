<script>
    import { writable } from "svelte/store";
    import { onMount } from "svelte";
    import ArrowIcon from "../../img/icons/arrow.svelte";
    import Calendar from "../../img/icons/calendar.svelte";
    export let selectedDate;

    let showDatePicker = false;
    const today = new Date();
    const currentHour = today.getHours();

    export let startHour = 8;
    export let endHour = 22;

    let currentMonth = writable(
        new Date(today.getFullYear(), today.getMonth(), 1)
    );
    let startDate = new Date(today);
    let endDate = new Date(today.getFullYear(), 11, 31);

    let monthChangeDirection = ""; // Направление для анимации

    if (currentHour >= endHour || currentHour < startHour) {
        startDate.setDate(startDate.getDate() + 1);
    }

    function formatDate(date) {
        return date ? date.toLocaleDateString('ru-RU') : "";
    }

    function selectDate(date) {
        selectedDate = date;
        showDatePicker = false;
        removeClickListener();
    }

    function handleClickOutside(event) {
        if (
            !event.target.closest(".datepicker__popup") &&
            !event.target.closest("input")
        ) {
            showDatePicker = false;
            removeClickListener();
        }
    }

    function addClickListener() {
        document.addEventListener("click", handleClickOutside);
    }

    function removeClickListener() {
        document.removeEventListener("click", handleClickOutside);
    }

    function toggleDatePicker() {
        showDatePicker = !showDatePicker;
        if (showDatePicker) addClickListener();
        else removeClickListener();
    }

    function getDaysInMonth(monthDate) {
        const days = [];
        const year = monthDate.getFullYear();
        const month = monthDate.getMonth();
        const start = new Date(year, month, 1);
        const end = new Date(year, month + 1, 0);

        for (let day = start; day <= end; day.setDate(day.getDate() + 1)) {
            if (
                day >= startDate &&
                day <= endDate &&
                (day > today ||
                    (day.toDateString() === today.toDateString() &&
                        currentHour < endHour))
            ) {
                days.push(new Date(day));
            }
        }
        return days;
    }

    function nextMonth() {
        monthChangeDirection = "next";
        currentMonth.update((date) => {
            const nextDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
            return nextDate <= endDate ? nextDate : date;
        });
    }

    function prevMonth() {
        monthChangeDirection = "prev";
        currentMonth.update((date) => {
            const prevDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
            return prevDate >= new Date(today.getFullYear(), today.getMonth(), 1)
                ? prevDate
                : date;
        });
    }
</script>

<div class="datepicker">
    <div class="datepicker__field">
        <input
            type="text"
            placeholder="Выберите дату"
            readonly
            value={formatDate(selectedDate)}
            on:click={toggleDatePicker}
        />
        <div class="datepicker__icon">
            <Calendar />
        </div>
    </div>

    {#if showDatePicker}
        <div class="datepicker__popup fade-in">
            <div class="datepicker__header">
                <button
                    class="datepicker__arrow-prev"
                    on:click|stopPropagation={prevMonth}
                    disabled={$currentMonth <=
                        new Date(today.getFullYear(), today.getMonth(), 1)}
                >
                    <ArrowIcon className="secondary" />
                </button>
                <span
                    class={monthChangeDirection === "next"
                        ? "slide-next"
                        : monthChangeDirection === "prev"
                            ? "slide-prev"
                            : ""}
                >
                    {$currentMonth.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                    })}
                </span>
                <button
                    class="datepicker__arrow-next"
                    on:click|stopPropagation={nextMonth}
                    disabled={$currentMonth >= endDate}
                >
                    <ArrowIcon className="secondary" />
                </button>
            </div>

            <div
                class="datepicker__grid {monthChangeDirection === 'next'
                    ? 'slide-next'
                    : monthChangeDirection === 'prev'
                        ? 'slide-prev'
                        : ''}"
            >
                {#each getDaysInMonth($currentMonth) as date}
                    <button class="datepicker__day" on:click={() => selectDate(date)}>
                        {date.getDate()}
                    </button>
                {/each}
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
  .datepicker {
    position: relative;
    &__popup {
      position: absolute;
      top: calc(100% - 3px);
      left: 0;
      width: 100%;
      background-color: $primary;
      border: 1px solid $accent;
      padding: 16px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      z-index: 1;
      border-radius: 0 0 12px 12px;
      border-top: none;
    }

    &__field {
      position: relative;
    }

    &__icon {
        position: absolute;
        top: 10px;
        right: 16px;
        z-index: 2;
    }

    input {
      border-radius: 8px;
      border: 1px solid $secondary;
      padding: 10px 16px;
      transition: all 0.4s ease 0s;
      color: $secondary;
      width: 100%;
      font-size: 16px;
      line-height: 150%;
      background-color: $primary;
      position: relative;
      cursor: pointer;
      z-index: 2;
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

    &__header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 16px;
      color: $secondary;
      font-size: 18px;
      gap: 10px;
    }

    &__arrow-next {
      transform: rotate(-90deg);
    }

    &__arrow-prev {
      transform: rotate(90deg);
    }

    &__header button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: #141414;
    }

    &__header span {
      font-weight: bold;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 12px;
    }

    &__day {
      background-color: $primary;
      border: none;
      color: #141414;
      cursor: pointer;
      padding: 6px;
      transition: background-color 0.3s;
      font-size: 16px;
    }

    &__day:hover {
      background-color: $accent;
      color: $primary;
    }
  }

  .fade-in {
    opacity: 0;
    animation: fadeIn 0.3s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
</style>
