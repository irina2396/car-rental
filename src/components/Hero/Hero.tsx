import css from "./Hero.module.css"
import Link from "next/link";

export default function Hero() {
    return (
        <section className={css.hero}>
                <div className={css.container}>
                    <div className={css.content}>
                        <div className={css.wrapperText}>
                            <h1 className={css.title}>
                                Find your perfect rental car
                            </h1>
                            <p className={css.text}>
                                Reliable and budget-friendly rentals for any journey
                            </p>
                       </div>
                        <Link href="/catalog">
                            <button className={css.button}>
                                View Catalog
                            </button>
                        </Link>
                    </div>
                </div>
        </section>
    );
}
