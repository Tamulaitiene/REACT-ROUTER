import { useParams } from "react-router";


function RouterAfrica () {
    const paramsFromsUl = useParams();
    return (
        <h2>Africa Hello{paramsFromsUl.times}Times</h2>
    )
}

export default RouterAfrica;