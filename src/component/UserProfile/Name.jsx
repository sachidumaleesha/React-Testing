import PropTypes from 'prop-types';
export const Name = ({name}) => {
    return (
        <div>
            {name}
        </div>
    )
}

Name.prototype = {
    name: PropTypes.string.isRequired
}