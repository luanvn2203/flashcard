import "../assets/css/loading.css";
import Images from "../constants/Images";

function Loading() {
	return (
		<div className="loader">
			<img src={Images.LOADING_PIC} alt="" />
		</div>
	);
}

export default Loading;
