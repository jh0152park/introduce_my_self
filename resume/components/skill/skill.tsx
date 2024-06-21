import { SKILLS } from "@/global/skill";
import PointDot from "../common/point-dot";

export default function Skill() {
    const skills = SKILLS;

    return (
        <div className="flex flex-col items-start justify-start w-full gap-10">
            <div className="flex items-center justify-start *:font-bold *:text-5xl">
                <span>Skills</span>
                <PointDot />
            </div>

            <div className="flex flex-col items-start justify-start gap-20">
                {skills.map((skill) => (
                    <div key={skill.title}>
                        <div className="flex items-center justify-start mb-5 text-3xl font-bold">
                            <span>{skill.title}</span>
                            <PointDot />
                        </div>
                        <div className="flex flex-col gap-2">
                            {skill.description.map((description) => (
                                <div
                                    key={description}
                                    className="flex items-center justify-start gap-1 *:font-semibold"
                                >
                                    <PointDot />
                                    <span>{description}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
