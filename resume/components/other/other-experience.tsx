import { OTHER_EXPERIENCE } from "@/global/experience";
import PointDot from "../common/point-dot";

export default function OtherExperience() {
    const experiences = OTHER_EXPERIENCE;

    return (
        <div className="flex flex-col items-start justify-start w-full gap-10">
            <div className="flex items-center justify-start *:font-bold text-4xl sm:text-5xl">
                <span>Other Experiences</span>
                <PointDot />
            </div>

            <div className="flex flex-col items-start justify-start gap-10">
                {experiences.map((experience) => (
                    <div
                        key={experience.title}
                        className="flex flex-col items-start justify-start gap-5"
                    >
                        <div className="flex items-center justify-start text-3xl font-bold sm:text-4xl">
                            <span>{experience.title}</span>
                            <PointDot />
                        </div>
                        <div className="flex flex-col items-start justify-start font-semibold">
                            <span>{experience.as}</span>
                            <span>{experience.period}</span>
                        </div>
                        <span className="font-semibold text-left">
                            {experience.description}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
