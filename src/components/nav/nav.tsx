import { Button } from "../ui/button";


const Nav = () => {
    return (
        <nav className="fixed z-50 w-full h-14 flex justify-between items-center px-8 bg-white">
            <div className="font-heading text-xl">QADAM</div>
            <Button variant={"default"} className="px-5">Вход</Button>
        </nav>
    )
}

export default Nav;