import PropTypes from 'prop-types';
const Link = ({data}) => {
    // console.log(data)
    const {title, path} = data;
    return (
        <div>
            <a className='mr-10' href={path}>{title}</a>
        </div>
    );
};

Link.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Link;