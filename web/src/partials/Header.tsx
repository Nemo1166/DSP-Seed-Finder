import styles from "./Header.module.css"
import { useStore } from "../store"
import { A } from "@solidjs/router"
import { IoContrast, IoLogoGithub } from "solid-icons/io"
import { Component } from "solid-js"
import clsx from "clsx"

const Header: Component = () => {
    const [store, setStore] = useStore()

    return (
        <div class={styles.header}>
            <div class={styles.title}>DSP Seed Finder</div>
            <div
                class={clsx(
                    styles.buttons,
                    store.searching && styles.buttonsDisabled,
                )}
            >
                <A href="/find-star" class={styles.button}>
                    恒星查找器
                </A>
                <A href="/find-galaxy" class={styles.button}>
                    星区查找器
                </A>
                <A href="/galaxy" class={styles.button}>
                    星区浏览器
                </A>
            </div>
            <div class={styles.icons}>
                <a
                    href="https://github.com/DoubleUTH/DSP-Seed-Finder"
                    target="_blank"
                    class={styles.icon}
                    onClick={() => setStore("settings", "darkMode", (x) => !x)}
                >
                    <IoLogoGithub />
                </a>
                <div
                    class={styles.icon}
                    onClick={() => setStore("settings", "darkMode", (x) => !x)}
                >
                    <IoContrast />
                </div>
            </div>
        </div>
    )
}

export default Header
