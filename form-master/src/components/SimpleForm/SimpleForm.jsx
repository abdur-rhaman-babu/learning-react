const SimpleForm = () => {

    const hundleSubmit = (e) =>{
        e.preventDefault()
        console.log('form submitted')
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        
    }
    return (
        <>
            <form onSubmit={hundleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </>
    );
};

export default SimpleForm;