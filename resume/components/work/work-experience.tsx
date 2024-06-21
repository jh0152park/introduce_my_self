import { WORK_EXPERIENCE } from "@/global/experience";
import PointDot from "../common/point-dot";
import { POINT_COLOR } from "@/global/style";

export default function WorkExperience() {
    const works = WORK_EXPERIENCE;

    return (
        <div className="flex flex-col items-start justify-start w-full">
            <div className="flex items-start justify-start my-20 text-5xl font-bold">
                <span>Work Experience</span>
                <PointDot />
            </div>

            <div className="flex flex-col items-start justify-start gap-10">
                {works.map((work) => (
                    <div
                        key={work.company}
                        className="flex items-start justify-start w-full"
                    >
                        <div className="flex flex-col items-start justify-start w-[50%] ">
                            <div className="flex flex-col items-start justify-start *:font-bold text-4xl">
                                {work.company.split(" ").map((company) => (
                                    <div className="flex items-start justify-start">
                                        <span key={company}>{company}</span>
                                        {company === "무선사업부" && (
                                            <PointDot />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-start justify-start mt-5 *:font-semibold">
                                <span>{work.as}</span>
                                <span>{work.period}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                            {work.mission.map((misson) => (
                                <div
                                    key={misson.title}
                                    className="flex flex-col items-start justify-start w-full gap-10 mb-10"
                                >
                                    <span
                                        className={`text-2xl font-bold text-[${POINT_COLOR.dark}]`}
                                    >
                                        {misson.title}
                                    </span>

                                    <div className="flex flex-col items-start justify-start">
                                        <span className="text-xl font-bold">
                                            Description
                                        </span>
                                        <span className="text-md ">
                                            {misson.description}
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-start justify-start">
                                        <span className="text-xl font-bold">
                                            What I did
                                        </span>
                                        {misson.worked.map((work) => (
                                            <div
                                                key={work}
                                                className="flex items-center justify-start gap-1 text-md"
                                            >
                                                <PointDot />
                                                <span>{work}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col items-start justify-start">
                                        <span className="text-xl font-bold">
                                            Tech Stack
                                        </span>

                                        <div className="flex items-center justify-start gap-3 text-md">
                                            {misson.tech.map((tech) => (
                                                <span key={tech}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
