import  PropTypes  from 'prop-types';
import Feature from '../Feature/Feature';
const Option = ({option}) => {
    // console.log(option)
    const {name,price,month,features} = option;
    return (
        <div className='bg-blue-600 rounded shadow-lg text-center p-4 flex flex-col text-white my-5'>
            <h1 className='text-4xl'>{name}</h1>
            <p className='text-4xl font-semibold my-2'>${price}
            <span className='text-base'>/{month}Month</span></p>

            {
                features.map((feature, index)=> 
                <Feature key={index} 
                feature={feature}
                />)
            }
    <button type="button"
    className="rounded-md my-3 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-full">Buy now</button>
        </div>
    );
};

Option.propTypes = {
    option: PropTypes.object.isRequired
}

export default Option;