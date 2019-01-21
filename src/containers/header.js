import Header from '../components/header';
import {connect} from 'react-redux';
import { setPage, setSearch, setFilter, initSearch, setTotalPage } from '../actions/creators';

const mapStateToProps = ( state ) => ({
    header: state.header
});

const mapDispatchToProps = dispatch => ({
    initSearch: () => {
        dispatch( initSearch() );
    },
    setSearch: (searchValue) => {
        dispatch( setSearch(searchValue) );
	},
	setTotalPage: (totalPage) => {
        dispatch( setTotalPage(totalPage) );
	},
	setFilter: (filter) => {
        dispatch( setFilter(filter) );
    },
    setPage: (page) => {
        dispatch( setPage(page) );
    }
});

export default connect( mapStateToProps, mapDispatchToProps )( Header );