import Header from '../components/header';
import {connect} from 'react-redux';
import { setPage, setSearch, setFilter, initSearch, setTotalPage } from '../actions/creators';

const mapStateToProps = ( state ) => ({
    header: state.header
});

export default connect( mapStateToProps, {
	setSearch,
	setTotalPage,
	setFilter,
	setPage	
})( Header );