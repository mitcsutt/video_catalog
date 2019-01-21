import Header from '../components/header';
import {connect} from 'react-redux';
import { setPage, setSearch, setFilter, search, setTotalPage } from '../actions/creators';

const mapStateToProps = ( state ) => ({
    header: state.header
});

export default connect( mapStateToProps, {
	setSearch,
	setTotalPage,
	setFilter,
	setPage,
	search
})( Header );