"use client";

import Link from "next/link";

export default function AgentCard({ agent }) {
    return (
        <article className="agent-card">
            <div className="card-image-wrapper">
                {agent.fullPortrait ? (
                    <img
                        src={agent.fullPortrait}
                        alt={agent.displayName}
                        className="agent-image"
                        loading="lazy"
                    />
                ) : (
                    <div className="image-placeholder">
                        {agent.displayName}
                    </div>
                )}

                <div className="card-gradient" />

                {agent.role && (
                    <span className="role-badge">
                        {agent.role.displayName}
                    </span>
                )}
            </div>

            <div className="card-content">
                <h2>{agent.displayName}</h2>

                <p>
                    {agent.description
                        ? `${agent.description.slice(0, 100)}...`
                        : "Descrição não disponível."}
                </p>

                <Link
                    href={`/details/${agent.uuid}`}
                    className="details-button"
                >
                    Ver detalhes
                    <span>→</span>
                </Link>
            </div>
        </article>
    );
}
