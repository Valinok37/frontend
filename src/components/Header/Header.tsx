import {Component} from "preact";
import {Link} from "wouter-preact";
import styles from "./Header.module.styl";

class Header extends Component {
    buttons = ['profile', 'settings'];

    render() {
        return (
            <header className={styles.header}>
                <Link
                    to="/"
                    className={styles.left}
                >
                    <img
                        src="/logo.webp"
                        alt="Logotype"
                        height={40}
                        className={styles.logo}
                    />
                </Link>

                <div className={styles.right}>
                    {this.buttons.map((value) =>
                        <Link
                            key={value}
                            to={'/' + value}
                            style={{
                                '--image': `url("/header/${value}.png")`
                            }}
                        />
                    )}
                </div>
            </header>
        );
    }
}

export default Header;