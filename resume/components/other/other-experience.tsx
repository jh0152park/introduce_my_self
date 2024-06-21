import { OTHER_EXPERIENCE } from "@/global/experience";
import PointDot from "../common/point-dot";

export default function OtherExperience() {
    const experiences = OTHER_EXPERIENCE;

    return (
        <div className="flex flex-col items-start justify-start w-full gap-10">
            <div className="flex items-center justify-start *:font-bold *:text-5xl">
                <span>Other Experiences</span>
                <PointDot />
            </div>

            <div className="flex flex-col items-start justify-start gap-10">
                {experiences.map((experience) => (
                    <div key={experience.title}>
                        <div className="flex items-center justify-start text-3xl font-bold">
                            <span>{experience.title}</span>
                            <PointDot />
                        </div>
                        <div className="flex flex-col items-start justify-start my-4 text-lg font-semibold">
                            <span>{experience.as}</span>
                            <span>{experience.period}</span>
                        </div>
                        <span className="text-lg font-semibold text-left">
                            {experience.description}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
