import Paginate from '../components/paginate';
import {connect} from 'react-redux';
import { setPage, setTotalPage } from '../actions/creators';
import {getPaginate} from '../selectors/movie-list';


const mapStateToProps = ( state ) => ({
    ...getPaginate(state)
});

export default connect( mapStateToProps, {
	setTotalPage,
	setPage
})( Paginate );