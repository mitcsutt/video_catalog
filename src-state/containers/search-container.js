import Search from '../components/search';
import {connect} from 'react-redux';
import { setSearch, handleSearch } from '../actions/creators';
import { getSearch} from '../selectors/movie-list';


const mapStateToProps = ( state ) => ({
    ...getSearch(state)
});

export default connect( mapStateToProps, {
	setSearch,
	handleSearch
})( Search );