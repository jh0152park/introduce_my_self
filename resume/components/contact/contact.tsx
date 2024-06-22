import PointDot from "../common/point-dot";
import { CONTACTS } from "@/global/contact";

export default function Contact() {
    const contacts = CONTACTS;

    return (
        <div className="flex flex-col items-start justify-start w-full gap-10">
            <div className="flex items-center justify-start *:font-bold text-4xl sm:text-5xl">
                <span>Contact Me</span>
                <PointDot />
            </div>

            <div className="flex flex-col items-start justify-start gap-3">
                {contacts.map((contact) => (
                    <div
                        key={contact.category}
                        className="flex items-center justify-start gap-2 "
                    >
                        <div className="flex items-center justify-start gap-2 text-xl font-bold sm:text-3xl">
                            <PointDot />
                            <span>{contact.category}</span>
                        </div>
                        <div className="font-semibold text-md sm:text-xl">
                            {contact.category === "Email" ? (
                                <span>{contact.url}</span>
                            ) : (
                                <a href={contact.url} className="text-dark">
                                    {contact.url}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
