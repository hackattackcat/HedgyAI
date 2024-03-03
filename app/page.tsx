import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
    const InfoCard = (
        <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
            <h1 className="text-3xl md:text-3xl mb-3">
                ▲ 🦜🔗 Sitecore Hackathon Idea Generator
            </h1>
            <ul>
                <li className="text-l">
                    🦔
                    <span className="ml-2">
                        Joining a hackathon but don't have any ideas? Ask Hedgy!
                    </span>
                    🦔🦔🦔🦔🦔🦔🦔🦔
                </li>
            </ul>
        </div>
    );
    return (
        <ChatWindow
            endpoint="api/chat"
            emoji="🦔"
            titleText="Hedgy the AI hedgehog"
            placeholder="I'm an LLM pretending to be a an expert hackathon idea generator! Ask me about the hacker life!"
            emptyStateComponent={InfoCard}
        ></ChatWindow>
    );
}
