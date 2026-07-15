import styles from "../styles/asciiArt.module.css"
import { useState } from "react";

export default function AsciiArt(){
    const cavalo = [
        "                           ___________ _",
        "                      __/   .::::.-'-(/-/)",
        "                    _/:  .::::.-' .-'\\/\\_`,",
        "                   /:  .::::./   -._-.  d\\|",
        "                    /: (\"\"\"\"/    '.  (__/||",
        "                     \\::).-'  -._  \\/ \\\\/\\|",
        "             __ _ .-'`)/  '-'. . '. |  (i_O",
        "         .-'      \\       -'      '\\|",
        "    _ _./      .-'|       '.  (    \\\\",
        " .-'   :      '_  \\         '-'\\  /|/",
        "/      )\\_      '- )_________.-|_/^\\",
        "(   .-'   )-._-:  /        \\(/\\'-._ `.",
        " (   )  _//_/|:  /          `\\()   `\\_\\",
        "  ( (   \\()^_/)_/             )/      \\\\",
        "   )     \\\\ \\(_)             //        )\\",
        "         _o\\ \\\\\\            (o_       |__\\",
        "         \\ /  \\\\\\__          )_\\",
        "               ^)__\\"
        ].join("\n");


    return (
        <div className={styles.asciiArea}>
            <pre className={styles.Art}>{cavalo}</pre>
        </div>
    )
}