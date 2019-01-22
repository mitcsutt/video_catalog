import Filter from '../components/filter';
import {connect} from 'react-redux';
import {setFilter} from '../actions/creators';
import {getFilter} from '../selectors/movie-list';

const mapStateToProps = ( state ) => ({
    ...getFilter(state),
});

export default connect( mapStateToProps, {
	setFilter
})( Filter );