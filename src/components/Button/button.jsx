import './button.css';

const Button = ({ label, link, onClick , disabled}) => {
    return (
        <div className="wrapper">
            <button className="cta" href={link} onClick={onClick} disabled={disabled}>
                <span>{label || "Next"}</span>
                <span>
                    <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 44" fill="none">
                        <path className="one" d="M40.154 3.895l3.822-3.756c.195-.192.507-.192.701 0L65.692 20.785c.394.387.4 1.02.013 1.414-.005.005-.01.009-.015.014L44.677 42.86c-.195.192-.507.192-.701 0l-3.822-3.754c-.197-.193-.2-.509-.006-.706l16.84-16.537c.197-.193.2-.509.006-.706L40.154 3.895z" fill="#FFFFFF"/>
                        <path className="two" d="M20.154 3.895l3.822-3.756c.195-.192.507-.192.701 0l21.015 20.646c.394.387.4 1.02.013 1.414-.005.005-.01.009-.015.014L24.677 42.86c-.195.192-.507.192-.701 0l-3.822-3.754c-.197-.193-.2-.509-.006-.706l16.84-16.537c.197-.193.2-.509.006-.706L20.154 3.895z" fill="#FFFFFF"/>
                        <path className="three" d="M.154 3.895L3.976.139c.195-.192.507-.192.701 0L25.692 20.785c.394.387.4 1.02.013 1.414-.005.005-.01.009-.015.014L4.677 42.86c-.195.192-.507.192-.701 0L.154 39.107c-.197-.193-.2-.509-.006-.706L16.993 21.857c.197-.193.2-.509.006-.706L.154 3.895z" fill="#FFFFFF"/>
                    </svg>
                </span>
            </button>
        </div>
    );
};

export default Button;
