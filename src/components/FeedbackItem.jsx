import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card";
import PropTypes from "prop-types";

// Catch handleDelete prop  Call the function when clicking on the Button to catch id
function FeedbackItem({item, handleDelete}) {


    return (
        <Card >
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className={'close'}>
                <FaTimes color={'white'} />
            </button>
            <div className='text-display'>{item.description}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem