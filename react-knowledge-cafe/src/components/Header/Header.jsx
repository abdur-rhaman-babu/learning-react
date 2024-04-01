import Profile from "../../assets/Image/auhtor/profile.png"
const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 mx-4 border-b-2">
            <h1 className="text-4xl font-bold">Knowledge cafe</h1>
            <img className="rounded-full border border-red-400" src={Profile} alt="" height={60} width={60} />
        </header>
    );
};

export default Header;