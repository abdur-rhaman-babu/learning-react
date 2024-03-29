const EventHandler = () => {
    const eventHandeler1 = () =>{
        alert('click me 1')
    }

    const handleHandler3 = (num) =>{
        alert(num + 5)
    }
    
    return (
        <div>
            <button onClick={eventHandeler1}>Click me 1</button>
            <button onClick={()=> alert('click me 2')}>Click me 2</button>
            <button onClick={()=> handleHandler3(5)}>Click me 3</button>
        </div>
    );
};

export default EventHandler;