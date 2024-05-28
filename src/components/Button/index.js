import myAlert from "~/myAlert";
function Button() {
    return (
        <div>
            <button
                onClick={myAlert}
            >Click Me</button>
        </div>
    );
}
export default Button