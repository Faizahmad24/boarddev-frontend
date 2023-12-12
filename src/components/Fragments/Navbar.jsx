const Navbar = () => {
    const userName = localStorage.getItem("userName")
    return (
        <div className="flex text-white justify-end items-center bg-orange-400 h-20 px-10">
            Hello World {userName}
        </div>
    )
}

export default Navbar