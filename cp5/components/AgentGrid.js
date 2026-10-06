"use client";

import AgentCard from "./AgentCard";

export default function AgentGrid({ agents }) {
    return (
        <div className="agent-grid">
            {agents.map((agent) => (
                <AgentCard key={agent.uuid} agent={agent} />
            ))}
        </div>
    );
}
