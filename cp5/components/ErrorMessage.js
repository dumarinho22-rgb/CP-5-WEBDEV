"use client";

export default function ErrorMessage({ message, onRetry }) {
    return (
        <div className="error-container">
            <div className="error-icon">!</div>

            <h2>Ops! Algo deu errado.</h2>

            <p>{message}</p>

            {onRetry && (
                <button
                    type="button"
                    className="retry-button"
                    onClick={onRetry}
                >
                    Tentar novamente
                </button>
            )}
        </div>
    );
}
