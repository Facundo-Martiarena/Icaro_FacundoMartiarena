import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';
import './../components/Loading.css'

function Loading() {
    return (
        <div className="divFather">
            <div className="divChild">
                <Spinner color="primary"/>
            </div>
        </div>
    )
}

export default Loading;