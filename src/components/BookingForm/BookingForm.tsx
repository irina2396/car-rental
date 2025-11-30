"use client";

import toast from "react-hot-toast";
import styles from "./BookingForm.module.css";
import { useState } from "react";

type BookingFormProps = {
    onSubmit: (value: {
        name: string;
        email: string;
        date: string;
        comment: string;
    }) => void;
}

export default function BookingForm({ onSubmit }: BookingFormProps) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        try {
            const name = formData.get("name") as string;
            const email = formData.get("email") as string;
            const date = formData.get("date") as string;
            const comment = formData.get("comment") as string;
    
            const data = { name, email, date, comment };

            onSubmit(data);
            await new Promise(res => setTimeout(res, 700));

            toast.success("Car successfully booked!");
            
            const form = document.getElementById("booking-form") as HTMLFormElement;
            if (form) form.reset();
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Book your car now</h2>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

          <form action={handleSubmit} className={styles.form}>
              
        <input
          type="text"
          name="name"
          placeholder="Name*"
          className={styles.input}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email*"
          className={styles.input}
          required
        />

        <input
          type="text"
          name="date"
          placeholder="Booking date"
          className={styles.input}
          required
        />

        <textarea
          name="comment"
          placeholder="Comment"
          className={`${styles.input} ${styles.textarea}`}
        />

        <button type="submit" className={styles.button} disabled={loading}>Send</button>
      </form>
    </div>
  );
}
