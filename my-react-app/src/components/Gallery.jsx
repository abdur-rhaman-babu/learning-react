import Profile from "./Profile";

const Gallery = () => {
    return (
        <div>
            <h3>An Amazing Scientist</h3>
            <div style={{display:"flex", gap:"10px"}}>
            <Profile/>
            <Profile/>
            <Profile/>
            </div>
        </div>
    );
};

export default Gallery;