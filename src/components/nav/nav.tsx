import { Button, buttonVariants } from "../ui/button";

const appUrl = import.meta.env.PUBLIC_APP_URL

const Nav = () => {
    return (
        <nav className="fixed z-50 w-full h-14 flex justify-between items-center px-8 bg-white">
            <div className="font-heading text-xl">QADAM</div>
            <a href={appUrl} className={buttonVariants({ className: "px-5" })}>
                Вход
            </a>
        </nav>
    )
}

export default Nav;