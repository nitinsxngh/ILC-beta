'use client';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';
import clsx from 'clsx';

const menu = {
    open: {
        width: "88vw",
        height: "75vh",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.5, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
};

export default function Index() {
    const [isActive, setIsActive] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsActive(false);
            }
        }

        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isActive]);

    return (
        <div className={styles.header} ref={menuRef}>
            <motion.div
                className={clsx(styles.menu)}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
        </div>
    );
}
